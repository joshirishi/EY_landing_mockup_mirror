***Prompt like a Pro – Elements*** 

***Considering there are only 7 elements,*** 

*Check PPT for contents*Prompting Techniques

| Prompting Technique | What it is | What it does | ❌ Without the Technique | ✅ With the Technique |
| :---- | :---- | :---- | :---- | :---- |
| **Audience Prompting** | Telling AI who the output is intended for. | Adjusts language, depth and terminology for the reader. | *"Explain POEM provisions."* | *"Explain POEM provisions for a CEO with no tax background using simple business language and examples."* |
| **Zero-Shot/ Few-Shot  Prompting** | Providing no examples (Zero-Shot) or sample examples (Few-Shot). | Guides the format and quality of the response. | *"Summarize this tax judgment."* | *"Example Format: Issue → Taxpayer Argument → Revenue Argument → Decision → Key Takeaway. Now summarize this judgment using the same format."* |
| **Iterative Prompting** | Improving the output through a series of follow-up prompts. | Refines the response step by step until it meets your needs. | *"Draft a note on GST implications."* | *"Draft a note on GST implications." → "Make it user-friendly." → "Reduce it to one page." → "Add a summary table."* |
| **Flipped Prompting** | Asking AI to ask questions before answering. | Helps gather missing context and improve accuracy. | *"Prepare a tax advisory note on this transaction."* | *"Before preparing the advisory note, ask me all relevant questions regarding the transaction, jurisdictions, parties, objectives and timeline."* |
| **Chain-of-Thought Prompting** | Asking AI to reason through a problem step by step. | Improves structured thinking and analysis. | *"Does this arrangement create a Permanent Establishment risk?"* | *"Assess this arrangement step-by-step: identify key facts, evaluate PE indicators, analyze supporting and opposing arguments, then conclude."* |
| **Creative Expansion Prompting** | Asking AI to challenge assumptions and identify gaps. | Generates additional perspectives and uncovers blind spots. | *"Review this restructuring proposal."* | *"Review this restructuring proposal and identify 10 risks, unanswered questions or issues the team may have overlooked."* |
| **Refinement Prompting** | Asking AI to improve your question before attempting the task. | Helps identify gaps and creates a stronger, more effective prompt. | *"Summarize the GST implications of this transaction."* | *"Review my prompt and suggest a better version before answering. Highlight any missing context, assumptions or instructions that would improve the quality of the response."* |
| **Meta Prompting** | Asking AI to create or improve the prompt itself. | Combines multiple prompting techniques and helps build stronger prompts. | *"Summarize this judgment."* | *"Create the most effective prompt for summarizing a Supreme Court tax judgment for a Tax Partner. Incorporate persona, audience, format and key takeaway requirements."* |

*Same designing as in Prompting elements*

The cleanest way to teach this in Tax Labs is **not as individual techniques**, but as a **4-step framework for solving and validating complex problems.**

The notes consistently group the concepts into two buckets:

**Solving the Use Case**

1. Chain of Thought (COT)

2. Decomposition

**Risk Mitigation**

3. Ensemble

4. Self-Criticism

---

**Advanced Prompting Techniques**

**A Practical Framework for Complex Problems**

| Stage | Technique | Purpose |
| :---- | :---- | :---- |
| Solving Use case  | Chain of Thought (COT) | Improve reasoning |
|  | Decomposition | Break large problems into manageable tasks |
| Risk Mitigation | Ensemble | Improve accuracy, robustness and completeness |
|  | Self-Criticism | Reduce hallucinations and validate outputs |

---

**1\. Chain of Thought (COT)**

**Purpose**

Instead of jumping directly to an answer, AI is asked to reason before responding. 

---

**A. Initiation of Thoughts**

| Technique | Purpose | Explanation |
| :---- | :---- | :---- |
| Step-Back Prompting | Look at the bigger picture first | Before solving the problem, ask AI to step back and identify broader considerations.  |
| Analogical Prompting | Learn from similar situations | Use past cases, familiar situations or known examples to guide reasoning.  |

**Think of it as**

**"How should I begin thinking about this problem?"**

---

**B. Structuring Thoughts**

| Technique | Purpose | Explanation |
| :---- | :---- | :---- |
| Thread of Thoughts (ThoT) | Explore multiple reasoning paths | Instead of one line of reasoning, consider several possible ways to solve the problem.  |
| Tabular Chain of Thought (Tab-COT) | Structure complex reasoning | Organize thinking into tables when multiple variables or factors must be considered.  |

**Think of it as**

**"How should I organize my thinking?"**

---

**C. Adaptation & Optimization**

| Technique | Purpose | Explanation |
| :---- | :---- | :---- |
| Auto-COT | Automatically generate reasoning steps from past processes | The model determines the reasoning process itself.  |
| Active-COT | Incorporate human feedback | AI adjusts its reasoning using feedback during the process.  |
| Complexity-Based COT | Match effort to difficulty | Easy → direct answer,  Moderate → ThoT,  Complex → Tab-COT.  |
| Contrastive COT | Compare right vs wrong reasoning | Evaluate what should be done and what should not be done.  |

