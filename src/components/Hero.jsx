import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldCheck, MapPin, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden">
      {/* Ambient crimson glow, matches background-image token in tailwind config */}
      <div className="absolute inset-0 bg-radial-crimson pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Copy block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 text-brand-red text-xs uppercase tracking-[0.2em] font-medium mb-5">
            <span className="chain-divider w-10" />
            Unleash Your Inner Self
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-text-primary">
            Discreet, Premium
            <br />
            <span className="text-brand-red italic">Studio Rentals</span>
          </h1>

          <p className="mt-6 text-text-secondary text-lg max-w-md font-body">
            Fully equipped alternative lifestyle dungeons available across the United States.
            Built on trust, privacy, and uncompromising attention to detail.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-white font-medium tracking-wide shadow-aura hover:shadow-aura-lg active:scale-95 transition-all duration-200"
            >
              View Rates &amp; Reserve
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
            <Link
              to="/studio"
              className="inline-flex items-center gap-2 rounded-full border border-soft/15 px-7 py-3.5 text-text-primary font-medium tracking-wide hover:border-brand-red/40 hover:bg-soft/5 active:scale-95 transition-all duration-200"
            >
              Explore the Studio
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-text-secondary text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-red" strokeWidth={1.5} />
              Discretion guaranteed
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-red" strokeWidth={1.5} />
              Locations nationwide
            </span>
          </div>
        </motion.div>

        {/* Hero image block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-soft/10 shadow-aura-lg group"
        >
          {/* Real studio photo — main chamber wide shot, located at src/assets/gallery/ss2.jpg */}
          <img
            src="/src/assets/gallery/ss2.jpg"
            alt="Kinksfunplay studio main chamber"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-deep/80 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
