import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Server, Settings, Database, Monitor, GitBranch } from "lucide-react"

export function Skills() {
  const skills = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "AWS, CloudWatch, Infrastructure as Code",
      level: 90,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-100 to-cyan-100",
    },
    {
      icon: Settings,
      title: "CI/CD & Automation",
      description: "Jenkins, Git, Maven, CI/CD Pipelines",
      level: 95,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-100 to-emerald-100",
    },
    {
      icon: Server,
      title: "Container Orchestration",
      description: "Docker, Kubernetes, Container Management",
      level: 85,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-100 to-pink-100",
    },
    {
      icon: Database,
      title: "Infrastructure as Code",
      description: "Terraform, Ansible, Configuration Management",
      level: 88,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-100 to-red-100",
    },
    {
      icon: Monitor,
      title: "Monitoring & Observability",
      description: "Prometheus, Grafana, AWS CloudWatch",
      level: 80,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-100 to-purple-100",
    },
    {
      icon: GitBranch,
      title: "Version Control & Scripting",
      description: "Git, Bash Scripting, Linux, Apache Kafka",
      level: 90,
      color: "from-teal-500 to-green-500",
      bgColor: "bg-gradient-to-br from-teal-100 to-green-100",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={`hover:shadow-2xl transition-all duration-300 ${skill.bgColor} border-2 border-white/50 hover:scale-105`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <skill.icon className="h-10 w-10 text-gray-800 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">{skill.title}</h3>
                </div>

                <p className="text-gray-700 mb-4 font-medium">{skill.description}</p>

                <div className="w-full bg-white/50 rounded-full h-4 mb-2">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-1000 shadow-lg`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-sm text-gray-700 font-semibold">{skill.level}% Proficiency</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8 drop-shadow-lg">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center bg-gradient-to-br from-blue-100 to-purple-100 border-2 border-white/50 hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <h4 className="font-bold text-gray-800 mb-2">Microsoft Technology Associate</h4>
                <p className="text-gray-700 text-sm font-medium">Database Administration Fundamentals (MTA)</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-green-100 to-teal-100 border-2 border-white/50 hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <h4 className="font-bold text-gray-800 mb-2">DevOps Ninja</h4>
                <p className="text-gray-700 text-sm font-medium">Advanced DevOps Practices</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-pink-100 to-red-100 border-2 border-white/50 hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <h4 className="font-bold text-gray-800 mb-2">Microsoft Certified IT Professional</h4>
                <p className="text-gray-700 text-sm font-medium">Database Administrator</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
