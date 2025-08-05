'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige via-beige-secondary to-beige">
        <div className="absolute inset-0 bg-gradient-to-r from-beige/50 to-transparent" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 border border-primary-orange/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-primary-orange/10 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="heading-primary mb-6 text-charcoal"
          >
            DISCOVER THE{' '}
            <span className="text-gradient animate-glow">CHAOS</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-charcoal-light mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Premium streetwear for the new generation. Bold designs, quality craftsmanship, 
            and urban style that defines the streets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <Link 
              href="/shop" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-orange text-white hover:bg-primary-orange-dark font-bold rounded-lg transition-all duration-300 transform hover:scale-105 group shadow-button"
            >
              Shop Collection
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-beige font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group shadow-button">
              <Play className="mr-2 w-5 h-5" />
              Watch Brand Film
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-orange mb-2">10K+</div>
              <div className="text-charcoal-light">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-orange mb-2">500+</div>
              <div className="text-charcoal-light">Unique Designs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-orange mb-2">24/7</div>
              <div className="text-charcoal-light">Premium Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-orange rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 