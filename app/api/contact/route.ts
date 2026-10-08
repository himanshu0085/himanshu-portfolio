import dns from "node:dns/promises"
import { type NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

async function hasMailDomain(domain: string) {
  try {
    const records = await dns.resolveMx(domain)
    return records.length > 0
  } catch {
    try {
      const [ipv4, ipv6] = await Promise.allSettled([
        dns.resolve4(domain),
        dns.resolve6(domain),
      ])
      return (
        (ipv4.status === "fulfilled" && ipv4.value.length > 0) ||
        (ipv6.status === "fulfilled" && ipv6.value.length > 0)
      )
    } catch {
      return false
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    const normalizedEmail = String(email).trim().toLowerCase()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
    }

    const domain = normalizedEmail.split("@")[1]
    if (!domain || !(await hasMailDomain(domain))) {
      return NextResponse.json(
        { error: "That email domain does not appear to accept email. Please check the address." },
        { status: 400 },
      )
    }

    const response = await fetch("https://formsubmit.co/ajax/himanshuparashar085@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email: normalizedEmail,
        _replyto: normalizedEmail,
        _subject: `Portfolio contact: ${subject}`,
        message,
        _captcha: "true",
      }),
    })

    const result = await response.json().catch(() => null)

    if (!response.ok || result?.success === false) {
      console.error("FormSubmit rejected contact form:", response.status, result)
      return NextResponse.json(
        { error: "Email delivery failed. Please try again or email me directly." },
        { status: 502 },
      )
    }

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Unable to send the message right now. Please try again." },
      { status: 500 },
    )
  }
}
