"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, ChevronRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react"

const pipelineStages = ["Git", "Build", "Test", "Security", "Deploy", "Kubernetes"]

/** Decorative delivery pipeline: highlights one stage at a time, in order, on a slow loop. */
function PipelineStrip() {
  return (
    <ol aria-label="Delivery pipeline" className="mt-16 flex flex-wrap items-center gap-x-1.5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
      {pipelineStages.map((stage, i) => (
        <li key={stage} className="flex items-center gap-1.5">
          <span className="relative overflow-hidden rounded-md border border-white/10 bg-white/[0.025] px-2.5 py-1.5">
            <span aria-hidden="true" className="absolute inset-0 bg-cyan-400/15 opacity-0 ring-1 ring-inset ring-cyan-400/40 motion-safe:animate-stage-glow" style={{ animationDelay: `${i * 1200}ms` }} />
            <span className="relative">{stage}</span>
          </span>
          {i < pipelineStages.length - 1 && <ChevronRight aria-hidden="true" size={13} className="text-cyan-400/50" />}
        </li>
      ))}
    </ol>
  )
}

/** Compact DevOps infinity mark inspired by the lifecycle graphic shared for the hero. */
function DevOpsLifecycleMark() {
  return (
    <div aria-hidden="true" className="relative h-40 w-64 select-none motion-safe:animate-float-soft">
      <div className="absolute inset-3 rounded-full bg-cyan-400/10 blur-2xl" />
      <svg viewBox="0 0 320 190" className="relative h-full w-full overflow-visible">
        <defs>
          <linearGradient id="devops-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="devops-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <filter id="devops-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path d="M160 95 C122 40 65 36 38 67 C10 99 35 146 82 148 C121 150 143 123 160 95 C177 67 199 40 238 42 C285 44 310 91 282 123 C255 154 198 150 160 95 Z" fill="none" stroke="url(#devops-left)" strokeWidth="22" strokeLinecap="round" filter="url(#devops-glow)" />
        <path d="M160 95 C198 150 255 154 282 123 C310 91 285 44 238 42 C199 40 177 67 160 95 C143 123 121 150 82 148 C35 146 10 99 38 67 C65 36 122 40 160 95 Z" fill="none" stroke="url(#devops-right)" strokeWidth="22" strokeLinecap="round" opacity=".9" />
        <circle cx="92" cy="95" r="35" fill="#070a0f" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
        <circle cx="228" cy="95" r="35" fill="#070a0f" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
        <text x="92" y="101" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="sans-serif">Dev</text>
        <text x="228" y="101" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="sans-serif">Ops</text>
        <g fill="#67e8f9">
          <circle cx="44" cy="58" r="3" />
          <circle cx="72" cy="143" r="3" />
          <circle cx="248" cy="44" r="3" />
          <circle cx="282" cy="131" r="3" />
        </g>
      </svg>
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full border border-cyan-400/20 bg-[#070a0f]/80 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-300 backdrop-blur-md">
        continuous delivery
      </div>
    </div>
  )
}

export function Hero() {
  const downloadCV = async () => {
    try {
      const response = await fetch("/api/download-cv")
      if (!response.ok) throw new Error("Failed to download CV")
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Himanshu_Parashar_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(url)
    } catch {
      window.location.href = "mailto:himanshuparashar085@gmail.com?subject=Resume%20Request"
    }
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-20 right-[6%] h-64 w-64 rounded-full bg-blue-500/10 blur-3xl motion-safe:animate-float-soft" />
      <div className="pointer-events-none absolute right-[4%] top-24 z-10 hidden lg:block">
        <DevOpsLifecycleMark />
      </div>

      <div className="section-shell relative py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
          <div className="motion-safe:animate-reveal-up">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,.9)] motion-safe:animate-pulse" />
              Available for DevOps / Cloud opportunities
            </div>
            <p className="mb-4 font-mono text-sm text-cyan-400">01 / DEVOPS ENGINEER</p>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Automating software delivery through{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                reliable CI/CD pipelines and cloud-native infrastructure.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              I design and automate cloud infrastructure, CI/CD pipelines and Kubernetes workloads with a focus on repeatability, observability and operational reliability.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-cyan-400 px-6 text-slate-950 hover:bg-cyan-300">
                <a href="#contact"><Mail className="mr-2 h-4 w-4" />Let&apos;s talk</a>
              </Button>
              <Button size="lg" variant="outline" onClick={downloadCV} className="rounded-full border-white/15 bg-white/[0.03] px-6 text-white hover:bg-white/10">
                <Download className="mr-2 h-4 w-4" />Download CV
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><MapPin size={15} /> Noida, India</span>
              <a href="https://github.com/himanshu0085" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Github size={15} /> GitHub</a>
              <a href="https://www.linkedin.com/in/himanshu-parashar-2b541194" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Linkedin size={15} /> LinkedIn</a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm motion-safe:animate-reveal-up [animation-delay:150ms]">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-[2rem] p-3">
              <img src="/images/himanshu-new.png" alt="Himanshu Parashar" className="aspect-square w-full rounded-[1.4rem] object-cover" />
              <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-xl border border-white/10 bg-[#070a0f]/80 px-4 py-3 backdrop-blur-xl">
                <div><p className="text-xs text-slate-500">Focus</p><p className="text-sm font-medium text-white">Cloud • DevOps • Kubernetes</p></div>
                <Sparkles className="text-cyan-400 motion-safe:animate-pulse" size={19} />
              </div>
            </div>
          </div>
        </div>

        <PipelineStrip />
        <a href="#about" className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 hover:text-cyan-300">
          <ArrowDown size={14} /> Explore
        </a>
      </div>
    </section>
  )
}
