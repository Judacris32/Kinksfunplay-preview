import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import Gallery from '../components/Gallery.jsx'
import Amenities from '../components/Amenities.jsx'

export default function Studio() {
  return (
    <PageTransition>
      {/* Intro */}
      <section className="relative pt-36 pb-16 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-2 text-brand-red text-xs uppercase tracking-[0.2em] font-medium mb-5">
            <span className="chain-divider w-10" />
            The Studio
            <span className="chain-divider w-10" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight">
            A Space Built on Trust, <span className="text-brand-red italic">Down to Every Detail</span>
          </h1>
          <p className="mt-6 text-text-secondary text-lg max-w-2xl mx-auto">
            Kinksfunplay studios are designed for guests who take their scenes seriously. Every
            chamber is fully equipped, meticulously maintained, and soundproofed for total privacy
            — so the only thing you need to focus on is the experience itself.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/booking"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-white font-medium tracking-wide shadow-aura hover:shadow-aura-lg active:scale-95 transition-all duration-200"
            >
              View Rates &amp; Reserve
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </div>
        </motion.div>
      </section>

      <Gallery />
      <Amenities />
    </PageTransition>
  )
}
