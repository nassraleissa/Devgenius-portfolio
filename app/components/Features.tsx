'use client'

import { motion } from 'framer-motion'
import { 
  CodeIcon, 
  ServerIcon, 
  ShieldCheckIcon 
} from 'lucide-react'

const features = [
  {
    icon: CodeIcon,
    title: 'تطوير مخصص',
    description: 'نقدم حلولًا برمجية مصممة خصيصًا لتلبية احتياجات عملك الفريدة، مع التركيز على الأداء والقابلية للتوسع.'
  },
  {
    icon: ServerIcon,
    title: 'بنية تحتية سحابية',
    description: 'نصمم وننفذ بنية تحتية سحابية متطورة وآمنة، مما يضمن أداء عالي وموثوقية لمشاريعك.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'أمن المعلومات',
    description: 'نضع أمن المعلومات في صميم حلولنا، مع تطبيق أحدث معايير الأمن السيبراني لحماية بياناتك.'
  }
]

export default function Features() {
  return (
    <section id="features" className="px-4 py-16 md:py-24 bg-gray-900" dir="rtl">
      <div className="container mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-white"
        >
          خدماتنا المتميزة
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">
                <feature.icon className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-right">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-right">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
