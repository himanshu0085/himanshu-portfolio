"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  const downloadCV = async () => {
    try {
      const response = await fetch("/api/download-cv")
      if (!response.ok) {
        throw new Error("Failed to download CV")
      }
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Himanshu_Parashar_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download error:", error)
      alert("Failed to download CV. Please try again.")
    }
  }

  const generatePDF = async () => {
    try {
      // Dynamic import of jsPDF
      const { jsPDF } = await import("jspdf")

      const doc = new jsPDF()
      let yPos = 20

      // Helper function to add text with word wrapping
      const addText = (text: string, x: number, y: number, maxWidth = 170) => {
        const splitText = doc.splitTextToSize(text, maxWidth)
        doc.text(splitText, x, y)
        return y + splitText.length * 5
      }

      // Header - Name and Title
      doc.setFont("helvetica", "bold")
      doc.setFontSize(18)
      doc.text("HIMANSHU PARASHAR", 20, yPos)
      yPos += 8

      doc.setFontSize(14)
      doc.text("DevOps Engineer", 20, yPos)
      yPos += 15

      // Contact Information - Replace emoji section with:
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      doc.text("Location: Noida, Uttar Pradesh, India", 20, yPos)
      yPos += 5
      doc.text("Phone: +91-8826011625", 20, yPos)
      yPos += 5
      doc.text("Email: himanshuparashar085@gmail.com", 20, yPos)
      yPos += 5
      doc.text("LinkedIn: https://linkedin.com/in/himanshu-parashar-2b541194", 20, yPos)
      yPos += 5
      doc.text("Portfolio: https://himanshu-profile-devops.vercel.app", 20, yPos)
      yPos += 15

      // Note Section
      doc.setFont("helvetica", "bold")
      doc.setFontSize(10)
      doc.text("Note:", 20, yPos)
      doc.setFont("helvetica", "normal")
      yPos = addText(
        "For a detailed resume, please email me, and I will provide you with the updated version. Before calling, I kindly request that you first share the job description with me via email. I am proactive and responsive on my email. Thank you.",
        20,
        yPos + 5,
      )
      yPos += 10

      // Professional Summary
      doc.setFont("helvetica", "bold")
      doc.setFontSize(12)
      doc.text("PROFESSIONAL SUMMARY", 20, yPos)
      yPos += 8

      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      yPos = addText(
        "DevOps Engineer with practical experience in cloud infrastructure, CI/CD automation, infrastructure as code, and container orchestration. Skilled in utilizing tools such as Terraform, Jenkins, Ansible, Docker, and Kubernetes to streamline deployment processes and improve operational reliability. Adept at bridging development and operations teams to deliver efficient and scalable solutions in cloud-native environments.",
        20,
        yPos,
      )
      yPos += 10

      // Technical Skills
      doc.setFont("helvetica", "bold")
      doc.setFontSize(12)
      doc.text("TECHNICAL SKILLS", 20, yPos)
      yPos += 8

      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      const skills = [
        "- Infrastructure as Code: Terraform, Terragrunt",
        "- Cloud Platforms: AWS (EC2, IAM, CloudWatch, S3, DynamoDB)",
        "- Configuration Management: Ansible",
        "- CI/CD Tools: Jenkins (Declarative, Scripted, Shared Library, Job DSL), Maven",
        "- Containers & Orchestration: Docker, Kubernetes",
        "- Languages & Frameworks: Go, Java, Python, React.js",
        "- Databases: ScyllaDB, PostgreSQL",
        "- Caching & Messaging: Redis, Apache Kafka",
        "- Monitoring & Logging: Prometheus, Grafana, CloudWatch",
        "- Scripting & Version Control: Bash, Git",
      ]

      skills.forEach((skill) => {
        yPos = addText(skill, 20, yPos)
        yPos += 2
      })
      yPos += 8

      // Experience Section
      doc.setFont("helvetica", "bold")
      doc.setFontSize(12)
      doc.text("EXPERIENCE", 20, yPos)
      yPos += 10

      // Current Job
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text("DevOps Engineer", 20, yPos)
      yPos += 5
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      doc.text("MyGurukulam (Powered by OpsTree), Noida", 20, yPos)
      yPos += 5
      doc.text("Nov 2024 – Present", 20, yPos)
      yPos += 5
      doc.text("Project: OT-Microservices", 20, yPos)
      yPos += 8

      const currentJobResp = [
        "- Built modular infrastructure using Terraform and Terragrunt, managing state in S3 and DynamoDB",
        "- Created CI/CD pipelines with Jenkins and Maven",
        "- Developed reusable Ansible roles for CentOS and Ubuntu",
        "- Automated Docker image builds and Kubernetes cluster deployments",
        "- Implemented blue-green and canary deployments using AWS",
        "- Configured Jenkins job access control and integrated SSO authentication",
        "- Managed monitoring with Prometheus and visualized logs using Grafana",
      ]

      currentJobResp.forEach((resp) => {
        if (yPos > 270) {
          doc.addPage()
          yPos = 20
        }
        yPos = addText(resp, 20, yPos)
        yPos += 2
      })
      yPos += 8

      // Check if we need a new page
      if (yPos > 240) {
        doc.addPage()
        yPos = 20
      }

      // Team Lead Position
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text("Team Lead / Senior Talent Acquisition Specialist", 20, yPos)
      yPos += 5
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      doc.text("Transcend Staffing Solutions LLC, Noida", 20, yPos)
      yPos += 5
      doc.text("Mar 2022 – Jan 2023", 20, yPos)
      yPos += 5
      doc.text("Freelance IT Recruiter | Jan 2023 – Oct 2024", 20, yPos)
      yPos += 8

      const teamLeadResp = [
        "- Led and mentored a recruitment team responsible for sourcing technical talent across multiple verticals including cloud, development, and infrastructure",
        "- Proactively built candidate pipelines through job portals, referrals, and internal databases to meet urgent and recurring client demands",
        "- Handled full-cycle recruitment from requirement analysis to onboarding, including offer negotiations and closures",
        "- Maintained close collaboration with delivery heads and hiring managers to ensure candidate alignment with role expectations",
        "- Coordinated directly with clients and vendor partners to manage job requisitions and prioritize critical requirements",
        "- Utilized ATS and CRM tools on a daily basis to maintain accurate tracking and reporting across all recruitment stages",
        "- Ensured timely pre- and post-interview follow-ups, feedback sharing, and reference checks to facilitate smooth closures",
      ]

      teamLeadResp.forEach((resp) => {
        if (yPos > 270) {
          doc.addPage()
          yPos = 20
        }
        yPos = addText(resp, 20, yPos)
        yPos += 2
      })
      yPos += 8

      // Check if we need a new page for remaining content
      if (yPos > 200) {
        doc.addPage()
        yPos = 20
      }

      // Senior Talent Acquisition Associate
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text("Senior Talent Acquisition Associate", 20, yPos)
      yPos += 5
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      doc.text("Cynet Systems Inc, Noida", 20, yPos)
      yPos += 5
      doc.text("Apr 2019 – Mar 2022", 20, yPos)
      yPos += 8

      const seniorAssociateResp = [
        "- Maintained data bank, tracked in-demand technologies, and built relationships with potential candidates sourced via job portals",
        "- Screened, cold-called, and qualified candidates; formatted resumes for client presentation",
        "- Conducted initial screenings, shortlisting, follow-ups, and reference checks in collaboration with hiring stakeholders",
        "- Communicated with clients and vendors to understand and fulfill technical requirements",
        "- Recruited for roles including cloud engineers, Java/.NET/React developers, QA, data engineers, and analysts",
        "- Worked daily with ATS and CRM tools to manage applicant pipelines",
        "- Handled direct client, vendor, and third-party submissions for various projects",
      ]

      seniorAssociateResp.forEach((resp) => {
        if (yPos > 270) {
          doc.addPage()
          yPos = 20
        }
        yPos = addText(resp, 20, yPos)
        yPos += 2
      })
      yPos += 8

      // Add remaining positions with similar formatting...
      // Talent Acquisition Executive
      if (yPos > 240) {
        doc.addPage()
        yPos = 20
      }

      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text("Talent Acquisition Executive", 20, yPos)
      yPos += 5
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      doc.text("IVM Global Inc, Trenton, NJ (Remote)", 20, yPos)
      yPos += 5
      doc.text("Aug 2017 – Mar 2019", 20, yPos)
      yPos += 8

      const talentExecResp = [
        "- Independently managed the end-to-end recruitment lifecycle",
        "- Conducted initial screenings, scheduled interviews, managed feedback",
        "- Prepared offer letters, handled negotiations, ensured closures",
        "- Sourced candidates using job portals, referrals, and vendor networks",
        "- Worked with team leads, delivery heads, and HR for finalization",
        "- Maintained and updated records using ATS/CRM platforms",
      ]

      talentExecResp.forEach((resp) => {
        yPos = addText(resp, 20, yPos)
        yPos += 2
      })
      yPos += 8

      // Drive Test Engineer
      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text("Drive Test Engineer", 20, yPos)
      yPos += 5
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      doc.text("RedMango Analytics Pvt. Ltd.", 20, yPos)
      yPos += 5
      doc.text("Sept 2015 – Apr 2017", 20, yPos)
      yPos += 8

      const driveTestResp = [
        "- Performed network drive tests and optimization for new/expansion telecom sites",
        "- Identified and resolved handover failures, hardware issues, and poor coverage",
        "- Recommended tilt/orientation changes, added/removed neighbors, fixed interference",
      ]

      driveTestResp.forEach((resp) => {
        yPos = addText(resp, 20, yPos)
        yPos += 2
      })
      yPos += 10

      // Education
      if (yPos > 250) {
        doc.addPage()
        yPos = 20
      }

      doc.setFont("helvetica", "bold")
      doc.setFontSize(12)
      doc.text("EDUCATION", 20, yPos)
      yPos += 8

      doc.setFont("helvetica", "bold")
      doc.setFontSize(11)
      doc.text("Bachelor's Degree in Technology", 20, yPos)
      yPos += 5
      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      doc.text("Vishveshwarya Group of Institutions", 20, yPos)
      yPos += 5
      doc.text("2011 – 2015", 20, yPos)
      yPos += 15

      // Certifications
      doc.setFont("helvetica", "bold")
      doc.setFontSize(12)
      doc.text("CERTIFICATIONS", 20, yPos)
      yPos += 8

      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      const certs = [
        "- Microsoft Technology Associate: Database Administration Fundamentals (MTA)",
        "- DevOps Ninja Certification in DevOps Practices",
        "- Microsoft Certified IT Professional: Database Administrator",
      ]

      certs.forEach((cert) => {
        doc.text(cert, 20, yPos)
        yPos += 5
      })
      yPos += 10

      // Professional Strengths
      doc.setFont("helvetica", "bold")
      doc.setFontSize(12)
      doc.text("PROFESSIONAL STRENGTHS", 20, yPos)
      yPos += 8

      doc.setFont("helvetica", "normal")
      doc.setFontSize(10)
      const strengths = [
        "- Infrastructure Automation using Terraform & Terragrunt",
        "- CI/CD Pipeline Design with Jenkins & Maven",
        "- Container Orchestration via Kubernetes & Docker",
        "- Strong cross-functional communication and stakeholder coordination",
        "- Experience across both technical DevOps roles and talent acquisition",
      ]

      strengths.forEach((strength) => {
        doc.text(strength, 20, yPos)
        yPos += 5
      })

      // Save the PDF
      doc.save("Himanshu_Parashar_DevOps_Engineer_CV.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("PDF generation failed. Please try again or contact support.")
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/images/himanshu-new.png"
            alt="Himanshu Parashar - DevOps Engineer"
            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl object-cover"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">Himanshu Parashar</h1>

        <p className="text-xl md:text-2xl text-yellow-300 mb-6 font-semibold">DevOps Engineer</p>

        <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto">
          DevOps Enthusiast with hands-on experience in cloud technologies, automation, and CI/CD practices. Passionate
          about driving efficient and reliable infrastructure management through modern DevOps tools and methodologies.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold shadow-lg">
            <Mail className="mr-2 h-4 w-4" />
            <a href="mailto:himanshuparashar085@gmail.com">Get In Touch</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-purple-600 font-semibold"
            onClick={downloadCV}
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com/himanshu085" className="text-yellow-300 hover:text-white transition-colors">
            <Github className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-parashar-2b541194"
            className="text-yellow-300 hover:text-white transition-colors"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="mailto:himanshuparashar085@gmail.com" className="text-yellow-300 hover:text-white transition-colors">
            <Mail className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  )
}
