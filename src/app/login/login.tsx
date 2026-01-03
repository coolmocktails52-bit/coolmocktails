"use client"
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock, Mail, Sparkles, ArrowRight, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { User, useUser } from '../context/UserContext'

const LoginPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const {user , setUser} = useUser();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      console.log("result : ",result);

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      // Success: Save token to local storage or cookies
      localStorage.setItem('access_token', result.access_token)
      const userAuthenticated:User = {email : '',username : '' , id : '',isAuthenticated : result.success } 
      setUser(userAuthenticated)

      // Redirect to your blog library

      router.push('/')
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#050a0a] text-[#e0d7c6] flex items-center justify-center p-6 font-serif relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-8">
          <Image 
            src="/logo.png" 
            width={80} 
            height={80} 
            alt="logo" 
            className="mx-auto mb-4 rounded-full border border-white/10"
          />
          <h1 className="text-3xl font-bold tracking-tighter text-white italic">Guardian Access</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-yellow-600 mt-2">Enter the Alchemist's Chambers</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4">Registry Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-600/50" size={18} />
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alchemist@archives.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-yellow-600 transition-all text-white italic"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4">Secret Cipher</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-600/50" size={18} />
                <input 
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-yellow-600 transition-all text-white"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-xs italic text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20"
              >
                {error}
              </motion.p>
            )}

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-600 hover:bg-white text-black font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group overflow-hidden relative"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  <span className="uppercase tracking-widest text-xs">Unlock Archives</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[10px] text-white/30 uppercase tracking-widest">
              Lost your key? <span className="text-yellow-600 cursor-pointer hover:underline">Request Restoration</span>
            </p>
          </div>
        </div>

        {/* Brand Footer */}
        <div className="mt-12 flex items-center justify-center gap-2 opacity-20 grayscale">
          <Sparkles size={14} />
          <p className="text-[9px] uppercase tracking-[0.5em]">CoolMocktails © 2026</p>
          <Sparkles size={14} />
        </div>
      </motion.div>
    </div>
  )
}

export default LoginPage