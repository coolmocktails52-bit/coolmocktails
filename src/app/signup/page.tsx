"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Mail, User, Sparkles, UserPlus, Loader2, CheckCircle2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const SignupPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: '', password: '', username: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg("")

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Initiation failed')
      }

      setStatus('success')
      // Redirect to login after showing success state for 2 seconds
      setTimeout(() => router.push('/login'), 2000)
    } catch (err: any) {
      setErrorMsg(err.message)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-[#050a0a] text-[#e0d7c6] flex items-center justify-center p-4 md:p-6 font-serif relative overflow-hidden">
      
      {/* Dynamic Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md z-10"
      >
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <Link href="/">
            <Image 
              src="/logo.png" 
              width={70} 
              height={70} 
              alt="logo" 
              className="mx-auto mb-4 rounded-full border border-white/10 hover:border-yellow-600/40 transition-all duration-500"
            />
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-white italic leading-tight">Join the Order</h1>
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-yellow-600 mt-2">Create your Alchemist identity</p>
        </div>

        {/* Signup Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 md:p-10 rounded-[2.5rem] shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-yellow-600" size={32} />
                </div>
                <h2 className="text-xl font-bold text-white italic">Initiation Complete</h2>
                <p className="text-xs text-white/50 leading-relaxed">Your profile is being etched into the archives. <br/> Redirecting you to sign in...</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Username Input */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4 font-sans">Identity (Username)</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-600/40" size={18} />
                    <input 
                      type="text" 
                      required
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      placeholder="The_Green_Alchemist"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-yellow-600/50 transition-all text-white placeholder:text-white/10"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4 font-sans">Registry Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-600/40" size={18} />
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="potions@archives.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-yellow-600/50 transition-all text-white placeholder:text-white/10"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4 font-sans">Master Cipher</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-600/40" size={18} />
                    <input 
                      type="password" 
                      required
                      minLength={6}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-yellow-600/50 transition-all text-white"
                    />
                  </div>
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] italic text-center"
                  >
                    {errorMsg}
                  </motion.div>
                )}

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-yellow-600 hover:bg-white text-[#050a0a] font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group mt-6 shadow-lg shadow-yellow-600/10"
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <span className="uppercase tracking-widest text-xs">Begin Initiation</span>
                      <UserPlus size={16} className="group-hover:scale-110 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-white/30 uppercase tracking-[0.2em]">
            Already recorded? <Link href="/login" className="text-yellow-600 hover:text-white font-bold transition-colors ml-1">Sign In</Link>
          </p>
        </div>

        {/* Bottom Sparkles */}
        <div className="mt-12 flex items-center justify-center gap-3 opacity-10">
          <Sparkles size={12} />
          <span className="text-[8px] uppercase tracking-[0.6em]">The Alchemist Archives</span>
          <Sparkles size={12} />
        </div>
      </motion.div>
    </div>
  )
}

export default SignupPage