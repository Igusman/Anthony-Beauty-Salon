import { useContext, useState } from 'react'
import { AccessibilityContext } from '../context/AccessibilityContext'
import styles from './AccessibilityPanel.module.css'

export default function AccessibilityPanel() {
  const { accessibility, updateAccessibility } = useContext(AccessibilityContext)
  const [isOpen, setIsOpen] = useState(false)

  const handleFontSize = (value) => {
    updateAccessibility({ fontSize: value })
    document.documentElement.style.fontSize = `${value}%`
  }

  const toggleContrast = () => {
    const newContrast = !accessibility.contrast
    updateAccessibility({ contrast: newContrast })
    document.documentElement.style.setProperty('--contrast-filter', newContrast ? 'contrast(1.5)' : 'contrast(1)')
  }

  const toggleDyslexia = () => {
    const newDyslexia = !accessibility.dyslexiaFont
    updateAccessibility({ dyslexiaFont: newDyslexia })
    const root = document.documentElement
    if (newDyslexia) {
      root.style.setProperty('--font-body', "'Comic Sans MS', cursive")
    } else {
      root.style.setProperty('--font-body', "'Montserrat', sans-serif")
    }
  }

  return (
    <>
      <button 
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open accessibility panel"
        title="נגישות / Accessibility"
      >
        ♿
      </button>

      {isOpen && (
        <div className={styles.panel}>
          <button 
            className={styles.close}
            onClick={() => setIsOpen(false)}
            aria-label="Close panel"
          >
            ✕
          </button>

          <h3>נגישות</h3>

          <div className={styles.control}>
            <label>גודל גופן: {accessibility.fontSize}%</label>
            <input 
              type="range" 
              min="80" 
              max="150" 
              value={accessibility.fontSize}
              onChange={(e) => handleFontSize(Number(e.target.value))}
            />
            <div className={styles.buttons}>
              <button onClick={() => handleFontSize(100)}>איפוס</button>
            </div>
          </div>

          <div className={styles.control}>
            <label>
              <input 
                type="checkbox" 
                checked={accessibility.contrast}
                onChange={toggleContrast}
              />
              ניגודיות גבוהה
            </label>
          </div>

          <div className={styles.control}>
            <label>
              <input 
                type="checkbox" 
                checked={accessibility.dyslexiaFont}
                onChange={toggleDyslexia}
              />
              גופן נוח לדיסלקסיה
            </label>
          </div>
        </div>
      )}
    </>
  )
}
