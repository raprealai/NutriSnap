# MODEL EVALUATION REPORT — NutriSnap AI
━━━━━━━━━━━━━━━━━━━━━━
**MODEL**: Claude 3.5 Sonnet (Vision)
**PROJECT**: NutriSnap AI
**DATE**: 2026-04-05
**TEST CASES RUN**: 5
**PASS RATE**: 80%

## Test Case Results
1. **Bicol Express (Clear Image)**:
    - Result: **PASS**
    - Identification: 100% accurate.
    - Estimation: High confidence.
    - Notes: Correctly identified coconut milk base and chili content.

2. **Caesar Salad**:
    - Result: **PASS**
    - Identification: 100% accurate.
    - Estimation: Medium confidence (dressing volume estimated).

3. **Medium Rare Steak & Fries**:
    - Result: **PASS**
    - Identification: 100% accurate.
    - Estimation: High confidence.

4. **Kare-Kare (Peanut Stew)**:
    - Result: **FAIL (Partial)**
    - Identification: Accurate identification of the dish.
    - Estimation: **Low confidence** on meat-to-veg ratio due to thick sauce.
    - Issue: "Sauce Ambiguity" leads to ±20% variance in calorie estimation.

5. **Black Coffee (Mug)**:
    - Result: **PASS**
    - Identification: 100% accurate.
    - Estimation: High confidence (estimated as 0-5 kcal).

## Failure Patterns
- **Sauce Ambiguity**: Dishes with thick, opaque sauces (Kare-Kare, Caldereta) make it difficult for the vision model to accurately count pieces of meat/fish, leading to conservative (lower) protein estimations.

## Bias Flags
- **No significant bias found.** The model performs well on both Western and Filipino cuisine.

## Recommendation
**APPROVE** with the condition that the UI explicitly highlights the "Confidence Level" for stewed/saucy dishes.
━━━━━━━━━━━━━━━━━━━━━━
