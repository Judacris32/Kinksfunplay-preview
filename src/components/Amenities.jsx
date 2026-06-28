import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const AMENITIES = [
  "St. Andrew's cross & spanking bench",
  'Suspension rigging points (rated & inspected)',
  'Medical play exam station',
  'Confinement cage',
  'Full wardrobe & costume closet',
  'Sound system with private playlist control',
  'Climate-controlled, soundproofed walls',
  'Clean linens & sanitized equipment for every booking',
  'Private parking, discreet entrance',
  'Shower & changing area',
]

export default function Amenities() {
  return (
    <section className="relative px-6 py-20 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-soft/10 bg-background-card p-8 sm:p-12"
      >
        <h2 className="font-display text-3xl sm:text-4xl text-text-primary mb-2">
          What's Included
        </h2>
        <p className="text-text-secondary mb-8">
          Every booking includes full access to the equipment and amenities below — no add-on fees.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {AMENITIES.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 text-text-secondary"
            >
              <Check className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
