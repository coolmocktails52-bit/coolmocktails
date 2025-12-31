"use client"
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, Lock, Cookie, Database, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  const sectionFade = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-[#050a0a] text-[#e0d7c6] p-6 font-serif selection:bg-yellow-600/30">
      <div className="max-w-3xl mx-auto relative z-10 pt-10">
        
        {/* Navigation */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-yellow-600 hover:text-white mb-12 transition-colors uppercase text-xs tracking-widest"
        >
          <ArrowLeft size={16} /> Return to Archives
        </button>

        <header className="mb-16 border-b border-white/10 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 italic text-white">Privacy Manifest</h1>
          <p className="text-yellow-600 uppercase tracking-[0.3em] text-[10px]">Data Protection & Disclosure</p>
        </header>

        <div className="space-y-16">
          {/* Section 1: Data Collection */}
          <motion.section {...sectionFade}>
            <div className="flex items-center gap-3 mb-4 text-white">
              <Database size={20} className="text-yellow-600" />
              <h2 className="text-xl font-bold uppercase tracking-widest">1. Information Gathered</h2>
            </div>
            <p className="text-gray-400 leading-relaxed italic text-sm mb-4">
              Within our digital sanctuary, we collect only the essence required to serve you better:
            </p>
            <ul className="list-disc list-inside text-gray-500 text-sm space-y-2 ml-4">
              <li>Contact details if you subscribe to our alchemical newsletter.</li>
              <li>Usage data (IP addresses, browser types) via Google Analytics.</li>
              <li>Preferences saved during your recipe browsing sessions.</li>
            </ul>
          </motion.section>

          {/* Section 2: Cookies - CRITICAL FOR GOOGLE ADS */}
          <motion.section {...sectionFade}>
            <div className="flex items-center gap-3 mb-4 text-white">
              <Cookie size={20} className="text-yellow-600" />
              <h2 className="text-xl font-bold uppercase tracking-widest">2. The Cookie Ritual</h2>
            </div>
            <p className="text-gray-400 leading-relaxed italic text-sm">
              We use "cookies" to remember your palate preferences. These small files are stored on your device to help us analyze web traffic and improve our library experience. You may choose to decline cookies via your browser settings, though some "Archives" features may lose their magic.
            </p>
          </motion.section>

          {/* Section 3: Advertising & Third Parties */}
          <motion.section {...sectionFade}>
            <div className="flex items-center gap-3 mb-4 text-white">
              <Eye size={20} className="text-yellow-600" />
              <h2 className="text-xl font-bold uppercase tracking-widest">3. Third-Party Secrets</h2>
            </div>
            <p className="text-gray-400 leading-relaxed italic text-sm mb-4">
              We do not sell your soul (or your data) to third parties. However, we do work with trusted partners like:
            </p>
            <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-xs text-gray-500 italic">
              "Google Ads & Analytics: To understand our visitors and show relevant spirit-free content to those seeking a sophisticated alternative to alcohol."
            </div>
          </motion.section>

          {/* Section 4: Security */}
          <motion.section {...sectionFade}>
            <div className="flex items-center gap-3 mb-4 text-white">
              <Lock size={20} className="text-yellow-600" />
              <h2 className="text-xl font-bold uppercase tracking-widest">4. Data Sanctuary</h2>
            </div>
            <p className="text-gray-400 leading-relaxed italic text-sm">
              We implement industry-standard encryption to protect your data. Your information is treated with the same reverence as our most secret mocktail recipes.
            </p>
          </motion.section>

          {/* Contact for Privacy */}
          <motion.section 
            {...sectionFade}
            className="p-8 rounded-3xl border border-yellow-600/20 bg-yellow-600/5 text-center"
          >
            <Mail className="mx-auto text-yellow-600 mb-4" size={24} />
            <h3 className="text-white font-bold mb-2">Request Your Data</h3>
            <p className="text-xs text-gray-400 mb-4 italic">You have the right to see, edit, or delete your data at any time.</p>
            <a href="mailto:privacy@coolmocktails.com" className="text-yellow-600 text-sm underline underline-offset-4 font-bold">
              privacy@coolmocktails.com
            </a>
          </motion.section>
        </div>

        <footer className="mt-20 pb-12 text-center text-[10px] text-white/20 uppercase tracking-[0.5em]">
          CoolMocktails — Encrypted & Protected
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;