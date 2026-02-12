import React, { useState } from 'react'
import useInView from '../hooks/useInView'

const OPTIONS = [
  { value: 'paris-1889', label: 'Paris 1889' },
  { value: 'cretaceous', label: 'Cretaceous' },
  { value: 'florence-1504', label: 'Florence 1504' },
]

export default function Booking({ onDestinationSelect }) {
  const [form, setForm] = useState({ destination: 'paris-1889', date: '', travelers: 1 })
  const [errors, setErrors] = useState({})
  const [confirmed, setConfirmed] = useState(null)
  const [ref, inView] = useInView({ threshold: 0.12 })

  function validate() {
    const e = {}
    if (!form.date) e.date = 'Please select a date'
    if (!form.travelers || form.travelers < 1) e.travelers = 'Enter at least 1 traveler'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setConfirmed({ ...form, id: `BK-${Date.now()}` })
  }

  if (confirmed) {
    return (
      <section className="relative text-white">
        <div ref={ref} className={`relative container-max py-24 md:py-32 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="max-w-3xl bg-slate-900/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Booking confirmed</h2>
            <p className="mt-6 text-lg text-slate-100/90">Your mock booking is ready. Details below:</p>
          <ul className="mt-6 space-y-3 text-slate-100/90">
            <li className="flex gap-2"><strong className="text-white">Reference:</strong> {confirmed.id}</li>
            <li className="flex gap-2"><strong className="text-white">Destination:</strong> {OPTIONS.find(o => o.value === confirmed.destination)?.label}</li>
            <li className="flex gap-2"><strong className="text-white">Date:</strong> {confirmed.date}</li>
            <li className="flex gap-2"><strong className="text-white">Travelers:</strong> {confirmed.travelers}</li>
          </ul>
          <p className="mt-6 text-slate-100/90">
            Your itinerary will be reviewed by our temporal safety team. A dedicated chronoguide will contact you with
            final details and discreet travel briefings.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#" className="btn bg-brand text-white">Save reservation (mock)</a>
          </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative text-white">
      <div ref={ref} className={`relative container-max py-24 md:py-32 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="max-w-3xl bg-slate-900/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Book Your Time Travel</h1>
          <p className="mt-6 text-lg text-slate-100/90">
          This is a mock booking experience designed to simulate a premium journey. No payment is required and no
          reservation is finalized at this stage.
        </p>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div>
            <label htmlFor="booking-destination" className="block text-sm font-medium text-white mb-2">Destination</label>
            <select
              id="booking-destination"
              value={form.destination}
              onChange={(e) => {
                const destination = e.target.value
                setForm((s) => ({ ...s, destination }))
                const label = OPTIONS.find((o) => o.value === destination)?.label
                if (label) onDestinationSelect?.(label)
              }}
              className="block w-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white focus:border-brand focus:ring-1 focus:ring-brand"
            >
              {OPTIONS.map((o) => (
                <option key={o.value} value={o.value} className="bg-slate-800">{o.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="booking-date" className="block text-sm font-medium text-white mb-2">Preferred date</label>
            <input
              id="booking-date"
              type="date"
              value={form.date}
              onChange={(e) => setForm((s) => ({ ...s, date: e.target.value }))}
              className="block w-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white focus:border-brand focus:ring-1 focus:ring-brand"
            />
            {errors.date && <div className="text-xs text-red-400 mt-1">{errors.date}</div>}
          </div>

          <div>
            <label htmlFor="booking-travelers" className="block text-sm font-medium text-white mb-2">Number of travelers</label>
            <input
              id="booking-travelers"
              type="number"
              min={1}
              value={form.travelers}
              onChange={(e) => setForm((s) => ({ ...s, travelers: Number(e.target.value) }))}
              className="block w-32 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white focus:border-brand focus:ring-1 focus:ring-brand"
            />
            {errors.travelers && <div className="text-xs text-red-400 mt-1">{errors.travelers}</div>}
          </div>

          <div className="mt-8 flex gap-4">
            <button type="submit" className="btn bg-brand text-white">Confirm booking</button>
            <button type="button" className="btn bg-white/10 backdrop-blur-sm border-white/20" onClick={() => setForm({ destination: 'paris-1889', date: '', travelers: 1 })}>Reset</button>
          </div>
        </form>
        </div>
      </div>
    </section>
  )
}
