import { ArrowRight, ArrowUpRight, Bot, Cloud, Code2, Database, GitBranch, Github, Layers3, Network, Server, ShieldCheck, Sparkles, Terminal, Workflow } from "lucide-react"

const projects = [
  {
    title: "CI/CD Automation",
    description: "Enterprise CI/CD using Jenkins, GitHub Actions, and Azure DevOps with shared pipeline libraries and standardized build, test, security, and deployment workflows.",
    tags: ["Jenkins", "GitHub Actions", "Azure DevOps", "Shared Libraries"],
    url: "https://github.com/himanshu085/ot-microservices",
    label: "CI/CD",
    visual: "cicd",
  },
  {
    title: "AI-Assisted PR Review Automation",
    description: "Automated pull-request reviews on Azure DevOps using Azure AI Foundry and GPT-4o mini, with a reusable pipeline template, diff-size controls, focused security/correctness checks, and bot-posted findings.",
    tags: ["Azure AI Foundry", "GPT-4o mini", "Azure DevOps", "Shared Pipeline"],
    url: "",
    label: "AI + DevOps",
    visual: "ai-review",
  },
  {
    title: "NetBird VPN Infrastructure",
    description: "Self-hosted zero-trust VPN on Azure using NetBird, Docker Compose, Nginx reverse proxy, HTTPS/TLS, and Microsoft Entra ID SSO with validated client connectivity.",
    tags: ["NetBird", "Azure", "Docker Compose", "Nginx", "Entra ID"],
    url: "https://github.com/himanshu0085/netbird_setup",
    label: "Networking + Security",
    visual: "netbird",
  },
  {
    title: "Kafka Infrastructure & Automation",
    description: "End-to-end Kafka infrastructure automation combining Terraform provisioning and Ansible configuration across cloud and Linux environments.",
    tags: [
      ["Terraform", "https://cdn.simpleicons.org/terraform/ffffff"],
      ["Ansible", "https://cdn.simpleicons.org/ansible/ffffff"],
      ["AWS", "https://cdn.simpleicons.org/amazonwebservices/ffffff"],
      ["Azure", "https://cdn.simpleicons.org/microsoftazure/ffffff"],
      ["Kafka", "https://cdn.simpleicons.org/apachekafka/ffffff"],
      ["Linux", "https://cdn.simpleicons.org/linux/ffffff"],
    ],
    url: "https://github.com/himanshu085/kafka_dynamic",
    label: "Infrastructure + Automation",
    visual: "cloud",
  },
]

