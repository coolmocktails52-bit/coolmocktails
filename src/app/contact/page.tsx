"use client"
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Mail, MapPin, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen mt-24 bg-[#050a0a] text-[#e0d7c6] p-6 font-serif selection:bg-yellow-600/30">
      
      <div className="max-w-5xl mx-auto relative z-10 pt-10">
        {/* Navigation */}
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-yellow-600 hover:text-white mb-12 transition-colors uppercase text-xs tracking-widest"
        >
          <ArrowLeft size={16} /> Return to Archives
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-yellow-600 uppercase tracking-[0.4em] text-xs block mb-4">Get in Touch</span>
            <h1 className="text-5xl font-bold tracking-tighter mb-8 italic text-white">Summon the <br />Archivists.</h1>
            <p className="text-gray-400 italic mb-12 leading-relaxed">
              Have a question about a recipe? Interested in a botanical partnership? Or perhaps you just want to share your latest spirit-free creation. Our doors are always open to fellow alchemists.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-yellow-600 border border-white/10">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white text-xs uppercase tracking-widest mb-1">Direct Inquiry</h4>
                  <p className="text-gray-500 text-sm italic">hello@coolmocktails.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-full text-yellow-600 border border-white/10">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white text-xs uppercase tracking-widest mb-1">The Lab</h4>
                  <p className="text-gray-500 text-sm italic">Casablanca, Morocco</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. Julian Vane"
                    className="w-full bg-[#0a0f0f] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-600 outline-none transition-colors italic"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full bg-[#0a0f0f] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-600 outline-none transition-colors italic"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us what's brewing..."
                  className="w-full bg-[#0a0f0f] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-yellow-600 outline-none transition-colors italic resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-500 text-[#050a0a] font-bold uppercase text-xs tracking-[0.2em] py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>

        <footer className="mt-24 pb-12 text-center text-[10px] text-white/20 uppercase tracking-[0.5em] border-t border-white/5 pt-12">
          CoolMocktails — Responding within 24 Moon-cycles
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;