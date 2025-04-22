'use client'

import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { FaChartLine, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa'
import Image from 'next/image'

export default function Solutions() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/solutions/hero-bg.jpg"
              alt="Solutions Background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container-custom text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Tailored solutions to transform your business operations and drive growth.
            </motion.p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Business Intelligence */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/images/solutions/business-intelligence.jpg"
                    alt="Business Intelligence"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center mb-6">
                  <FaChartLine className="text-primary text-4xl mr-4" />
                  <h2 className="text-2xl font-bold">Business Intelligence</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Transform your data into actionable insights with our advanced analytics solutions.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Custom dashboards and reporting</li>
                    <li>Data visualization and analysis</li>
                    <li>Predictive analytics</li>
                    <li>KPI tracking and monitoring</li>
                  </ul>
                </div>
              </motion.div>

              {/* Data Management */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/images/solutions/data-management.jpg"
                    alt="Data Management"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center mb-6">
                  <FaDatabase className="text-primary text-4xl mr-4" />
                  <h2 className="text-2xl font-bold">Data Management</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Streamline your data operations with our comprehensive data management solutions.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Data migration and integration</li>
                    <li>Data quality and governance</li>
                    <li>Master data management</li>
                    <li>Data warehousing</li>
                  </ul>
                </div>
              </motion.div>

              {/* Cloud Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/images/solutions/cloud-solutions.jpg"
                    alt="Cloud Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center mb-6">
                  <FaCloud className="text-primary text-4xl mr-4" />
                  <h2 className="text-2xl font-bold">Cloud Solutions</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Leverage the power of cloud computing with our scalable solutions.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Cloud migration and deployment</li>
                    <li>Hybrid cloud solutions</li>
                    <li>Cloud security and compliance</li>
                    <li>Cloud cost optimization</li>
                  </ul>
                </div>
              </motion.div>

              {/* AI & Automation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/images/solutions/ai-automation.jpg"
                    alt="AI & Automation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center mb-6">
                  <FaRobot className="text-primary text-4xl mr-4" />
                  <h2 className="text-2xl font-bold">AI & Automation</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Automate processes and enhance decision-making with AI-powered solutions.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Process automation</li>
                    <li>Machine learning models</li>
                    <li>Natural language processing</li>
                    <li>Predictive maintenance</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/solutions/manufacturing-case.jpg"
                    alt="Manufacturing Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Manufacturing Excellence</h3>
                <p className="text-gray-600 mb-4">
                  Implemented Dynamics 365 for a leading manufacturer, resulting in 30% increased efficiency.
                </p>
                <button className="text-primary font-semibold">Read Case Study →</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/solutions/retail-case.jpg"
                    alt="Retail Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Retail Transformation</h3>
                <p className="text-gray-600 mb-4">
                  Developed a custom e-commerce solution that increased online sales by 45%.
                </p>
                <button className="text-primary font-semibold">Read Case Study →</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/solutions/financial-case.jpg"
                    alt="Financial Services Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Financial Services</h3>
                <p className="text-gray-600 mb-4">
                  Implemented AI-powered risk assessment system reducing processing time by 60%.
                </p>
                <button className="text-primary font-semibold">Read Case Study →</button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 