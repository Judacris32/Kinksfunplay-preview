import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import Lightbox from './Lightbox.jsx'

const CATEGORIES = ['All', 'Main Chamber', 'Equipment', 'Wardrobe & Storage', 'Kitchenette', 'Bathroom', 'Lounge']

const ALL_PHOTOS = [
  { file: 'ss2.jpg', label: 'Main Chamber Overview', alt: 'Wide view of the main chamber with bed and equipment wall', category: 'Main Chamber', span: 'sm:col-span-2 sm:row-span-2' },
  { file: 'g7.jpg', label: 'Chamber Wide View', alt: 'Canopy bed, equipment wall, and seating', category: 'Main Chamber', span: '' },
  { file: 'g1.jpg', label: 'Canopy Bed & Equipment Wall', alt: 'Canopy bed beside the impact bench and cage', category: 'Main Chamber', span: '' },
  { file: 'g8.jpg', label: 'Equipment Wall & Cage', alt: 'Equipment wall with cage and storage cabinet', category: 'Main Chamber', span: '' },
  { file: 'g9.jpg', label: 'Equipment to Kitchen', alt: 'View from the equipment wall toward the kitchenette', category: 'Main Chamber', span: '' },
  { file: 'ss1.jpg', label: 'Suspension & Cage Suite', alt: 'Suspension cross, cage, and restraint triangle', category: 'Equipment', span: 'sm:col-span-2' },
  { file: 'g3.jpg', label: 'Cage & Suspension Frame', alt: 'Confinement cage beside a suspension frame', category: 'Equipment', span: '' },
  { file: 'g6.jpg', label: "St. Andrew's Cross", alt: "St. Andrew's cross style suspension frame", category: 'Equipment', span: '' },
  { file: 'g10.jpg', label: 'Cage & Cross by Entrance', alt: 'Cage and cross near the studio entrance', category: 'Equipment', span: '' },
  { file: 'g11.jpg', label: 'Equipment Wall Detail', alt: 'Close-up of floggers, paddles, and restraints', category: 'Equipment', span: '' },
  { file: 'g12.jpg', label: 'Masks & Paddles Closet', alt: 'Closet with masks, hoods, and paddles', category: 'Wardrobe & Storage', span: '' },
  { file: 'g13.jpg', label: 'Collar & Cuff Closet', alt: 'Closet with leather collars and cuffs', category: 'Wardrobe & Storage', span: '' },
  { file: 'g14.jpg', label: 'Flogger & Cane Closet', alt: 'Closet with floggers and canes organized', category: 'Wardrobe & Storage', span: '' },
  { file: 'g15.jpg', label: 'Pink Restraint Set', alt: 'Closet with pink restraints and cuffs', category: 'Wardrobe & Storage', span: '' },
  { file: 'g16.jpg', label: 'Costume & Footwear Closet', alt: 'Closet with shoes, lingerie, and costume pieces', category: 'Wardrobe & Storage', span: '' },
  { file: 'g17.jpg', label: 'Toy Storage Shelf', alt: 'Storage shelf with toys and accessories', category: 'Wardrobe & Storage', span: '' },
  { file: 'ss3.jpg', label: 'Open Layout Overview', alt: 'Wide view of the kitchenette, cage, and bench', category: 'Kitchenette', span: 'sm:col-span-2' },
  { file: 'g20.jpg', label: 'Full Kitchenette', alt: 'Wide view of the kitchenette', category: 'Kitchenette', span: '' },
  { file: 'g21.jpg', label: 'Kitchenette Counter', alt: 'Kitchenette counter with vanity mirror', category: 'Kitchenette', span: '' },
  { file: 'g2.jpg', label: 'Kitchenette View', alt: 'Kitchenette with impact bench in foreground', category: 'Kitchenette', span: '' },
  { file: 'g5.jpg', label: 'Vanity & Kitchen Counter', alt: 'Vanity mirror beside the kitchen counter', category: 'Kitchenette', span: '' },
  { file: 'g18.jpg', label: 'Private Bathroom', alt: 'Private bathroom with glass shower', category: 'Bathroom', span: '' },
  { file: 'g19.jpg', label: 'Bathroom Vanity', alt: 'Bathroom vanity and shower', category: 'Bathroom', span: '' },
  { file: 'g4.jpg', label: 'Lounge Seating', alt: 'Leather sofa and display cabinet', category: 'Lounge', span: '' },
  { file: 'g22.jpg', label: 'Lounge Near Exit', alt: 'Lounge seating near the studio exit', category: 'Lounge', span: '' },
  { file: 'g23.jpg', label: 'Lounge & Hallway', alt: 'Lounge seating with hallway to the bathroom', category: 'Lounge', span: '' },
]

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: Math.min(i, 12) * 0.04, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? ALL_PHOTOS
        : ALL_PHOTOS.filter((p) => p.category === activeCategory),
    [activeCategory]
  )

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const showPrev = () => setLightboxIndex((i) => (i === 0 ? filtered.length - 1 : i - 1))
  const showNext = () => setLightboxIndex((i) => (i === filtered.length - 1 ? 0 : i + 1))

  return (
    <section className="relative px-6 py-24 max-w-6xl mx-auto" id="gallery">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <div className="flex items-center justify-center gap-2 text-brand-red text-xs uppercase tracking-[0.2em] font-medium mb-4">
          <span className="chain-divider w-10" />
          Inside the Studio
          <span className="chain-divider w-10" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-text-primary">
          Every Detail, Intentional
        </h2>
        <p className="mt-4 text-text-secondary">
          A full look at the space and equipment available for your session.
        </p>
      </motion.div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm tracking-wide transition-all duration-200 border ${
              activeCategory === cat
                ? 'bg-brand-red text-white border-brand-red shadow-aura'
                : 'border-soft/10 text-text-secondary hover:text-text-primary hover:border-brand-red/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[160px] sm:auto-rows-[200px]">
        {filtered.map((item, i) => (
          <motion.button
            key={item.file}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={itemVariants}
            onClick={() => openLightbox(i)}
            className={`group relative rounded-2xl overflow-hidden border border-soft/10 hover:border-brand-red/30 transition-colors duration-300 text-left ${item.span}`}
          >
            {/* Real studio photo, located at src/assets/gallery/{item.file} */}
            <img
              src={`/src/assets/gallery/${item.file}`}
              alt={item.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-deep/85 via-background-deep/0 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-3 left-3 right-10 text-text-primary text-xs sm:text-sm font-medium leading-tight">
              {item.label}
            </span>
            <span className="absolute top-2.5 right-2.5 flex items-center justify-center w-7 h-7 rounded-full bg-background-deep/70 text-text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Expand className="w-3.5 h-3.5" strokeWidth={1.5} />
            </span>
          </motion.button>
        ))}
      </div>

      <Lightbox
        items={filtered}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  )
}
