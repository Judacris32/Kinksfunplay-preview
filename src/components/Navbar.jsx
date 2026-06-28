import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'The Studio', to: '/studio' },
  { label: 'Booking', to: '/booking' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Cancellation Policy', to: '/cancellation-policy' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  )

  // Initialize theme from saved preference (defaults to dark — the site's configured look).
  useEffect(() => {
    const saved = localStorage.getItem('kinksfunplay-theme')
    const dark = saved ? saved === 'dark' : true
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('kinksfunplay-theme', next ? 'dark' : 'light')
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-deep/90 backdrop-blur-md border-b border-soft/10 shadow-aura'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-6 xl:px-10 py-4">
        {/* Logo lockup */}
        <Link
          to="/"
          className="flex items-center gap-3 group flex-shrink-0"
          onClick={() => setOpen(false)}
        >
          <img
            src={logoIcon}
            alt="Kinksfunplay"
            className="h-9 w-auto drop-shadow-[0_0_8px_rgba(229,62,62,0.25)] transition-transform duration-200 group-hover:scale-105"
          />
          <span className="hidden sm:block w-px h-7 bg-brand-navy/70" aria-hidden="true" />
          <span className="font-display text-2xl tracking-wide text-text-primary group-hover:text-brand-red transition-colors duration-200">
            Kinksfunplay
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden xl:flex items-center gap-6 font-body text-sm uppercase tracking-wider whitespace-nowrap">
          {NAV_LINKS.map((link) => (
            <li key={link.to} className="relative">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative py-2 transition-colors duration-200 ${
                    isActive ? 'text-brand-red' : 'text-text-secondary hover:text-text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-px bg-brand-red transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA + theme toggle + mobile menu toggle */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-soft/10 text-text-primary hover:border-brand-red/40 hover:bg-soft/5 transition-colors duration-200"
          >
            {isDark ? <Sun className="w-5 h-5" strokeWidth={1.5} /> : <Moon className="w-5 h-5" strokeWidth={1.5} />}
          </button>

          <Link
            to="/booking"
            className="hidden xl:inline-flex items-center rounded-full bg-brand-red px-6 py-2.5 text-sm font-medium tracking-wide text-white shadow-aura hover:bg-brand-red/90 hover:shadow-aura-lg active:scale-95 transition-all duration-200"
          >
            Reserve Now
          </Link>

          <button
            className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full border border-soft/10 text-text-primary hover:border-brand-red/40 hover:bg-soft/5 transition-colors duration-200"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dim backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="xl:hidden fixed inset-0 top-[72px] bg-background-deep/60 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Dropdown menu */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="xl:hidden absolute top-full left-0 right-0 z-50 border-t border-soft/10 bg-background-card/95 backdrop-blur-md shadow-aura-lg"
            >
              <ul className="flex flex-col px-6 py-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.05 }}
                    className="border-b border-soft/5 last:border-none"
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block py-4 text-base tracking-wide transition-colors duration-200 ${
                          isActive ? 'text-brand-red font-medium' : 'text-text-secondary hover:text-text-primary'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: NAV_LINKS.length * 0.05 }}
                  className="pt-5"
                >
                  <Link
                    to="/booking"
                    onClick={() => setOpen(false)}
                    className="block text-center rounded-full bg-brand-red px-6 py-3.5 text-white font-medium tracking-wide shadow-aura active:scale-95 transition-all duration-200"
                  >
                    Reserve Now
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
