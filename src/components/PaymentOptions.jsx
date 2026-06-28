import { motion } from 'framer-motion'
import { Wallet, Smartphone, CircleDollarSign, Bitcoin, Coins, FileText, Banknote, Ban } from 'lucide-react'

const ACCEPTED = [
  { name: 'PayPal', icon: Wallet, color: '#0070BA' },
  { name: 'Venmo', icon: Smartphone, color: '#3D95CE' },
  { name: 'Cash App', icon: CircleDollarSign, color: '#00C244' },
  { name: 'Zelle', icon: Wallet, color: '#6D1ED4' },
  { name: 'Crypto', icon: Bitcoin, color: '#F7931A' },
]

const NOT_ACCEPTED = [
  { name: 'No Coins', icon: Coins },
  { name: 'No Personal Checks', icon: FileText },
  { name: 'No Cash', icon: Banknote },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function PaymentOptions() {
  return (
    <section className="relative px-6 py-20 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <div className="flex items-center justify-center gap-2 text-brand-red text-xs uppercase tracking-[0.2em] font-medium mb-4">
          <span className="chain-divider w-10" />
          Secure &amp; Discreet
          <span className="chain-divider w-10" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-text-primary">
          Accepted Payment Methods
        </h2>
        <p className="mt-3 text-text-secondary">
          All bookings are invoiced and paid electronically — no cash on arrival.
        </p>
      </motion.div>

      {/* Accepted methods */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-10">
        {ACCEPTED.map((method, i) => {
          const Icon = method.icon
          return (
            <motion.div
              key={method.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-soft/10 bg-background-card px-4 py-7 text-center hover:border-brand-red/30 hover:shadow-aura transition-all duration-300"
            >
              <Icon className="w-7 h-7" style={{ color: method.color }} strokeWidth={1.5} />
              <span className="text-sm font-medium text-text-primary">{method.name}</span>
            </motion.div>
          )
        })}
      </div>

      {/* Not accepted */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 rounded-2xl border border-soft/10 bg-background-card/60 px-6 py-6"
      >
        {NOT_ACCEPTED.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.name} className="flex items-center gap-2.5">
              <span className="relative flex items-center justify-center w-9 h-9 rounded-full border border-brand-red/30">
                <Icon className="w-4 h-4 text-text-secondary" strokeWidth={1.5} />
                <Ban className="absolute inset-0 w-full h-full text-brand-red/70" strokeWidth={1.2} />
              </span>
              <span className="text-sm text-text-secondary">{item.name}</span>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
