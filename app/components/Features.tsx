'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Shield, Cloud, Smartphone, Cpu } from 'lucide-react'

const features = [
  {
    icon: <Code className="h-8 w-8 text-blue-400" />,
    title: 'Clean Code',
    description: 'We write elegant, efficient, and maintainable code that stands the test of time.'
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
    title: 'Fast Performance',
    description: 'Our solutions are optimized for speed, ensuring smooth user experiences.'
  },
  {
    icon: <Shield className="h-8 w-8 text-green-400" />,
    title: 'Secure by Design',
    description: 'We prioritize security in every aspect of our development process.'
  },
  {
    icon: <Cloud className="h-8 w-8 text-purple-400" />,
    title: 'Cloud-Native',
    description: 'We build scalable, resilient applications designed for modern cloud infrastructures.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-red-400" />,
    title: 'Mobile-First',
    description: 'Our applications are responsive and optimized for all devices and screen sizes.'
  },
  {
    icon: <Cpu className="h-8 w-8 text-indigo-400" />,
    title: 'AI Integration',
    description: 'We leverage cutting-edge AI technologies to create intelligent, adaptive solutions.'
  }
]

export default function Features() {
  return (
    <section id="services" className="px-4 py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-poppins">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 font-poppins">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

