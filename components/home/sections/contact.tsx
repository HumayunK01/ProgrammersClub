'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)
  const [errors, setErrors] = useState({
    email: '',
    general: ''
  })
  const [fieldDisabled, setFieldDisabled] = useState(false)
  const [formValid, setFormValid] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('programmersclub@mhssce.ac.in')
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const validateEmail = (email: string) => {
   if (!email.endsWith('@mhssce.ac.in')) {
      setErrors(prev => ({ ...prev, email: 'Please use MHSSCE College Email Address' }))
      return false
    }
    setErrors(prev => ({ ...prev, email: '' }))
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setFieldDisabled(true)
    setErrors({ email: '', general: '' })

    if (!validateEmail(formData.email)) {
      setLoading(false)
      setFieldDisabled(false)
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '588834fd-5b85-4ea6-b817-c7259370908e',
          subject: `New contact from ${formData.name}`,
          from_name: formData.name,
          timestamp: new Date().toISOString(),
          ...formData
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.success) {
        setSuccess(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors(prev => ({ 
        ...prev, 
        general: 'Failed to send message. Please try again later.' 
      }))
    } finally {
      setLoading(false)
      setFieldDisabled(false)
    }
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (success) {
      timeout = setTimeout(() => setSuccess(false), 5000)
    }
    return () => clearTimeout(timeout)
  }, [success])

  useEffect(() => {
    const isValid = 
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.message.trim() !== '' &&
      formData.email.endsWith('@mhssce.ac.in')
    setFormValid(isValid)
  }, [formData])

  return (
    <section id="contact" className="min-h-screen py-6 md:py-12 px-4 sm:px-6 lg:px-8 flex items-center relative">
      <AnimatePresence>
        {copySuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-5 left-1/1 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm shadow-lg z-50"
          >
            Email copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4 md:mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-[#3D52A0] to-[#7091E6] rounded-lg flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#3D52A0] to-[#7091E6] inline-block text-transparent bg-clip-text">
              Contact Us
            </h2>
          </div>
          <p className="text-base text-muted-foreground/90 max-w-2xl mx-auto">
            Have questions about the Programmers' Club or want to join? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-3 md:space-y-4 p-2 sm:p-3 md:p-4 order-2 md:order-1"
          >
            <motion.button 
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full flex items-center space-x-3 md:space-x-4 hover:opacity-80 transition-all duration-300 p-3 rounded-xl hover:bg-[#e5edff]/50"
            >
              <div className="bg-[#e5edff] p-3 rounded-full shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#4267b2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-[#2d3b6f] text-sm sm:text-base">Email Us</h3>
                <p className="text-gray-600 text-sm sm:text-base break-words group-hover:text-[#4267b2] transition-colors">
                  programmersclub@mhssce.ac.in
                </p>
              </div>
            </motion.button>

            <div className="space-y-3 md:space-y-4">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="flex items-center space-x-3 md:space-x-4 p-3 rounded-xl hover:bg-[#e5edff]/50 transition-all duration-300"
              >
                <div className="bg-[#e5edff] p-3 rounded-full shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#4267b2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#2d3b6f] text-sm sm:text-base">Location</h3>
                  <p className="text-gray-600 text-sm sm:text-base">M.H. Saboo Siddik College of Engineering, Mumbai</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="rounded-lg overflow-hidden shadow-lg h-[150px] sm:h-[200px] md:h-[220px] w-full transition-all duration-300 hover:shadow-xl"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.7603737506545!2d72.82829847499814!3d18.968143787158618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce40ffcfcacd%3A0x5d71ff22760f8e77!2sM.H.%20Saboo%20Siddik%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1709669145009!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-white/50 rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 border border-[#e5edff] order-1 md:order-2 hover:shadow-xl transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 md:space-y-4">
              <div className="group">
                <label htmlFor="name" className="text-[#2d3b6f] font-medium mb-1 text-sm sm:text-base flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#4267b2] transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="block w-full rounded-lg border-[#e5edff] border px-3 py-2 sm:px-4 sm:py-2.5 focus:border-[#4267b2] focus:ring-[#4267b2] transition-all duration-300 bg-white/70 text-gray-600 placeholder:text-gray-400 text-sm sm:text-base hover:border-[#4267b2]/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-[#2d3b6f] font-medium mb-1 text-sm sm:text-base flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#4267b2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address (@mhssce.ac.in)"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, email: e.target.value }))
                    if (errors.email) validateEmail(e.target.value)
                  }}
                  className={`block w-full rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-[#e5edff]'
                  } px-3 py-2 sm:px-4 sm:py-2.5 focus:border-[#4267b2] focus:ring-[#4267b2] transition-colors bg-white/70 text-gray-600 placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base`}
                  required
                  disabled={fieldDisabled}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="text-[#2d3b6f] font-medium mb-1 text-sm sm:text-base flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#4267b2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z" />
                  </svg>
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={3}
                  className="block w-full rounded-lg border-[#e5edff] border px-3 py-2 sm:px-4 sm:py-2.5 focus:border-[#4267b2] focus:ring-[#4267b2] transition-colors bg-white/70 text-gray-600 placeholder:text-gray-400 resize-none text-sm sm:text-base"
                  required
                  maxLength={500}
                />
                <div className="mt-1 text-xs text-gray-500 flex justify-end">
                  {formData.message.length}/500 characters
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading || !formValid}
                className={`w-full ${
                  formValid ? 'bg-[#4267b2]' : 'bg-gray-400'
                } text-white py-2 sm:py-2.5 px-4 sm:px-6 rounded-full font-medium transition-all duration-300 disabled:opacity-70 text-sm sm:text-base mt-2 flex items-center justify-center gap-2 group`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </motion.button>
              {errors.general && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-600 text-center font-medium bg-red-50 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg text-sm sm:text-base mt-3"
                >
                  {errors.general}
                </motion.p>
              )}
              {success && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-green-600 text-center font-medium bg-green-50 py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg text-sm sm:text-base mt-3"
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 