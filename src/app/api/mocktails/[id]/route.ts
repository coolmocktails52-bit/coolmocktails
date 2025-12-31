export const runtime = "nodejs"

import { NextResponse } from "next/server"
import { readMocktails } from "@/lib/mocktails"

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params   // ✅ REQUIRED IN NEXT 15
    const parsedId = Number(id)

    if (!id || Number.isNaN(parsedId)) {
      return NextResponse.json(
        { error: "Invalid mocktail id" },
        { status: 400 }
      )
    }

    const mocktails = await readMocktails()
    const mocktail = mocktails.find(
      (m: any) => m.id === parsedId
    )

    if (!mocktail) {
      return NextResponse.json(
        { error: "Mocktail not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(mocktail)
  } catch (err) {
    console.error("GET /api/mocktails/[id] error:", err)
    return NextResponse.json(
      { error: "Failed to read mocktail" },
      { status: 500 }
    )
  }
}
