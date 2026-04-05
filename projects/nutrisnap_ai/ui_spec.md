# INTERFACE SPECIFICATION — NutriSnap AI
━━━━━━━━━━━━━━━━━━━━━
**PROJECT**: NutriSnap AI
**STATUS**: DESIGNED
**THEME**: Clean, Clinical, Responsive

## Visual Identity
- **Primary Color**: `#00B894` (Mint Green — Health & Vitality)
- **Secondary Color**: `#2D3436` (Slate — Professional & Readable)
- **Typography**: Inter or System Sans-Serif (Modern & Accessible)

## Layout Structure
### 1. Hero / Upload Section
- **Header**: Minimalist logo "NutriSnap AI" in the top-left.
- **Main Area**: A large "Drop Zone" with a dashed border.
- **Action**: A prominent "Upload or Take a Photo" button in the center.

### 2. Analysis View (State: Loading)
- **UI**: A smooth, pulsating loader with the text: *"NutriSnap AI is identifying your meal..."*

### 3. Results Dashboard (State: Success)
- **Left/Top**: The original uploaded image (cropped/resized for preview).
- **Right/Bottom**: A card-based results layout:
    - **Title**: Large, bold food name (e.g., "Bicol Express — Single Serving").
    - **Confidence Badge**: A pill-shaped badge indicating "High / Medium / Low" confidence.
- **Nutritional Grid**:
    - **CARBS**: Card with [Value]g
    - **PROTEIN**: Card with [Value]g
    - **FAT**: Card with [Value]g
    - **TOTAL CALORIES**: Large, central highlight with [Value] kcal.

### 4. Footer / Disclaimer
- **Text**: Small, italicized medical disclaimer (Official Disclosure Text from Legal Compliance).

## User Flow
1. **Arrive**: User lands on a clean page focused entirely on the "Upload" action.
2. **Upload**: User selects or drags an image.
3. **Wait**: Instant feedback with a loading state (max 2 seconds).
4. **View**: Results slide into view.
5. **Reset**: A "Scan Another Dish" button to clear state and return to step 1.

## Responsive Behavior
- **Desktop**: Side-by-side view (Image on Left, Results on Right).
- **Mobile**: Stacked view (Image on Top, Results on Bottom).
- **Interactions**: Subtle hover states on cards and buttons.
━━━━━━━━━━━━━━━━━━━━━
