'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: 'DevGenius transformed our business with their innovative solutions. Their expertise and professionalism are unmatched.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, StartupX',
    content: 'Working with DevGenius was a game-changer for our startup. They delivered a high-quality product on time and within budget.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Mike Johnson',
    role: 'Product Manager, EnterpriseY',
    content: 'The team at DevGenius is incredibly talented and easy to work with. They consistently exceed our expectations.',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function Testimonials() {
  return (
    <section className="px-4 py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-poppins">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  style={{
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                  sizes="(max-width: 768px) 50px, 50px"
                />
              </div>
              <div>
                <h3 className="font-semibold font-poppins">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-300 italic">"{testimonial.content}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
