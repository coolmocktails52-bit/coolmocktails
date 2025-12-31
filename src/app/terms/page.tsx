"use client"
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, ShieldAlert, FileText, HelpCircle } from 'lucide-react';

const TermsOfService = () => {
  const sectionFade = {
    initial: { opacity: 0, x: -10 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen mt-24 bg-[#050a0a] text-[#e0d7c6] p-6 font-serif selection:bg-yellow-600/30">
      {/* Subtle Grain Overlay for texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="max-w-3xl mx-auto relative z-10 pt-10">
        {/* Navigation */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-yellow-600 hover:text-white mb-12 transition-colors uppercase text-xs tracking-widest"
        >
          <ArrowLeft size={16} /> Return to Archives
        </button>

        <header className="mb-16 border-b border-white/10 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 italic text-white">Terms of Service</h1>
          <p className="text-yellow-600 uppercase tracking-[0.3em] text-[10px]">Last Updated: October 2023</p>
        </header>

        <div className="space-y-16">
          {/* Section 1 */}
          <motion.section {...sectionFade}>
            <div className="flex items-center gap-3 mb-4">
              <Scale size={20} className="text-yellow-600" />
              <h2 className="text-xl font-bold uppercase tracking-widest text-white">1. The Agreement</h2>
            </div>
            <p className="text-gray-400 leading-relaxed italic text-sm">
              By entering The Alchemist's Archives (CoolMocktails), you agree to be bound by these terms. We provide curated recipes and content for informational and entertainment purposes. If you do not agree with these scrolls, please exit the library.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section {...sectionFade}>
            <div className="flex items-center gap-3 mb-4">
              <FileText size={20} className="text-yellow-600" />
              <h2 className="text-xl font-bold uppercase tracking-widest text-white">2. Intellectual Property</h2>
            </div>
            <p className="text-gray-400 leading-relaxed italic text-sm mb-4">
              The recipes, custom photography, and brand aesthetic are the property of CoolMocktails. 
            </p>
            <ul className="list-disc list-inside text-gray-500 text-sm space-y-2 ml-4">
              <li>You may share recipes with credit to the Archives.</li>
              <li>Commercial use of our unique "Rituals" (methods) requires written consent.</li>
              <li>Scraping our digital library for AI training without permission is prohibited.</li>
            </ul>
          </motion.section>

          {/* Section 3 - Important for Ads Compliance */}
          <motion.section {...sectionFade}>
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert size={20} className="text-yellow-600" />
              <h2 className="text-xl font-bold uppercase tracking-widest text-white">3. Health & Safety Disclaimer</h2>
            </div>
            <p className="text-gray-400 leading-relaxed italic text-sm">
              While our elixirs are spirit-free, they may contain allergens (nuts, citrus, botanicals). We are not medical professionals. Users are responsible for ensuring ingredients align with their personal health requirements and local regulations.
            </p>
          </motion.section>

          {/* Section 4 */}
          <motion.section {...sectionFade}>
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle size={20} className="text-yellow-600" />
              <h2 className="text-xl font-bold uppercase tracking-widest text-white">4. User Conduct</h2>
            </div>
            <p className="text-gray-400 leading-relaxed italic text-sm">
              Any feedback or "alchemist notes" left on our platform must be respectful. We reserve the right to remove content that is harmful, offensive, or breaks the sanctuary of our community.
            </p>
          </motion.section>

          {/* Final Clause */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl italic text-xs text-gray-500 leading-loose">
            <p>
              CoolMocktails reserves the right to evolve these terms as the Archives grow. Continued use of the site constitutes acceptance of the new "Rituals." For legal inquiries, contact <span className="text-yellow-600">coolmocktails52@gmail.com</span>.
            </p>
          </div>
        </div>

        <footer className="mt-20 pb-10 text-center opacity-30">
          <p className="text-[10px] uppercase tracking-[0.4em]">Stay Cool. Drink Mindfully.</p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;