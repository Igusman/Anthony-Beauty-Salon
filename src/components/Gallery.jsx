import styles from './Gallery.module.css'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import coloringImg from '../assets/Screenshot 2026-05-21 131332.png'
import bridalImg from '../assets/Screenshot 2026-05-21 131408.png'
import haircutImg from '../assets/Screenshot 2026-05-21 131435.png'
import blowdryImg from '../assets/Screenshot 2026-05-21 131651.png'
import treatmentImg from '../assets/Screenshot 2026-05-21 131552.png'

const galleryImages = [
  { src: coloringImg, altKey: 'coloring' },
  { src: bridalImg, altKey: 'bridal' },
  { src: haircutImg, altKey: 'haircut' },
  { src: blowdryImg, altKey: 'blowdry' },
  { src: treatmentImg, altKey: 'treatment' },
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

