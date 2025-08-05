'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  phone?: string
  has_account: boolean
}

interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (userData: any) => Promise<void>
  updateUser: (userData: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    // Simulate login
    setTimeout(() => {
      setUser({ id: '1', email, first_name: 'Demo', last_name: 'User', has_account: true })
      setIsAuthenticated(true)
      setIsLoading(false)
    }, 1000)
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  const register = async (userData: any) => {
    setIsLoading(true)
    // Simulate registration
    setTimeout(() => {
      setUser({ id: '1', ...userData, has_account: true })
      setIsAuthenticated(true)
      setIsLoading(false)
    }, 1000)
  }

  const updateUser = async (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData })
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        login,
        logout,
        register,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 