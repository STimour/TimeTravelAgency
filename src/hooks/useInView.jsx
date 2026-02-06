import { useEffect, useRef, useState } from 'react'

export default function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (options.once !== false) observer.unobserve(el)
        }
      },
      { threshold: options.threshold ?? 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options.threshold, options.once])

  return [ref, inView]
}
