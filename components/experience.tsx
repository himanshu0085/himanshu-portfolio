import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "DevOps Engineer L2",
      company: "OpsTree Global Solutions",
      location: "Noida, Uttar Pradesh, India",
      period: "Jan 2026 - Present",
      description:
        "Working on multiple client projects including Fincart (Azure-based Fintech), PineLabs (AWS-based Payment Solutions), and Maino.ai (AWS-based AI Platform). Designing and implementing end-to-end CI/CD pipelines and managing cloud infrastructure.",
      achievements: [
        "Designed CI/CD pipelines using Jenkins, GitHub Actions, and BuildPiper across multiple client environments",
        "Provisioned and managed infrastructure using Terraform on Azure and AWS",
        "Managed Kubernetes clusters, namespaces, RBAC, and production-grade workloads",
        "Implemented blue-green, canary, and rolling deployment strategies",
        "Integrated DevSecOps practices including SAST, DAST, and container security scanning",
        "Monitored applications using VictoriaMetrics, Prometheus, and Grafana",
      ],
      bgColor: "from-emerald-100 to-teal-100",
    },
    {
      title: "DevOps Engineer",
      company: "MyGurukulam (Powered by OpsTree)",
      location: "Noida, Uttar Pradesh, India",
      period: "Sept 2024 - Jan 2026",
      description:
        "Worked on BuildPiper - an enterprise-grade Kubernetes and microservices delivery platform, and OT-Microservices - a production-grade cloud-native Employee Management System. Supported production deployments for clients including TransBnk, IndePay, Traya Health, Apna Mart, Nykaa, and Airtel.",
      achievements: [
        "Designed microservice onboarding workflows mapping Git repos, Docker builds, and K8s manifests",
        "Built CI/CD pipelines using Jenkins and Maven for automated build, test, and deployment",
        "Provisioned cloud infrastructure using Terraform with Terragrunt for multi-environment configs",
        "Implemented modular Terraform code with S3 remote state and DynamoDB locking",
        "Configured Jenkins RBAC, SSO integration, Shared Libraries, and Job DSL",
        "Enabled Kubernetes autoscaling (HPA) and designed for high availability",
      ],
      bgColor: "from-blue-100 to-cyan-100",
    },
    {
      title: "Team Lead / Senior Talent Acquisition Specialist",
      company: "Transcend Staffing Solutions LLC",
      location: "Noida, Uttar Pradesh, India",
      period: "Mar 2022 - Jan 2023 | Freelance: Jan 2023 - Oct 2024",
      description:
        "Led and mentored recruitment teams sourcing for cloud, DevOps, and engineering roles. Handled full-cycle recruitment from requirement gathering to offer closure.",
      achievements: [
        "Led and mentored recruitment teams for cloud and DevOps roles",
        "Built and managed candidate pipelines through job portals and referrals",
        "Worked closely with hiring managers to align hiring needs",
        "Managed ATS/CRM systems for tracking and compliance",
      ],
      bgColor: "from-purple-100 to-pink-100",
    },
    {
      title: "Senior Talent Acquisition Associate",
      company: "Cynet Systems Inc",
      location: "Noida, India",
      period: "Apr 2019 - Mar 2022",
      description:
        "Managed full-cycle hiring for Cloud Engineers, DevOps, Java/.NET/React Developers, QA, and Analysts. Coordinated with direct clients, vendors, and staffing partners.",
      achievements: [
        "Maintained technology pipelines and identified hiring trends",
        "Screened and qualified candidates using skill matrices",
        "Managed full-cycle hiring including interviews and reference checks",
        "Coordinated with direct clients and staffing partners",
      ],
      bgColor: "from-pink-100 to-red-100",
    },
    {
      title: "Talent Acquisition Executive",
      company: "IVM Global Inc",
      location: "Trenton, NJ (Remote)",
      period: "Aug 2017 - Mar 2019",
      description:
        "Independently managed end-to-end recruitment lifecycle including screenings, interviews, and offer negotiations.",
      achievements: [
        "Managed end-to-end recruitment lifecycle independently",
        "Conducted screenings and scheduled interviews",
        "Prepared offer letters and handled negotiations",
        "Maintained candidate data using ATS/CRM platforms",
      ],
      bgColor: "from-yellow-100 to-orange-100",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`hover:shadow-2xl transition-all duration-300 bg-gradient-to-r ${exp.bgColor} border-4 border-white/50 hover:scale-105`}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    <p className="text-xl text-purple-700 mb-2 font-bold">{exp.company}</p>
                  </div>

                  <div className="flex flex-col md:items-end text-gray-700">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-5 w-5 mr-2 text-green-600" />
                      <span className="font-semibold">{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-green-600" />
                      <span className="font-semibold">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed font-medium">{exp.description}</p>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="font-medium">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8 drop-shadow-lg">Education</h3>
          <Card className="hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-indigo-100 to-purple-100 border-4 border-white/50 hover:scale-105">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Bachelor's Degree, Computer Science</h4>
                  <p className="text-lg text-purple-700 font-bold">Vishveshwarya Group of Institutions</p>
                </div>
                <div className="flex items-center text-gray-700 mt-2 md:mt-0">
                  <Calendar className="h-5 w-5 mr-2 text-green-600" />
                  <span className="font-semibold">2011 - 2015</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
