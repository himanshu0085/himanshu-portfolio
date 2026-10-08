import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#070a0f] text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="border-t border-white/10 bg-[#070a0f] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Himanshu Parashar. Built for the cloud.</p>
          <a className="transition hover:text-cyan-300" href="https://github.com/himanshu0085/himanshu-portfolio" target="_blank" rel="noreferrer">
            Source on GitHub
          </a>
        </div>
      </footer>
    </main>
  )
}
