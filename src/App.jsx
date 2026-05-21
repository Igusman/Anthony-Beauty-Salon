import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AccessibilityPanel from './components/AccessibilityPanel'
import LanguageSwitcher from './components/LanguageSwitcher'
import { LanguageProvider } from './context/LanguageContext'
import { AccessibilityProvider } from './context/AccessibilityContext'

function AppContent() {
  return (
    <div style={{ filter: 'var(--contrast-filter)' }}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AccessibilityProvider>
        <AppContent />
        <AccessibilityPanel />
      </AccessibilityProvider>
    </LanguageProvider>
  )
}

export default App
