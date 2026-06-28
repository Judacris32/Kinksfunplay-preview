const PHRASE = 'Play Safe, Play Wild'
const REPEAT = 10

export default function Marquee() {
  const items = Array(REPEAT).fill(PHRASE)

  return (
    <div className="relative overflow-hidden bg-brand-navy py-4">
      <div className="marquee-track">
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-4 px-6 text-base sm:text-lg font-display italic tracking-wide text-white whitespace-nowrap"
          >
            {text}
            <span className="text-brand-red text-xl leading-none">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
