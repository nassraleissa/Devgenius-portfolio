'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="px-4 pt-32 pb-20 md:pt-40 md:pb-32 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-bold mb-6 gradient-text font-poppins"
      >
        Innovate. Create. Elevate.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300"
      >
        We build cutting-edge software solutions that transform businesses and drive exponential growth.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </section>
  )
}

