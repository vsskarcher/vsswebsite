'use client'

import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container-custom text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About VSS
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Transforming businesses through innovative IT solutions and expert services.
            </motion.p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="section-title">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Founded with a vision to revolutionize the IT services industry, VSS has grown into a trusted partner for businesses seeking innovative technology solutions. Our journey began with a simple mission: to help businesses thrive in the digital age.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to serve clients across various industries, providing cutting-edge solutions in Dynamics 365, managed services, and custom software development.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gray-100 p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading provider of IT services, known for our expertise, innovation, and commitment to client success.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We constantly explore new technologies and approaches to deliver cutting-edge solutions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from project delivery to customer service.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">Partnership</h3>
                <p className="text-gray-600">
                  We build long-term relationships with our clients, working together to achieve their goals.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 