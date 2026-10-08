import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "DevOps Engineer L2",
    company: "OpsTree Global Solutions",
    period: "Jan 2026 – Present",
    location: "Noida, India",
    description:
      "Working across Azure and AWS client environments, delivering production-grade cloud infrastructure, Kubernetes platforms, CI/CD automation, security, observability, and reliable release workflows.",
    projects: [
      "Fincart — Azure-based Fintech Platform",
      "PineLabs — AWS-based Payment Solutions",
      "Maino.ai — AWS-based AI Platform",
    ],
    achievements: [
      "Designed and implemented end-to-end CI/CD pipelines using Jenkins, GitHub Actions, and BuildPiper across multiple client environments.",
      "Provisioned and managed infrastructure using Terraform across Azure Cloud for Fincart and AWS for PineLabs and Maino.ai.",
      "Managed Kubernetes clusters, namespaces, RBAC, and production-grade workloads.",
      "Implemented blue-green, canary, and rolling deployment strategies for safer and more reliable releases.",
      "Integrated DevSecOps practices including SAST, DAST, and container image security scanning.",
      "Automated Docker image builds and streamlined container lifecycle processes.",
      "Monitored applications and infrastructure using VictoriaMetrics, Prometheus, and Grafana.",
      "Improved system scalability, reliability, and deployment efficiency across environments.",
      "Collaborated with development and product teams to standardize CI/CD and release workflows.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "MyGurukulam (Powered by OpsTree)",
    period: "Sept 2024 – Jan 2026",
    location: "Noida, India",
    description:
      "Worked on BuildPiper and OT-Microservices, supporting cloud-native delivery for production environments.",
    achievements: [
      "Designed microservice onboarding workflows connecting Git repositories, Docker builds and Kubernetes manifests.",
      "Built CI/CD pipelines with Jenkins and Maven for automated build, test and deployment.",
      "Provisioned multi-environment infrastructure with Terraform and Terragrunt using S3 remote state and DynamoDB locking.",
      "Configured Jenkins RBAC, SSO, Shared Libraries and Job DSL; worked with Kubernetes autoscaling and high availability.",
    ],
  },
  {
    title: "Team Lead / Senior Talent Acquisition Specialist",
    company: "Transcend Staffing Solutions LLC",
    period: "Mar 2022 – Jan 2023 · Freelance Jan 2023 – Oct 2024",
    location: "Noida, India",
    description:
      "Led recruitment operations across cloud, DevOps and engineering roles while managing full-cycle hiring.",
    achievements: [
      "Led and mentored recruitment teams for technical hiring.",
      "Built candidate pipelines and partnered with hiring managers on role alignment.",
      "Managed ATS/CRM workflows, client communication and offer closures.",
    ],
  },
  {
    title: "Senior Talent Acquisition Associate",
    company: "Cynet Systems Inc",
    period: "Apr 2019 – Mar 2022",
    location: "Noida, India",
    description:
      "Managed full-cycle hiring across cloud, DevOps, software engineering, QA and analytics roles.",
    achievements: [
      "Built technical candidate pipelines and skill-based shortlists.",
      "Coordinated interviews, feedback, reference checks and client submissions.",
      "Worked with direct clients, vendors and staffing partners.",
    ],
  },
  {
    title: "Talent Acquisition Executive",
    company: "IVM Global Inc",
    period: "Aug 2017 – Mar 2019",
    location: "Trenton, NJ · Remote",
    description:
      "Independently managed the end-to-end recruitment lifecycle across sourcing, screening and closure.",
    achievements: [
      "Managed screenings, interviews, feedback and negotiations.",
      "Maintained candidate records and pipelines using ATS/CRM platforms.",
    ],
  },
  {
    title: "Drive Test Engineer",
    company: "RedMango Analytics Pvt. Ltd.",
    period: "Sept 2015 – Apr 2017",
    location: "India",
    description:
      "Performed network drive testing and optimization for telecom sites.",
    achievements: [
      "Investigated coverage, handover and interference issues.",
      "Recommended network optimization changes across new and expansion sites.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">05 / EXPERIENCE</p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">A career across technology and people.</h2>

        <div className="relative mt-12 ml-3 border-l border-white/10 pl-8 md:ml-6 md:pl-10">
          {experiences.map((exp, index) => (
            <article key={exp.title + exp.company} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-cyan-400 bg-[#070a0f] md:-left-[2.85rem]" />

              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-xs text-cyan-400">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="mt-1 text-base font-medium text-slate-300">{exp.company}</p>
                </div>
                <div className="text-sm text-slate-500 md:text-right">
                  <p className="inline-flex items-center gap-2 md:justify-end">
                    <Calendar size={14} />{exp.period}
                  </p>
                  <p className="mt-1 inline-flex items-center gap-2 md:justify-end">
                    <MapPin size={14} />{exp.location}
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-4xl leading-7 text-slate-500">{exp.description}</p>

              {"projects" in exp && exp.projects && (
                <div className="mt-6 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">Client Projects</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
                    {exp.projects.map((project) => (
                      <div key={project} className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-3 text-sm leading-5 text-slate-300">
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Key Responsibilities</p>
                <ul className="mt-4 max-w-4xl space-y-2">
                  {exp.achievements.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.025] p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">EDUCATION</p>
          <div className="mt-4 flex flex-col justify-between gap-2 md:flex-row">
            <div>
              <h3 className="font-semibold text-white">Bachelor&apos;s Degree, Computer Science</h3>
              <p className="mt-1 text-sm text-slate-500">Vishveshwarya Group of Institutions</p>
            </div>
            <span className="text-sm text-slate-500">2011 – 2015</span>
          </div>
        </div>
      </div>
    </section>
  )
}
