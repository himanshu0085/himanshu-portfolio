import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
    }

    const response = await fetch("https://formsubmit.co/ajax/himanshuparashar085@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
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

    return NextResponse.json({
      message: "Message sent successfully.",
      activationRequired: false,
    }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Unable to send the message right now. Please email me directly." },
      { status: 500 },
    )
  }
}