**Think of it as**

**"How much thinking is actually required?"**

---

**D.** Uncertainty Routed COT (UR-COT)

| Purpose | Explanation |
| :---- | :---- |
| Handle uncertainty differently | Response strategy changes depending on confidence level of LLM about the complexity.  |

**Notes indicate:**

| Confidence Level | Typical Action |
| :---- | :---- |
| Low Complexity \+ High Confidence | Direct answer |
| Moderate Complexity | Apply COT |
| High Complexity or High Uncertainty | Escalate, slow down reasoning, seek additional validation |

---

**2\. Decomposition**

**Purpose**

Break a large problem into smaller tasks and apply the most appropriate prompting technique to each part. 

---

**Simple Flow**

Large Problem

      ↓

Break into Smaller Tasks

      ↓

Apply Relevant Prompting Technique

      ↓

Combine Results

      ↓

Final Answer

---

**Example**

**Tax Task**

"Assess implications of a cross-border restructuring"

**Decomposed Into**

1. Understand transaction

2. Review direct tax impact

3. Review withholding tax impact

4. Review treaty impact

5. Review GST impact

6. Summarize risks

Each task can then use:

* Step Back

* Analogical

* Tabular COT

* Contrastive COT

where appropriate. 

---

**3\. Ensemble**

**Purpose**

Improve:

* Accuracy

* Robustness

* Completeness 

---

**Concept**

Do not rely on a single answer.

Generate multiple answers and use a judge to determine the strongest response. 

---

**Ensemble Framework**

Same Problem

      ↓

Multiple Responses

      ↓

Judge / Majority Vote

      ↓

Final Output

---

| Method | How It Works | Improves |
| :---- | :---- | :---- |
| Multiple Runs | Solve the same problem many times | Accuracy |
| Multiple Logical Paths | Use different reasoning approaches | Accuracy |
| Prompt Paraphrasing | Rephrase prompt multiple ways | Robustness |
| Multiple LLMs | Compare outputs across models | Robustness \+ Accuracy |
| Diverse Personas | Multiple perspectives | Completeness |
|  Majority Vote | Select most frequent / strongest answer | Accuracy |
| Maximum Mutual Information | Collect maximum information from multiple viewpoints | Completeness |

---

**Think of it as**

**"What if I asked ten experts instead of one?"**

---

**4\. Self-Criticism**

**Purpose**

Reduce hallucinations and improve factual reliability. 

---

**Goal**

Before trusting the answer:

* Critique it

* Verify it

* Challenge it

---

**Technique 1: Reverse Chain of Thought**

**Process**

Answer First

      ↓

Explain Reasoning

      ↓

Check Supporting Facts

      ↓

Correct Errors

The notes explicitly reference:

* Reasoning after answer

* Explain output

* Verify logical steps followed 

---

**Technique 2: Chain of Verification (CoVe)**

**Process**

Draft Response

      ↓

Generate Verification Questions

      ↓

Answer Verification Questions Independently

      ↓

Fact Check

      ↓

Final Verified Response

This sequence is explicitly recorded in the notes. 

---

**Verification Checklist**

The notes indicate asking:

1. Are all facts supported?

2. Are any assumptions unsupported?

3. Do the logical steps hold?

4. If not, correct and regenerate. 

---

**Memory Aid**

| Technique | Think Of It As | Typical India Tax Use Cases |
| :---- | :---- | :---- |
| **Chain of Thought (COT)** | **Think Better** | Analyzing Permanent Establishment (PE) exposure, assessing GAAR implications,  |
| **Decomposition** | **Break It Down** | Cross-border restructuring,  M\&A tax diligence,  where multiple workstreams must be analysed separately. |
| **Ensemble** | **Ask Multiple Experts** | High-value tax opinions,  litigation strategy,  where multiple perspectives strengthen the conclusion. |
| **Self-Criticism** | **Verify Before Trusting** | Advisory memos,  technical research notes,  and any output where factual accuracy is critical. |

***Remove Ultimate Shortcut***

**Exercise 1: 🎯 Choose the Best Answer**

**Instructions**

For each scenario, choose the **single most appropriate prompt element or prompting technique**.

---

**Question 1**

A tax professional wants AI to explain POEM provisions differently for a CFO, a Tax Manager and a CEO.

Which prompting element would have the greatest impact?

A. Persona

B. Audience Targeting

C. Output Indicator

D. Constraints

✅ **Answer: B — Audience Targeting**

---

**Question 2**

A user asks:

"Summarize this Supreme Court judgement."

The output is technically correct, but it does not follow the firm's preferred format.

What is the MOST effective improvement?

A. Persona Prompt

B. Grounding Prompt

C. Output Instruction Prompt

D. Chain of Thought

✅ **Answer: C — Output Instruction Prompt**

---

**Question 3**

A user wants AI to prepare a tax advisory note but first needs AI to understand:

