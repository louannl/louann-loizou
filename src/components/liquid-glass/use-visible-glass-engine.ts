import { useEffect, useState, type RefObject } from 'react'
import { prepareGlassEngine, type GlassEngine } from './engine'

/** Only attach a glass surface as it enters the viewport. Its CSS styles work in the meantime. */
export function useVisibleGlassEngine(canvasRef: RefObject<HTMLCanvasElement | null>, disabled = false) {
  const [engine, setEngine] = useState<GlassEngine | null>(null)

  useEffect(() => {
    const host = canvasRef.current?.parentElement
    if (!host || disabled || engine) return

    let cancelled = false
    const start = () => {
      void prepareGlassEngine().then((result) => {
        if (!cancelled && result) setEngine(result)
      })
    }
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer?.disconnect()
      start()
    })
    if (observer) observer.observe(host)
    else start()

    return () => {
      cancelled = true
      observer?.disconnect()
    }
  }, [canvasRef, disabled, engine])

  return disabled ? null : engine
}
