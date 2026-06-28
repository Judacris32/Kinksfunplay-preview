import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, MapPin, ShieldCheck } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const FOOTER_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'The Studio', to: '/studio' },
  { label: 'Rates & Booking', to: '/booking' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative border-t border-soft/10 bg-background-card/60 mt-12"
    >
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand block */}
        <div className="sm:col-span-2 lg:col-span-2">
          <Link to="/" className="flex items-center gap-3 group w-fit">
            <img src={logoIcon} alt="Kinksfunplay" className="h-9 w-auto" />
            <span className="hidden sm:block w-px h-7 bg-brand-navy/70" aria-hidden="true" />
            <span className="font-display text-2xl tracking-wide text-text-primary">
              Kinksfunplay
            </span>
          </Link>
          <p className="mt-4 text-text-secondary text-sm max-w-sm leading-relaxed">
            Discreet, premium alternative lifestyle studio rentals available across the United
            States. Built on trust, communication, and mutual respect.
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-wider text-brand-red/80">
            <ShieldCheck className="w-4 h-4" strokeWidth={1.5} />
            Unleash Your Inner Self
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-lg text-text-primary mb-4">Navigate</h3>
          <ul className="space-y-2.5">
            {FOOTER_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-text-secondary text-sm hover:text-brand-red transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Policy / contact */}
        <div>
          <h3 className="font-display text-lg text-text-primary mb-4">Booking Policy</h3>
          <ul className="space-y-3 text-sm text-text-secondary">
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              No cash payment accepted
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              Discreet locations nationwide
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <a href="mailto:bookings@kinksfunplay.com" className="hover:text-brand-red transition-colors">
                bookings@kinksfunplay.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="chain-divider mx-6" />

      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-secondary">
        <p>&copy; {new Date().getFullYear()} Kinksfunplay. All rights reserved.</p>
        <Link to="/cancellation-policy" className="hover:text-brand-red transition-colors">
          Cancellation &amp; Refund Policy
        </Link>
        <p>21+ only. Discretion and consent guaranteed.</p>
      </div>
    </motion.footer>
  )
}
