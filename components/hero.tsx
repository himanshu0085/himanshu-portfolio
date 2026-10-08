"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react"

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
      <div className="absolute inset-0 grid-pattern opacity-50" /><div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="section-shell relative py-20"><div className="grid items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,.9)]" />Available for DevOps / Cloud opportunities</div>
          <p className="mb-4 font-mono text-sm text-cyan-400">01 / DEVOPS ENGINEER</p>
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">Automating software delivery through <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">reliable CI/CD pipelines and cloud-native infrastructure.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">I design and automate cloud infrastructure, CI/CD pipelines and Kubernetes workloads with a focus on repeatability, observability and operational reliability.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-cyan-400 px-6 text-slate-950 hover:bg-cyan-300"><a href="#contact"><Mail className="mr-2 h-4 w-4" />Let&apos;s talk</a></Button>
            <Button size="lg" variant="outline" onClick={downloadCV} className="rounded-full border-white/15 bg-white/[0.03] px-6 text-white hover:bg-white/10"><Download className="mr-2 h-4 w-4" />Download CV</Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-500"><span className="inline-flex items-center gap-2"><MapPin size={15} /> Noida, India</span><a href="https://github.com/himanshu0085" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Github size={15} /> GitHub</a><a href="https://www.linkedin.com/in/himanshu-parashar-2b541194" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Linkedin size={15} /> LinkedIn</a></div>
        </div>
        <div className="relative mx-auto w-full max-w-sm"><div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-2xl" /><div className="glass relative overflow-hidden rounded-[2rem] p-3"><img src="/images/himanshu-new.png" alt="Himanshu Parashar" className="aspect-square w-full rounded-[1.4rem] object-cover" /><div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-xl border border-white/10 bg-[#070a0f]/80 px-4 py-3 backdrop-blur-xl"><div><p className="text-xs text-slate-500">Focus</p><p className="text-sm font-medium text-white">Cloud • DevOps • Kubernetes</p></div><Sparkles className="text-cyan-400" size={19} /></div></div></div>
      </div><a href="#about" className="mt-16 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 hover:text-cyan-300"><ArrowDown size={14} /> Explore</a></div>
    </section>
  )
}
