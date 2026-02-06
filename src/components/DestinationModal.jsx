import React, { useEffect, useRef } from 'react'

export default function DestinationModal({ destination, onClose }) {
  const modalRef = useRef(null)
  const lastActiveRef = useRef(null)

  useEffect(() => {
    if (!destination) return
    lastActiveRef.current = document.activeElement
    const node = modalRef.current
    const focusable = node.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')
    const first = focusable[0]
    first?.focus()

    function onKey(e) {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }

      if (e.key === 'Tab') {
        // simple focus trap
        const focusableEls = Array.from(focusable)
        if (focusableEls.length === 0) return
        const index = focusableEls.indexOf(document.activeElement)
        if (e.shiftKey && index === 0) {
          e.preventDefault()
          focusableEls[focusableEls.length - 1].focus()
        } else if (!e.shiftKey && index === focusableEls.length - 1) {
          e.preventDefault()
          focusableEls[0].focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      lastActiveRef.current?.focus()
    }
  }, [destination, onClose])

  if (!destination) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop" role="presentation">
      <div ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="destination-title" className="bg-white dark:bg-slate-900 rounded-xl shadow-xl max-w-3xl w-full mx-4 overflow-hidden">
        <div className="flex justify-between items-start p-4 border-b">
          <h3 id="destination-title" className="text-xl font-semibold">{destination.name}</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">Close</button>
        </div>
        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <img src={destination.image} loading="lazy" alt={`${destination.name} — ${destination.era}`} className="w-full rounded-md object-cover h-64" />
            <p className="mt-4 text-slate-700 dark:text-slate-200">{destination.description}</p>
            <ul className="mt-4 text-sm text-slate-600 dark:text-slate-300 space-y-2">
              <li><strong>Era:</strong> {destination.era}</li>
              <li><strong>Duration:</strong> {destination.duration}</li>
              <li><strong>Price:</strong> {destination.price}</li>
            </ul>
          </div>
          <aside className="md:col-span-1 p-4 bg-slate-50 dark:bg-slate-800 rounded-md">
            <div className="text-sm text-slate-700 dark:text-slate-200">Ready to reserve?</div>
            <div className="mt-4">
              <button className="btn w-full bg-brand text-white">Reserve now</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
