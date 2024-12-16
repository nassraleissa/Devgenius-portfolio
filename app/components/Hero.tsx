'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-right"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            نحن <span className="text-blue-500">DevGenius</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            نقدم حلولًا برمجية متطورة تحول أفكارك الرقمية إلى واقع ملموس. فريقنا من الخبراء مستعد لمساعدتك في تحقيق أهدافك التقنية.
          </p>
          <div className="flex justify-end space-x-reverse space-x-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md text-lg">
              اتصل بنا
            </button>
            <button className="border border-gray-700 text-white hover:bg-gray-800 px-8 py-3 rounded-md text-lg">
              تعرف علينا
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            <Image 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="DevGenius Hero Image"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
