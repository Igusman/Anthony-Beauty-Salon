import { createContext, useEffect, useState } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('language')
      if (saved === 'he' || saved === 'en' || saved === 'es') {
        return saved
      }
    } catch {
      // Ignore storage access failures and fall back to the default language.
    }
    return 'he'
  })

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
      document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr'
    }

    try {
      localStorage.setItem('language', language)
    } catch {
      // Ignore storage access failures.
    }
  }, [language])

  const changeLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
