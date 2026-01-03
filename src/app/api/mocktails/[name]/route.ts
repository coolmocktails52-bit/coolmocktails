export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

/* ---------------- AUTH HELPER ---------------- */
async function getAuthUser(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) return { user: null, error: "No token provided" };

    const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);
    
    if (error || !user) return { user: null, error: "Invalid or expired token" };
    
    return { user, error: null };
  } catch (err) {
    return { user: null, error: "Authentication system error" };
  }
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    // 1. Await the dynamic parameters (Next.js 15 requirement)
    const { name: rawName } = await params;
    const recipeTitle = decodeURIComponent(rawName);

    // 2. Query Supabase with a join on the 'users' table
    const { data, error } = await supabaseAdmin
      .from("recipes")
      .select(`
        id,
        title,
        ingredients,
        steps,
        history,
        image,
        created_at,
        user_id,
        users (
          username
        )
      `)
      .ilike("title", recipeTitle) // Case-insensitive match
      .single(); // Returns an object instead of an array

    // 3. Handle missing data or database errors
    if (error || !data) {
      console.error("Supabase Error:", error?.message);
      return NextResponse.json(
        { error: "Recipe not found in the archives." },
        { status: 404 }
      );
    }

    // 4. Return the successfully found recipe
    return NextResponse.json(data);

  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json(
      { error: "An internal ritual error occurred." },
      { status: 500 }
    );
  }
}

/* ---------------- POST (Protected) ---------------- */
export async function POST(req: Request) {
  try {
    const { user, error: authError } = await getAuthUser(req);
    if (authError || !user) {
      return NextResponse.json({ error: authError || "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { name, subtitle, description, ingredients, method, category, color, image } = body;

    if (!name || !ingredients || !method) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("mocktails")
      .insert({
        name,
        subtitle,
        description,
        ingredients,
        method,
        category,
        color,
        image,
        user_id: user.id 
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data, { status: 201 });
  } catch (err: any) {
    console.error("POST Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/* ---------------- PUT (Protected & Ownership) ---------------- */
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ name: string }> } // Define as Promise
) {
  try {
    /* 1. Identity Verification */
    const { user, error: authError } = await getAuthUser(req);
    if (authError || !user) {
      return NextResponse.json({ error: authError || "Unauthorized" }, { status: 401 });
    }

    /* 2. Resolve Params & Find Mocktail */
    const { name: rawName } = await params; // Await the params here
    const currentName = decodeURIComponent(rawName);

    const { data: existing, error: findError } = await supabaseAdmin
      .from("mocktails")
      .select("id, user_id")
      .eq("name", currentName)
      .single();

    if (findError || !existing) {
      return NextResponse.json({ error: "Mocktail not found" }, { status: 404 });
    }

    /* 3. Ownership Verification */
    if (existing.user_id !== user.id) {
      return NextResponse.json({ error: "Forbidden: Access denied" }, { status: 403 });
    }

    /* 4. Update */
    const body = await req.json();
    const { data: updated, error: updateError } = await supabaseAdmin
      .from("mocktails")
      .update({
        ...body,
        user_id: user.id 
      })
      .eq("id", existing.id)
      .select()
      .single();

    if (updateError) throw updateError;

    return NextResponse.json(updated);
  } catch (err: any) {
    console.error("PUT Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}