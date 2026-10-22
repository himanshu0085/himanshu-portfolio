export async function GET(request: Request) {
  try {
    const pdfUrl = new URL(
      "/cv/Himanshu_Parashar_ATS_Resume_Oct_2026.pdf",
      request.url,
    )

    const response = await fetch(pdfUrl, { cache: "no-store" })

    if (!response.ok) {
      console.error("Resume PDF fetch failed:", response.status, pdfUrl.pathname)
      return new Response("Updated resume PDF not found", { status: 404 })
    }

    const contentType = response.headers.get("content-type") || ""
    if (!contentType.includes("application/pdf")) {
      console.error("Resume URL did not return a PDF:", contentType)
      return new Response("Resume URL did not return a PDF", { status: 502 })
    }

    return new Response(await response.arrayBuffer(), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Himanshu_Parashar_ATS_Resume_Oct_2026.pdf"',
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    })
  } catch (error) {
    console.error("Download CV error:", error)
    return new Response("Error downloading CV", { status: 500 })
  }
}
