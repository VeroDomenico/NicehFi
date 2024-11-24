'use client'

import { useState } from 'react'
import {redirect, useRouter} from 'next/navigation'
import {signIn, signOut} from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {SignIn} from "@/components/auth/signin-button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the login logic
    // For now, we'll just redirect to the dashboard
    router.push('/')
  }
  const handleGoogleSignIn = async () => {
    try {
      await signIn('google', {
        redirect: '/dashboard',
        redirect: true
      })
    } catch (error) {
      console.error("Error signing in with Google:", error)
    }
  }
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login to Your Finance App</CardTitle>
          <CardDescription>Enter your credentials to access your secure, self-hosted finance dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button variant="default" className="w-full" onClick={handleGoogleSignIn}>
            Sign in with Google
          </Button>
          <SignIn/>
          <div className="flex justify-between">
            <Button variant="link" onClick={() => router.push('/forgot-password')}>Forgot password?</Button>
            <Button variant="link" onClick={() => router.push('/signup')}>Sign up</Button>
          </div>
        </CardFooter>
      </Card>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        By logging in, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  )
}

