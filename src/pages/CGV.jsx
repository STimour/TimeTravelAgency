import React from 'react'
import useInView from '../hooks/useInView'

export default function CGV() {
  const [ref, inView] = useInView({ threshold: 0.12 })

  return (
    <section className="relative text-white">
      <div ref={ref} className={`relative container-max py-24 md:py-32 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="max-w-3xl bg-slate-900/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">CGV — Terms and Conditions of Sale</h1>
          <p className="mt-6 text-lg text-slate-100/90">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white">1. Purpose</h2>
            <p className="mt-2 text-slate-200">
              These general terms and conditions of sale (CGV) govern the relationship between TimeTravel Agency (the
              "Company") and users of this demonstration website (the "Client"). By using this site, you acknowledge
              having read and accepted these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">2. Nature of the Service</h2>
            <p className="mt-2 text-slate-200">
              <strong>Important:</strong> This is a demonstration website. No real travel services, bookings, or
              payments are offered. All interactions are simulated for showcase and educational purposes only.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">3. Orders and Reservations</h2>
            <p className="mt-2 text-slate-200">
              Mock bookings submitted through the "Book a trip" page do not constitute binding contracts. No
              confirmation emails, tickets, or invoices will be issued.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">4. Pricing</h2>
            <p className="mt-2 text-slate-200">
              No prices are displayed or charged on this site. All pricing references are illustrative only.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">5. Payment</h2>
            <p className="mt-2 text-slate-200">
              No payment processing or financial transactions are enabled on this site. No payment gateways, credit card
              forms, or invoicing systems are integrated.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">6. Cancellation and Refunds</h2>
            <p className="mt-2 text-slate-200">
              Since no real bookings or payments occur, cancellation and refund policies are not applicable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">7. Liability</h2>
            <p className="mt-2 text-slate-200">
              The Company provides this demonstration site "as is" without warranties of any kind. The Company is not
              liable for any direct, indirect, incidental, or consequential damages arising from the use of this site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">8. Intellectual Property</h2>
            <p className="mt-2 text-slate-200">
              All content, design, graphics, and code on this site are the property of TimeTravel Agency or its
              licensors. Unauthorized reproduction or distribution is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">9. Applicable Law</h2>
            <p className="mt-2 text-slate-200">
              These terms are governed by the laws of the jurisdiction in which the Company operates. Any disputes shall
              be resolved in the competent courts of that jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">10. Contact</h2>
            <p className="mt-2 text-slate-200">
              For questions about these terms, please contact us via the{' '}
              <a href="/contact" className="underline hover:text-brand">Contact page</a>.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
