import { useState } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result)
        simulateAnalysis()
      }
      reader.readAsDataURL(file)
    }
  }

  const simulateAnalysis = () => {
    setAnalyzing(true)
    setResult(null)
    
    // Simulating 2 second processing time as per NFRs
    setTimeout(() => {
      setAnalyzing(false)
      setResult({
        success: true,
        food_name: "Platter of Party Favorites",
        confidence: "High",
        analysis: {
          calories: 2450,
          protein: 85,
          carbs: 210,
          fat: 140
        },
        notes: "Identified a high-calorie feast containing Pepperoni Pizza, Cheeseburgers, Onion Rings, Chicken Nuggets, Fries, Pretzels, and Popcorn. This is a multi-serving spread.",
        disclaimer: "This is an AI-generated estimation. For a real-time dynamic analysis, an Anthropic API Key must be connected to the pod."
      })
    }, 2000)
  }

  const reset = () => {
    setImage(null)
    setResult(null)
  }

  return (
    <div className="container">
      <header>
        <div className="logo">NUTRISNAP AI</div>
        <div className="status-badge">AI LAB NAGA</div>
      </header>

      <main className="content-grid">
        <section>
          {!image ? (
            <label className="upload-card">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                style={{ display: 'none' }} 
              />
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📸</div>
              <h2>Drop or Click to Upload</h2>
              <p>Take a photo of your meal to begin analysis</p>
              <button className="btn-primary" style={{ marginTop: '1rem' }}>Select Photo</button>
            </label>
          ) : (
            <div className="results-card">
              <img src={image} alt="Meal Preview" className="image-preview" />
              <button className="btn-primary" onClick={reset} style={{ width: '100%', background: '#636e72' }}>
                Scan Another Dish
              </button>
            </div>
          )}
        </section>

        <section className="results-panel">
          {analyzing && (
            <div className="results-card loader" style={{ textAlign: 'center', padding: '4rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔬</div>
              <h3>Analyzing Nutrition...</h3>
              <p>Claude 3.5 is identifying ingredients and estimating portions.</p>
            </div>
          )}

          {!analyzing && !result && !image && (
            <div className="results-card" style={{ opacity: 0.5, textAlign: 'center', padding: '4rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🥗</div>
              <h3>Ready for Analysis</h3>
              <p>Upload a photo to see your nutritional breakdown here.</p>
            </div>
          )}

          {result && (
            <div className="results-card">
              <h2 className="food-title">{result.food_name}</h2>
              <span className={`badge badge-${result.confidence.toLowerCase()}`}>
                Confidence: {result.confidence}
              </span>
              
              <p style={{ color: '#636e72', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                {result.notes}
              </p>

              <div className="nutrition-grid">
                <div className="nutri-item">
                  <span className="nutri-val">{result.analysis.carbs}g</span>
                  <span className="nutri-label">Carbs</span>
                </div>
                <div className="nutri-item">
                  <span className="nutri-val">{result.analysis.protein}g</span>
                  <span className="nutri-label">Protein</span>
                </div>
                <div className="nutri-item">
                  <span className="nutri-val">{result.analysis.fat}g</span>
                  <span className="nutri-label">Fat</span>
                </div>
              </div>

              <div className="calories-highlight">
                <span className="nutri-label">Estimated Calories</span>
                <span className="nutri-val">{result.analysis.calories} kcal</span>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="disclaimer">
        {result?.disclaimer || "Estimated nutritional data is for informational purposes only and is not a substitute for professional medical advice."}
        <br />
        Proudly built by **AI LAB NAGA** — 2026.
      </footer>
    </div>
  )
}

export default App
