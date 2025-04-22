'use client'

import Navbar from './components/Navbar'
import { motion } from 'framer-motion'
import { FaMicrosoft, FaServer, FaCode, FaRobot, FaLinkedin, FaTwitter, FaGithub, FaPhone, FaCalendarAlt, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-white">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/home/hero-bg.jpg"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
          </div>
          <div className="container-custom text-center z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Transform Your Business with Advanced IT Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Expert services in Dynamics 365, managed IT solutions, and custom software development
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative inline-block"
            >
              <button 
                className="btn-primary mr-4"
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
              <button className="btn-secondary">Learn More</button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Dynamics 365 */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <FaMicrosoft className="text-primary text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-4">Dynamics 365 Solutions</h3>
                <p className="text-gray-600">
                  Comprehensive solutions for Business Central, Sales, Marketing, and Finance & Operations
                </p>
              </motion.div>

              {/* Managed Services */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <FaServer className="text-primary text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-4">Managed Services</h3>
                <p className="text-gray-600">
                  Proactive IT management and support to keep your business running smoothly
                </p>
              </motion.div>

              {/* Custom Software */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <FaCode className="text-primary text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-4">Custom Software</h3>
                <p className="text-gray-600">
                  Tailored software solutions designed to meet your specific business needs
                </p>
              </motion.div>

              {/* AI Development */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <FaRobot className="text-primary text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-4">AI Development</h3>
                <p className="text-gray-600">
                  Cutting-edge AI solutions to automate processes and drive innovation
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-secondary text-white py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">VSS</h3>
                <p className="text-gray-300">
                  Transforming businesses through innovative IT solutions and services.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">Dynamics 365</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Managed Services</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Custom Software</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">AI Development</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <FaTwitter className="text-2xl" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <FaGithub className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} VSS. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
} 