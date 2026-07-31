# Multi-account Git & GitHub CLI setup

Use separate Git identity and GitHub credentials per project folder without editing identity by hand each time.

## 1. Per-account Git config files

Copy the snippet contents into your home directory:

| Snippet in this folder | Target file |
|------------------------|-------------|
| `gitconfig-joshirishi.snippet` | `~/.gitconfig-joshirishi` |
| `gitconfig-morpheus.snippet` | `~/.gitconfig-morpheus` |

Example:

```bash
cp docs/setup/gitconfig-joshirishi.snippet ~/.gitconfig-joshirishi
cp docs/setup/gitconfig-morpheus.snippet ~/.gitconfig-morpheus
```

(Strip the comment lines at the top if you prefer a minimal file.)

## 2. Conditional includes in main Git config

Append the block from `gitconfig-includeIf.snippet` to `~/.gitconfig`.

Git loads the matching file when your working tree is under that directory:

- `~/EY_landing_mockup/` → joshirishi identity
- `~/Morpheus/` → Morpheus identity

**Morpheus path:** If your Morpheus repo lives somewhere other than `~/Morpheus/`, change the `gitdir:` path in the include block to match (trailing slash required for `includeIf gitdir`).

## 3. GitHub CLI (`gh`) active account

Both accounts can stay logged in; one is **active** for commands and Git HTTPS via `gh`.

```bash
gh auth status
gh auth switch --user joshirishi          # EY / personal GitHub work
gh auth switch --user rishikeshjoshi-Morpheus   # Morpheus / work GitHub
```

Switch before `git push`, `gh pr create`, etc., if the non-default account owns the remote.

## 4. This repo (`EY_landing_mockup`)

After includes are in place, commits here should use:

- **Name:** joshirishi  
- **Email:** `14025294+joshirishi@users.noreply.github.com`

Local override (optional): `git config --local user.email ...` in this repo only.

## 5. Vercel (optional)

If you deploy both personas from one machine, use separate Vercel accounts or team scopes and alias CLI profiles (e.g. shell functions or `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` per project). Not required for Git/GitHub setup.

## Quick check

```bash
cd ~/EY_landing_mockup
git config user.email
gh auth status
git status -sb
```
