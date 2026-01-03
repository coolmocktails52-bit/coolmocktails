"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, X, Menu } from 'lucide-react';
import { Instagram, Facebook } from 'lucide-react';
import { ImPinterest2 } from "react-icons/im";
import { PiTiktokLogoLight } from "react-icons/pi";

const NavBar = () => {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = ['Tropical', 'Botanical', 'Spicy', 'Citrus', 'Dessert'];

  const socialLinks = [
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/coolmocktails/", label: "Instagram" },
    { icon: <Facebook size={18} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <PiTiktokLogoLight size={20} />, href: "https://www.tiktok.com/@coolmocktails", label: "TikTok" },
    { icon: <ImPinterest2 size={18} />, href: "https://pin.it/6fxN5WTgf", label: "Pinterest" },
  ];


  // Define which paths should NOT have a footer
  const noFooterPages = ['/login','/signup'];
  const showNavbar = !noFooterPages.includes(pathname);
  


  return (
   <>
   {showNavbar && <nav className="bg-[#050a0a]/80 fixed top-0 z-[3000] w-full border-b border-white/5 backdrop-blur-xl">
      {/* --- TOP BAR (Socials & Search) --- */}
      <div className="flex justify-between items-center px-4 md:px-10 py-2 border-b border-white/5 bg-black/40">
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-600 transition-colors">
              {social.icon}
            </a>
          ))}
        </div>
        
        
      </div>

      {/* --- MAIN BAR --- */}
      <div className="flex items-center justify-between px-4 md:px-10 h-16 md:h-24">
        
        {/* Mobile Menu Toggle (Left) */}
        <button 
          className="md:hidden text-gray-400"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>


        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center">
          <Link href="/">
            <Image
              className="rounded-full border border-white/10 w-12 h-12 md:w-20 md:h-20"
              width={80}
              height={80}
              src="/logo.png"
              alt="logo"
            />
          </Link>
        </div>

        {/* Right: Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center justify-end w-1/3">
          <Link href="/about" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Mobile Placeholder (To keep logo centered) */}
        <div className="md:hidden w-6"></div>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[4000] bg-[#050a0a] w-screen h-screen flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-yellow-600 uppercase tracking-widest text-xs">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={30} />
              </button>
            </div>

            <div className="flex flex-col bg-[#050a0a]  gap-8">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-bold italic text-white">Archives</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-bold italic text-white">About</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-bold italic text-white">Contact</Link>
              
              <div className="mt-8 border-t border-white/10 pt-8">
                <span className="text-gray-500 uppercase tracking-widest text-[10px] block mb-4">Categories</span>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map(cat => (
                    <Link key={cat} href={`/category/${cat.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg italic text-gray-400">
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto flex gap-6 pb-8">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="text-yellow-600">
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>}
   </>
   
  );
};

export default NavBar;