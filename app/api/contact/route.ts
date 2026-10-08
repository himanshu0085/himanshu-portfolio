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

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: "service_ism8rey",
        template_id: "template_209ty7g",
        user_id: "Stx8-lGdQ8nvv1tet",
        template_params: {
          from_name: name,
          from_email: email,
          subject,
          message,
          to_name: "Himanshu Parashar",
          to_email: "himanshuparashar085@gmail.com",
          reply_to: email,
        },
      }),
    })

    const responseText = await response.text()

    if (!response.ok) {
      console.error("EmailJS rejected contact form:", response.status, responseText)
      return NextResponse.json(
        { error: "Email service rejected the message. Please try again later." },
        { status: 502 },
      )
    }

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
