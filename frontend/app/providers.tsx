'use client'

import { ReactNode } from 'react'
import { CartProvider } from '@/lib/context/cart-context'
import { AuthProvider } from '@/lib/context/auth-context'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </AuthProvider>
  )
} 