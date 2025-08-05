'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, Check } from 'lucide-react'
import toast from 'react-hot-toast'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    try {
      // Simulate API call - replace with actual newsletter subscription
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubscribed(true)
      setEmail('')
      toast.success('Welcome to the chaos! Check your email for confirmation.')
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="section-padding bg-beige-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-orange/10 rounded-full"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-orange/10 rounded-full mb-6">
              <Mail className="w-8 h-8 text-primary-orange" />
            </div>

            {/* Heading */}
            <h2 className="heading-secondary mb-4 text-charcoal">
              Join the <span className="text-gradient">Chaos Community</span>
            </h2>
            
            <p className="text-xl text-charcoal-light mb-8 max-w-2xl mx-auto">
              Be the first to know about new drops, exclusive releases, and behind-the-scenes content. 
              Plus get 10% off your first order.
            </p>

            {/* Newsletter form */}
            {!isSubscribed ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 input-field"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="btn-primary flex items-center justify-center min-w-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="loading-dots">Subscribe</div>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center gap-3 text-primary-orange mb-8"
              >
                <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold text-charcoal">You're in! Welcome to the chaos.</span>
              </motion.div>
            )}

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-charcoal-light"
            >
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-primary-orange" />
                <span>Early access to drops</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-primary-orange" />
                <span>Exclusive member pricing</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-primary-orange" />
                <span>Style tips & lookbooks</span>
              </div>
            </motion.div>

            {/* Privacy note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xs text-charcoal-light/70 mt-6"
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 