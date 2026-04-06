import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useScrollReveal, fadeUpVariants, staggerContainer } from '../hooks/useScrollReveal'

const WEB3FORMS_KEY = '9d40a6f7-55b3-408d-bdd8-7dbd83e7ab2b'

const contactDetails = [
  { icon: Phone, text: '+91 79756 07024' },
  { icon: Mail, text: 'loginrealty.info@gmail.com' },
  { icon: MapPin, text: 'Yelhanka,Bengaluru, Karnataka, India' },
]

const configurations = ['2 BHK', '3 BHK', '4 BHK', 'Not Decided Yet']

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', config: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const { ref: leftRef, controls: leftControls } = useScrollReveal()
  const { ref: rightRef, controls: rightControls } = useScrollReveal()

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || !/^\+?[\d\s-]{8,}$/.test(form.phone)) e.phone = 'Valid phone required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    return e
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setStatus('loading')
    try {
      const data = new FormData()
      data.append('access_key', WEB3FORMS_KEY)
      data.append('subject', 'New Enquiry – Godrej Aveline')
      data.append('name', form.name)
      data.append('phone', form.phone)
      data.append('email', form.email)
      data.append('configuration', form.config || 'Not specified')
      data.append('message', form.message || 'No message provided')

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', config: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <motion.div
            ref={leftRef}
            variants={staggerContainer}
            initial="hidden"
            animate={leftControls}
          >
            <motion.span variants={fadeUpVariants} className="section-tag">
              Get in Touch
            </motion.span>
            <motion.h2 variants={fadeUpVariants} className="section-title mt-2">
              Begin Your
              <br />
              <em>Aveline Journey</em>
            </motion.h2>
            <motion.div variants={fadeUpVariants} className="gold-divider" />
            <motion.p
              variants={fadeUpVariants}
              className="text-slate-2 leading-relaxed text-[0.93rem] font-light mb-8"
            >
              Schedule a private site visit or request a detailed brochure. Our relationship
              managers will guide you through every step of your Aveline experience - from
              selection to possession.
            </motion.p>

            {contactDetails.map((d) => (
              <motion.div
                key={d.text}
                variants={fadeUpVariants}
                className="flex items-center gap-3 mb-4"
              >
                <d.icon size={15} className="text-gold flex-shrink-0" strokeWidth={2} />
                <span className="text-slate-2 text-sm">{d.text}</span>
              </motion.div>
            ))}

            {/* Trust badges */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-border"
            >
              {[
                { val: '125+', label: 'Years Legacy' },
                { val: '10M+', label: 'Sq.ft Delivered' },
                { val: '50+', label: 'Cities' },
              ].map((b) => (
                <div key={b.label} className="text-center border border-border py-4">
                  <div className="font-serif text-2xl text-gold font-medium">{b.val}</div>
                  <div className="text-[10px] tracking-widest text-muted uppercase mt-1">{b.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            ref={rightRef}
            variants={fadeUpVariants}
            initial="hidden"
            animate={rightControls}
          >
            <div className="bg-white p-8 md:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.07)]">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-10 gap-4"
                >
                  <CheckCircle size={48} className="text-gold" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-slate-luxury">Thank You!</h3>
                  <p className="text-muted text-sm font-light max-w-xs leading-relaxed">
                    Our relationship manager will reach out to you within 24 hours to schedule
                    your private site visit.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-dark transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-serif text-2xl text-slate-luxury mb-6 font-light">
                    Request a <em className="not-italic text-gold">Callback</em>
                  </h3>

                  {/* Name + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[10px] tracking-[0.18em] uppercase text-muted mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`w-full bg-cream-2 border px-4 py-3 text-sm text-slate-luxury outline-none transition-colors font-light placeholder:text-muted/60 ${
                          errors.name ? 'border-red-400' : 'border-border focus:border-gold'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.18em] uppercase text-muted mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={`w-full bg-cream-2 border px-4 py-3 text-sm text-slate-luxury outline-none transition-colors font-light placeholder:text-muted/60 ${
                          errors.phone ? 'border-red-400' : 'border-border focus:border-gold'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <label className="block text-[10px] tracking-[0.18em] uppercase text-muted mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full bg-cream-2 border px-4 py-3 text-sm text-slate-luxury outline-none transition-colors font-light placeholder:text-muted/60 ${
                        errors.email ? 'border-red-400' : 'border-border focus:border-gold'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Configuration */}
                  <div className="mb-4">
                    <label className="block text-[10px] tracking-[0.18em] uppercase text-muted mb-2">
                      Configuration Interested In
                    </label>
                    <select
                      name="config"
                      value={form.config}
                      onChange={handleChange}
                      className="w-full bg-cream-2 border border-border px-4 py-3 text-sm text-slate-luxury outline-none focus:border-gold transition-colors font-light"
                    >
                      <option value="">Select BHK type</option>
                      {configurations.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-[10px] tracking-[0.18em] uppercase text-muted mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any specific requirements or questions..."
                      className="w-full bg-cream-2 border border-border px-4 py-3 text-sm text-slate-luxury outline-none focus:border-gold transition-colors resize-none font-light placeholder:text-muted/60"
                    />
                  </div>

                  {/* Error message */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm mb-4 bg-red-50 border border-red-200 px-4 py-3">
                      <AlertCircle size={16} />
                      <span>Something went wrong. Please try again or call us directly.</span>
                    </div>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gold text-white py-4 text-xs font-medium tracking-widest uppercase flex items-center justify-center gap-2 transition-colors hover:bg-gold-dark disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
                    whileTap={{ scale: status === 'loading' ? 1 : 0.99 }}
                  >
                    {status === 'loading' ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Request a Callback
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-[11px] text-muted mt-4 font-light">
                    By submitting, you agree to be contacted by our team.
                    <br />We respect your privacy and will never share your details.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
