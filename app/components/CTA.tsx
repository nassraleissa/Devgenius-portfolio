'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="px-4 py-16 md:py-24 bg-gray-900" dir="rtl">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white text-right">
            لنحول أفكارك إلى واقع
          </h2>
          <p className="text-gray-400 mb-6 text-right">
            نحن في DevGenius نؤمن بقوة الابتكار وجاهزون لمساعدتك في تحقيق رؤيتك التقنية. دعنا نبني مستقبلًا رقميًا مميزًا معًا.
          </p>
          <div className="flex justify-end space-x-4 space-x-reverse">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              تواصل معنا
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              شاهد مشاريعنا
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
