import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, ShieldCheck, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import FAQ from '../components/FAQ.jsx'
import PaymentOptions from '../components/PaymentOptions.jsx'

const BOOKING_TYPES = [
  '1 Hour — $150',
  '2 Hours — $195',
  '3 Hours — $250',
  '4 Hours — $350',
  'Overnight — $500',
  'Full Day — $700',
  'Weekend Special — $1050',
  'VIP Membership 3 Days Access — $250',
  'VIP Membership 1 Month — $850',
  'VIP Membership 3 Months — $1,550',
  'VIP Membership 6 Months — $2,000',
  'VIP Membership 1 Year — $2,750',
  'Production & Commercial Use',
  
]

const REFERRAL_SOURCES = [
  'Returning Guest',
  'Attended an Event',
  'Instagram',
  'Internet Search',
  'Referral',
  'X (formerly Twitter)',
  'Other',
]

const DISCLOSURES = {
  'Professional (Screening Required)':
    'Screening Disclosure: professional bookings require explicit background vetting, verification of independent credentials, or professional references to protect our safety protocols.',
  'Equipment Rental ($1,000 Minimum)':
    'Rental Minimum: standalone equipment rental selections carry a strict minimum commitment of $1,000.',
  'Gift Certificate (1-Year Expiration)':
    'Gift Certificate Details: no date selection is needed today. This package carries a strict one-year expiration window from the date your payment clears.',
}

