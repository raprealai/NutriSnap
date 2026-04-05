# 🧠 ML ENGINEER MEMORY

> Registry of all system prompts, builds, and technical patterns.

---

## 🤖 System Prompt Registry
| Name | Project | Model Used | Version | Last Updated |
|---|---|---|---|---|
| _(none yet)_ | | | | |

---

## 🔧 Integration Patterns (Reusable Code Snippets)

### Claude API Basic Call (JavaScript)
```javascript
const response = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "claude-sonnet-4-6",
    max_tokens: 1000,
    messages: [{ role: "user", content: userInput }],
    system: systemPrompt
  })
});
const data = await response.json();
const reply = data.content[0].text;
```

---

## 🧪 Test Log
| Prompt/Build | Test Cases Run | Pass Rate | Issues Found |
|---|---|---|---|
| _(none yet)_ | | | |

---

## ⚠️ Known Technical Limitations
| Issue | Workaround | Affects Which Projects |
|---|---|---|
| _(none yet)_ | | |

---

## 📦 Completed Builds
| Build Name | Client | Stack Used | Notes |
|---|---|---|---|
| _(none yet)_ | | | |
