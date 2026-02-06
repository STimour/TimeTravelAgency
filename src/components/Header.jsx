import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container-max flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="w-10 h-10 bg-brand rounded-full flex items-center justify-center font-bold">TT</Link>
          <Link to="/" className="text-lg font-semibold">TimeTravel Agency</Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-slate-200">
          <Link to="/" className="hover:text-white">Destinations</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
          <Link to="/booking" className="ml-2 btn bg-brand text-black">Book a trip</Link>
        </nav>

        <div className="md:hidden">
          <button
            className="btn"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-slate-800 bg-slate-900/90"
        >
          <div className="container-max flex flex-col gap-3 py-4 text-slate-200">
            <Link to="/" className="hover:text-white" onClick={() => setOpen(false)}>Destinations</Link>
            <Link to="/about" className="hover:text-white" onClick={() => setOpen(false)}>About</Link>
            <Link to="/contact" className="hover:text-white" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/booking" className="btn bg-brand text-black" onClick={() => setOpen(false)}>Book a trip</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
