# 🧠 COE MEMORY — AI Center of Excellence

> This is the lab's living standards library. Update after every project completion.

---

## 📚 Active Project Plans
| Project | Lead Pod | Status | Last Updated |
|---|---|---|---|
| NutriSnap AI | ML Engineer | COMPLETED | 2026-04-05 |

---

## 🗂️ Standards Registry

### Prompt Engineering Standards
- Always include role context at the start ("You are a...")
- Specify output format explicitly (markdown table, JSON, paragraph, etc.)
- Include a quality criterion ("Ensure the output is...")
- For long tasks, break into steps
- **Vision Standard**: For image analysis, define a "Confidence Level" for each estimation.

### Output Format Standards
| Deliverable Type | Format |
|---|---|
| Reports / Analysis | Markdown with headers, tables, summary |
| Code / Automation | Well-commented code + README |
| Client Presentations | Structured outline → CoE formats as doc/slide |
| Chatbots | System prompt + test conversation log |
| Data Dashboards | Data + visualization + 3-bullet insight summary |

### Model Selection (Current Standard)
| Task | Model |
|---|---|
| Strategy, complex reasoning | claude-opus-4-6 |
| Drafting, coding, analysis | claude-sonnet-4-6 |
| Quick tasks, classification | claude-haiku-4-5 |

### Review Checklist (Pre-Delivery)
- [ ] Output matches stated project objective
- [ ] Format matches client-agreed standard
- [ ] No hallucinated facts or data
- [ ] Legal/compliance check done (if required)
- [ ] Proofread for tone, clarity, accuracy
- [ ] File named correctly and organized

---

## 🔧 Tool Registry
| Tool | Purpose | Status |
|---|---|---|
| Claude API | Core AI engine | Active |
| _(add tools as you onboard them)_ | | |

---

## 📖 Reusable Templates
| Template Name | Used For | Location |
|---|---|---|
| Project Plan Template | Every new project | This file (see CoE SKILL.md) |
| _(add as you build them)_ | | |

---

## 🧩 Lessons Learned (from Completed Projects)
| Vision estimation requires "Confidence Level" for saucy/opaque foods. | NutriSnap AI | YES (Added to Vision Standard) |
