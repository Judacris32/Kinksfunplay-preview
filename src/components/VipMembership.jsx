import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Crown, Sparkles, ArrowRight } from 'lucide-react'

const TIERS = [
  { label: '3-Day Pass', price: 250, period: '3 days', highlight: false },
  { label: '1-Month Membership', price: 850, period: '1 month', highlight: false },
  { label: '3-Month Membership', price: 1550, period: '3 months', highlight: true, badge: 'Most Popular' },
  { label: '6-Month Membership', price: 2000, period: '6 months', highlight: false },
  { label: '1-Year Membership', price: 2750, period: '12 months', highlight: false, badge: 'Best Value' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function VipMembership() {
  return (
    <section className="relative px-6 py-24 max-w-6xl mx-auto overflow-hidden" id="vip-membership">
      {/* Ambient gold glow, distinct from the red brand glow used elsewhere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.12) 0%, rgba(0,0,0,0) 60%)',
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-2xl mx-auto mb-14"
      >
        <div className="flex items-center justify-center gap-2 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-medium mb-4">
          <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
          Exclusive Access
          <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-text-primary flex items-center justify-center gap-3">
          <Crown className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
          VIP Membership
        </h2>
        <p className="mt-4 text-text-secondary">
          Unlock priority booking, member-only rates, and first access to new rooms and time
          slots — choose the membership window that fits you.
        </p>
      </motion.div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {TIERS.map((tier, i) => (
          <motion.div
            key={tier.label}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className={`group relative flex flex-col rounded-2xl p-6 transition-all duration-300 ${
              tier.highlight
                ? 'border-2 border-[#D4AF37] bg-gradient-to-b from-[#D4AF37]/10 to-background-card shadow-[0_0_0_1px_rgba(212,175,55,0.3),0_20px_50px_-12px_rgba(212,175,55,0.35)]'
                : 'border border-[#D4AF37]/25 bg-background-card hover:border-[#D4AF37]/50 hover:shadow-[0_0_0_1px_rgba(212,175,55,0.2),0_16px_40px_-12px_rgba(212,175,55,0.25)]'
            }`}
          >
            {tier.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#D4AF37] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black shadow-md">
                {tier.badge}
              </span>
            )}

            <Crown
              className={`w-5 h-5 mb-4 ${tier.highlight ? 'text-[#D4AF37]' : 'text-[#D4AF37]/60'}`}
              strokeWidth={1.5}
            />

            <h3 className="font-display text-xl text-text-primary leading-snug">{tier.label}</h3>
            <p className="text-xs text-text-secondary uppercase tracking-wide mt-1">
              {tier.period} access
            </p>

            <p className="mt-5 font-display text-3xl text-[#D4AF37]">
              ${tier.price.toLocaleString()}
            </p>

            <Link
              to="/contact"
              className={`group mt-6 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium tracking-wide transition-all duration-200 active:scale-95 ${
                tier.highlight
                  ? 'bg-[#D4AF37] text-black hover:bg-[#c4a02f]'
                  : 'border border-[#D4AF37]/40 text-text-primary hover:bg-[#D4AF37]/10'
              }`}
            >
              Join Now
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
