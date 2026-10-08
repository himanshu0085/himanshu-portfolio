export async function GET() {
  try {
    const pdfUrl = "https://blobs.vusercontent.net/blob/Resume-qc3QqchvzWwA0xM1VvKvUoA1QU4MYo.pdf"
    
    const response = await fetch(pdfUrl)
    
    if (!response.ok) {
      return new Response("PDF not found", { status: 404 })
    }
    
    const buffer = await response.arrayBuffer()
    
    return new Response(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Himanshu_Parashar_Resume.pdf"',
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    })
  } catch (error) {
    console.error("Download CV error:", error)
    return new Response("Error downloading CV", { status: 500 })
  }
}
