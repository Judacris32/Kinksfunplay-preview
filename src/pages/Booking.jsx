import PageTransition from '../components/PageTransition.jsx'
import Pricing from '../components/Pricing.jsx'
import VipMembership from '../components/VipMembership.jsx'
import FAQ from '../components/FAQ.jsx'

export default function Booking() {
  return (
    <PageTransition>
      <div className="pt-16">
        <Pricing />
      </div>
      <VipMembership />
      <FAQ />
    </PageTransition>
  )
}
