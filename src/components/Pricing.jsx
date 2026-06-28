import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Moon, Sun, CalendarDays, ShieldOff, MapPinned } from 'lucide-react'

const RATES = [
  { label: '1 Hour', price: 150, icon: Clock, note: null },
  { label: '2 Hours', price: 195, icon: Clock, note: null },
  { label: '3 Hours', price: 250, icon: Clock, note: 'Split session available' },
  { label: '4 Hours', price: 350, icon: Clock, note: 'Split session available' },
  { label: 'Overnight', price: 500, icon: Moon, note: null },
  { label: 'Full Day Session', price: 700, icon: Sun, note: null },
  { label: 'Weekend Special', price: 1050, icon: CalendarDays, note: 'Friday – Sunday' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Pricing() {
  return (
    <section className="relative px-6 py-24 max-w-6xl mx-auto" id="rates">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <div className="flex items-center justify-center gap-2 text-brand-red text-xs uppercase tracking-[0.2em] font-medium mb-4">
          <span className="chain-divider w-10" />
          Rates &amp; Booking
          <span className="chain-divider w-10" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-text-primary">
          Transparent, By-The-Hour Pricing
        </h2>
        <p className="mt-4 text-text-secondary">
          No hidden fees. No surprises at the door. Choose the window of time that fits your scene.
        </p>
      </motion.div>

      {/* Pricing bricks grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {RATES.map((rate, i) => {
          const Icon = rate.icon
          return (
            <motion.div
              key={rate.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-soft/10 bg-background-card p-6 transition-all duration-300 hover:border-brand-red/30 hover:shadow-aura"
            >
              <Icon className="w-6 h-6 text-brand-red mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-2xl text-text-primary">{rate.label}</h3>
              <p className="mt-2 font-display text-3xl text-brand-red">
                ${rate.price}
              </p>
              {rate.note && (
                <p className="mt-2 text-xs text-text-secondary uppercase tracking-wide">
                  {rate.note}
                </p>
              )}
            </motion.div>
          )
        })}

        {/* CTA brick, same grid rhythm as the rate cards */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: RATES.length * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl border border-brand-red/30 bg-gradient-to-br from-brand-red/10 to-background-card p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-display text-2xl text-text-primary">Ready to Reserve?</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Tell us your preferred date, duration, and location.
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-3 text-white font-medium text-sm tracking-wide shadow-aura hover:shadow-aura-lg active:scale-95 transition-all duration-200"
          >
            Request Availability
          </Link>
        </motion.div>
      </div>

      {/* Booking policy banner — strict, non-negotiable terms */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mt-12 rounded-2xl border border-brand-red/20 bg-background-card/60 px-6 py-7 sm:px-10 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
      >
        <div className="flex items-center gap-3">
          <ShieldOff className="w-7 h-7 text-brand-red flex-shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-text-primary font-medium tracking-wide uppercase text-sm">
              No Cash Payment
            </p>
            <p className="text-text-secondary text-sm mt-0.5">
              All bookings are confirmed and settled via secure, discreet electronic payment only.
            </p>
          </div>
        </div>
        <div className="hidden sm:block w-px h-12 bg-soft/10" aria-hidden="true" />
        <div className="flex items-center gap-3">
          <MapPinned className="w-7 h-7 text-brand-red flex-shrink-0" strokeWidth={1.5} />
          <div>
            <p className="text-text-primary font-medium tracking-wide uppercase text-sm">
              Discreet Locations Nationwide
            </p>
            <p className="text-text-secondary text-sm mt-0.5">
              Studios available across the United States. Exact address shared only upon confirmed booking.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
