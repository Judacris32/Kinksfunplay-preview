import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import Pricing from '../components/Pricing.jsx'
import Testimonials from '../components/Testimonials.jsx'
import PageTransition from '../components/PageTransition.jsx'

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Marquee />
      <Pricing />
      <Testimonials />
    </PageTransition>
  )
}
