import { Activity, Boxes, Cloud, Database, GitBranch, Settings2 } from "lucide-react"

const groups = [
  { icon: Cloud, title: "Cloud Platforms", items: ["AWS", "Azure", "EC2", "IAM", "S3", "Azure VM", "CloudWatch"] },
  { icon: Settings2, title: "Infrastructure as Code", items: ["Terraform", "Terragrunt", "Ansible", "Remote State", "Modules"] },
  { icon: Boxes, title: "Containers & Orchestration", items: ["Docker", "Kubernetes", "AKS", "EKS", "Helm", "RBAC", "HPA"] },
  { icon: GitBranch, title: "CI/CD & Developer Tools", items: ["Jenkins", "GitHub Actions", "Azure DevOps", "Git", "Maven", "Groovy", "Job DSL"] },
  { icon: Activity, title: "Observability", items: ["Prometheus", "Grafana", "VictoriaMetrics", "CloudWatch", "Logging"] },
  { icon: Database, title: "Data & Messaging", items: ["Apache Kafka", "Redis", "PostgreSQL", "ScyllaDB"] },
]
const certifications = ["Microsoft Technology Associate — Database Administration Fundamentals", "DevOps Ninja — DevOps Practices", "Microsoft Certified IT Professional — Database Administrator"]

export function Skills() {
  return <section id="skills" className="py-24"><div className="section-shell"><div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">03 / TOOLKIT</p><h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Cloud, automation and delivery.</h2><p className="mt-4 text-slate-500">A practical stack spanning AWS and Azure, infrastructure as code, Kubernetes and modern CI/CD platforms.</p></div><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{groups.map(({ icon: Icon, title, items }) => <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:shadow-[0_14px_40px_-24px_rgba(34,211,238,.45)] motion-reduce:hover:translate-y-0"><Icon className="text-cyan-400 transition-transform duration-300 group-hover:scale-110" size={21}/><h3 className="mt-5 font-semibold text-white">{title}</h3><div className="mt-4 flex flex-wrap gap-2">{items.map(item => <span key={item} className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-1.5 font-mono text-xs text-slate-400 transition-colors duration-200 hover:border-cyan-400/25 hover:text-cyan-200">{item}</span>)}</div></div>)}</div><div className="mt-16"><p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">CERTIFICATIONS</p><div className="mt-5 grid gap-3 md:grid-cols-3">{certifications.map(cert => <div key={cert} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm leading-6 text-slate-400">{cert}</div>)}</div></div></div></section>
}
