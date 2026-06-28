import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'

// Paraphrased in our own words from the original site's FAQ content —
// not quoted directly.
const FAQ_GROUPS = [
  {
    category: 'Privacy & Discretion',
    items: [
      {
        q: 'How is my privacy protected when arriving and leaving?',
        a: 'The studio entrance is unmarked and uses private, coded entry. Bookings are spaced out with generous gaps between sessions so you never cross paths with another guest coming or going.',
      },
      {
        q: 'Are there any cameras inside the rooms?',
        a: 'No. There are no cameras or recording devices anywhere inside the chambers or lounges — your scene stays completely private. Only the exterior perimeter uses basic access logging for building security.',
      },
    ],
  },
  {
    category: 'Rentals & Logistics',
    items: [
      {
        q: "What's included with an overnight booking?",
        a: 'Overnight reservations include full, exclusive access to your chosen room, fresh premium linens, adjustable mood lighting, a functional private bathroom, and complimentary beverages.',
      },
      {
        q: 'Can I bring my own equipment or recording gear?',
        a: 'Yes. Production crews are welcome to bring their own gear — rooms are wired with heavy-duty electrical capacity and load-tested suspension anchor points to support specialized setups.',
      },
    ],
  },
  {
    category: 'Cleanliness & Sanitization',
    items: [
      {
        q: 'How is the equipment cleaned between bookings?',
        a: 'Every booking is followed by a full deep-clean — surfaces, furniture, rigging hardware, and bathroom fixtures are all sanitized, and linens are replaced with fresh sets before the next guest arrives.',
      },
    ],
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-soft/10 last:border-none">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-text-primary font-medium">{item.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-red flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          strokeWidth={1.5}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-text-secondary text-sm leading-relaxed pb-5 pr-8">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openKey, setOpenKey] = useState('Privacy & Discretion-0')

  return (
    <section className="relative px-6 py-24 max-w-3xl mx-auto" id="faqs">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="flex items-center justify-center gap-2 text-brand-red text-xs uppercase tracking-[0.2em] font-medium mb-4">
          <span className="chain-divider w-10" />
          Clear Frameworks
          <span className="chain-divider w-10" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-text-primary">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-text-secondary">
          Transparent guidelines around privacy, booking, and cleanliness.
        </p>
      </motion.div>

      {FAQ_GROUPS.map((group, gi) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: gi * 0.1 }}
          className="mb-10"
        >
          <h3 className="text-brand-red text-xs uppercase tracking-[0.15em] font-medium mb-3">
            {group.category}
          </h3>
          <div className="rounded-2xl border border-soft/10 bg-background-card px-6">
            {group.items.map((item, ii) => {
              const key = `${group.category}-${ii}`
              return (
                <FAQItem
                  key={key}
                  item={item}
                  isOpen={openKey === key}
                  onToggle={() => setOpenKey(openKey === key ? null : key)}
                />
              )
            })}
          </div>
        </motion.div>
      ))}
    </section>
  )
}
