"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      // EmailJS Configuration
      const emailJSConfig = {
        serviceID: "service_ism8rey",
        templateID: "template_209ty7g",
        publicKey: "Stx8-lGdQ8nvv1tet",
      }

      // Send email to Himanshu
      const emailPayload = {
        service_id: emailJSConfig.serviceID,
        template_id: emailJSConfig.templateID,
        user_id: emailJSConfig.publicKey,
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Himanshu Parashar",
          to_email: "himanshuparashar085@gmail.com",
          reply_to: formData.email,
        },
      }

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      })

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Your message has been sent successfully! I will respond within 24-48 hours.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        const errorText = await response.text()
        console.error("Email error:", errorText)
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setSubmitStatus({
        type: "error",
        message:
          "There was an issue sending your message. Please try emailing me directly at himanshuparashar085@gmail.com",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">Get In Touch</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-6">Let's work together</h3>

            <p className="text-lg text-purple-100 mb-8 leading-relaxed font-medium">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
              to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <Mail className="h-6 w-6 text-yellow-300 mr-4" />
                <a
                  href="mailto:himanshuparashar085@gmail.com"
                  className="text-white font-medium hover:text-yellow-300 transition-colors"
                >
                  himanshuparashar085@gmail.com
                </a>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <MapPin className="h-6 w-6 text-yellow-300 mr-4" />
                <span className="text-white font-medium">Noida, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-white to-yellow-50 border-4 border-white/50 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all font-medium"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all font-medium"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-800 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all font-medium"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all font-medium"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-red-100 text-red-800 border border-red-300"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-purple-900 font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <div className="mt-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>📧 Direct Email:</strong>{" "}
                    <a
                      href="mailto:himanshuparashar085@gmail.com"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      himanshuparashar085@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
