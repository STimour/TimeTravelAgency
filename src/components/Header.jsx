import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md text-white border-b border-slate-700/50 shadow-lg">
      <div className="container-max flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="w-10 h-10 bg-brand rounded-full flex items-center justify-center font-bold">TT</Link>
          <Link to="/" className="text-lg font-semibold">TimeTravel Agency</Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className="group relative px-1 py-0.5">
            {({ isActive }) => (
              <span className="relative inline-block text-slate-100/90 group-hover:text-white transition-colors">
                Destinations
                <span aria-hidden="true" className={`absolute left-0 right-0 mx-auto bottom-0 h-0.5 w-full max-w-[3rem] bg-current transform origin-center group-hover:scale-x-100 transition-transform duration-300 rounded ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
              </span>
            )}
          </NavLink>

          <NavLink to="/about" className="group relative px-1 py-0.5">
            {({ isActive }) => (
              <span className="relative inline-block text-slate-100/90 group-hover:text-white transition-colors">
                About
                <span aria-hidden="true" className={`absolute left-0 right-0 mx-auto bottom-0 h-0.5 w-full max-w-[3rem] bg-current transform origin-center group-hover:scale-x-100 transition-transform duration-300 rounded ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
              </span>
            )}
          </NavLink>

          <NavLink to="/contact" className="group relative px-1 py-0.5">
            {({ isActive }) => (
              <span className="relative inline-block text-slate-100/90 group-hover:text-white transition-colors">
                Contact
                <span aria-hidden="true" className={`absolute left-0 right-0 mx-auto bottom-0 h-0.5 w-full max-w-[3rem] bg-current transform origin-center group-hover:scale-x-100 transition-transform duration-300 rounded ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
              </span>
            )}
          </NavLink>

          <NavLink to="/booking" className="group relative px-1 py-0.5">
            {({ isActive }) => (
              <span className="relative inline-block text-slate-100/90 group-hover:text-white transition-colors">
                Book a trip
                <span aria-hidden="true" className={`absolute left-0 right-0 mx-auto bottom-0 h-0.5 w-full max-w-[3rem] bg-current transform origin-center group-hover:scale-x-100 transition-transform duration-300 rounded ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
              </span>
            )}
          </NavLink>
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
          className="md:hidden absolute left-0 right-0 top-full z-50 border-t border-slate-800 bg-slate-900/95 backdrop-blur-sm shadow-xl"
        >
          <div className="container-max flex flex-col gap-3 py-4 text-slate-200 items-center">
            <NavLink to="/" className="group relative block px-3 py-2 text-center" onClick={() => setOpen(false)}>
              {({ isActive }) => (
                <span className="relative inline-block text-slate-100/90 group-hover:text-white transition-colors">
                  Destinations
                  <span aria-hidden="true" className={`absolute left-0 right-0 mx-auto -bottom-1 h-0.5 w-full max-w-[5rem] bg-current transform origin-center group-hover:scale-x-100 transition-transform duration-300 rounded ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                </span>
              )}
            </NavLink>

            <NavLink to="/about" className="group relative block px-3 py-2 text-center" onClick={() => setOpen(false)}>
              {({ isActive }) => (
                <span className="relative inline-block text-slate-100/90 group-hover:text-white transition-colors">
                  About
                  <span aria-hidden="true" className={`absolute left-0 right-0 mx-auto -bottom-1 h-0.5 w-full max-w-[5rem] bg-current transform origin-center group-hover:scale-x-100 transition-transform duration-300 rounded ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                </span>
              )}
            </NavLink>

            <NavLink to="/contact" className="group relative block px-3 py-2 text-center" onClick={() => setOpen(false)}>
              {({ isActive }) => (
                <span className="relative inline-block text-slate-100/90 group-hover:text-white transition-colors">
                  Contact
                  <span aria-hidden="true" className={`absolute left-0 right-0 mx-auto -bottom-1 h-0.5 w-full max-w-[5rem] bg-current transform origin-center group-hover:scale-x-100 transition-transform duration-300 rounded ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                </span>
              )}
            </NavLink>

            <NavLink to="/booking" className="group relative block px-3 py-2 text-center" onClick={() => setOpen(false)}>
              {({ isActive }) => (
                <span className="relative inline-block text-slate-100/90 group-hover:text-white transition-colors">
                  Book a trip
                  <span aria-hidden="true" className={`absolute left-0 right-0 mx-auto -bottom-1 h-0.5 w-full max-w-[5rem] bg-current transform origin-center group-hover:scale-x-100 transition-transform duration-300 rounded ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                </span>
              )}
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  )
}
