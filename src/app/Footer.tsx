'use client'
import { usePathname } from "next/navigation";

const Footer = ({show}:{show?:boolean}) => {
    const pathname = usePathname();

  // Define which paths should NOT have a footer
  const noFooterPages = ["/home" , '/'];
  const showFooter = show ? show : !noFooterPages.includes(pathname) ;
  

  return (
   <>
   {showFooter && <footer className="pb-12 border-t  px-8 bg-[#050a0a] border-white/5 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-xs uppercase tracking-widest text-gray-500">
            <div>
              <h4 className="text-white mb-4 text-sm">Contact the Archives</h4>
              <p>Inquiry: hello@coolmocktails.com</p>
              <p>Location: 123 Alchemist Way, London, UK</p>
            </div>
            <div className="flex flex-col md:items-end gap-2">
              <a href="/privacy" className="hover:text-yellow-600 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-yellow-600 transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-yellow-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
          <p className="text-center text-white/20 text-[10px] uppercase tracking-[0.5em]">
            &copy; 2025 CoolMocktails — All Rights Reserved.
          </p>
    </footer>}
   
   </>
  )
}

export default Footer