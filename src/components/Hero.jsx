import React from 'react'
import heroImg from '../assets/images/niklas-ohlrogge-niamoh-de-BkmdKnuAZtw-unsplash.jpg'
import useInView from '../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.12 })

  return (
    <section className="relative text-white">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Dramatic skyline" loading="lazy" className="w-full h-full object-cover brightness-75" />
      </div>
      <div ref={ref} className={`relative container-max py-24 md:py-32 transition-transform transition-opacity duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Travel through time. Discover impossible places.</h1>
          <p className="mt-6 text-lg text-slate-100/90">Momentary voyages to curated eras: ancient cities, neon futures, and lost utopias. Safe, guided, unforgettable.</p>
          <div className="mt-8 flex gap-4">
            <a href="#destinations" className="btn bg-brand text-white">Explore Destinations</a>
            <a href="#about" className="btn">How it works</a>
          </div>
        </div>
      </div>
    </section>
  )
}
