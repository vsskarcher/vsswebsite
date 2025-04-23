'use client'

import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { FaConnectdevelop, FaLightbulb, FaCogs, FaRocket, FaChartLine, FaUsers, FaCubes, FaMoneyBillWave, FaShoppingCart, FaProjectDiagram, FaUserTie } from 'react-icons/fa'
import Image from 'next/image'

export default function Dynamics365() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/dynamics365/hero-bg.jpg"
              alt="Dynamics 365 Background"
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
              What is Dynamics 365?
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              AI-powered ERP and CRM applications to help you better manage sales, service, finance, and supply chain operations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 max-w-3xl mx-auto"
            >
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/X7B99e3mNfI?si=XDPggjXjSCBYzvTN"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="section-title text-center">What can you do with Dynamics 365?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <FaConnectdevelop className="text-primary text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-4">Connect your data across departments</h3>
                <p className="text-gray-600">
                  Bring all your business data together with flexible applications that work with your existing systems. 
                  Automate repetitive business processes with AI and enhance customer interactions using tools that support 
                  every business function.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <FaLightbulb className="text-primary text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-4">Remove barriers to innovation</h3>
                <p className="text-gray-600">
                  Connect with your other Microsoft products to simplify data sharing between systems and processes. 
                  Manage data in real time, track customers, and streamline workflows with Copilot in Dynamics 365 apps.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <FaCogs className="text-primary text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-4">Adapt to anything</h3>
                <p className="text-gray-600">
                  A flexible, scalable architecture supports growth, making it easy to add new features. 
                  Automate tasks like work orders, lead scoring, contract management, scheduling, and project tracking.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <FaRocket className="text-primary text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-4">Deliver more value in less time</h3>
                <p className="text-gray-600">
                  Transform business processes and scale individual impact with Copilot embedded in Dynamics 365 apps. 
                  Get started with agents pre-built for Dynamics 365 and Microsoft 365 applications.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center">Build your own personalized Dynamics 365 solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <FaChartLine className="text-primary text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-4">Dynamics 365 Sales</h3>
                <p className="text-gray-600 mb-4">
                  Close deals faster and improve team productivity with a trusted AI-first sales solution.
                </p>
                <button className="btn-primary">Learn More</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <FaUsers className="text-primary text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-4">Dynamics 365 Customer Service</h3>
                <p className="text-gray-600 mb-4">
                  Resolve issues faster and deliver exceptional AI-powered service with automation.
                </p>
                <button className="btn-primary">Learn More</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <FaCubes className="text-primary text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-4">Dynamics 365 Supply Chain Management</h3>
                <p className="text-gray-600 mb-4">
                  Proactively navigate disruption with a flexible, collaborative, connected supply chain.
                </p>
                <button className="btn-primary">Learn More</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <FaMoneyBillWave className="text-primary text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-4">Dynamics 365 Finance</h3>
                <p className="text-gray-600 mb-4">
                  Assess the health of your business and make faster, insight-fueled decisions.
                </p>
                <button className="btn-primary">Learn More</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <FaShoppingCart className="text-primary text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-4">Dynamics 365 Commerce</h3>
                <p className="text-gray-600 mb-4">
                  Deliver connected, personalized buying experiences with help from AI.
                </p>
                <button className="btn-primary">Learn More</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <FaProjectDiagram className="text-primary text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-4">Dynamics 365 Project Operations</h3>
                <p className="text-gray-600 mb-4">
                  Improve collaboration, visibility, and agility across projects.
                </p>
                <button className="btn-primary">Learn More</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <FaUserTie className="text-primary text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-4">Dynamics 365 Business Central</h3>
                <p className="text-gray-600 mb-4">
                  Connect finance, sales, service, and operations to work smarter, adapt faster, and perform better.
                </p>
                <button className="btn-primary">Learn More</button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">What is Dynamics 365?</h3>
                <p className="text-gray-600">
                  Dynamics 365 is an AI-powered suite of business applications designed to streamline operations, 
                  enhance customer engagement, and drive better business outcomes. The apps connect with Microsoft 365, 
                  Azure, and Microsoft Power Platform to provide a unified, secure, and scalable solution.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">What is Microsoft Dynamics 365 used for?</h3>
                <p className="text-gray-600">
                  Dynamics 365 unifies business data and processes to streamline operations, enhance customer engagement, 
                  and drive growth. Retailers use Dynamics 365 to manage inventory and personalize experiences, while 
                  financial firms use it to automate onboarding and gain insights.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">Is Dynamics 365 an ERP or CRM?</h3>
                <p className="text-gray-600">
                  Dynamics 365 offers AI-powered solutions to enhance both CRM and ERP processes. The CRM applications 
                  help manage sales, marketing, and customer service, while ERP applications connect finance, inventory, 
                  and HR to streamline operations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started with Dynamics 365?</h2>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="btn-secondary">Try for free</button>
              <button className="btn-white">Contact Sales</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 