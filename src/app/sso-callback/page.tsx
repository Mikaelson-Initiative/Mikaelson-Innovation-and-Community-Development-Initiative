"use client"
import { AuthenticateWithRedirectCallback, useUser } from '@clerk/nextjs'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { BACKEND_URL } from '../../../constants'

export default function SSOCallbackPage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    const syncUserToBackend = async () => {
      if (!isLoaded || !user) return

      try {
        const userId = user.id
        const email = user.primaryEmailAddress?.emailAddress
        const username = user.username || email?.split('@')[0]

        // Check if user exists in your backend
        try {
          await axios.get(`${BACKEND_URL}/api/v1/users/${userId}`)
          // User exists, redirect to feed
          router.push('/feed')
        } catch (error: any) {
          if (error.response?.status === 404) {
            // User doesn't exist, create them
            await axios.post(`${BACKEND_URL}/api/v1/users`, {
              username,
              email,
              clerkId: userId,
            })
            // Redirect to feed after creation
            router.push('/feed')
          } else {
            throw error
          }
        }
      } catch (error) {
        console.error('SSO callback handling failed:', error)
        // Redirect to login page on error
        router.push('/login?error=oauth_failed')
      }
    }

    syncUserToBackend()
  }, [isLoaded, user, router])

  return (
    <>
      <AuthenticateWithRedirectCallback />
      <div id="clerk-captcha" />
    </>
  )
}