import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    if (index === null) return
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown, index])

  if (index === null) return null
  const item = items[index]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] bg-background-deep/95 backdrop-blur-md flex items-center justify-center px-4 sm:px-10"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-5 right-5 sm:top-7 sm:right-7 flex items-center justify-center w-11 h-11 rounded-full border border-soft/15 text-text-primary hover:border-brand-red/50 hover:bg-soft/5 transition-colors duration-200 z-10"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {/* Prev */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous image"
          className="hidden sm:flex absolute left-4 sm:left-7 items-center justify-center w-11 h-11 rounded-full border border-soft/15 text-text-primary hover:border-brand-red/50 hover:bg-soft/5 transition-colors duration-200 z-10"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {/* Next */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next image"
          className="hidden sm:flex absolute right-4 sm:right-7 items-center justify-center w-11 h-11 rounded-full border border-soft/15 text-text-primary hover:border-brand-red/50 hover:bg-soft/5 transition-colors duration-200 z-10"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {/* Image + caption */}
        <motion.div
          key={item.file}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl w-full flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={`/src/assets/gallery/${item.file}`}
            alt={item.alt}
            className="max-h-[75vh] w-auto rounded-2xl border border-soft/10 shadow-aura-lg object-contain"
          />
          <div className="mt-5 text-center">
            <p className="font-display text-xl text-text-primary">{item.label}</p>
            <p className="text-text-secondary text-sm mt-1">
              {index + 1} / {items.length}
            </p>
          </div>
        </motion.div>

        {/* Mobile swipe-style nav (tap zones) */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous image"
          className="sm:hidden absolute inset-y-0 left-0 w-1/4"
        />
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next image"
          className="sm:hidden absolute inset-y-0 right-0 w-1/4"
        />
      </motion.div>
    </AnimatePresence>
  )
}
