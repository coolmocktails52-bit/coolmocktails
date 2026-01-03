import { NextResponse } from "next/server"
import { supabaseAnon, supabaseAdmin } from "@/lib/supabase"

type SignupBody = {
  email: string
  password: string
  username: string
}
export async function POST(req: Request) {
  try {
    const body: SignupBody = await req.json()
    const { email, password, username } = body

    if (!email || !password || !username) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    // 1. Create Auth User
    const { data, error: authError } = await supabaseAnon.auth.signUp({
      email,
      password,
    })

    if (authError || !data.user) {
      console.error("Auth Error:", authError?.message)
      return NextResponse.json({ error: authError?.message }, { status: 400 })
    }

    // 2. Create Profile in 'users' table
    const { error: insertError } = await supabaseAdmin
      .from("users")
      .insert({
        id: data.user.id,
        username: username,
      })

    if (insertError) {
      console.error("Database Insert Error:", insertError) // THIS WILL SHOW IN YOUR TERMINAL
      return NextResponse.json({ 
        error: "Auth worked, but profile creation failed: " + insertError.message 
      }, { status: 500 })
    }

    return NextResponse.json({ message: "Signup successful" })

  } catch (err) {
    console.error("Server Crash:", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}