import React from 'react'
import useInView from '../hooks/useInView'

export default function RGPD() {
  const [ref, inView] = useInView({ threshold: 0.12 })

  return (
    <section className="relative text-white">
      <div ref={ref} className={`relative container-max py-24 md:py-32 transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className={`max-w-3xl bg-slate-900/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl ${inView ? 'glass-animate' : ''}`}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">RGPD — Privacy Policy</h1>
          <p className="mt-6 text-lg text-slate-100/90">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
            <p className="mt-2 text-slate-200">
              TimeTravel Agency (this demonstration website) is committed to protecting your privacy. This policy
              outlines how we handle personal data in compliance with the General Data Protection Regulation (RGPD/GDPR).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">2. Data Controller</h2>
            <p className="mt-2 text-slate-200">
              For the purposes of this demonstration, TimeTravel Agency acts as the data controller. Contact us at{' '}
              <a href="mailto:privacy@timetravel.example" className="underline hover:text-brand">
                privacy@timetravel.example
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">3. Data Collection</h2>
            <p className="mt-2 text-slate-200">
              <strong>Important:</strong> This is a demonstration website. No personal data is collected, stored, or
              transmitted to external servers. All form submissions, quiz responses, and chat interactions remain local
              to your browser session and are not persisted.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">4. Cookies and Tracking</h2>
            <p className="mt-2 text-slate-200">
              This site does not use cookies or tracking technologies. No analytics, advertising, or third-party scripts
              are embedded.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">5. Your Rights</h2>
            <p className="mt-2 text-slate-200">
              Under GDPR, you have the right to access, rectify, erase, restrict processing, and port your data, as well
              as the right to object to processing and withdraw consent. Since this site does not collect data, these
              rights are not applicable in practice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">6. Data Security</h2>
            <p className="mt-2 text-slate-200">
              We implement industry-standard security measures to protect any data processed. For this demo, all
              interactions are client-side only.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">7. Changes to This Policy</h2>
            <p className="mt-2 text-slate-200">
              We may update this policy periodically. Any changes will be posted on this page with an updated revision
              date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">8. Contact</h2>
            <p className="mt-2 text-slate-200">
              For questions about this policy, please contact us via the{' '}
              <a href="/contact" className="underline hover:text-brand">Contact page</a>.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
