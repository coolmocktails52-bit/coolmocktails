"use client"
import { motion } from 'framer-motion';
import { ArrowLeft, Cookie, Info, Settings, ShieldCheck } from 'lucide-react';

const CookiePolicy = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen  mt-24 bg-[#050a0a] text-[#e0d7c6] p-6 font-serif selection:bg-yellow-600/30">
      <div className="max-w-3xl mx-auto relative z-10 pt-10">
        
        {/* Navigation */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-yellow-600 hover:text-white mb-12 transition-colors uppercase text-xs tracking-widest"
        >
          <ArrowLeft size={16} /> Return to Archives
        </button>

        <header className="mb-16 border-b border-white/10 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 italic text-white">The Cookie Ritual</h1>
          <p className="text-yellow-600 uppercase tracking-[0.3em] text-[10px]">Digital Tasting Notes & Preferences</p>
        </header>

        <div className="space-y-16">
          <motion.section {...fadeIn}>
            <div className="flex items-center gap-3 mb-4 text-white">
              <Info size={20} className="text-yellow-600" />
              <h2 className="text-xl font-bold uppercase tracking-widest">What are Cookies?</h2>
            </div>
            <p className="text-gray-400 leading-relaxed italic text-sm">
              In our digital lab, "cookies" are small fragments of data stored on your device. Much like the garnish on a drink, they aren't the main event, but they enhance the overall experience by remembering your visit and preferences.
            </p>
          </motion.section>

          {/* Cookie Table - Crucial for Clarity */}
          <motion.section {...fadeIn}>
            <div className="flex items-center gap-3 mb-6 text-white">
              <Settings size={20} className="text-yellow-600" />
              <h2 className="text-xl font-bold uppercase tracking-widest">Our Selection</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { type: "Essential", use: "Necessary for the library to function. They handle security and navigation.", duration: "Session" },
                { type: "Performance", use: "Helps us see which mocktails are trending via Google Analytics.", duration: "2 Years" },
                { type: "Marketing", use: "Used by Google Ads to show you relevant elixirs on other sites.", duration: "1 Year" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl flex flex-col md:flex-row justify-between gap-4">
                  <div className="md:w-1/3">
                    <span className="text-white font-bold text-xs uppercase tracking-tighter">{item.type}</span>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-xs text-gray-500 italic mb-1">{item.use}</p>
                    <p className="text-[10px] text-yellow-600/50 uppercase tracking-widest">Persistence: {item.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeIn}>
            <div className="flex items-center gap-3 mb-4 text-white">
              <ShieldCheck size={20} className="text-yellow-600" />
              <h2 className="text-xl font-bold uppercase tracking-widest">Refusing the Garnish</h2>
            </div>
            <p className="text-gray-400 leading-relaxed italic text-sm mb-6">
              You have the right to decline any non-essential cookies. Most browsers allow you to purge or block these files via their settings menu. Be aware that the Archives may feel a bit "flat" without them.
            </p>
            <div className="inline-block border border-yellow-600/30 px-6 py-3 rounded-full text-[10px] text-yellow-600 uppercase tracking-widest hover:bg-yellow-600 hover:text-[#050a0a] transition-all cursor-pointer">
              Manage Cookie Preferences
            </div>
          </motion.section>
        </div>

        <footer className="mt-24 pb-12 text-center text-[10px] text-white/20 uppercase tracking-[0.5em] border-t border-white/5 pt-12">
          CoolMocktails — Curating your experience responsibly
        </footer>
      </div>
    </div>
  );
};

export default CookiePolicy;