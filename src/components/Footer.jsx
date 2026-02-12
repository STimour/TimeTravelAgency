import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md text-slate-200 mt-12 border-t border-white/10">
      <div className="container-max py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="font-semibold text-lg">TimeTravel Agency</div>
            <p className="mt-2 text-sm text-slate-400">
              Your gateway to curated temporal voyages. Expertise, safety, and premium experiences.
            </p>
            <div className="mt-4 text-sm text-slate-400">
              © {new Date().getFullYear()} TimeTravel. All rights reserved.
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="font-semibold text-sm uppercase tracking-wider mb-3">Navigation</div>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Destinations</Link>
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link to="/booking" className="hover:text-white transition-colors">Book a Trip</Link>
            </nav>
          </div>

          {/* Legal & Help Links */}
          <div>
            <div className="font-semibold text-sm uppercase tracking-wider mb-3">Legal & Help</div>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              <Link to="/rgpd" className="hover:text-white transition-colors">Privacy Policy (RGPD)</Link>
              <Link to="/cgv" className="hover:text-white transition-colors">Terms & Conditions (CGV)</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
