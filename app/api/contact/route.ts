import dns from "node:dns/promises"
import { type NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

async function hasMailDomain(domain: string) {
  try {
    const records = await dns.resolveMx(domain)
    return records.length > 0
  } catch {
    const [ipv4, ipv6] = await Promise.allSettled([
      dns.resolve4(domain),
      dns.resolve6(domain),
    ])

    return (
      (ipv4.status === "fulfilled" && ipv4.value.length > 0) ||
      (ipv6.status === "fulfilled" && ipv6.value.length > 0)
    )
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

    return NextResponse.json({ valid: true }, { status: 200 })
  } catch (error) {
    console.error("Contact validation error:", error)
    return NextResponse.json(
      { error: "Unable to validate the email address right now. Please try again." },
      { status: 500 },
    )
  }
}
