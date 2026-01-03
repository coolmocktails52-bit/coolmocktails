"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Sparkles, Loader2, Wine } from "lucide-react"
import Footer from "@/app/Footer"

export default function MocktailBlog() {
  const router = useRouter()
  const [mocktails, setMocktails] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [loading, setLoading] = useState(true)

  const categories = ["All", "Tropical", "Botanical", "Spicy", "Citrus", "Dessert", "Mystical"]

  const fetchData = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        filterCategory: activeCategory,
        search: searchQuery,
        page: "1",
        size: "20"
      })

      const res = await fetch(`/api/mocktails?${params.toString()}`)
      const json = await res.json()
      console.log("result : ",json);
      setMocktails(json || [])
    } catch (err) {
      console.error("Discovery error:", err)
    } finally {
      setLoading(false)
    }
  }

  // Debounced search and category effect
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchData()
    }, 400) 

    return () => clearTimeout(delayDebounceFn)
  }, [activeCategory, searchQuery])

  return (
    <div className="min-h-screen bg-[#050a0a] text-[#e0d7c6] font-serif">
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        
        {/* Header Section */}
        <header className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 italic tracking-tighter"
          >
            Alchemist's Archives
          </motion.h1>
          <p className="text-yellow-600 uppercase tracking-[0.4em] text-[10px]">Discover the secrets of the elixir</p>
        </header>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar w-full md:w-auto border-b border-white/5 md:border-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-yellow-600 text-[#050a0a] font-bold shadow-lg shadow-yellow-600/20"
                    : "border border-white/10 text-gray-500 hover:border-yellow-600/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-600/40" size={16} />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Query the scrolls..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm outline-none focus:border-yellow-600/50 text-white placeholder:text-white/10 italic transition-all"
            />
          </div>
        </div>

        {/* Results Grid */}
        <div className="relative min-h-[400px]">
          {loading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 opacity-50">
              <Loader2 className="animate-spin text-yellow-600" size={32} />
              <p className="text-[10px] uppercase tracking-widest italic">Extracting Essences...</p>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              <AnimatePresence>
                {mocktails.map((drink: any) => (
                  <motion.div
                    key={drink.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -10 }}
                    onClick={() => router.push(`/home/${encodeURIComponent(drink.title)}`)}
                    className="cursor-pointer bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden group hover:border-yellow-600/20 transition-all duration-500"
                  >
                    <div className="relative h-72 w-full overflow-hidden">
                      <img
                        src={drink.image}
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        alt={drink.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050a0a] via-transparent to-transparent opacity-80" />
                    </div>
                    
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-yellow-600/80 font-sans border border-yellow-600/20 px-2 py-1 rounded">
                          {drink.category}
                        </span>
                      </div>
                      <h3 className="text-2xl text-white font-bold italic mb-2 group-hover:text-yellow-600 transition-colors">
                        {drink.name}
                      </h3>
                      <p className="text-gray-500 text-xs italic line-clamp-2 mb-6">
                        {drink.description}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/20 group-hover:text-white transition-colors font-sans">
                        Read Recipe <Sparkles size={12} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {!loading && mocktails.length === 0 && (
            <div className="text-center py-20 border border-dashed border-white/5 rounded-[3rem]">
              <Wine className="mx-auto text-white/10 mb-4" size={48} />
              <p className="text-gray-500 italic">This combination of elements yields no results.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}