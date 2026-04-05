# PROJECT REQUIREMENTS DOCUMENT — NutriSnap AI
═══════════════════════════════════════

**PROJECT**: NutriSnap AI
**CLIENT**: Self (AI Lab Naga Test Run)
**DATE**: 2026-04-05

**PROBLEM STATEMENT**:
Manually logging calories is one of the biggest friction points in healthy living. Traditional apps require searching databases and weighing portions, which users often skip due to the time commitment.

**OBJECTIVE**:
By the end of this project, the user will be able to upload an image of any food or beverage to a web application and receive a near-instant (within 2 seconds) estimation of its name, calorie count, and macronutrient profile.

**TARGET USERS**:
- Health-conscious individuals.
- Busy professionals in Naga City who want to track nutrition on the go.
- Fitness enthusiasts.

**FUNCTIONAL REQUIREMENTS**:
- **FR-01 (Image Entry)**: Support for image upload via file picker and drag-and-drop.
- **FR-02 (AI Analysis)**: Use Claude 3.5 Sonnet Vision to identify the food(s) and portion size from the image.
- **FR-03 (Nutritional Breakdown)**: Display Calories (kcal), Protein (g), Carbohydrates (g), and Fats (g).
- **FR-04 (Confidence Rating)**: Provide a "Confidence Score" (Low/Medium/High) for the estimation based on image clarity.
- **FR-05 (Safety)**: Display a mandatory medical disclaimer on every result.

**NON-FUNCTIONAL REQUIREMENTS**:
- **Performance**: Analysis response time must be under 2 seconds.
- **UI/UX**: Clean, "clinical yet friendly" aesthetic with high readability.
- **Responsiveness**: Must work perfectly on mobile browsers (as users often take photos from their phones).

**USER STORIES**:
1. *As a user*, I want to upload a photo of my meal so that I don't have to spend 5 minutes searching for and entering individual ingredients.
2. *As a user*, I want to see the protein content specifically so that I can ensure I'm hitting my daily goals.
3. *As a user*, I want to see a confidence rating so that I can decide how much to trust the AI's estimation for that specific image.

**SUCCESS METRICS**:
- **Recognition Accuracy**: 80% accuracy in identifying common Filipino and international dishes in test images.
- **Latency**: < 2s from upload completion to result display.
- **User Satisfaction**: Seamless end-to-end flow from image selection to data visualization.

**OUT OF SCOPE**:
- User accounts and historical tracking (Phase 1 only covers single-session estimation).
- Multi-image analysis (only one photo per analysis).
- Connection to external fitness APIs (Apple Health, MyFitnessPal).
═══════════════════════════════════════
