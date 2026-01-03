import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createServerClient } from "@supabase/ssr"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => req.cookies.set(name, value))
          cookiesToSet.forEach(({ name, value, options }) =>
            res.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  // 🔐 Protection Logic
  // If no user is found, redirect to login
// 🔐 Protection Logic
  if (!user) {
    const url = req.nextUrl.clone()
    
    // 1. If it's a browser request for the ADMIN PAGE, redirect to login
    if (url.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL("/login", req.url))
    }

    // 2. If it's an API request (comments), return a 401 JSON error
    // This allows your frontend to show a "Login Required" alert
    return NextResponse.json(
      { error: "Authentication required for this ritual" },
      { status: 401 }
    )
  }

  return res
}

// 🎯 THE FIX: Matcher Config
export const config = {
  matcher: [
    /*
     * Match /admin and any sub-paths
     * Match any path ending in /comments (works for /api/mocktails/[name]/comments)
     */
    '/admin/:path*',
    '/api/mocktails/:name*/comments',
  ],
}