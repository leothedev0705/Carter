'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/lib/context/cart-context'
import { useAuth } from '@/lib/context/auth-context'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Collections', href: '/collections' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { cartQuantity } = useCart()
  const { user } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-beige/90 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl md:text-3xl font-display font-bold tracking-tight">
              <span className="text-charcoal group-hover:text-primary-orange transition-colors duration-300">
                CARTER
              </span>
              <span className="text-primary-orange ml-1">CHAOS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  pathname === item.href
                    ? 'text-primary-orange'
                    : 'text-charcoal hover:text-primary-orange'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full ${
                    pathname === item.href ? 'w-full' : ''
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="text-charcoal hover:text-primary-orange transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>

            {/* User Account */}
            <Link
              href={user ? '/account' : '/auth/login'}
              className="text-charcoal hover:text-primary-orange transition-colors duration-300"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Shopping Cart */}
            <Link
              href="/cart"
              className="relative text-charcoal hover:text-primary-orange transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cartQuantity}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-charcoal hover:text-primary-orange transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-beige/95 backdrop-blur-md border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium transition-colors duration-300 ${
                      pathname === item.href
                        ? 'text-primary-orange bg-beige-secondary'
                        : 'text-charcoal hover:text-primary-orange hover:bg-beige-secondary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
} 