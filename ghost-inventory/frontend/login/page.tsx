"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ghost, Zap, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useAuthContext } from "@/components/providers/auth-provider"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuthContext()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await login(email, password)
      // Redirect will be handled by the auth provider
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden hero-gradient pattern-overlay">
          <div className="container py-24">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
                  <div className="relative">
                    <Ghost className="h-10 w-10 text-emerald-400" />
                    <Zap className="absolute -top-1 -right-1 h-5 w-5 text-amber-400" />
                  </div>
                  <span className="text-2xl font-bold gradient-text">GhostMart</span>
                </Link>
                <Badge variant="secondary" className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                  Welcome Back
                </Badge>
                <h1 className="text-3xl font-bold text-white mb-2">Sign In</h1>
                <p className="text-slate-300">Access your Ghost Inventory account</p>
              </div>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-center text-white">Login to Your Account</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-300">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium text-slate-300">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 pr-10 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2 text-sm text-slate-300">
                        <input type="checkbox" className="rounded border-slate-600" />
                        <span>Remember me</span>
                      </label>
                      <Link href="/forgot-password" className="text-sm text-emerald-400 hover:text-emerald-300">
                        Forgot password?
                      </Link>
                    </div>

                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-slate-400">
                      Don't have an account?{" "}
                      <Link href="/register" className="text-emerald-400 hover:text-emerald-300 font-medium">
                        Sign up
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