* transaction structure

* countries involved

* business objectives

* timelines

Which technique should be used?

A. Flipped Prompting

B. Iterative Prompting

C. Meta Prompting

D. Refinement Prompting

✅ **Answer: A — Flipped Prompting**

---

**Question 4**

A user has already received a reasonably good output and now wants:

* stronger language

* better structure

* executive summary

What is the MOST appropriate technique?

A. Chain of Thought

B. Few-Shot Prompting

C. Refinement Prompting

D. Audience Prompting

✅ **Answer: C — Refinement Prompting**

---

**Question 5**

A user provides:

* one excellent tax memo

* one excellent litigation summary

and asks AI to create a third document using the same style and structure.

Which technique is being used?

A. Context Prompting

B. Few-Shot Prompting

C. Persona Prompting

D. Flipped Prompting

✅ **Answer: B — Few-Shot Prompting**

---

**Exercise 2: 🧩 Match the Description**

**Instructions**

Match each description with the correct Prompt Element or Prompting Technique.

---

**Descriptions**

**A**

*"Before answering, ask me any questions needed to properly understand the transaction."*

✅ **Flipped Prompting**

---

**B**

*"According to the Income-tax Act, 1961 and CBDT circulars, explain the position."*

✅ **Grounding / Source Anchoring**

---

**C**

*"Provide the response as a table followed by three key recommendations."*

✅ **Output Indicator**

---

**D**

*"You are a senior tax controversy partner advising a multinational group."*

✅ **Persona**

---

**E**

*"Generate 10 alternative approaches and identify any risks we may have overlooked."*

✅ **Creative Expansion Prompting**

---

**F**

*"Review my prompt and suggest a better version before proceeding."*

✅ **Meta Prompting**

---

**G**

*"The user is an India-headquartered IT company providing services to its Singapore parent."*

✅ **Context**

---

**H**

*"Think through the issue step by step before arriving at a conclusion."*

✅ **Chain of Thought**

---

**I**

*"Now shorten the output to one page and make it suitable for a CFO."*

✅ **Iterative Prompting**

---

**J**

*"Limit the response to 200 words and exclude judicial precedents."*

✅ **Constraints & Boundaries**

---

**✅ DO'S**

**🎯 Be Specific**

**Describe the issue, jurisdiction, entity and objective.**

Instead of:

Explain transfer pricing.

Try:

Explain the transfer pricing implications for an Indian captive IT services company.

---

**🧩 Provide Context**

**Give AI the background it needs to understand your situation.**

Include:

* Industry

* Business model

* Jurisdiction

* Relevant facts

---

**📋 Define the Output**

**Tell AI exactly what you want back.**

Examples:

* Executive summary

* Comparison table

* Memo

* Risk matrix

---

**👥 Specify the Audience**

**Tailor the response to the intended reader.**

Examples:

* CFO

* Tax Head

* Tax Manager

* Board

---

**🔄 Refine Through Conversation**

**The first answer is a starting point, not the finish line.**

Follow-up with:

* Simplify this

* Add examples

* Make it user-ready

* Strengthen the key arguments

---

**🔒 Use Dummy Data**

**Replace sensitive information with placeholders before prompting.**

Use:

* Company A

* Vendor X

* ₹XX crore

instead of actual names and figures.

---

**✅ Verify Before You Rely**

**Use AI for research and drafting. Use professional judgment for conclusions.**

Check:

* Facts

* Assumptions

* Sources

* Current law

---

**❌ DON'TS**

**🚫 Don't Be Vague**

**Vague prompts produce vague answers.**

Instead of:

Tell me about GST.

Provide:

* What issue?

* Which taxpayer?

* What jurisdiction?

* What outcome?

---

**🚫 Don't Ask Everything at Once**

**One focused question beats ten unrelated ones.**

Break complex requests into smaller tasks.

---

**🚫 Don't Skip Key Facts**

**Missing facts often lead to generic outputs.**

Always provide:

* Relevant background

* Assumptions

* Constraints

---

**🚫 Don't Share Confidential Information**

**Never enter sensitive data into non-approved tools.**

Examples:

* PAN

* GSTIN

* Bank account details

* Financials

* Confidential transaction details

---

**🚫 Don't Ignore Jurisdiction**

**Tax answers are jurisdiction-specific.**

Always specify:

* Country

* State (where relevant)

* Applicable legislation

---

**🚫 Don't Accept the First Answer**

**Challenge the output before using it.**

Ask:

* What assumptions did you make?

* Are there alternative views?

* What information might be missing?

---

**🚫 Don't Treat AI as Final Authority**

**AI assists. Professionals decide.**

Use AI to: ✅ Research  
✅ Draft  
✅ Summarize  
✅ Brainstorm

Not to: ❌ Sign off opinions  
❌ Take filing positions  
❌ Replace professional judgment

---

**Final Rule**

**Better Prompts → Better Outputs → Better Decisions**  
**Clear Instructions \+ Context \+ Validation \= Effective AI Usage**

