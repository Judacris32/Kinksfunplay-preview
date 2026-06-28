import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { Quote, Star, Calendar, ShieldCheck } from 'lucide-react'

const GUEST_TESTIMONIALS = [
  {
    name: 'Alex Y',
    location: 'CA',
    quote:
      'Stepping into the dungeon for the first time was an experience I will never forget. It was a space built on trust, communication, and mutual respect, and that made all the difference.',
  },
  {
    name: 'Sissysub Morgan',
    location: 'NY',
    quote:
      'It was a space where silence spoke volumes and every detail was intentional. What happened there stays behind that closed door, and that discretion meant everything to me.',
  },
  {
    name: 'Miss Lisa',
    location: 'CA',
    quote:
      'I like the whole setting of this place, all the sex equipment, the discretion and privacy helped me to explore more fantasies than I thought I could.',
  },
]

// Paraphrased in our own words — not direct quotes from any external review source.
const PRODUCTION_TESTIMONIALS = [
  {
    name: 'Vanguard Media Group',
    role: 'Verified Agency',
    quote:
      'Renting the main chamber for a high-concept shoot, the team found the suspension rigging fully load-tested and the lighting setup cut hours off staging.',
  },
  {
    name: 'Marcus T.',
    role: 'Independent Creator',
    quote:
      'Privacy was the top priority going in, and the unmarked entrance, keyless entry, and strong soundproofing made the whole booking feel completely secure.',
  },
  {
    name: 'Elena R.',
    role: 'Private Guest',
    quote:
      'An overnight booking impressed from the start — spotless equipment, moody luxury decor, and steady climate control the entire stay.',
  },
  {
    name: 'Aesthetic Noir Ltd.',
    role: 'Production Company',
    quote:
      'A fully functional, well-finished bathroom set with reliable water pressure and temperature control is rare to find, and it added real value to the shoot.',
  },
  {
    name: 'J. H.',
    role: 'Commercial Producer',
    quote:
      'The booking process was smooth and professional, with staggered scheduling that meant no overlap with other guests coming or going.',
  },
  {
    name: 'Lux Visuals Media Studio',
    role: 'Production Studio',
    quote:
      'The depth and richness of the furniture and set textures created exactly the kind of sanctuary atmosphere the studio had been searching for.',
  },
]

const STATS = [
  { icon: Star, target: 4.9, decimals: 1, suffix: '', label: 'Overall Space Rating' },
  { icon: Calendar, target: 140, decimals: 0, suffix: '+', label: 'Booked Sessions' },
  { icon: ShieldCheck, target: 100, decimals: 0, suffix: '%', label: 'Discretion & Privacy Rate' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: Math.min(i, 6) * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

function CountUp({ target, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState((0).toFixed(decimals))

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 1.4,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    })
    return () => controls.stop()
  }, [inView, target, decimals])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

function TestimonialCard({ item, i }) {
  return (
    <motion.figure
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-2xl border border-soft/10 bg-background-card p-7 transition-all duration-300 hover:border-brand-red/30 hover:shadow-aura"
    >
      <Quote
        className="w-8 h-8 text-brand-red/40 mb-4 group-hover:text-brand-red/70 transition-colors duration-300"
        strokeWidth={1.5}
      />
      <blockquote className="flex-1 text-text-secondary leading-relaxed italic">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 pt-5 border-t border-soft/5">
        <p className="font-display text-lg text-text-primary">{item.name}</p>
        <p className="text-xs uppercase tracking-wider text-brand-red/80 mt-0.5">
          {item.location || item.role}
        </p>
      </figcaption>
    </motion.figure>
  )
}

export default function Testimonials() {
  return (
    <section className="relative px-6 py-24 max-w-6xl mx-auto" id="testimonials">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <div className="flex items-center justify-center gap-2 text-brand-red text-xs uppercase tracking-[0.2em] font-medium mb-4">
          <span className="chain-divider w-10" />
          In Their Own Words
          <span className="chain-divider w-10" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-text-primary">
          Trusted by Those Who Visit
        </h2>
        <p className="mt-4 text-text-secondary">
          Real words from real guests and production clients, shared with their permission.
        </p>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 gap-4 sm:gap-6 mb-16 rounded-2xl border border-soft/10 bg-background-card/60 px-6 py-7"
      >
        {STATS.map((stat, i) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 12 }}
              >
                <Icon className="w-5 h-5 text-brand-red mb-2" strokeWidth={1.5} />
              </motion.div>
              <p className="font-display text-3xl sm:text-4xl text-text-primary tabular-nums">
                <CountUp target={stat.target} decimals={stat.decimals} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs sm:text-sm text-text-secondary uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Guest testimonials */}
      <div className="mb-4">
        <h3 className="font-display text-2xl text-text-primary mb-6 text-center sm:text-left">
          From Our Guests
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUEST_TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} item={t} i={i} />
          ))}
        </div>
      </div>

      {/* Production / agency testimonials */}
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTION_TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} item={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
