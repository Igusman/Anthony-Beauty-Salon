import styles from './Hero.module.css'
import logo from '../assets/logo.svg'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

export default function Hero() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]?.hero || translations.en.hero
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <img src={logo} alt="Anthony Beauty Salon Logo" className={styles.logo} />
        <p className={styles.tagline}>{t.tagline}</p>
        <div className={styles.goldLine} />
        <p className={styles.sub}>{t.sub}</p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>{t.bookAppointment}</a>
          <a href="#services" className={styles.btnSecondary}>{t.ourServices}</a>
        </div>
      </div>
      <a href="#services" className={styles.scroll}>
        <span />
      </a>
    </section>
  )
}
