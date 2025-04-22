'use client'

import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { FaMicrosoft, FaServer, FaCode, FaRobot } from 'react-icons/fa'

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h1 className="section-title text-center">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Dynamics 365 Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <FaMicrosoft className="text-primary text-4xl mr-4" />
                  <h2 className="text-2xl font-bold">Dynamics 365 Solutions</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Business Central</h3>
                    <p className="text-gray-600">Comprehensive ERP solution for small to medium-sized businesses.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sales & Marketing</h3>
                    <p className="text-gray-600">Customer relationship management and marketing automation.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Finance & Operations</h3>
                    <p className="text-gray-600">Enterprise resource planning for large organizations.</p>
                  </div>
                </div>
              </motion.div>

              {/* Managed Services Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <FaServer className="text-primary text-4xl mr-4" />
                  <h2 className="text-2xl font-bold">Managed Services</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">IT Infrastructure</h3>
                    <p className="text-gray-600">24/7 monitoring and management of your IT infrastructure.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
                    <p className="text-gray-600">Cloud migration, management, and optimization services.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Security</h3>
                    <p className="text-gray-600">Comprehensive security solutions to protect your business.</p>
                  </div>
                </div>
              </motion.div>

              {/* Custom Software Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <FaCode className="text-primary text-4xl mr-4" />
                  <h2 className="text-2xl font-bold">Custom Software</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Web Applications</h3>
                    <p className="text-gray-600">Custom web solutions tailored to your business needs.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                    <p className="text-gray-600">Native and cross-platform mobile applications.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Integration</h3>
                    <p className="text-gray-600">Seamless integration with existing systems and platforms.</p>
                  </div>
                </div>
              </motion.div>

              {/* AI Development Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <FaRobot className="text-primary text-4xl mr-4" />
                  <h2 className="text-2xl font-bold">AI Development</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                    <p className="text-gray-600">Custom ML models for predictive analytics and automation.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
                    <p className="text-gray-600">Text analysis and language understanding solutions.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
                    <p className="text-gray-600">Image and video analysis for various applications.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 