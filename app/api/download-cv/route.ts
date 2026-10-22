export async function GET() {
  try {
    const pdfUrl = new URL(
      "/cv/Himanshu_Parashar_ATS_Resume_Oct_2026.pdf",
      process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "https://himanshu-profile-devops.vercel.app",
    )

    const response = await fetch(pdfUrl, { cache: "no-store" })

    if (!response.ok) {
      return new Response("PDF not found", { status: 404 })
    }

    const buffer = await response.arrayBuffer()

    return new Response(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Himanshu_Parashar_ATS_Resume_Oct_2026.pdf"',
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    })
  } catch (error) {
    console.error("Download CV error:", error)
    return new Response("Error downloading CV", { status: 500 })
  }
}
