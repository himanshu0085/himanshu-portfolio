import { Activity, Boxes, Cloud, Database, GitBranch, Settings2 } from "lucide-react"

const groups = [
  { icon: Cloud, title: "Cloud", items: ["AWS", "EC2", "IAM", "S3", "CloudWatch", "DynamoDB"] },
  { icon: Settings2, title: "Infrastructure as Code", items: ["Terraform", "Terragrunt", "Ansible"] },
  { icon: Boxes, title: "Containers & Orchestration", items: ["Docker", "Kubernetes", "Helm", "RBAC", "HPA"] },
  { icon: GitBranch, title: "CI/CD & Developer Tools", items: ["Jenkins", "Git", "Maven", "Groovy", "Job DSL"] },
  { icon: Activity, title: "Observability", items: ["Prometheus", "Grafana", "VictoriaMetrics", "CloudWatch"] },
  { icon: Database, title: "Data & Messaging", items: ["Apache Kafka", "Redis", "PostgreSQL", "ScyllaDB"] },
]
const certifications = ["Microsoft Technology Associate — Database Administration Fundamentals", "DevOps Ninja — DevOps Practices", "Microsoft Certified IT Professional — Database Administrator"]

export function Skills() {
  return <section id="skills" className="py-24"><div className="section-shell"><div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">03 / TOOLKIT</p><h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Tools I use to ship and operate.</h2><p className="mt-4 text-slate-500">No arbitrary proficiency percentages—just the technologies I work with and the areas where I build.</p></div><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{groups.map(({ icon: Icon, title, items }) => <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"><Icon className="text-cyan-400" size={21}/><h3 className="mt-5 font-semibold text-white">{title}</h3><div className="mt-4 flex flex-wrap gap-2">{items.map(item => <span key={item} className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-1.5 font-mono text-xs text-slate-400">{item}</span>)}</div></div>)}</div><div className="mt-16"><p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">CERTIFICATIONS</p><div className="mt-5 grid gap-3 md:grid-cols-3">{certifications.map(cert => <div key={cert} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm leading-6 text-slate-400">{cert}</div>)}</div></div></div></section>
}
