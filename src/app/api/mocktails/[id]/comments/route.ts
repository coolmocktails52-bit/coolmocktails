export const runtime = "nodejs"

import { NextResponse } from "next/server"
import { readMocktails, writeMocktails } from "@/lib/mocktails"

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const mocktailId = Number(id)

    if (Number.isNaN(mocktailId)) {
      return NextResponse.json(
        { error: "Invalid mocktail id" },
        { status: 400 }
      )
    }

    const body = await req.json()
    const { author, message } = body

    if (!author || !message) {
      return NextResponse.json(
        { error: "Author and message are required" },
        { status: 400 }
      )
    }

    const mocktails = await readMocktails()
    const mocktail = mocktails.find(
      (m: any) => m.id === mocktailId
    )

    if (!mocktail) {
      return NextResponse.json(
        { error: "Mocktail not found" },
        { status: 404 }
      )
    }

    const newComment = {
      id: Date.now(),
      author,
      message,
      createdAt: new Date().toISOString()
    }

    mocktail.comments.push(newComment)
    await writeMocktails(mocktails)

    return NextResponse.json(newComment, { status: 201 })
  } catch (err) {
    console.error("POST /comments error:", err)
    return NextResponse.json(
      { error: "Failed to add comment" },
      { status: 500 }
    )
  }
}
