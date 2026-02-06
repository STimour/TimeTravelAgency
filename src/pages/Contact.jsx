import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

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
    <section className="container-max py-16">
      <div className="max-w-2xl bg-white dark:bg-slate-900 rounded-xl p-6 shadow">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Have a question? Send us a message and our team will respond within 48 hours.</p>

        {submitted ? (
          <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800 rounded">
            <div className="font-semibold">Thanks — we received your message</div>
            <div className="text-sm text-slate-500 mt-2">We will respond to <strong>{form.email}</strong> shortly.</div>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} className="mt-1 block w-full rounded-md bg-slate-50 dark:bg-slate-800 px-3 py-2" aria-invalid={errors.name ? 'true' : 'false'} />
              {errors.name && <div className="text-xs text-red-400 mt-1">{errors.name}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} className="mt-1 block w-full rounded-md bg-slate-50 dark:bg-slate-800 px-3 py-2" aria-invalid={errors.email ? 'true' : 'false'} />
              {errors.email && <div className="text-xs text-red-400 mt-1">{errors.email}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea value={form.message} onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))} rows={4} className="mt-1 block w-full rounded-md bg-slate-50 dark:bg-slate-800 px-3 py-2" aria-invalid={errors.message ? 'true' : 'false'} />
              {errors.message && <div className="text-xs text-red-400 mt-1">{errors.message}</div>}
            </div>

            <div className="flex items-center gap-3">
              <button type="submit" className="btn bg-brand text-black">Send message</button>
              <div className="text-sm text-slate-500">Or email us at <a href="mailto:info@timetravel.example" className="underline">info@timetravel.example</a></div>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
