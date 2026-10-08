"use client"

import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // One passive scroll listener, throttled to animation frames. State only changes when the
  // threshold is crossed, so scrolling does not cause continuous re-renders.
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setScrolled(window.scrollY > 12)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${scrolled ? "border-white/10 bg-[#070a0f]/85 shadow-[0_10px_30px_-18px_rgba(0,0,0,.8)]" : "border-white/[0.06] bg-[#070a0f]/60"}`}>
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#" className="font-mono text-sm font-semibold tracking-tight text-white">
          himanshu<span className="text-cyan-400">.devops</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="relative text-sm text-slate-400 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-cyan-400/70 after:transition-transform after:duration-300 hover:after:scale-x-100">{link.label}</a>)}
          <a href="https://github.com/himanshu0085" target="_blank" rel="noreferrer" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/15">GitHub</a>
        </div>
        <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && <div className="border-t border-white/10 bg-[#070a0f] px-6 py-4 motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-top-2 motion-safe:duration-200 md:hidden"><div className="section-shell flex flex-col gap-1 px-0">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">{link.label}</a>)}
      </div></div>}
    </header>
  )
}
