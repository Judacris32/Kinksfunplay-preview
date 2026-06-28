import PageTransition from '../components/PageTransition.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function TestimonialsPage() {
  return (
    <PageTransition>
      <div className="pt-16">
        <Testimonials />
      </div>
    </PageTransition>
  )
}
