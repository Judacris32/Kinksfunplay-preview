import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'

export default function CancellationPolicy() {
  return (
    <PageTransition>
      <section className="relative pt-36 pb-24 px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 text-brand-red text-xs uppercase tracking-[0.2em] font-medium mb-4">
            <span className="chain-divider w-10" />
            Booking Terms
            <span className="chain-divider w-10" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-text-primary">
            Cancellation &amp; Refund Policy
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-soft/10 bg-background-card p-8 sm:p-10 mb-8"
        >
          <h2 className="font-display text-2xl text-text-primary mb-4">Cancellation</h2>
          <ul className="space-y-3 text-text-secondary leading-relaxed">
            <li>
              A full refund is available if a booking is cancelled at least 10–24 hours before
              the scheduled session.
            </li>
            <li>
              Cancellations made after that window — closer to the session start time — are not
              eligible for a refund.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-soft/10 bg-background-card p-8 sm:p-10"
        >
          <h2 className="font-display text-2xl text-text-primary mb-4">Refund Policy &amp; Terms</h2>
          <ul className="space-y-3 text-text-secondary leading-relaxed">
            <li>
              All bookings are subject to our standard terms and conditions. Refunds are issued
              in line with the cancellation window above, provided notice is given within the
              stated time frame.
            </li>
            <li>
              Rescheduling may carry an additional charge in some cases, though we do our best
              to accommodate changes wherever availability allows.
            </li>
          </ul>
        </motion.div>
      </section>
    </PageTransition>
  )
}
