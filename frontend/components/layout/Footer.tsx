'use client'

import Link from 'next/link'
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  shop: [
    { name: 'New Arrivals', href: '/shop/new' },
    { name: 'Best Sellers', href: '/shop/bestsellers' },
    { name: 'Sale', href: '/shop/sale' },
    { name: 'Collections', href: '/collections' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
}

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/carterchaos' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/carterchaos' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/carterchaos' },
]

export function Footer() {
  return (
    <footer className="bg-beige-secondary border-t border-gray-200">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="text-2xl font-display font-bold tracking-tight">
                <span className="text-charcoal">CARTER</span>
                <span className="text-primary-orange ml-1">CHAOS</span>
              </div>
            </Link>
            <p className="text-charcoal-light mb-6 max-w-md">
              Discover the chaos. Premium streetwear for the new generation. 
              Bold designs, quality craftsmanship, and urban style that defines the streets.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 text-sm text-charcoal-light">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-orange" />
                <span>hello@carterchaos.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-orange" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-orange" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-charcoal font-semibold mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-charcoal-light hover:text-primary-orange transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-charcoal font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-charcoal-light hover:text-primary-orange transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-charcoal font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-charcoal-light hover:text-primary-orange transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">
                Join the Chaos
              </h3>
              <p className="text-charcoal-light">
                Get early access to drops, exclusive content, and special offers.
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 input-field rounded-r-none focus:ring-0 focus:border-primary-orange"
              />
              <button className="btn-primary rounded-l-none px-8">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Social links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal-light hover:text-primary-orange transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Legal links */}
            <div className="flex items-center space-x-6 text-sm text-charcoal-light">
              {footerLinks.legal.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link
                    href={link.href}
                    className="hover:text-primary-orange transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="mx-3">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-charcoal-light">
            <p>
              © {new Date().getFullYear()} Carter Chaos. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 