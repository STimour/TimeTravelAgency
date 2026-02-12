import React, { useState } from 'react'
import useInView from '../hooks/useInView'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.12 })

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'A valid email is required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  return (
    <section className="relative text-white">
      <div ref={ref} className={`relative container-max py-24 md:py-32 transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className={`max-w-3xl bg-slate-900/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl ${inView ? 'glass-animate' : ''}`}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Contact Us</h1>
          <p className="mt-6 text-lg text-slate-100/90">Have a question? Send us a message and our team will respond within 48 hours.</p>

        {submitted ? (
          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="font-bold text-xl text-white">Thanks — we received your message</div>
            <div className="text-slate-100/90 mt-2">We will respond to <strong>{form.email}</strong> shortly.</div>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={onSubmit} noValidate>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Name</label>
              <input value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} className="block w-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white placeholder-slate-400 focus:border-brand focus:ring-1 focus:ring-brand" aria-invalid={errors.name ? 'true' : 'false'} />
              {errors.name && <div className="text-xs text-red-400 mt-1">{errors.name}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <input value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} className="block w-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white placeholder-slate-400 focus:border-brand focus:ring-1 focus:ring-brand" aria-invalid={errors.email ? 'true' : 'false'} />
              {errors.email && <div className="text-xs text-red-400 mt-1">{errors.email}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Message</label>
              <textarea value={form.message} onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))} rows={4} className="block w-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white placeholder-slate-400 focus:border-brand focus:ring-1 focus:ring-brand" aria-invalid={errors.message ? 'true' : 'false'} />
              {errors.message && <div className="text-xs text-red-400 mt-1">{errors.message}</div>}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button type="submit" className="btn bg-brand text-white">Send message</button>
              <div className="text-sm text-slate-100/90">Or email us at <a href="mailto:info@timetravel.example" className="underline hover:text-brand">info@timetravel.example</a></div>
            </div>
          </form>
        )}
        </div>
      </div>
    </section>
  )
}
