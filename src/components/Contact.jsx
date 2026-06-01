import styles from './Contact.module.css'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

export default function Contact() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]?.contact || translations.en.contact
  const services = translations[language]?.services || translations.en.services

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const fullName = formData.get('fullName')?.toString().trim()
    const service = formData.get('service')?.toString().trim()
    const optionalMessage = formData.get('message')?.toString().trim()

    const messageParts = [
      `היי אנטוני שמי ${fullName}`,
      `אני מעוניינ/ת ב${service}`,
    ]

    if (optionalMessage) {
      messageParts.push(`בנוסף, ${optionalMessage}`)
    }

    const whatsappMessage = encodeURIComponent(messageParts.join('\n'))
    const whatsappUrl = `https://wa.me/972545260444?text=${whatsappMessage}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.formCard}>
        <p className="section-subtitle">{t.subtitle}</p>
        <h2 className="section-title">{t.title}</h2>
        <div className="gold-divider" />

        <form className={styles.form} onSubmit={handleSubmit}>
          <input name="fullName" type="text" placeholder={t.fullName} required />
          <input name="phone" type="tel" placeholder={t.phone} required />
          <select name="service" defaultValue="" required>
            <option value="" disabled>{t.selectService}</option>
            <option value={services.haircut}>{services.haircut}</option>
            <option value={services.coloring}>{services.coloring}</option>
            <option value={services.blowdry}>{services.blowdry}</option>
            <option value={services.bridal}>{services.bridal}</option>
            <option value={services.treatment}>{services.treatment}</option>
            <option value={services.vip}>{services.vip}</option>
          </select>
          <textarea name="message" rows="4" placeholder={t.message} />
          <button type="submit">{t.send}</button>
        </form>
      </div>

      <div className={styles.infoCard}>
        <h3>{t.salon}</h3>
        <div className={styles.quickActions}>
          <a
            href="https://maps.google.com/?q=123%20Luxury%20Street,%20Tel%20Aviv"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label={t.address}
            title={t.address}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="currentColor" />
            </svg>
          </a>
          <a
            href="tel:+972501234567"
            className={styles.iconLink}
            aria-label={t.phone}
            title={t.phoneValue}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.06.35 2.2.54 3.4.54a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.19 2.34.54 3.4a1 1 0 0 1-.24 1l-2.2 2.4Z" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/anthonyleudohairy/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconLink} ${styles.instagram}`}
            aria-label={t.instagram}
            title={t.instagram}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.25 1.65a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z" fill="currentColor" />
            </svg>
          </a>
        </div>

        <div className={styles.hours}>
          <h4>{t.hours}</h4>
          <p>{t.sunThu}</p>
          <p className={styles.closed}>{t.mon}</p>
          <p>{t.fri}</p>
          <p className={styles.closed}>{t.sat}</p>
        </div>
      </div>
    </section>
  )
}