function Node({ icon: Icon, title, subtitle }: { icon: typeof GitBranch; title: string; subtitle?: string }) {
  return (
    <div className="flex min-w-0 items-center gap-2.5 rounded-xl border border-white/10 bg-[#111923]/90 px-3 py-2.5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-cyan-300">
        <Icon size={16} />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-[11px] font-semibold text-slate-200">{title}</span>
        {subtitle && <span className="block truncate font-mono text-[9px] uppercase tracking-[0.12em] text-slate-500">{subtitle}</span>}
      </span>
    </div>
  )
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "ai-review") {
    return (
      <div className="flex h-full w-full flex-col justify-center px-7 sm:px-10">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-300/80">automated code intelligence</p>
            <p className="mt-1 text-xs text-slate-500">PR → AI review → actionable findings</p>
          </div>
          <Sparkles size={20} className="text-cyan-300/70" />
        </div>
        <div className="grid grid-cols-3 items-center gap-2">
          <Node icon={GitBranch} title="Pull Request" subtitle="Azure DevOps" />
          <div className="flex justify-center text-cyan-400/70"><ArrowRight size={17} /></div>
          <Node icon={Bot} title="GPT-4o mini" subtitle="AI review" />
        </div>
        <div className="mx-auto my-2 h-5 w-px bg-cyan-400/30" />
        <div className="grid grid-cols-3 items-center gap-2">
          <Node icon={ShieldCheck} title="Critical / High" subtitle="security + correctness" />
          <div className="flex justify-center text-cyan-400/70"><ArrowRight size={17} /></div>
          <Node icon={Server} title="Build Service" subtitle="PR comment" />
        </div>
        <p className="mt-3 text-center font-mono text-[9px] text-slate-500">shared YAML template · diff validation · cost controls</p>
      </div>
    )
  }

  if (type === "netbird") {
    return (
      <div className="flex h-full w-full flex-col justify-center px-7 sm:px-10">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-300/80">secure network access</p>
            <p className="mt-1 text-xs text-slate-500">Azure VM → NetBird → private connectivity</p>
          </div>
          <Network size={20} className="text-cyan-300/70" />
        </div>
        <div className="grid grid-cols-3 items-center gap-2">
          <Node icon={Cloud} title="Azure VM" subtitle="Ubuntu 24.04" />
          <div className="flex justify-center text-cyan-400/70"><ArrowRight size={17} /></div>
          <Node icon={ShieldCheck} title="NetBird" subtitle="zero-trust VPN" />
        </div>
        <div className="mx-auto my-2 h-5 w-px bg-cyan-400/30" />
        <div className="grid grid-cols-3 items-center gap-2">
          <Node icon={Server} title="Nginx" subtitle="TLS + proxy" />
          <div className="flex justify-center text-cyan-400/70"><ArrowRight size={17} /></div>
          <Node icon={Bot} title="Entra ID" subtitle="SSO" />
        </div>
        <p className="mt-3 text-center font-mono text-[9px] text-slate-500">Docker Compose · gRPC · WebSocket · STUN</p>
      </div>
    )
  }

  if (type === "cicd") {
    return (
      <div className="flex h-full w-full flex-col justify-center px-7 sm:px-10">
        <div className="mb-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-300/80">enterprise delivery</p>
          <p className="mt-1 text-xs text-slate-500">build → test → deploy</p>
        </div>
        <div className="grid grid-cols-3 items-center gap-2">
          <Node icon={GitBranch} title="Git" subtitle="source" />
          <div className="flex justify-center text-cyan-400/70"><ArrowRight size={17} /></div>
          <Node icon={Workflow} title="Jenkins" subtitle="pipeline" />
        </div>
        <div className="mx-auto my-2 h-5 w-px bg-cyan-400/30" />
        <div className="grid grid-cols-3 items-center gap-2">
          <Node icon={Code2} title="Shared Library" subtitle="reusable steps" />
          <div className="flex justify-center text-cyan-400/70"><ArrowRight size={17} /></div>
          <Node icon={Server} title="Azure DevOps" subtitle="delivery" />
        </div>
        <p className="mt-3 text-center font-mono text-[9px] text-slate-500">GitHub Actions · security · deployment</p>
      </div>
    )
  }

  return (
    <div className="flex h-full w-full flex-col justify-center px-7 sm:px-10">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-300/80">infrastructure automation</p>
          <p className="mt-1 text-xs text-slate-500">Terraform → Ansible → Kafka</p>
        </div>
        <Cloud size={20} className="text-sky-300/70" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <Node icon={Layers3} title="Terraform" subtitle="provision" />
        <Node icon={Terminal} title="Ansible" subtitle="configure" />
        <Node icon={Database} title="Kafka" subtitle="cluster" />
      </div>
      <div className="relative my-3 h-7">
        <div className="absolute left-[16%] right-[16%] top-1/2 border-t border-dashed border-cyan-400/20" />
        <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 border-l border-dashed border-cyan-400/20" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300" />
      </div>
      <div className="mx-auto w-2/3"><Node icon={Network} title="AWS / Azure" subtitle="cloud infrastructure" /></div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="border-y border-white/5 bg-white/[0.015] py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">04 / PROJECTS</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Selected engineering work.</h2>
          </div>
          <a href="https://github.com/himanshu085" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300">
            View GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1018] transition hover:-translate-y-1 hover:border-cyan-400/25">
              <div className="relative aspect-[16/8.5] overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,.12),transparent_48%),linear-gradient(135deg,#101824,#080b11)]">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.07) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
                <div className="relative z-10 h-full"><ProjectVisual type={project.visual} /></div>
                <span className="absolute left-5 top-5 z-20 rounded-full border border-cyan-400/20 bg-[#070a0f]/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-300">{project.label}</span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <a href={project.url} target="_blank" rel="noreferrer" aria-label={"Open " + project.title + " on GitHub"} className="rounded-lg border border-white/10 p-2 text-slate-400 hover:border-cyan-400/30 hover:text-cyan-300"><Github size={17} /></a>
                </div>
                <p className="mt-3 leading-7 text-slate-500">{project.description}</p>

                {Array.isArray(project.tags[0]) ? (
                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {project.tags.map(([name, src]) => (
                      <div key={name} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.06]">
                          <img src={src} alt={name} className="h-4.5 w-4.5 object-contain" />
                        </span>
                        <span className="text-xs font-medium text-slate-300">{name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span key={tag} className="rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300">{tag}</span>)}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