const initialForm = {
  name: '',
  email: '',
  phone: '',
  age: '',
  bookingType: '',
  date: '',
  duration: '',
  referral: '',
  referralOther: '',
  notes: '',
  ageVerified: false,
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const [submitError, setSubmitError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // SETUP REQUIRED: get a free access key at https://web3forms.com
  // (just enter your email, no full signup) and paste it below.
  // Submissions will then be emailed straight to that inbox automatically.
  const WEB3FORMS_ACCESS_KEY = 'c1dee377-48f6-4317-b010-4f4c55964a28'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(false)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Kinksfunplay Booking Inquiry — ${form.bookingType || 'General'}`,
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setSubmitError(true)
      }
    } catch (err) {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const isGiftCertificate = form.bookingType === 'Gift Certificate (1-Year Expiration)'
  const disclosure = DISCLOSURES[form.bookingType]

  return (
    <PageTransition>
      <section className="relative pt-36 pb-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-2 text-brand-red text-xs uppercase tracking-[0.2em] font-medium mb-5">
            <span className="chain-divider w-10" />
            Secure Reservations
            <span className="chain-divider w-10" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-text-primary">
            Reservation Inquiry
          </h1>
          <p className="mt-4 text-text-secondary">
            Complete the form below. Our team will review your submission and follow up with
            availability and invoicing details.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact details panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-2xl border border-soft/10 bg-background-card p-7 space-y-6"
          >
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-text-primary font-medium text-sm">Email</p>
                <a
                  href="mailto:bookings@kinksfunplay.com"
                  className="text-text-secondary text-sm hover:text-brand-red transition-colors"
                >
                  bookings@kinksfunplay.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-text-primary font-medium text-sm">Locations</p>
                <p className="text-text-secondary text-sm">
                  Discreet locations all over the United States. Exact address shared only upon
                  confirmed booking.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-text-primary font-medium text-sm">Payment Policy</p>
                <p className="text-text-secondary text-sm">
                  No cash payment. You'll be invoiced at time of booking, and your reservation is
                  confirmed upon payment.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="text-text-primary font-medium text-sm">Booking Notice</p>
                <p className="text-text-secondary text-sm">
                  We do our best to accommodate same-day requests, but recommend at least 24
                  hours' notice.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl border border-soft/10 bg-background-card p-7 sm:p-9"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <CheckCircle2 className="w-12 h-12 text-brand-red mb-4" strokeWidth={1.5} />
                <h2 className="font-display text-2xl text-text-primary">Inquiry Sent</h2>
                <p className="mt-2 text-text-secondary text-sm max-w-xs">
                  Thank you. We'll follow up discreetly by email to confirm availability and
                  details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field — Web3Forms silently discards submissions where this is filled in */}
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-soft/10 bg-background-deep px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:border-brand-red/50 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-soft/10 bg-background-deep px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:border-brand-red/50 outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-text-secondary mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-soft/10 bg-background-deep px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:border-brand-red/50 outline-none transition-colors"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label htmlFor="age" className="block text-sm text-text-secondary mb-1.5">
                      Your Age *
                    </label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      min="18"
                      required
                      value={form.age}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-soft/10 bg-background-deep px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 focus:border-brand-red/50 outline-none transition-colors"
                      placeholder="21"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="bookingType" className="block text-sm text-text-secondary mb-1.5">
                    Type of Booking *
                  </label>
                  <select
                    id="bookingType"
                    name="bookingType"
                    required
                    value={form.bookingType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-soft/10 bg-background-deep px-4 py-2.5 text-text-primary outline-none focus:border-brand-red/50 transition-colors"
                  >
                    <option value="">Select a booking type...</option>
                    {BOOKING_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {disclosure && (
                    <p className="mt-2 text-xs text-brand-red/90 leading-relaxed">{disclosure}</p>
                  )}
                </div>

                {!isGiftCertificate && (
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="date" className="block text-sm text-text-secondary mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-soft/10 bg-background-deep px-4 py-2.5 text-text-primary outline-none focus:border-brand-red/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="duration" className="block text-sm text-text-secondary mb-1.5">
                        Duration / Details
                      </label>
                      <input
                        id="duration"
                        name="duration"
                        type="text"
                        value={form.duration}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-soft/10 bg-background-deep px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 outline-none focus:border-brand-red/50 transition-colors"
                        placeholder="e.g. 3 hours, overnight"
                      />
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="referral" className="block text-sm text-text-secondary mb-1.5">
                      How did you hear about us? *
                    </label>
                    <select
                      id="referral"
                      name="referral"
                      required
                      value={form.referral}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-soft/10 bg-background-deep px-4 py-2.5 text-text-primary outline-none focus:border-brand-red/50 transition-colors"
                    >
                      <option value="">Select one...</option>
                      {REFERRAL_SOURCES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  {form.referral === 'Other' && (
                    <div>
                      <label htmlFor="referralOther" className="block text-sm text-text-secondary mb-1.5">
                        Please specify *
                      </label>
                      <input
                        id="referralOther"
                        name="referralOther"
                        type="text"
                        required
                        value={form.referralOther}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-soft/10 bg-background-deep px-4 py-2.5 text-text-primary outline-none focus:border-brand-red/50 transition-colors"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm text-text-secondary mb-1.5">
                    Notes &amp; Custom Requests
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={form.notes}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-soft/10 bg-background-deep px-4 py-2.5 text-text-primary placeholder:text-text-secondary/50 outline-none focus:border-brand-red/50 transition-colors resize-none"
                    placeholder="Anything else we should know about your session"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-text-secondary cursor-pointer">
                  <input
                    type="checkbox"
                    name="ageVerified"
                    required
                    checked={form.ageVerified}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 rounded border-soft/20 accent-brand-red"
                  />
                  <span>
                    I confirm that I am 18 years or older, and I take full responsibility for any
                    and all guests accompanying me, who are also 18 or older. *
                  </span>
                </label>

                {submitError && (
                  <p className="text-sm text-brand-red">
                    Something went wrong sending your inquiry. Please try again, or email us
                    directly at bookings@kinksfunplay.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-white font-medium tracking-wide shadow-aura hover:shadow-aura-lg active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
                >
                  {submitting ? 'Sending...' : 'Submit Inquiry'}
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <PaymentOptions />

      <FAQ />
    </PageTransition>
  )
}
