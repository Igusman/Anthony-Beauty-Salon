import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import styles from './LanguageSwitcher.module.css'

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useContext(LanguageContext)

  return (
    <div className={styles.switcher}>
      <button 
        className={`${styles.btn} ${language === 'he' ? styles.active : ''}`}
        onClick={() => changeLanguage('he')}
        title="עברית"
      >
        עברית
      </button>
      <button 
        className={`${styles.btn} ${language === 'en' ? styles.active : ''}`}
        onClick={() => changeLanguage('en')}
        title="English"
      >
        English
      </button>
      <button 
        className={`${styles.btn} ${language === 'es' ? styles.active : ''}`}
        onClick={() => changeLanguage('es')}
        title="Español"
      >
        Español
      </button>
    </div>
  )
}
