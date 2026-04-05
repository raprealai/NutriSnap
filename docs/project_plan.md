# PROJECT PLAN — NutriSnap AI
═══════════════════════════════════════

**CLIENT**: Self (AI Lab Naga Test Run)
**OBJECTIVE**: Build a working food-to-calorie estimation app to validate lab operations and technical capabilities.
**DEADLINE**: 2026-04-12

**PODS ASSIGNED**:
- **Lead Pod**: ML Engineer (Vision System Logic)
- **Supporting Pods**: 
    - AI Product Manager (PRD & User Stories)
    - UX Designer (UI/UX Specification)
    - MLOps Engineer (App Scaffolding & Integration)
    - Legal Compliance (Risk Assessment & Disclaimers)
    - Data Scientist (Accuracy & Performance Testing)

**WORKFLOW**:
1. **Legal Compliance**: Conduct risk assessment and draft a mandatory medical disclaimer.
2. **AI Product Manager**: Define functional requirements and nutritional data schema.
3. **UX Designer**: Create styling tokens and basic wireframe for the nutritional dashboard.
4. **ML Engineer**: Develop the Core Vision System Prompt for Claude 3.5 Sonnet.
5. **MLOps Engineer**: Scaffold the Vite/React application and integrate the vision logic via frontend API call.
6. **Data Scientist**: Run 5 test cases against varied food images to evaluate accuracy.
7. **CoE / Governance**: Final quality check and sign-off.

**TOOLS TO USE**: 
- **Frontend**: Vite, React, Vanilla CSS
- **AI**: Claude 3.5 Sonnet (Vision enabled)
- **Deployment**: Local dev server (npm run dev)

**MODEL SELECTION**: 
- **Vision/Logic**: `claude-sonnet-4-6` (High accuracy image analysis)
- **Coding**: `claude-sonnet-4-6` (Optimized for React/Vite development)

**QUALITY STANDARD**:
- The application must load and respond to image uploads within **2 seconds**.
- Image recognition must successfully identify the primary food/drink item in **4 out of 5** test cases.
- Every calorie estimation **must** show a "Confidence Level" (Low/Medium/High).
- UI must follow "Clinical/Clean" aesthetic with responsive design.
═══════════════════════════════════════
