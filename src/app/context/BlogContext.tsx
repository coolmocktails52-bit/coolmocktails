"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type BlogContextType = {
  theme: "light" | "dark"
  toggleTheme: () => void
}

const BlogContext = createContext<BlogContextType | null>(null)

export function BlogProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"))

  return (
    <BlogContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </BlogContext.Provider>
  )
}

export function useBlog() {
  const context = useContext(BlogContext)
  if (!context) {
    throw new Error("useBlog must be used inside BlogProvider")
  }
  return context
}
