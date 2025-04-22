'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaPhone, FaCalendarAlt, FaEnvelope } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-10">
              <Image
                src="/images/logo/logo.png"
                alt="Value Stream Systems Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/solutions" className="text-gray-600 hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="/dynamics365" className="text-gray-600 hover:text-primary transition-colors">
              Dynamics 365
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </Link>
            <div className="relative">
              <button 
                className="btn-primary"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Get Started
              </button>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2"
                >
                  <Link
                    href="tel:330-814-8249"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <FaPhone className="mr-3 text-primary" />
                    Call Us
                  </Link>
                  <Link
                    href="mailto:info@valuestream.online"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <FaEnvelope className="mr-3 text-primary" />
                    Email Us
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <FaCalendarAlt className="mr-3 text-primary" />
                    Schedule Meeting
                  </Link>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/services"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/dynamics365"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              Dynamics 365
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <div className="space-y-2 mt-4">
              <Link
                href="tel:330-814-8249"
                className="flex items-center px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              >
                <FaPhone className="mr-3 text-primary" />
                Call Us
              </Link>
              <Link
                href="mailto:info@valuestream.online"
                className="flex items-center px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              >
                <FaEnvelope className="mr-3 text-primary" />
                Email Us
              </Link>
              <Link
                href="/contact"
                className="flex items-center px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              >
                <FaCalendarAlt className="mr-3 text-primary" />
                Schedule Meeting
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  )
} 