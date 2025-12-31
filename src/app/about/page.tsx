"use client"
import { motion } from 'framer-motion';
import { ArrowLeft, History, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link'; // Or use your routing preference

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen mt-24 bg-[#050a0a] text-[#e0d7c6] p-6 font-serif selection:bg-yellow-600/30">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] blur-[120px] rounded-full bg-yellow-900/10 opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 pt-10">
        {/* Navigation */}
        <motion.div {...fadeIn}>
          <button 
            className="flex items-center gap-2 text-yellow-600 hover:text-white mb-12 transition-colors uppercase text-xs tracking-widest"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={16} /> Return to Archives
          </button>
        </motion.div>

        {/* Hero Section */}
        <header className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-yellow-600 uppercase tracking-[0.4em] text-xs block mb-4"
          >
            Our Philosophy
          </motion.span>
          <motion.h1 
            {...fadeIn}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic text-white"
          >
            Sophistication, <br />
            <span className="text-yellow-600">Soberly Defined.</span>
          </motion.h1>
          <motion.p 
            {...fadeIn}
            className="text-xl text-gray-400 leading-relaxed max-w-2xl italic"
          >
            At CoolMocktails, we believe the "ritual of the drink" shouldn't require a proof. 
            We treat mixology as modern alchemy—transforming botanicals, fruits, and spices 
            into experiences that rival any traditional cellar.
          </motion.p>
        </header>

        {/* Brand Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {[
            { icon: <History size={24} />, title: "The Legacy", desc: "Born from a desire to elevate social drinking for the mindful generation." },
            { icon: <ShieldCheck size={24} />, title: "Pure Craft", desc: "No synthetic fillers. Just raw, high-quality ingredients balanced by hand." },
            { icon: <Heart size={24} />, title: "Inclusivity", desc: "Creating a seat at the table for everyone, one glass at a time." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="space-y-4"
            >
              <div className="text-yellow-600">{item.icon}</div>
              <h3 className="text-white text-lg font-bold uppercase tracking-widest">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed italic">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
          <Sparkles className="mx-auto text-yellow-600 mb-6" size={32} />
          <h2 className="text-3xl font-bold text-white mb-4">Ready to stir the senses?</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto italic">
            Explore our curated library of spirit-free recipes and find your next signature pour.
          </p>
          <button 
            className="bg-yellow-600 hover:bg-yellow-500 text-[#050a0a] px-8 py-3 rounded-full font-bold uppercase text-xs tracking-[0.2em] transition-all"
            onClick={() => window.history.back()}
          >
            Explore Recipes
          </button>
        </motion.div>       
      </div>
    </div>
  );
};

export default AboutPage;