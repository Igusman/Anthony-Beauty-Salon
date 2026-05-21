import styles from './Gallery.module.css'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80&auto=format&fit=crop', altKey: 'coloring' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop', altKey: 'haircut' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80&auto=format&fit=crop', altKey: 'blowdry' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format&fit=crop', altKey: 'bridal' },
]

export default function Gallery() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]?.gallery || translations.en.gallery
  return (
    <section id="gallery" className={styles.section}>
      <p className="section-subtitle">{t.subtitle}</p>
      <h2 className="section-title">{t.title}</h2>
      <div className="gold-divider" />
      <div className={styles.grid}>
        {galleryImages.map((img, i) => (
          <div key={i} className={styles.item}>
            <img src={img.src} alt={t[img.altKey + 'Alt'] || ''} loading="lazy" />
            <div className={styles.itemOverlay}>
              <span>{t[img.altKey + 'Alt'] || ''}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

