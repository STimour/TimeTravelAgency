import React, { useState } from 'react'

const QUESTIONS = [
  {
    id: 'q1',
    text: 'Which experience appeals to you most?',
    options: [
      { key: 'art', label: 'Private museum tours & classical art' },
      { key: 'nature', label: 'Wild landscapes and ancient life' },
      { key: 'city', label: 'Elegant city life and cultural salons' },
    ],
  },
  {
    id: 'q2',
    text: 'What pace do you prefer on a trip?',
    options: [
      { key: 'art', label: 'Leisurely, time to savor details' },
      { key: 'nature', label: 'Active, outdoors-forward' },
      { key: 'city', label: 'Energetic, plenty to see each day' },
    ],
  },
  {
    id: 'q3',
    text: 'Pick a highlight you wouldn\'t want to miss',
    options: [
      { key: 'art', label: 'Masterpieces and atelier visits' },
      { key: 'nature', label: 'Fossil sites and primordial beaches' },
      { key: 'city', label: 'Iconic architecture and world fairs' },
    ],
  },
  {
    id: 'q4',
    text: 'Which tone fits your ideal trip?',
    options: [
      { key: 'art', label: 'Intimate and scholarly' },
      { key: 'nature', label: 'Raw and awe-inspiring' },
      { key: 'city', label: 'Refined and social' },
    ],
  },
]

const DESTINATIONS = {
  art: {
    id: 'florence-1504',
    name: 'Florence — 1504 (Renaissance)',
    explanation:
      'You appreciate art, depth, and leisurely discovery. Florence 1504 places you at the heart of Renaissance creativity with private viewings and expert-led studio tours.',
  },
  nature: {
    id: 'cretaceous',
    name: 'Cretaceous (Prehistoric Nature)',
    explanation:
      'You crave raw, natural wonder. The Cretaceous excursion immerses you in prehistoric landscapes and safe, guided observation experiences among ancient fauna and flora.',
  },
  city: {
    id: 'paris-1889',
    name: 'Paris — 1889 (Elegant City)',
    explanation:
      'You enjoy cultural energy and elegant urban life. Paris 1889 offers salons, grand exhibitions, and the debut of modern engineering — perfect for refined explorers.',
  },
}

export default function Quiz() {
  const [answers, setAnswers] = useState({})
  const [step, setStep] = useState(0)
  const [result, setResult] = useState(null)

  function choose(optionKey) {
    const q = QUESTIONS[step]
    setAnswers((s) => ({ ...s, [q.id]: optionKey }))
    if (step < QUESTIONS.length - 1) setStep((s) => s + 1)
    else computeResult({ ...answers, [q.id]: optionKey })
  }

  function computeResult(allAnswers) {
    // tally keys
    const tally = { art: 0, nature: 0, city: 0 }
    Object.values(allAnswers).forEach((k) => {
      if (tally[k] !== undefined) tally[k] += 1
    })

    // pick highest
    const winner = Object.keys(tally).sort((a, b) => tally[b] - tally[a])[0]
    const dest = DESTINATIONS[winner]
    // personalized explanation includes user's choices
    const choices = Object.values(allAnswers)
      .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
      .join(', ')

    setResult({ dest, choices })
  }

  function restart() {
    setAnswers({})
    setStep(0)
    setResult(null)
  }

  if (result) {
    return (
      <section className="container-max py-12">
        <div className="max-w-2xl bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold">Recommended Destination</h3>
          <div className="mt-4">
            <div className="text-xl font-semibold">{result.dest.name}</div>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{result.dest.explanation}</p>
            <div className="mt-3 text-sm text-slate-500">Based on your answers: {result.choices}</div>
          </div>
          <div className="mt-6 flex gap-3">
            <button onClick={restart} className="btn">Take again</button>
            <a href="#destinations" className="btn bg-brand text-black">Explore matching trips</a>
          </div>
        </div>
      </section>
    )
  }

  const current = QUESTIONS[step]

  return (
    <section className="container-max py-12">
      <div className="max-w-2xl bg-white dark:bg-slate-900 rounded-xl p-6 shadow">
        <h3 className="text-2xl font-bold">Find your ideal voyage — quick quiz</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Answer 4 quick questions and we\'ll recommend a destination tailored to you.</p>

        <div className="mt-6">
          <div className="text-sm text-slate-500">Question {step + 1} of {QUESTIONS.length}</div>
          <div className="mt-3">
            <div className="text-lg font-semibold">{current.text}</div>
            <div className="mt-3 grid gap-3">
              {current.options.map((o) => (
                <button key={o.key} onClick={() => choose(o.key)} className="text-left px-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition">
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
