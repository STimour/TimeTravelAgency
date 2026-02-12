import React, { useState } from 'react'
import DestinationModal from './DestinationModal'
import useInView from '../hooks/useInView'

// Local images (placed in src/assets/images)
import neonKyoto from '../assets/images/jakob-owens-v2lS1ECeCOM-unsplash.jpg'
import saharaOasis from '../assets/images/fernando-montes-vicaria-wG7fpg-sHd0-unsplash.jpg'
import atlantean from '../assets/images/musa-ortac-bKjgItwgmg4-unsplash.jpg'

const sampleDestinations = [
  {
    id: 'd1',
    name: 'Neon Kyoto - 2142',
    era: '2142 (Cyber-Renaissance)',
    duration: '3 nights',
    price: '$2,499',
    image: neonKyoto,
    description: 'A neon-lit metropolis mixing ancient temples with holographic art. Guided tours, food experiences, and safe city-hopping.'
  },
  {
    id: 'd2',
    name: 'Sahara Oasis - 1321',
    era: '1321 (Caravan Era)',
    duration: '5 nights',
    price: '$1,799',
    image: saharaOasis,
    description: 'Silk routes and starlit dunes. Camp under the Milky Way and trade stories with recreated caravans.'
  },
  {
    id: 'd3',
    name: 'Atlantean Gardens - Lost',
    era: 'Unknown (Prehistoric Utopia)',
    duration: '4 nights',
    price: '$3,200',
    image: atlantean,
    description: 'A lush island city of impossible engineering and serene gardens. Limited seats available.'
  }
]

export default function Destinations() {
  const [selected, setSelected] = useState(null)
  const [ref, inView] = useInView({ threshold: 0.12 })

  return (
    <section id="destinations" ref={ref} className={`container-max py-16 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="max-w-3xl bg-slate-900/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl">
        <h2 className="text-3xl font-bold text-white">Featured Destinations</h2>
        <p className="mt-2 text-slate-200">Handpicked voyages across time — immersive, small-group experiences.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleDestinations.map((d) => (
          <article key={d.id} aria-label={`${d.name} card`} className="bg-slate-900/40 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-white/10 transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer" onClick={() => setSelected(d)}>
            <div className="relative h-48 md:h-40">
              <img src={d.image} alt={`${d.name} — ${d.era}`} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute left-4 bottom-4 text-white">
                <h3 className="text-lg font-semibold">{d.name}</h3>
                <p className="text-sm opacity-90">{d.era}</p>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between bg-slate-900/60 backdrop-blur-sm">
              <div>
                <div className="text-sm text-slate-300">{d.duration}</div>
                <div className="mt-1 font-medium text-white">{d.price}</div>
              </div>
              <div>
                <button className="btn bg-brand text-black">Details</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <DestinationModal destination={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
