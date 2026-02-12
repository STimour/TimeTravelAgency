import React from 'react'
import useInView from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.12 })

  return (
    <section className="relative text-white">
      <div ref={ref} className={`relative container-max py-24 md:py-32 transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className={`max-w-3xl bg-slate-900/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl ${inView ? 'glass-animate' : ''}`}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">About TimeTravel Agency</h1>
          <p className="mt-6 text-lg text-slate-100/90">
          TimeTravel Agency is a private house of temporal travel — pioneers of controlled time passage, specialists in
          historical immersion, and guardians of discretion. Our work blends rigorous scholarship with technological
          mastery so that each journey feels authentic, refined, and impeccably secure.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Our mission</h2>
          <p className="mt-4 text-slate-100/90">
            To connect discerning travelers with the most remarkable moments in history — restored with care, guided by
            specialists, and presented with reverence for the timelines we steward.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Expertise & Safety</h2>
          <p className="mt-4 text-slate-100/90">
            Our team includes temporal engineers, conservators, and licensed chronoguides. Each itinerary is vetted for
            historical integrity and operational resilience. Guest wellbeing and the protection of era-specific contexts
            are our highest priorities.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
            <h3 className="font-bold text-white">Curated Access</h3>
            <p className="text-sm text-slate-100/90 mt-2">Small groups, private viewings, and moments designed for rare proximity.</p>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
            <h3 className="font-bold text-white">Historical Mastery</h3>
            <p className="text-sm text-slate-100/90 mt-2">Collaborations with historians and conservators preserve authenticity.</p>
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10">
            <h3 className="font-bold text-white">Discreet Security</h3>
            <p className="text-sm text-slate-100/90 mt-2">Redundant systems and certified protocols protect guests and the timeline.</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
