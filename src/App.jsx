import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import heroImg from './assets/images/niklas-ohlrogge-niamoh-de-BkmdKnuAZtw-unsplash.jpg'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import FAQ from './pages/FAQ'
import RGPD from './pages/RGPD'
import CGV from './pages/CGV'

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState('')

  return (
    <BrowserRouter>
      {/* Background image fixe pour tout le site */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})`, zIndex: -1 }}
      >
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>
      
      <div className="min-h-screen flex flex-col text-slate-900 dark:text-slate-100">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking onDestinationSelect={setSelectedDestination} />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/rgpd" element={<RGPD />} />
            <Route path="/cgv" element={<CGV />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget selectedDestination={selectedDestination} />
      </div>
    </BrowserRouter>
  )
}
