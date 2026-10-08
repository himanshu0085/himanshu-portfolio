"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react"

const FORM_SUBMIT_URL = "https://formsubmit.co/ajax/himanshuparashar085@gmail.com"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const validationResponse = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const validationResult = await validationResponse.json().catch(() => null)

      if (!validationResponse.ok) {
        throw new Error(validationResult?.error || "Please enter a valid email address.")
      }

      const response = await fetch(FORM_SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email.trim().toLowerCase(),
          _replyto: formData.email.trim().toLowerCase(),
          _subject: `Portfolio contact: ${formData.subject}`,
          message: formData.message,
          _honey: "",
        }),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok || result?.success === false) {
        console.error("FormSubmit rejected contact form:", response.status, result)
        throw new Error("Email delivery failed. Please try again or email me directly.")
      }

      setSubmitStatus({ type: "success", message: "Message sent. I’ll get back to you soon." })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Contact form submission failed:", error)
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Couldn’t send the message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldClass = "w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
  return <section id="contact" className="border-t border-white/5 py-24"><div className="section-shell"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">06 / CONTACT</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Let&apos;s build something reliable.</h2><p className="mt-5 max-w-md text-lg leading-8 text-slate-500">Have a DevOps challenge, cloud project or infrastructure role in mind? Send a note and let&apos;s talk.</p><div className="mt-8 space-y-3"><a href="mailto:himanshuparashar085@gmail.com" className="flex items-center gap-3 break-all rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm text-slate-300 transition hover:border-cyan-400/20"><Mail size={18} className="text-cyan-400"/>himanshuparashar085@gmail.com</a><div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm text-slate-400"><MapPin size={18} className="text-cyan-400"/>Noida, Uttar Pradesh, India</div></div></div><div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"><form onSubmit={handleSubmit} className="space-y-5"><div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="name" className="mb-2 block text-xs font-medium text-slate-400">Name</label><input id="name" name="name" value={formData.name} onChange={handleInputChange} required className={fieldClass} placeholder="Your name"/></div><div><label htmlFor="email" className="mb-2 block text-xs font-medium text-slate-400">Email</label><input id="email" type="email" name="email" value={formData.email} onChange={handleInputChange} required className={fieldClass} placeholder="you@example.com"/></div></div><div><label htmlFor="subject" className="mb-2 block text-xs font-medium text-slate-400">Subject</label><input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className={fieldClass} placeholder="What can I help with?"/></div><div><label htmlFor="message" className="mb-2 block text-xs font-medium text-slate-400">Message</label><textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className={fieldClass} placeholder="Tell me a little about the project..."/></div>{submitStatus.type && <div className={`rounded-xl border p-3 text-sm ${submitStatus.type === "success" ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-300" : "border-red-400/20 bg-red-400/5 text-red-300"}`}>{submitStatus.message}</div>}<button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"><Send size={16} className="mr-2"/>{isSubmitting ? "Sending..." : "Send message"}</button></form><a href="mailto:himanshuparashar085@gmail.com" className="mt-5 flex items-center justify-center gap-1 text-xs text-slate-500 hover:text-cyan-300">Prefer email? Write directly <ArrowUpRight size={13}/></a></div></div></div></section>
}
