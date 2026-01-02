import { NextResponse } from "next/server"

import fs from "fs/promises"
import path from "path"
import { MOCKTAILS } from "mocktailsData"

const dataFile = path.join(
  process.cwd(),
  "data",
  "mocktails.json"
)


export async function GET() {
  try {
    
    return NextResponse.json(MOCKTAILS)
  } catch (err) {
    console.error("API /mocktails error:", err)
    return NextResponse.json(
      { error: "Failed to read mocktails" },
      { status: 500 }
    )
  }
}



export async function POST(req: Request) {
  try {
    const body = await req.json()

    // 🔒 Minimal validation
    if (!body.name || !body.description) {
      return NextResponse.json(
        { error: "Name and description are required" },
        { status: 400 }
      )
    }

    const mocktails = MOCKTAILS

    const newMocktail = {
      id: Date.now(),
      name: body.name,
      subtitle: body.subtitle ?? "",
      description: body.description,
      category: body.category ?? "Mystical",
      prepTime: body.prepTime ?? "5 min",
      difficulty: body.difficulty ?? "Beginner",
      glassware: body.glassware ?? "",
      calories: body.calories ?? 0,
      flavorNotes: body.flavorNotes ?? [],
      garnish: body.garnish ?? "",
      color: body.color ?? "#000000",
      image: body.image ?? "",
      ingredients: body.ingredients ?? [],
      method: body.method ?? "",
      dateToPublish: body.dateToPublish ?? new Date().toISOString(),
      comments: []
    }

    mocktails.push(newMocktail)

    return NextResponse.json(newMocktail, { status: 201 })
  } catch (err) {
    console.error("POST /api/mocktails error:", err)
    return NextResponse.json(
      { error: "Failed to create mocktail" },
      { status: 500 }
    )
  }
}