import React from 'react'
import useInView from '../hooks/useInView'

export default function FAQ() {
  const [ref, inView] = useInView({ threshold: 0.12 })

  return (
    <section className="relative text-white">
      <div ref={ref} className={`relative container-max py-24 md:py-32 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="max-w-3xl bg-slate-900/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">FAQ — Frequently Asked Questions</h1>
          <p className="mt-6 text-lg text-slate-100/90">
          Find answers to common questions about using TimeTravel Agency's website and services.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white">How do I book a trip?</h2>
            <p className="mt-2 text-slate-200">
              Navigate to the <strong>Book a trip</strong> page from the menu, select your destination, choose your
              preferred date, and indicate the number of travelers. Submit the form to receive a mock booking
              confirmation. Note: this is a demonstration site; no real reservations or payments are processed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">What is the quiz for?</h2>
            <p className="mt-2 text-slate-200">
              The quiz on the homepage helps you discover which destination matches your travel style. Answer four
              quick questions, and we'll recommend a curated voyage tailored to your preferences.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Can I contact the agency?</h2>
            <p className="mt-2 text-slate-200">
              Yes. Visit the <strong>Contact</strong> page to send a message via our form. For this demo, submissions
              are not sent to a real inbox, but you'll see a confirmation screen to simulate the experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">How does the chatbot work?</h2>
            <p className="mt-2 text-slate-200">
              Click the chat icon in the bottom-right corner to open ChronoBot. Ask questions about destinations,
              pricing, or safety. The bot uses rule-based responses to simulate a helpful assistant experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Is my data safe?</h2>
            <p className="mt-2 text-slate-200">
              This is a demonstration website. No personal data is collected, stored, or transmitted to external
              servers. All interactions remain local to your browser session. For more details, see our{' '}
              <a href="/rgpd" className="underline hover:text-brand">RGPD policy</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">What are the Terms and Conditions?</h2>
            <p className="mt-2 text-slate-200">
              Please refer to our <a href="/cgv" className="underline hover:text-brand">CGV (Terms of Sale)</a> page for
              generic terms governing the use of this demonstration site.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
