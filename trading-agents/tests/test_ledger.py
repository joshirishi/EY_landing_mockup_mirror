from __future__ import annotations

import sqlite3
from decimal import Decimal

import pytest

from tests.conftest import make_thesis
from trading_agents.ledger import Ledger, LedgerError, OwnerDecision


def test_append_and_read_back(thesis):
    led = Ledger()
    rec = led.append_thesis(thesis)
    assert rec.version == 1
    assert led.get_thesis(thesis.thesis_id) == thesis
    led.verify()


def test_duplicate_requires_correction(thesis):
    led = Ledger()
    led.append_thesis(thesis)
    with pytest.raises(LedgerError):
        led.append_thesis(thesis)


def test_correction_creates_new_version(thesis):
    led = Ledger()
    led.append_thesis(thesis)
    fixed = make_thesis(p_target=0.40)
    rec = led.append_thesis(fixed, correction_of=1)
    assert rec.version == 2
    assert rec.payload["supersedes_version"] == 1
    assert led.get_thesis(thesis.thesis_id, 1) == thesis
    assert led.get_thesis(thesis.thesis_id) == fixed
    with pytest.raises(LedgerError):
        led.append_thesis(fixed, correction_of=1)  # must supersede latest
    led.verify()


def test_decisions(thesis):
    led = Ledger()
    led.append_thesis(thesis)
    led.record_decision(thesis.thesis_id, OwnerDecision.EXECUTE, fill_price=Decimal("1251.5"))
    with pytest.raises(LedgerError):
        led.record_decision(thesis.thesis_id, OwnerDecision.SKIP, fill_price=Decimal("1"))
    with pytest.raises(LedgerError):
        led.record_decision(thesis.thesis_id, OwnerDecision.EXECUTE)
    with pytest.raises(LedgerError):
        led.record_decision("nope", OwnerDecision.SKIP)
    assert [r.kind for r in led.records()] == ["thesis", "decision"]
    led.verify()


def test_update_and_delete_blocked(thesis):
    led = Ledger()
    led.append_thesis(thesis)
    with pytest.raises(sqlite3.DatabaseError, match="append-only"):
        led._db.execute("UPDATE records SET payload = '{}'")
    with pytest.raises(sqlite3.DatabaseError, match="append-only"):
        led._db.execute("DELETE FROM records")


def test_verify_detects_tampering(tmp_path, thesis):
    path = tmp_path / "ledger.sqlite"
    led = Ledger(path)
    led.append_thesis(thesis)
    led.append_thesis(make_thesis(thesis_id="eq-2"))
    led.close()

    raw = sqlite3.connect(path)
    raw.execute("DROP TRIGGER records_no_update")
    tampered = make_thesis(p_target=0.99).model_dump_json()
    raw.execute(
        "UPDATE records SET payload = json_set(payload, '$.thesis', json(?)) WHERE seq = 1",
        (tampered,),
    )
    raw.commit()
    raw.close()

    with pytest.raises(LedgerError, match="content hash mismatch at seq 1"):
        Ledger(path).verify()
