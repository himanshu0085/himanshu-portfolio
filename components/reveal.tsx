"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealState = "visible" | "hidden" | "shown"

/**
 * Fades + slides content in once as it scrolls into view.
 *
 * Progressive enhancement: content is rendered visible on the server, so the page works
 * without JavaScript. After hydration, only elements that start below the fold are hidden
 * and then revealed, so nothing flashes. Users with `prefers-reduced-motion` never get hidden
 * content. Uses a single IntersectionObserver per element and only animates opacity/transform.
 */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<RevealState>("visible")

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (typeof IntersectionObserver === "undefined") return

    // Already on screen at load (hero, deep links, restored scroll): leave it alone.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return

    setState("hidden")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown")
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={state === "visible" ? undefined : { transitionDelay: `${delay}ms` }}
      className={[
        state === "visible" ? "" : "transition-[opacity,transform] duration-700 ease-out",
        state === "hidden" ? "translate-y-5 opacity-0" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  )
}
