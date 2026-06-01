
import { useState, useEffect, useContext } from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/logo.svg'
import LanguageSwitcher from './LanguageSwitcher'
import { LanguageContext } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language } = useContext(LanguageContext)
  const isRtl = language === 'he'
  const t = translations[language]?.nav || translations.en.nav

  const links = [
    { label: t.home, href: '#hero' },
    { label: t.services, href: '#services' },
    { label: t.about, href: '#about' },
    { label: t.gallery, href: '#gallery' },
    { label: t.contact, href: '#contact' },
  ]

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>
        <img src={logo} alt="Anthony Beauty Salon" />
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className={styles.bookBtn} onClick={() => setMenuOpen(false)}>
            {t.bookNow}
          </a>
        </li>
      </ul>

      <div className={`${styles.navRight} ${isRtl ? styles.navRightRtl : styles.navRightLtr}`}>
        <LanguageSwitcher />
      </div>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
