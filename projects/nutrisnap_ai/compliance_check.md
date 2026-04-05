# COMPLIANCE RISK ASSESSMENT — NutriSnap AI
━━━━━━━━━━━━━━━━━━━━━
**PROJECT**: NutriSnap AI
**DATE**: 2026-04-05

**DATA PRIVACY**:
- Does this collect/process personal data? **No** (Local execution for this test run)
- Applicable law: RA 10173 (PH Data Privacy Act)

**AI TRANSPARENCY**:
- Will end users know they're interacting with AI? **Yes**
- Disclosure: "Nutritional data is generated using AI analysis."

**HARM POTENTIAL**:
- Could this AI cause harm if it gives wrong answers? **Medium** (Users might rely on it for medical/health decisions).
- Use Case: Nutritional estimation.
- Required Safeguard: **Mandatory Medical Disclaimer.**

**CONTENT RISK**:
- Does this involve sensitive content? **No**
- Could this be used to mislead, manipulate, or harm users? **No**

**OVERALL RISK LEVEL**: **MEDIUM**

**REQUIRED ACTIONS**:
1. Include a prominent medical disclaimer on the UI.
2. Ensure the AI system prompt includes a clause about estimation confidence.
3. Add a "Learn More" section explaining that the tool is for informational purposes only.

**OFFICIAL DISCLOSURE TEXT**:
> "NutriSnap AI uses advanced computer vision to estimate nutritional data. This information is provided for educational and informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition."
━━━━━━━━━━━━━━━━━━━━━
