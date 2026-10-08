import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Github,
  Layers3,
  Network,
  Play,
  Server,
  Terminal,
  Workflow,
} from "lucide-react"

const projects = [
  {
    title: "OT-Microservices CI/CD",
    description:
      "A production-oriented delivery workflow for automated build, test and deployment of a Java microservices project.",
    tags: ["Jenkins", "GitHub Actions", "Azure DevOps", "Maven"],
    url: "https://github.com/himanshu085/ot-microservices",
    label: "CI/CD",
    visual: "cicd",
  },
  {
    title: "Dynamic Kafka Infrastructure",
    description:
      "Terraform-based infrastructure code for repeatable Kafka cluster provisioning and cloud infrastructure automation.",
    tags: ["Terraform", "AWS", "Azure", "Kafka"],
    url: "https://github.com/himanshu085/kafka_dynamic",
    label: "Cloud + IaC",
    visual: "cloud",
  },
  {
    title: "Dynamic Kafka Ansible Roles",
    description:
      "Reusable Ansible roles for dynamic Kafka deployment and configuration, designed around scalable automation.",
    tags: ["Ansible", "Kafka", "Linux", "Automation"],
    url: "https://github.com/himanshu085/roles_kafka_dynamic",
    label: "Automation",
    visual: "automation",
  },
  {
    title: "Jenkins Shared Library",
    description:
      "Reusable CI/CD functions and utilities that standardize pipeline patterns across multiple projects.",
    tags: ["Jenkins", "GitHub Actions", "Groovy", "CI/CD"],
    url: "https://github.com/himanshu085/shared-Library",
    label: "Platform Engineering",
    visual: "library",
  },
]

function Node({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: typeof GitBranch
  title: string
  subtitle?: string
}) {
  return (
    <div className="flex min-w-0 items-center gap-2.5 rounded-xl border border-white/10 bg-[#111923]/90 px-3 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,.25)]">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-cyan-300">
        <Icon size={16} strokeWidth={1.8} />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-[11px] font-semibold text-slate-200">{title}</span>
        {subtitle && <span className="block truncate font-mono text-[9px] uppercase tracking-[0.12em] text-slate-500">{subtitle}</span>}
      </span>
    </div>
  )
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "cicd") {
    return (
      <div className="relative flex h-full w-full flex-col justify-center px-7 sm:px-10">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-300/80">delivery pipeline</p>
            <p className="mt-1 text-xs text-slate-500">build → test → deploy</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-2.5 py-1 font-mono text-[9px] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            passing
          </span>
        </div>
        <div className="grid grid-cols-3 items-center gap-2">
          <Node icon={GitBranch} title="Git push" subtitle="source" />
          <div className="flex items-center justify-center text-cyan-400/70"><ArrowRight size={17} /></div>
          <Node icon={Workflow} title="Jenkins" subtitle="pipeline" />
        </div>
        <div className="mx-auto my-2 flex h-5 w-px bg-gradient-to-b from-cyan-400/50 to-blue-500/20" />
        <div className="grid grid-cols-3 items-center gap-2">
          <Node icon={Code2} title="Maven" subtitle="build + test" />
          <div className="flex items-center justify-center text-cyan-400/70"><ArrowRight size={17} /></div>
          <Node icon={Server} title="Azure DevOps" subtitle="delivery" />
        </div>
      </div>
    )
  }

  if (type === "cloud") {
    return (
      <div className="relative flex h-full w-full flex-col justify-center px-7 sm:px-10">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-300/80">infrastructure graph</p>
            <p className="mt-1 text-xs text-slate-500">repeatable Kafka provisioning</p>
          </div>
          <Cloud size={20} className="text-sky-300/70" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Node icon={Layers3} title="Terraform" subtitle="modules" />
          <Node icon={Cloud} title="AWS / Azure" subtitle="compute" />
          <Node icon={Database} title="Kafka" subtitle="cluster" />
        </div>
        <div className="relative my-3 h-8">
          <div className="absolute left-[16%] right-[16%] top-1/2 border-t border-dashed border-cyan-400/20" />
          <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 border-l border-dashed border-cyan-400/20" />
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,.55)]" />
        </div>
        <div className="mx-auto w-2/3">
          <Node icon={Network} title="Provisioned cluster" subtitle="scalable + repeatable" />
        </div>
      </div>
    )
  }

  if (type === "automation") {
    return (
      <div className="relative flex h-full w-full flex-col justify-center px-7 sm:px-10">
        <div className="mb-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-300/80">configuration automation</p>
          <p className="mt-1 text-xs text-slate-500">roles → hosts → Kafka</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1"><Node icon={Terminal} title="Ansible" subtitle="roles" /></div>
          <ArrowRight size={17} className="shrink-0 text-cyan-400/70" />
          <div className="flex-1"><Node icon={Server} title="Linux hosts" subtitle="configured" /></div>
        </div>
        <div className="my-3 ml-[12%] h-6 border-l border-dashed border-cyan-400/20" />
        <div className="mx-auto w-3/4">
          <Node icon={Database} title="Kafka deployment" subtitle="dynamic configuration" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex h-full w-full flex-col justify-center px-7 sm:px-10">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-300/80">platform primitives</p>
          <p className="mt-1 text-xs text-slate-500">shared pipeline building blocks</p>
        </div>
        <Boxes size={20} className="text-cyan-300/70" />
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <Node icon={Workflow} title="Jenkins" subtitle="shared library" />
        <ArrowRight size={17} className="text-cyan-400/70" />
        <Node icon={Play} title="Pipelines" subtitle="reusable steps" />
      </div>
      <div className="my-3 flex justify-center">
        <div className="h-6 border-l border-dashed border-cyan-400/20" />
      </div>
      <div className="mx-auto w-3/4">
        <Node icon={Code2} title="Groovy utilities" subtitle="standardized delivery" />
      </div>
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
          <a
            href="https://github.com/himanshu085"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
          >
            View GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1018] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_20px_60px_rgba(0,0,0,.28)]"
            >
              <div className="relative aspect-[16/8.5] overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,.12),transparent_48%),linear-gradient(135deg,#101824,#080b11)]">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(148,163,184,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.07) 1px,transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(7,10,15,.38)_100%)]" />
                <div className="relative z-10 h-full">
                  <ProjectVisual type={project.visual} />
                </div>
                <span className="absolute left-5 top-5 z-20 rounded-full border border-cyan-400/20 bg-[#070a0f]/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-300 backdrop-blur">
                  {project.label}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={"Open " + project.title + " on GitHub"}
                    className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    <Github size={17} />
                  </a>
                </div>
                <p className="mt-3 leading-7 text-slate-500">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
