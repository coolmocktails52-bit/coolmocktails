"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "../context/UserContext"


export default function AdminAddRecipePage() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const {user} = useUser();

  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    steps: "",
    history: "",
    image: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)


    if (!user?.isAuthenticated) {
      setError("You must be logged in")
      setLoading(false)
      return
    }

    const res = await fetch("/api/mocktails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: form.title,
        ingredients: form.ingredients.split("\n"),
        steps: form.steps.split("\n"),
        history: form.history,
        image: form.image,
      }),
    })

    if (!res.ok) {
      const data = await res.json()
      setError(data.error || "Failed to create recipe")
      setLoading(false)
      return
    }

    router.push("/")
  }

  return (
    <div className="min-h-screen bg-[#050a0a]  text-white px-6 pt-40">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Add New Recipe</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/20 p-2"
            required
          />

          <textarea
            name="ingredients"
            placeholder="Ingredients (one per line)"
            value={form.ingredients}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/20 p-2 h-32"
            required
          />

          <textarea
            name="steps"
            placeholder="Steps (one per line)"
            value={form.steps}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/20 p-2 h-32"
            required
          />

          <textarea
            name="history"
            placeholder="History / Description"
            value={form.history}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/20 p-2 h-24"
          />

          <input
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/20 p-2"
          />

          {error && <p className="text-red-500">{error}</p>}

          <button
            disabled={loading}
            className="bg-yellow-600 text-black px-6 py-2 rounded-full"
          >
            {loading ? "Saving..." : "Create Recipe"}
          </button>
        </form>
      </div>
    </div>
  )
}
