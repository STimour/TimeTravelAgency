import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200 mt-12">
      <div className="container-max py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-semibold">TimeTravel Agency</div>
          <div className="text-sm text-slate-400">© {new Date().getFullYear()} TimeTravel. All rights reserved.</div>
        </div>
        <nav className="flex gap-4 text-sm">
          <a href="#destinations" className="hover:text-white">Destinations</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
