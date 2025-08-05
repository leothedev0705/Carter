'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    
    // Show success message (you can use toast here)
    alert('Message sent successfully! We\'ll get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-beige pt-20">
      {/* Header */}
      <div className="bg-beige-secondary border-b border-gray-200">
        <div className="container-custom py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="heading-secondary mb-4 text-charcoal">Contact Us</h1>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              Have questions? Want to collaborate? We'd love to hear from you. 
              Reach out and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-orange/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary-orange" />
                </div>
                <h2 className="text-2xl font-semibold text-charcoal">Send us a message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full input-field"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full input-field"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full input-field resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-dots">Sending</div>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">Get in touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                    <p className="text-charcoal-light">hello@carterchaos.com</p>
                    <p className="text-charcoal-light text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                    <p className="text-charcoal-light">+1 (555) 123-4567</p>
                    <p className="text-charcoal-light text-sm">Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Location</h3>
                    <p className="text-charcoal-light">Los Angeles, CA</p>
                    <p className="text-charcoal-light text-sm">Headquarters & Design Studio</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Business Hours</h3>
                    <p className="text-charcoal-light">Monday - Friday: 9AM - 6PM PST</p>
                    <p className="text-charcoal-light text-sm">Saturday: 10AM - 4PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">Frequently Asked</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-charcoal mb-2">How do I track my order?</h3>
                  <p className="text-charcoal-light text-sm">
                    You'll receive a tracking number via email once your order ships. 
                    You can also track it in your account dashboard.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-charcoal mb-2">What's your return policy?</h3>
                  <p className="text-charcoal-light text-sm">
                    We offer 30-day returns on unworn items with original tags. 
                    Sale items are final sale unless defective.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-charcoal mb-2">Do you ship internationally?</h3>
                  <p className="text-charcoal-light text-sm">
                    Yes! We ship to most countries worldwide. 
                    Shipping costs and delivery times vary by location.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Can I customize my order?</h3>
                  <p className="text-charcoal-light text-sm">
                    Currently, we don't offer customizations. 
                    But we're always working on new features!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 