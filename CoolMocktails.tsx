"use client"

import { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  Sparkles,
  Search,
  Timer,
  Flame,
  Wine,
  Layers,
  MessageSquare,
  Send
} from "lucide-react"
import Image from "next/image"
import Footer from "@/app/Footer"

/* ---------------- TYPES ---------------- */

export interface Mocktail {
  id: number
  name: string
  subtitle: string
  description: string
  category: string
  prepTime: string
  difficulty: string
  glassware: string
  calories: number
  flavorNotes: string[]
  garnish: string
  color: string
  image: string
  ingredients: string[]
  method: string
  comments: {
    id: number
    author: string
    message: string
    createdAt: string
  }[]
}

/* ---------------- COMPONENT ---------------- */

export default function MocktailBlog() {
  const [mocktails, setMocktails] = useState<Mocktail[]>([])
  const [selectedDrink, setSelectedDrink] = useState<Mocktail | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [loading, setLoading] = useState(true)

  // comment form
  const [newComment, setNewComment] = useState("")
  const [authorName, setAuthorName] = useState("")

  const categories = [
    "All",
    "Tropical",
    "Botanical",
    "Spicy",
    "Citrus",
    "Dessert",
    "Mystical"
  ]

  /* ---------------- FETCH ALL ---------------- */

  useEffect(() => {
    const fetchMocktails = async () => {
      try {
        const res = await fetch("/api/mocktails")
        const data = await res.json()
        setMocktails(data)
      } catch (err) {
        console.error("Failed to fetch mocktails", err)
      } finally {
        setLoading(false)
      }
    }

    fetchMocktails()
  }, [])

  /* ---------------- FILTER ---------------- */

  const filteredMocktails = useMemo(() => {
    return mocktails.filter((drink) => {
      const matchesSearch =
        drink.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        drink.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        activeCategory === "All" || drink.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [mocktails, searchQuery, activeCategory])

  /* ---------------- LOAD ONE ---------------- */

  const openMocktail = async (id: number) => {
    try {
      const res = await fetch(`/api/mocktails/${id}`)
      const data = await res.json()
      setSelectedDrink(data)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (err) {
      console.error("Failed to load mocktail", err)
    }
  }

  /* ---------------- ADD COMMENT ---------------- */

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDrink || !newComment.trim()) return

    try {
      const res = await fetch(
        `/api/mocktails/${selectedDrink.id}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            author: authorName || "Anonymous Alchemist",
            message: newComment
          })
        }
      )

      const savedComment = await res.json()

      setSelectedDrink((prev) =>
        prev
          ? {
              ...prev,
              comments: [savedComment, ...(prev.comments || [])]
            }
          : prev
      )

      setNewComment("")
      setAuthorName("")
    } catch (err) {
      console.error("Failed to post comment", err)
    }
  }

  /* ---------------- LOADING ---------------- */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Brewing potions...
      </div>
    )
  }

  /* ---------------- RENDER ---------------- */

  return (
    <div className="min-h-screen bg-[#050a0a] text-[#e0d7c6] font-serif">
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <AnimatePresence mode="wait">
          {!selectedDrink ? (
            /* GRID */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex justify-between mb-10">
                <div className="flex gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-1 rounded-full text-xs ${
                        activeCategory === cat
                          ? "bg-yellow-600 text-black"
                          : "border border-white/10 text-gray-500"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-transparent border-b border-white/10 text-white text-sm outline-none"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {filteredMocktails.map((drink) => (
                  <motion.div
                    key={drink.id}
                    whileHover={{ y: -8 }}
                    onClick={() => openMocktail(drink.id)}
                    className="cursor-pointer bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
                  >
                    <img
                      src={drink.image}
                      className="h-64 w-full object-cover"
                      alt={drink.name}
                    />
                    <div className="p-6">
                      <h3 className="text-2xl text-white font-bold">
                        {drink.name}
                      </h3>
                      <p className="text-xs text-yellow-600 mt-2">
                        {drink.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* DETAIL */
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <button
                onClick={() => setSelectedDrink(null)}
                className="text-yellow-600 mb-10 flex items-center gap-2"
              >
                <ArrowLeft size={16} /> Back
              </button>

              <h1 className="text-6xl font-bold text-white mb-6">
                {selectedDrink.name}
              </h1>

              <img
                src={selectedDrink.image}
                className="rounded-3xl mb-10"
                alt={selectedDrink.name}
              />

              <h3 className="text-yellow-600 mb-4 uppercase tracking-widest text-xs">
                Ingredients
              </h3>
              <ul className="mb-10 space-y-2">
                {selectedDrink.ingredients.map((i, idx) => (
                  <li key={idx} className="italic">
                    {i}
                  </li>
                ))}
              </ul>

              <h3 className="text-yellow-600 mb-4 uppercase tracking-widest text-xs">
                Method
              </h3>
              <p className="italic text-gray-400 mb-16">
                {selectedDrink.method}
              </p>

              {/* COMMENTS */}
              <h3 className="flex items-center gap-2 text-white mb-6">
                <MessageSquare size={18} /> Community Reviews
              </h3>

              <form onSubmit={handleCommentSubmit} className="mb-10">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Your thoughts..."
                  className="w-full bg-transparent border-b border-white/10 text-white mb-4"
                />
                <input
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Your name"
                  className="bg-transparent border-b border-white/10 text-white mb-4 block"
                />
                <button className="bg-yellow-600 text-black px-6 py-2 rounded-full text-xs">
                  Post Comment
                </button>
              </form>

              <div className="space-y-6">
                {(selectedDrink.comments || []).map((c) => (
                  <div key={c.id} className="border-l-2 border-yellow-600/40 pl-4">
                    <p className="text-white italic">{c.author}</p>
                    <p className="text-gray-400 text-sm">"{c.message}"</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
