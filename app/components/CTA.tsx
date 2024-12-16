'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section id="contact" className="px-4 py-16 md:py-24 text-center bg-gradient-to-r from-blue-600 to-teal-600">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's collaborate and build something extraordinary together. Our team of experts is ready to bring your vision to life.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
          Get in Touch
        </Button>
      </motion.div>
    </section>
  )
}

