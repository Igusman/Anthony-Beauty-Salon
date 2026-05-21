import styles from './Services.module.css'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

const servicesData = [
  {
    icon: '💇‍♀️',
    key: 'haircut',
  },
  {
    icon: '✨',
    key: 'coloring',
  },
  {
    icon: '🌸',
    key: 'blowdry',
  },
  {
    icon: '👰‍♀️',
    key: 'bridal',
  },
  {
    icon: '💆‍♀️',
    key: 'treatment',
  },
  {
    icon: '💎',
    key: 'vip',
  },
]

const getServiceText = (t, key) => {
  switch (key) {
    case 'haircut':
      return { title: t.haircut, desc: t.haircutDesc }
    case 'coloring':
      return { title: t.coloring, desc: t.coloringDesc }
    case 'blowdry':
      return { title: t.blowdry, desc: t.blowdryDesc }
    case 'bridal':
      return { title: t.bridal, desc: t.bridalDesc }
    case 'treatment':
      return { title: t.treatment, desc: t.treatmentDesc }
    case 'vip':
      return { title: t.vip, desc: t.vipDesc }
    default:
      return { title: '', desc: '' }
  }
}

export default function Services() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]?.services || translations.en.services
  return (
    <section id="services" className={styles.section}>
      <p className="section-subtitle">{t.subtitle}</p>
      <h2 className="section-title">{t.title}</h2>
      <div className="gold-divider" />
      <div className={styles.grid}>
        {servicesData.map(s => {
          const { title, desc } = getServiceText(t, s.key)
          return (
            <div key={s.key} className={styles.card}>
              <span className={styles.icon}>{s.icon}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
