import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "CI/CD Pipeline Implementation of Project OT-Microservices",
      description:
        "Comprehensive CI/CD pipeline setup demonstrating modern DevOps practices with automated testing, building, and deployment processes using industry-standard tools.",
      image: "/images/jenkins-cicd.png",
      technologies: ["Jenkins", "Git", "CI/CD", "Java", "Maven"],
      liveUrl: "https://github.com/himanshu085/ot-microservices",
      githubUrl: "https://github.com/himanshu085/ot-microservices",
      bgColor: "from-blue-400 to-purple-500",
    },
    {
      title: "Terraform Infrastructure Code for Kafka",
      description:
        "Infrastructure as Code implementation using Terraform for automated Kafka cluster provisioning and management, demonstrating modern cloud infrastructure automation and scalable deployment practices.",
      image: "/images/kafka-logo.png",
      technologies: ["Terraform", "Apache Kafka", "Infrastructure as Code", "Cloud Infrastructure"],
      liveUrl: "https://github.com/himanshu085/kafka_dynamic",
      githubUrl: "https://github.com/himanshu085/kafka_dynamic",
      bgColor: "from-green-400 to-teal-500",
    },
    {
      title: "Dynamic Kafka Roles",
      description:
        "Advanced Ansible roles for dynamic Kafka deployment and management, showcasing scalable infrastructure automation and role-based configuration management.",
      image: "/images/ansible-roles.png",
      technologies: ["Ansible", "Apache Kafka", "Dynamic Configuration", "DevOps"],
      liveUrl: "https://github.com/himanshu085/roles_kafka_dynamic",
      githubUrl: "https://github.com/himanshu085/roles_kafka_dynamic",
      bgColor: "from-orange-400 to-red-500",
    },
    {
      title: "Shared Library for CI/CD",
      description:
        "Reusable Jenkins shared library containing common CI/CD functions and utilities, promoting code reusability and standardization across multiple projects.",
      image: "/images/jenkins-cicd.png",
      technologies: ["Jenkins", "Groovy", "Shared Libraries", "CI/CD", "Automation"],
      liveUrl: "https://github.com/himanshu085/shared-Library",
      githubUrl: "https://github.com/himanshu085/shared-Library",
      bgColor: "from-pink-400 to-purple-500",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">DevOps Projects</h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white border-4 border-white/50 hover:scale-105"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.bgColor} opacity-20`} />
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-yellow-200 to-orange-200 text-orange-800 text-sm rounded-full font-bold border-2 border-orange-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold shadow-lg"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 text-orange-800 border-2 border-orange-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 font-bold"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
