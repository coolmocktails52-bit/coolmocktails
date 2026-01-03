export const runtime = "nodejs"

import { cookies } from "next/headers"
import { NextResponse } from "next/server"
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
    // FIX: Await cookies() for Next.js 15 compatibility
    const cookieStore = await cookies()
    
    // IMPORTANT: Check your actual cookie name in the browser. 
    // Usually it is 'sb-access-token' or just 'token' if you set it manually.
    const accessToken = cookieStore.get("token")?.value

    if (!accessToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    /* 🔍 Verify user using the admin client */
    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(accessToken)

    if (authError || !user) {
      return NextResponse.json({ error: "Invalid session" }, { status: 401 })
    }

    const { title, ingredients, steps, history, image } = await req.json()

    /* 🧠 Insert into Postgres */
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
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}