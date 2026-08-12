/**
 * Guided Prompt Library — data from Priya’s prompt-library-v2 HTML.
 */

export type PromptLibrarySlide = {
  title: string;
  sub: string;
  body: string;
};

export type PromptLibraryEntry = {
  id: number;
  name: string;
  category: PromptLibraryCategory;
  capabilities: string[];
  slides: PromptLibrarySlide[];
};

export type PromptLibraryCategory =
  | "Research"
  | "Compliance"
  | "Planning and Communication"
  | "Data";

export const PROMPT_LIBRARY_FILTERS: { id: "all" | PromptLibraryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "Research", label: "Research" },
  { id: "Compliance", label: "Compliance" },
  { id: "Planning and Communication", label: "Planning & Comm." },
  { id: "Data", label: "Data" },
];

export const PROMPT_LIBRARY: PromptLibraryEntry[] = [
  {
    id: 1,
    name: "Concept Note",
    category: "Research",
    capabilities: ["Query", "Analyse"],
    slides: [
      { title: "Concept Note", sub: "Research Framework", body: "Structure and articulate a tax concept with supporting arguments and references." },
      { title: "Scope Definition", sub: "Step 1", body: "Define the tax concept boundaries, applicable jurisdictions, and key stakeholders." },
      { title: "Legal Backing", sub: "Step 2", body: "Identify relevant sections, circulars, notifications, and judicial precedents." },
      { title: "Analysis Output", sub: "Step 3", body: "Generate a structured concept note with executive summary and detailed analysis." },
    ],
  },
  {
    id: 2,
    name: "Facts-to-Law",
    category: "Research",
    capabilities: ["Compare", "Analyse"],
    slides: [
      { title: "Facts-to-Law", sub: "Legal Mapping", body: "Map factual scenarios to applicable legal provisions and precedents." },
      { title: "Fact Extraction", sub: "Step 1", body: "Extract and organise key facts from the client scenario." },
      { title: "Law Mapping", sub: "Step 2", body: "Identify and map each fact to relevant tax provisions and case laws." },
    ],
  },
  {
    id: 3,
    name: "20-80 Concept",
    category: "Research",
    capabilities: ["Explain"],
    slides: [
      { title: "20-80 Concept", sub: "Quick Explainer", body: "Explain complex tax concepts with 20% effort covering 80% of understanding." },
      { title: "Core Concept", sub: "The 20%", body: "Distill the fundamental principle into a clear, concise explanation." },
      { title: "Key Nuances", sub: "Essential Details", body: "Highlight the most impactful exceptions, thresholds, and practical considerations." },
      { title: "Application", sub: "Real World", body: "Provide a worked example demonstrating how the concept applies in practice." },
      { title: "Quick Reference", sub: "Cheat Sheet", body: "One-page summary card for quick recall and client discussions." },
    ],
  },
  {
    id: 4,
    name: "Stepwise",
    category: "Research",
    capabilities: ["Explain"],
    slides: [
      { title: "Stepwise Guide", sub: "Procedural Walkthrough", body: "Break down a complex tax process into sequential, actionable steps." },
      { title: "Prerequisites", sub: "Before You Begin", body: "List all required documents, registrations, and preliminary checks." },
      { title: "Step-by-Step", sub: "Execution", body: "Detailed walkthrough of each step with timelines and responsibilities." },
      { title: "Checkpoints", sub: "Validation", body: "Key checkpoints and common pitfalls to verify at each stage." },
    ],
  },
  {
    id: 5,
    name: "Transaction Step",
    category: "Compliance",
    capabilities: ["Generate"],
    slides: [
      { title: "Transaction Step", sub: "Compliance Generator", body: "Generate step-by-step compliance requirements for a given transaction type." },
      { title: "Transaction Type", sub: "Classification", body: "Classify the transaction and identify applicable compliance framework." },
      { title: "Regulatory Map", sub: "Applicable Laws", body: "Map all regulatory requirements across direct tax, indirect tax, and transfer pricing." },
      { title: "Timeline", sub: "Due Dates", body: "Generate compliance calendar with filing deadlines and payment schedules." },
      { title: "Documentation", sub: "Required Records", body: "List all documentation and record-keeping requirements." },
      { title: "Risk Matrix", sub: "Penalties", body: "Outline non-compliance risks, penalties, and mitigation strategies." },
      { title: "Checklist", sub: "Final Check", body: "Comprehensive pre-submission compliance verification checklist." },
    ],
  },
  {
    id: 6,
    name: "GST Formula",
    category: "Compliance",
    capabilities: ["Generate"],
    slides: [
      { title: "GST Formula", sub: "Computation Engine", body: "Generate GST computation formulas for various supply scenarios." },
      { title: "Supply Classification", sub: "Step 1", body: "Determine type of supply — goods/services, inter/intra-state, B2B/B2C." },
      { title: "Rate Determination", sub: "Step 2", body: "Apply correct HSN/SAC codes and corresponding GST rates." },
      { title: "Computation", sub: "Step 3", body: "Calculate CGST, SGST, IGST with ITC set-off workings." },
    ],
  },
  {
    id: 7,
    name: "Meeting",
    category: "Planning and Communication",
    capabilities: ["Summarise"],
    slides: [
      { title: "Meeting Summary", sub: "Communication Aid", body: "Summarise meeting discussions into structured action items and decisions." },
      { title: "Key Decisions", sub: "Outcomes", body: "Highlight all decisions made, owners assigned, and deadlines agreed." },
      { title: "Action Items", sub: "Follow-ups", body: "Organised list of action items with priority, owner, and due dates." },
    ],
  },
  {
    id: 8,
    name: "PPT Mock Run",
    category: "Planning and Communication",
    capabilities: ["Evaluate", "Generate"],
    slides: [
      { title: "PPT Mock Run", sub: "Presentation Prep", body: "Simulate a presentation run with Q&A preparation and talking points." },
      { title: "Slide Outline", sub: "Structure", body: "Review and refine the presentation flow, key messages per slide." },
      { title: "Talking Points", sub: "Narration", body: "Generate speaker notes and transition statements for each slide." },
      { title: "Q&A Prep", sub: "Anticipate", body: "Predict likely questions and prepare structured responses." },
      { title: "Dry Run", sub: "Practice", body: "Evaluate timing, clarity, and impact of the overall presentation." },
    ],
  },
  {
    id: 9,
    name: "Tax Strategic Upskilling",
    category: "Planning and Communication",
    capabilities: ["Generate"],
    slides: [
      { title: "Tax Strategic Upskilling", sub: "Learning Pathway", body: "Generate a customised learning plan for tax professionals." },
      { title: "Skill Assessment", sub: "Current State", body: "Evaluate current knowledge gaps against required competencies." },
      { title: "Learning Path", sub: "Curriculum", body: "Structured learning modules with resources and milestones." },
      { title: "Knowledge Check", sub: "Assessment", body: "Self-assessment questions and case studies for validation." },
      { title: "Advanced Topics", sub: "Deep Dive", body: "Curated advanced reading and emerging areas in tax practice." },
      { title: "Progress Tracker", sub: "Dashboard", body: "Track completion, scores, and areas for reinforcement." },
      { title: "Certification", sub: "Next Steps", body: "Recommended certifications and professional development paths." },
    ],
  },
  {
    id: 10,
    name: "Document",
    category: "Data",
    capabilities: ["Extract"],
    slides: [
      { title: "Document Extractor", sub: "Data Extraction", body: "Extract structured data from unstructured tax documents." },
      { title: "Upload & Parse", sub: "Step 1", body: "Upload document and identify key fields for extraction." },
      { title: "Extracted Data", sub: "Step 2", body: "Review extracted data points with confidence scores and validation." },
    ],
  },
  {
    id: 11,
    name: "Image Summarization",
    category: "Data",
    capabilities: ["Extract"],
    slides: [
      { title: "Image Summarization", sub: "Visual Data Extraction", body: "Extract and summarise information from images of tax documents." },
      { title: "Image Input", sub: "Upload", body: "Accept images of invoices, challans, notices, or any tax document." },
      { title: "OCR & Extract", sub: "Processing", body: "Identify text regions, extract data, and structure into fields." },
      { title: "Summary Output", sub: "Results", body: "Present extracted information in a clean, structured format." },
    ],
  },
  {
    id: 12,
    name: "Vernacular",
    category: "Data",
    capabilities: ["Transform"],
    slides: [
      { title: "Vernacular", sub: "Language Transform", body: "Transform tax content between English and regional languages." },
      { title: "Source Content", sub: "Input", body: "Provide the tax content or notice in the source language." },
      { title: "Transformed Output", sub: "Result", body: "Accurately translated content preserving legal and tax terminology." },
    ],
  },
  {
    id: 13,
    name: "VBA Automation",
    category: "Data",
    capabilities: ["Extract"],
    slides: [
      { title: "VBA Automation", sub: "Macro Generator", body: "Generate VBA macros for automating repetitive tax data tasks." },
      { title: "Task Definition", sub: "What to Automate", body: "Define the Excel-based task — data formatting, computation, or report generation." },
      { title: "Macro Design", sub: "Logic Flow", body: "Design the automation logic with input/output specifications." },
      { title: "Generated Code", sub: "VBA Output", body: "Ready-to-use VBA macro code with inline comments." },
      { title: "Testing Guide", sub: "Validation", body: "Step-by-step guide to test and deploy the macro safely." },
    ],
  },
  {
    id: 14,
    name: "Agreement",
    category: "Data",
    capabilities: ["Analyse"],
    slides: [
      { title: "Agreement Analyser", sub: "Contract Review", body: "Analyse agreements for tax implications, risks, and compliance gaps." },
      { title: "Clause Extraction", sub: "Key Terms", body: "Extract and categorise key clauses — indemnity, TDS, GST, withholding." },
      { title: "Tax Impact", sub: "Analysis", body: "Evaluate tax implications of each clause and suggest amendments." },
      { title: "Risk Summary", sub: "Red Flags", body: "Highlight potential tax risks and non-compliance triggers." },
    ],
  },
  {
    id: 15,
    name: "SOP Review",
    category: "Data",
    capabilities: ["Evaluate"],
    slides: [
      { title: "SOP Review", sub: "Process Audit", body: "Evaluate Standard Operating Procedures for tax compliance adequacy." },
      { title: "Current SOP", sub: "As-Is Review", body: "Assess existing SOP against current regulatory requirements." },
      { title: "Gap Analysis", sub: "Findings", body: "Identify gaps, redundancies, and improvement opportunities." },
      { title: "Recommendations", sub: "To-Be", body: "Prioritised recommendations with implementation roadmap." },
      { title: "Updated SOP", sub: "Final Draft", body: "Revised SOP incorporating all recommended changes." },
    ],
  },
];
