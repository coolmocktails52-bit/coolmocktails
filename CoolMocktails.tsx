"use client"
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassWater, ArrowLeft, Sparkles, Beaker, Zap, Search, SlidersHorizontal } from 'lucide-react';
import { MOCKTAILS, type Mocktail } from './mocktailsData'
import Image from 'next/image';
import Footer from '@/app/Footer';
const MocktailBlog = () => {
  const [selectedDrink, setSelectedDrink] = useState<Mocktail | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Tropical", "Botanical", "Spicy", "Citrus", "Dessert"];

  // Search and Filter Logic
  const filteredMocktails = useMemo(() => {
    return MOCKTAILS.filter((drink) => {
      const matchesSearch = drink.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           drink.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === "All" || 
                             drink.category.toLowerCase().includes(activeCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen   pt-24 bg-[#050a0a] text-[#e0d7c6] p-6 font-serif">
      
      {/* Dynamic Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] blur-[120px] rounded-full transition-colors duration-1000 opacity-20"
          style={{ backgroundColor: selectedDrink ? selectedDrink.color : '#1e3a8a' }}
        />
      </div>

      <AnimatePresence mode="wait">
        {!selectedDrink ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="max-w-6xl mx-auto relative z-10"
          >
        <div className='fixed top-0 w-full lg:w-2/3 backdrop-blur-md z-50'>
            <header className="text-center mb-10 pt-10">
                <Image
                  className="absolute rounded-full border border-white/10 w-12 h-12 md:w-20 md:h-20"
                  width={80}
                  height={80}
                  src="/logo.png"
                  alt="logo"
                />
              <h1 className="text-5xl font-bold tracking-tighter mb-4 italic text-white">The Alchemist's Archives</h1>
              <p className="text-yellow-600 uppercase tracking-[0.3em] text-xs">Curated Spirit-Free Wonders</p>
            </header>

            {/* Filter & Search Bar */}
            <div className=" w-full  flex flex-col md:flex-row gap-6 mb-16 items-center justify-between border-y border-white/5 py-8">
              {/* Category Pills */}
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest transition-all whitespace-nowrap border ${
                      activeCategory === cat 
                      ? "bg-yellow-600 text-[#050a0a] border-yellow-600 font-bold" 
                      : "border-white/10 text-gray-500 hover:border-yellow-600/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative w-full  md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={14} />
                <input 
                  type="text"
                  placeholder="Search elixirs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-xs outline-none focus:border-yellow-600 transition-colors italic"
                />
              </div>
            </div>
            </div>

            {/* Results Grid */}
            {filteredMocktails.length > 0 ? (
              <div className="grid grid-cols-1 pt-60 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {filteredMocktails.map((drink) => (
                  <motion.div
                    key={drink.id}
                    layout // Smoothly animates cards when filtering
                    whileHover={{ y: -10 }}
                    className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedDrink(drink)}
                  >
                    <div className="h-64 overflow-hidden relative">
                      <img src={drink.image} alt={drink.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050a0a] to-transparent opacity-60" />
                    </div>
                    <div className="p-6 ">
                      <span className="text-xs uppercase tracking-widest text-yellow-600 mb-2 block">{drink.subtitle}</span>
                      <h3 className="text-2xl font-bold mb-2 text-white">{drink.name}</h3>
                      <p className="text-gray-400 text-sm italic mb-4 line-clamp-2">{drink.description}</p>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-yellow-500">
                        Open Recipe <Sparkles size={14} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-yellow-600/20 mb-4 flex justify-center"><Beaker size={64} /></div>
                <h3 className="text-xl italic text-gray-500">The archives are empty for this combination.</h3>
                <button 
                  onClick={() => {setSearchQuery(""); setActiveCategory("All")}}
                  className="mt-6 text-yellow-600 uppercase text-[10px] tracking-widest underline underline-offset-8"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          /* Detail View (Keep your existing detail view code here) */
          <motion.div 
            key="detail"
            initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
            className="max-w-4xl mx-auto relative z-10 pt-10"
          >
            <button 
              onClick={() => setSelectedDrink(null)}
              className="flex items-center gap-2 text-yellow-600 hover:text-white mb-8 transition-colors uppercase text-xs tracking-widest"
            >
              <ArrowLeft size={16} /> Back to Library
            </button>
            {/* ... Rest of your detail view ... */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 relative">
                <div className="absolute inset-0 blur-3xl opacity-40 rounded-full" style={{ backgroundColor: selectedDrink.color }} />
                <img src={selectedDrink.image} className="relative rounded-3xl border border-white/20 w-full shadow-2xl" alt={selectedDrink.name} />
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-yellow-600 uppercase tracking-widest text-sm block mb-2 underline decoration-yellow-600/30 underline-offset-8">{selectedDrink.subtitle}</span>
                <h2 className="text-6xl font-bold mb-6 tracking-tighter text-white">{selectedDrink.name}</h2>
                <div className="flex gap-4 mb-8 opacity-60"><Beaker size={20} /> <Zap size={20} /> <GlassWater size={20} /></div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs uppercase text-white/40 tracking-widest mb-3">The Essence</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {selectedDrink.ingredients.map((ing: string, i: number) => (
                        <li key={i} className="text-gray-300 border-b border-white/5 pb-1 italic">{ing}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-white/40 tracking-widest mb-3">The Ritual</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{selectedDrink.method}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer show={true}/>
    </div>
  );
};

export default MocktailBlog;