import styles from './Footer.module.css'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

export default function Footer() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]?.footer || translations.en.footer
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} {t.copyright}</p>
      <a
        href="https://www.instagram.com/anthonyleudohairy/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.insta}
        aria-label={t.instagram || 'Instagram'}
        title={t.instagram || 'Instagram'}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.25 1.65a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z" fill="currentColor" />
        </svg>
      </a>
      <p className={styles.credit}>{t.credit}</p>
    </footer>
  )
}
