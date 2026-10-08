export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/himanshu-new.png"
              alt="Himanshu Parashar"
              className="rounded-lg shadow-2xl w-full object-cover border-4 border-white"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-green-50 leading-relaxed">
              Hello! I'm Himanshu, I am a DevOps Enthusiast and Engineer with hands-on experience in cloud technologies,
              automation, and CI/CD practices. I specialize in tools like AWS, Terraform, Jenkins, Docker, Kubernetes,
              and Ansible to drive efficient and reliable infrastructure management.
            </p>

            <p className="text-lg text-green-50 leading-relaxed">
              I have practical experience in automating infrastructure with Terraform, setting up CI/CD pipelines using
              Jenkins, and orchestrating containers with Docker and Kubernetes. With a keen interest in DevOps
              methodologies, I am committed to improving operational workflows and delivering scalable infrastructure
              solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <h3 className="font-semibold text-yellow-300 mb-2">Cloud Infrastructure</h3>
                <p className="text-green-100">AWS | Terraform | Jenkins</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <h3 className="font-semibold text-yellow-300 mb-2">Container Orchestration</h3>
                <p className="text-green-100">Docker | Kubernetes | Ansible</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <h3 className="font-semibold text-yellow-300 mb-2">CI/CD & Automation</h3>
                <p className="text-green-100">CI/CD Pipelines | Infrastructure as Code</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <h3 className="font-semibold text-yellow-300 mb-2">Monitoring & Tools</h3>
                <p className="text-green-100">Git | Maven | Prometheus | Grafana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
