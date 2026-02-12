import React from 'react'
import useInView from '../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.12 })

  return (
    <section
      className="relative text-white"
      role="img"
      aria-label="Dramatic skyline"
    >
      <div ref={ref} className={`relative container-max py-24 md:py-32 transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className={`max-w-3xl bg-slate-900/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl ${inView ? 'glass-animate' : ''}`}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Travel through time. Discover impossible places.</h1>
          <p className="mt-6 text-lg text-slate-100/90">Momentary voyages to curated eras: ancient cities, neon futures, and lost utopias. Safe, guided, unforgettable.</p>
          <div className="mt-8 flex gap-4">
            <a href="#destinations" className="btn bg-brand text-white">Explore Destinations</a>
            <a href="#about" className="btn bg-white/10 backdrop-blur-sm border-white/20">How it works</a>
          </div>
        </div>
      </div>
    </section>
  )
}
