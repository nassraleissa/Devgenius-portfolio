'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'محمد الحسيني',
    role: 'المؤسس والرئيس التنفيذي',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'رائد أعمال تقنية مع خبرة تزيد عن 15 عامًا في مجال البرمجيات والابتكار.'
  },
  {
    name: 'سارة العلوي',
    role: 'مديرة التصميم',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'مصممة متمرسة متخصصة في تصميم واجهات المستخدم وتجربة المستخدم.'
  },
  {
    name: 'أحمد الرحمن',
    role: 'مهندس برمجيات كبير',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'خبير في تطوير الحلول التقنية المعقدة باستخدام أحدث التقنيات.'
  }
]

export default function Team() {
  return (
    <section id="team" className="px-4 py-16 md:py-24 bg-gray-900" dir="rtl">
      <div className="container mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-white"
        >
          فريقنا
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full pt-[100%]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="absolute inset-0 object-cover"
                />
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-2">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
