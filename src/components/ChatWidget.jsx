import React, { useEffect, useRef, useState } from 'react'

const MOCK_REPLIES = [
  "Welcome to TimeTravel. How can I guide your journey today?",
  "We recommend visiting Neon Kyoto for a short night tour.",
  "Booking windows open 3 months in advance for high-demand eras.",
  "Would you like a curated itinerary or a free-form excursion?",
  "All trips include a certified temporal guide and safety briefings."
]

function getDestinationAcknowledgement(destination) {
  if (!destination) return ''

  if (/paris/i.test(destination)) {
    return 'Excellent choice. Paris 1889 offers a unique Belle Époque experience, with elegant soirées and curated cultural tours.'
  }

  if (/cretaceous/i.test(destination)) {
    return 'Excellent choice. The Cretaceous expedition delivers awe-inspiring prehistoric vistas, guided by certified temporal naturalists.'
  }

  if (/florence/i.test(destination)) {
    return 'Excellent choice. Florence 1504 surrounds you with Renaissance brilliance, private atelier visits, and masterwork viewings.'
  }

  return `Excellent choice. ${destination} promises an extraordinary, carefully curated journey.`
}

export default function ChatWidget({ selectedDestination = '' }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 'm-welcome', sender: 'bot', text: 'ChronoBot: Hi — ask me about destinations, pricing or safety.' }
  ])
  const [text, setText] = useState('')
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const lastDestinationRef = useRef('')

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    // scroll to bottom when messages update
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  useEffect(() => {
    if (!selectedDestination || selectedDestination === lastDestinationRef.current) return
    lastDestinationRef.current = selectedDestination
    const replyText = getDestinationAcknowledgement(selectedDestination)
    setMessages((s) => [...s, { id: `b-${Date.now()}`, sender: 'bot', text: `ChronoBot: ${replyText}` }])
  }, [selectedDestination])

  // Close on Escape when open
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && open) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function getReplyFor(input) {
    const t = input.toLowerCase()

    // priority rules
    if (/(art|renaissance|painting|sculpture|da vinci|michelangelo|renaissance)/i.test(t)) {
      return 'Florence 1504 is an exceptional choice — you will experience the height of Renaissance art, private viewings of masterworks, and guided studio visits with expert conservators.'
    }

    if (/(dinosaur|dinosaurs|cretaceous|jurassic|nature|prehistoric)/i.test(t)) {
      return 'The Cretaceous excursion offers unparalleled encounters with prehistoric landscapes — expect professionally guided nature treks and safe observation windows for a truly awe-inspiring experience.'
    }

    if (/(city|elegant|elegance|modern history|paris|exposition|industrial|1889)/i.test(t)) {
      return 'Paris 1889 is a superb match — delight in elegant soirées, the debut of modern engineering marvels, and curated cultural tours led by local historians.'
    }

    // fallback professional enthusiastic response
    return "That's a great question — I can recommend several unique voyages. Tell me if you'd like art-focused, nature-focused, or city-focused experiences, and I'll suggest the perfect destination."
  }

  function sendMessage() {
    const trimmed = text.trim()
    if (!trimmed) return

    const userMsg = { id: `u-${Date.now()}`, sender: 'user', text: trimmed }
    setMessages((s) => [...s, userMsg])
    setText('')

    // rule-based mock bot reply (professional and enthusiastic)
    const replyText = getReplyFor(trimmed)
    setTimeout(() => {
      setMessages((s) => [...s, { id: `b-${Date.now()}`, sender: 'bot', text: `ChronoBot: ${replyText}` }])
    }, 700)
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const lastBot = [...messages].reverse().find((m) => m.sender === 'bot')

  return (
    <div>
      {/* Toggle button */}
      <button
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen((v) => !v)}
        className="fixed z-50 right-6 bottom-6 md:right-8 md:bottom-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.86L3 20l1.14-3.86A7.992 7.992 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed z-50 right-6 bottom-20 md:right-8 md:bottom-8 w-80 md:w-96 bg-gradient-to-b from-slate-900/95 via-slate-900 to-black text-slate-100 rounded-xl shadow-2xl flex flex-col overflow-hidden" role="dialog" aria-modal="true" aria-label="ChronoBot chat">
          <header className="flex items-center justify-between px-4 py-3 bg-slate-800/60">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand to-purple-700 flex items-center justify-center font-semibold">CB</div>
              <div>
                <div className="font-semibold">ChronoBot</div>
                <div className="text-xs text-slate-400">TimeTravel assistant</div>
              </div>
            </div>
            <div>
              <button onClick={() => setOpen(false)} className="text-slate-300 hover:text-white" aria-label="Close chat window">✕</button>
            </div>
          </header>

          <div ref={listRef} className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-thin scrollbar-thumb-slate-700" role="log" aria-live="polite">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-lg ${m.sender === 'user' ? 'bg-brand text-black' : 'bg-slate-800 text-slate-200'}`}>
                  <div className="text-sm whitespace-pre-wrap">{m.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Hidden live region for screen readers to announce the latest bot reply */}
          <div className="sr-only" aria-live="polite">{lastBot?.text ?? ''}</div>

          <div className="px-3 py-3 border-t border-slate-800 bg-gradient-to-t from-slate-900/60 to-transparent">
            <div className="flex gap-2">
              <textarea
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                placeholder="Ask ChronoBot..."
                className="flex-1 resize-none rounded-md bg-slate-800 text-slate-100 placeholder-slate-400 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40"
                aria-label="Chat message"
              />
              <button onClick={sendMessage} className="btn bg-brand text-black px-3 py-2">Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
