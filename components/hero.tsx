"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, ChevronRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react"

const pipelineStages = ["Git", "Build", "Test", "Security", "Deploy", "Kubernetes"]

const devopsLogos = [
  { name: "AWS", icon: "https://api.iconify.design/logos/aws.svg", position: "left-[7%] top-[12%]", delay: "0s", duration: "9s" },
  { name: "Azure", icon: "https://api.iconify.design/logos/microsoft-azure.svg", position: "left-[48%] top-[5%]", delay: "-2.2s", duration: "10s" },
  { name: "Jenkins", icon: "https://api.iconify.design/logos/jenkins.svg", position: "left-[72%] top-[22%]", delay: "-4.4s", duration: "8.5s" },
  { name: "GitHub Actions", icon: "https://api.iconify.design/logos/github-actions.svg", position: "left-[16%] top-[39%]", delay: "-1.5s", duration: "10.5s" },
  { name: "Azure DevOps", icon: "https://api.iconify.design/devicon/azuredevops.svg", position: "left-[52%] top-[35%]", delay: "-5s", duration: "9.5s" },
  { name: "Terraform", icon: "https://api.iconify.design/logos/terraform-icon.svg", position: "left-[77%] top-[48%]", delay: "-3.1s", duration: "11s" },
  { name: "Ansible", icon: "https://api.iconify.design/logos/ansible.svg", position: "left-[4%] top-[64%]", delay: "-6s", duration: "9.2s" },
  { name: "Docker", icon: "https://api.iconify.design/logos/docker-icon.svg", position: "left-[35%] top-[63%]", delay: "-4s", duration: "10.2s" },
  { name: "Kubernetes", icon: "https://api.iconify.design/logos/kubernetes.svg", position: "left-[63%] top-[73%]", delay: "-1s", duration: "8.8s" },
  { name: "Linux", icon: "https://api.iconify.design/logos/tux.svg", position: "left-[26%] top-[84%]", delay: "-5.8s", duration: "11.2s" },
]

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

function DevOpsLogoField() {
  return (
    <div
      aria-label="DevOps technology stack"
      className="pointer-events-none absolute left-0 top-1/2 z-0 hidden h-[620px] w-[46%] -translate-y-1/2 select-none lg:block [perspective:1200px]"
    >
      <div className="absolute inset-[12%_6%] rounded-full border border-cyan-400/10 [transform:rotateX(67deg)_rotateZ(-12deg)]" />
      <div className="absolute inset-[22%_14%] rounded-full border border-blue-500/10 [transform:rotateX(67deg)_rotateZ(20deg)]" />
      <div className="absolute inset-[30%_23%] rounded-full border border-violet-400/10 [transform:rotateX(67deg)_rotateZ(-35deg)]" />

      <div className="absolute left-[10%] top-[21%] h-px w-[72%] rotate-[16deg] bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
      <div className="absolute left-[15%] top-[57%] h-px w-[70%] -rotate-[14deg] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      <div className="absolute left-[31%] top-[19%] h-[65%] w-px rotate-[28deg] bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent" />

      <div className="absolute inset-[30%] rounded-full bg-cyan-400/10 blur-3xl" />

      {devopsLogos.map((logo) => (
        <div
          key={logo.name}
          className={`absolute ${logo.position} z-10 motion-safe:animate-devops-float`}
          style={{
            animationDelay: logo.delay,
            animationDuration: logo.duration,
          }}
        >
          <div className="devops-logo-card group">
            <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 blur-xl transition duration-500 group-hover:bg-cyan-400/15" />
            <div className="relative flex h-[78px] w-[78px] items-center justify-center rounded-2xl border border-white/10 bg-slate-950/75 p-4 shadow-[0_18px_45px_rgba(0,0,0,.45)] backdrop-blur-xl transition duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-cyan-300/30">
              <img
                src={logo.icon}
                alt={logo.name}
                className="h-10 w-10 object-contain drop-shadow-[0_0_14px_rgba(255,255,255,.16)]"
              />
            </div>
            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
              {logo.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}


function DevOpsLifecycleLogo() {
  return (
    <div className="relative w-full select-none motion-safe:animate-float-soft">
      <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl shadow-cyan-950/30">
        <img
          src="https://assets.techrepublic.com/uploads/2023/03/Figure.B.DevOps-1024x614.jpeg"
          alt="DevOps lifecycle infinity loop showing Code, Plan, Build, Test, Release, Deploy, Operate and Monitor"
          className="block h-auto w-full object-contain"
        />
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

      <div className="section-shell relative py-20">
        <DevOpsLogoField />
        <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_.75fr] lg:gap-14">
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

            <div className="relative mx-auto flex w-full max-w-sm flex-col items-center motion-safe:animate-reveal-up [animation-delay:150ms]">
              <div className="relative w-full">
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
