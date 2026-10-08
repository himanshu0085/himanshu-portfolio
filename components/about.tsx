import { Cloud, Container, GitBranch, ShieldCheck } from "lucide-react"

const cards = [
  { icon: Cloud, title: "Cloud Infrastructure", text: "AWS environments, networking fundamentals and infrastructure designed for repeatable delivery." },
  { icon: GitBranch, title: "CI/CD Automation", text: "Jenkins pipelines, Maven builds and reusable automation that reduces manual release work." },
  { icon: Container, title: "Containers & Kubernetes", text: "Dockerized workloads, Kubernetes deployments, scaling, RBAC and production delivery patterns." },
  { icon: ShieldCheck, title: "IaC & Reliability", text: "Terraform, Terragrunt, Ansible and observability practices for safer infrastructure changes." },
]

export function About() {
  return <section id="about" className="border-y border-white/5 bg-white/[0.015] py-24"><div className="section-shell"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">02 / ABOUT</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Infrastructure should be boring—in the best way.</h2></div><div><p className="text-lg leading-8 text-slate-400">I&apos;m a DevOps Engineer with hands-on experience across cloud infrastructure, automation and delivery platforms. My work sits between development and operations: turning deployment workflows into repeatable systems and making infrastructure easier to operate.</p><p className="mt-5 text-lg leading-8 text-slate-400">My core toolkit spans AWS, Terraform, Terragrunt, Jenkins, Docker, Kubernetes, Ansible, Prometheus and Grafana, with practical exposure to production-grade microservices environments.</p><div className="mt-10 grid gap-3 sm:grid-cols-2">{cards.map(({ icon: Icon, title, text }) => <div key={title} className="glass rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-cyan-400/20"><Icon size={20} className="text-cyan-400" /><h3 className="mt-4 font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>)}</div></div></div></div></section>
}
