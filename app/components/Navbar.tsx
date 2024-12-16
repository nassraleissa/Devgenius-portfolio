'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#features', label: 'خدماتنا' },
  { href: '#projects', label: 'مشاريعنا' },
  { href: '#team', label: 'فريقنا' },
  { href: '#testimonials', label: 'آراء العملاء' },
]

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 top-0 bg-gray-900/80 backdrop-blur-md"
      dir="rtl"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-reverse space-x-4">
          <Link href="/" className="text-2xl font-bold text-white">
            DevGenius
          </Link>
          <div className="hidden md:flex space-x-reverse space-x-6">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-reverse space-x-4">
          <button 
            className="hidden md:block border border-gray-700 text-white hover:bg-gray-800 px-4 py-2 rounded-md text-sm transition-colors"
          >
            تواصل معنا
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
