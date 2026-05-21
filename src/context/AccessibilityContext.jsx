import { createContext, useState } from 'react'

export const AccessibilityContext = createContext()

export function AccessibilityProvider({ children }) {
  const [accessibility, setAccessibility] = useState({
    fontSize: 100,
    contrast: false,
    dyslexiaFont: false,
  })

  const updateAccessibility = (updates) => {
    setAccessibility(prev => ({ ...prev, ...updates }))
  }

  return (
    <AccessibilityContext.Provider value={{ accessibility, updateAccessibility }}>
      {children}
    </AccessibilityContext.Provider>
  )
}
