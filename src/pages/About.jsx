import React from 'react'

export default function About() {
  return (
    <section className="container-max py-16">
      <div className="max-w-4xl bg-white dark:bg-slate-900 rounded-xl p-8 shadow">
        <h1 className="text-3xl font-bold">About TimeTravel Agency</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          TimeTravel Agency is a private house of temporal travel — pioneers of controlled time passage, specialists in
          historical immersion, and guardians of discretion. Our work blends rigorous scholarship with technological
          mastery so that each journey feels authentic, refined, and impeccably secure.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Our mission</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            To connect discerning travelers with the most remarkable moments in history — restored with care, guided by
            specialists, and presented with reverence for the timelines we steward.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Expertise & Safety</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Our team includes temporal engineers, conservators, and licensed chronoguides. Each itinerary is vetted for
            historical integrity and operational resilience. Guest wellbeing and the protection of era-specific contexts
            are our highest priorities.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="font-semibold">Curated Access</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Small groups, private viewings, and moments designed for rare proximity.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="font-semibold">Historical Mastery</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Collaborations with historians and conservators preserve authenticity.</p>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="font-semibold">Discreet Security</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Redundant systems and certified protocols protect guests and the timeline.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
