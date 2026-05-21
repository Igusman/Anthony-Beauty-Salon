import styles from './About.module.css'
import logo from '../assets/logo.svg'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

const stats = [
  { number: '10+', key: 'yearsExperience' },
  { number: '5K+', key: 'happyClients' },
  { number: '4.9★', key: 'rating' },
]

export default function About() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]?.about || translations.en.about
  return (
    <section id="about" className={styles.section}>
      <div className={styles.imageCol}>
        <div className={styles.imageWrap}>
          <img src={logo} alt="Anthony Beauty Salon" className={styles.logo} />
          <div className={styles.badge}>
            <span className={styles.badgeNum}>10+</span>
            <span className={styles.badgeTxt}>{t.yearsExperience}</span>
          </div>
        </div>
      </div>

      <div className={styles.textCol}>
        <p className="section-subtitle">{t.subtitle}</p>
        <h2 className="section-title">{t.title}</h2>
        <div className="gold-divider" />
        <p className={styles.para}>{t.desc1}</p>
        <div className={styles.stats}>
          {stats.map(s => (
            <div key={s.key} className={styles.stat}>
              <span className={styles.statNum}>{s.number}</span>
              <span className={styles.statLabel}>{t[s.key]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
