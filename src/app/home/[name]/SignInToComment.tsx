import { useRouter } from "next/navigation";
import { Lock, Sparkles } from "lucide-react";

export default function SignInToComment() {
  const router = useRouter();

  return (
    <div className="relative group overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 text-center backdrop-blur-sm transition-all hover:border-yellow-600/20">
      {/* Decorative Golden Glow */}
      <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-yellow-600/10 blur-[80px] group-hover:bg-yellow-600/20 transition-all" />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Icon with Ring */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#050a0a] text-yellow-600/50 shadow-inner">
          <Lock size={24} className="group-hover:scale-110 transition-transform duration-500" />
        </div>

        <h4 className="mb-2 text-xl font-bold italic text-white tracking-tight">
          Join the Alchemist’s Circle
        </h4>
        
        <p className="mb-8 max-w-[280px] text-sm text-gray-500 leading-relaxed italic">
          "Only those who have revealed their identity may share their secrets and reviews."
        </p>

        <button
          onClick={() => router.push("/login")}
          className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-yellow-600 px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#050a0a] transition-all hover:scale-105 hover:bg-yellow-500 active:scale-95"
        >
          <Sparkles size={14} />
          Sign In to Comment
          
          {/* Shine Effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        </button>
      </div>
    </div>
  );
}