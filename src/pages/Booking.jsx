import React, { useState } from 'react'

const OPTIONS = [
  { value: 'paris-1889', label: 'Paris 1889' },
  { value: 'cretaceous', label: 'Cretaceous' },
  { value: 'florence-1504', label: 'Florence 1504' },
]

export default function Booking({ onDestinationSelect }) {
  const [form, setForm] = useState({ destination: 'paris-1889', date: '', travelers: 1 })
  const [errors, setErrors] = useState({})
  const [confirmed, setConfirmed] = useState(null)

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
      <section className="container-max py-16">
        <div className="max-w-2xl bg-white dark:bg-slate-900 rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold">Booking confirmed</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Your mock booking is ready. Details below:</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><strong>Reference:</strong> {confirmed.id}</li>
            <li><strong>Destination:</strong> {OPTIONS.find(o => o.value === confirmed.destination)?.label}</li>
            <li><strong>Date:</strong> {confirmed.date}</li>
            <li><strong>Travelers:</strong> {confirmed.travelers}</li>
          </ul>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Your itinerary will be reviewed by our temporal safety team. A dedicated chronoguide will contact you with
            final details and discreet travel briefings.
          </p>
          <div className="mt-6">
            <a href="#" className="btn bg-brand text-black">Save reservation (mock)</a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="container-max py-16">
      <div className="max-w-2xl bg-white dark:bg-slate-900 rounded-xl p-6 shadow">
        <h1 className="text-2xl font-bold">Book Your Time Travel</h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          This is a mock booking experience designed to simulate a premium journey. No payment is required and no
          reservation is finalized at this stage.
        </p>
        <form className="mt-4 space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="booking-destination" className="block text-sm font-medium">Destination</label>
            <select
              id="booking-destination"
              value={form.destination}
              onChange={(e) => {
                const destination = e.target.value
                setForm((s) => ({ ...s, destination }))
                const label = OPTIONS.find((o) => o.value === destination)?.label
                if (label) onDestinationSelect?.(label)
              }}
              className="mt-1 block w-full rounded-md bg-slate-50 dark:bg-slate-800 px-3 py-2"
            >
              {OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="booking-date" className="block text-sm font-medium">Preferred date</label>
            <input
              id="booking-date"
              type="date"
              value={form.date}
              onChange={(e) => setForm((s) => ({ ...s, date: e.target.value }))}
              className="mt-1 block w-full rounded-md bg-slate-50 dark:bg-slate-800 px-3 py-2"
            />
            {errors.date && <div className="text-xs text-red-400 mt-1">{errors.date}</div>}
          </div>

          <div>
            <label htmlFor="booking-travelers" className="block text-sm font-medium">Number of travelers</label>
            <input
              id="booking-travelers"
              type="number"
              min={1}
              value={form.travelers}
              onChange={(e) => setForm((s) => ({ ...s, travelers: Number(e.target.value) }))}
              className="mt-1 block w-28 rounded-md bg-slate-50 dark:bg-slate-800 px-3 py-2"
            />
            {errors.travelers && <div className="text-xs text-red-400 mt-1">{errors.travelers}</div>}
          </div>

          <div className="flex gap-3">
            <button type="submit" className="btn bg-brand text-black">Confirm booking</button>
            <button type="button" className="btn" onClick={() => setForm({ destination: 'paris-1889', date: '', travelers: 1 })}>Reset</button>
          </div>
        </form>
      </div>
    </section>
  )
}
