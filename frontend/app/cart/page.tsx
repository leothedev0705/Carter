'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

// Mock cart data - this would come from your cart context
const cartItems = [
  {
    id: '1',
    title: 'Chaos Hoodie Black',
    price: 89.99,
    image: '/images/products/hoodie-black.jpg',
    quantity: 2,
    size: 'L',
    color: 'Black',
  },
  {
    id: '2',
    title: 'Red Devil Tee',
    price: 39.99,
    image: '/images/products/tee-red.jpg',
    quantity: 1,
    size: 'M',
    color: 'Red',
  },
  {
    id: '3',
    title: 'Street Chaos Joggers',
    price: 69.99,
    image: '/images/products/joggers-black.jpg',
    quantity: 1,
    size: '32',
    color: 'Black',
  },
]

export default function CartPage() {
  const [items, setItems] = useState(cartItems)
  const [isUpdating, setIsUpdating] = useState(false)

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    
    setIsUpdating(true)
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
    setTimeout(() => setIsUpdating(false), 300)
  }

  const removeItem = (id: string) => {
    setIsUpdating(true)
    setItems(prev => prev.filter(item => item.id !== id))
    setTimeout(() => setIsUpdating(false), 300)
  }

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-beige pt-20">
        <div className="container-custom py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-charcoal-light" />
            </div>
            <h1 className="heading-secondary mb-4 text-charcoal">Your Cart is Empty</h1>
            <p className="text-charcoal-light text-lg mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet. 
              Start shopping to discover our latest drops.
            </p>
            <Link href="/shop" className="btn-primary">
              Start Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-beige pt-20">
      <div className="container-custom py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/shop" className="text-charcoal-light hover:text-primary-orange transition-colors duration-300">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="heading-secondary text-charcoal">Shopping Cart</h1>
            <span className="text-charcoal-light">({items.length} items)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex gap-4">
                      {/* Product image */}
                      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-xs">Product Image</span>
                        </div>
                      </div>

                      {/* Product details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-charcoal">{item.title}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-charcoal-light hover:text-red-500 transition-colors duration-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-charcoal-light mb-4">
                          <span>Size: {item.size}</span>
                          <span>Color: {item.color}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-charcoal hover:text-primary-orange disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center font-medium text-charcoal">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-charcoal hover:text-primary-orange transition-colors duration-300"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-primary-orange">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            <div className="text-sm text-charcoal-light">
                              ${item.price} each
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm sticky top-8"
              >
                <h2 className="text-xl font-semibold text-charcoal mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-charcoal-light">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-charcoal-light">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-charcoal-light">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-semibold text-charcoal">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full btn-primary mb-4">
                  Proceed to Checkout
                </button>
                
                <button className="w-full btn-outline">
                  Continue Shopping
                </button>

                {shipping > 0 && (
                  <div className="mt-4 p-3 bg-primary-orange/10 rounded-lg">
                    <p className="text-sm text-primary-orange text-center">
                      Add ${(100 - subtotal).toFixed(2)} more for free shipping
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 