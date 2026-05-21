import styles from './Testimonials.module.css'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

export default function Testimonials() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]?.testimonials || translations.en.testimonials
  const items = Array.isArray(t.items) ? t.items : []
  return (
    <section id="testimonials" className={styles.section}>
      <p className="section-subtitle">{t.subtitle}</p>
      <h2 className="section-title">{t.title}</h2>
      <div className="gold-divider" />
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.text}>&ldquo;{item.text}&rdquo;</p>
            <span className={styles.name}>- {item.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

