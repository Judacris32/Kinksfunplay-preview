import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Studio from './pages/Studio.jsx'
import Booking from './pages/Booking.jsx'
import Testimonials from './pages/Testimonials.jsx'
import FAQs from './pages/FAQs.jsx'
import Contact from './pages/Contact.jsx'
import CancellationPolicy from './pages/CancellationPolicy.jsx'

export default function App() {
  const location = useLocation()

  // Scroll to top on every route change.
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-background-deep">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
