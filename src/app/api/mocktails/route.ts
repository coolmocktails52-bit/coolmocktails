export const runtime = "nodejs"

import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { supabaseAdmin } from "@/lib/supabase"

/* ---------------- GET (ALL MOCKTAILS) ---------------- */

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("recipes")
      .select(`
        id,
        title,
        image,
        history,
        created_at,
        users (
          username
        )
      `)
      .order("created_at", { ascending: false })

    if (error) {
      console.error(error)
      return NextResponse.json(
        { error: "Failed to load mocktails" },
        { status: 500 }
      )
    }

    return NextResponse.json(data)
  } catch (err) {
    console.error("GET /api/mocktails error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
export async function POST(req: Request) {
  try {
    /* 🔐 Get token from cookies - AWAIT IS REQUIRED IN NEXT.js 15 */
    const cookieStore = await cookies() 
    
    // NOTE: Replace "token" with the actual name of your auth cookie
    // Usually Supabase uses a name like 'sb-xxxxx-auth-token'
    const accessToken = cookieStore.get("sb-mliqtqgjzmqioeklvclc-auth-token")?.value

    if (!accessToken) {
      return NextResponse.json(
        { error: "Unauthorized: No token found" },
        { status: 401 }
      )
    }

    /* 🔍 Verify user */
    const {
      data: { user },
      error: authError,
    } = await supabaseAdmin.auth.getUser(accessToken)

    if (authError || !user) {
      return NextResponse.json(
        { error: "Invalid session" },
        { status: 401 }
      )
    }

    /* 📦 Body */
    const {
      title,
      ingredients,
      steps,
      history,
      image,
    } = await req.json()

    if (!title || !ingredients || !steps) {
      return NextResponse.json(
        { error: "Title, ingredients, and steps are required" },
        { status: 400 }
      )
    }

    /* 🧠 Insert */
    const { data, error } = await supabaseAdmin
      .from("recipes")
      .insert({
        user_id: user.id,
        title,
        ingredients,
        steps,
        history,
        image,
      })
      .select(`
        id,
        title,
        image,
        history,
        created_at
      `)
      .single()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json(
        { error: error.message || "Failed to create mocktail" },
        { status: 500 }
      )
    }

    return NextResponse.json(data, { status: 201 })
  } catch (err) {
    console.error("POST /api/mocktails error:", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}