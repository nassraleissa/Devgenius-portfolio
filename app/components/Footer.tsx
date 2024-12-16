'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

const socialLinks = [
  { 
    icon: Github, 
    href: '#',
    label: 'جيتهب'
  },
  { 
    icon: Linkedin, 
    href: '#',
    label: 'لينكد إن'
  },
  { 
    icon: Twitter, 
    href: '#',
    label: 'تويتر'
  }
]

const footerLinks = [
  {
    title: 'الروابط الرئيسية',
    links: [
      { name: 'الرئيسية', href: '#home' },
      { name: 'المميزات', href: '#features' },
      { name: 'المشاريع', href: '#projects' },
      { name: 'الفريق', href: '#team' }
    ]
  },
  {
    title: 'خدماتنا',
    links: [
      { name: 'تطوير الويب', href: '#' },
      { name: 'تطوير الموبايل', href: '#' },
      { name: 'أمن المعلومات', href: '#' },
      { name: 'استشارات تقنية', href: '#' }
    ]
  },
  {
    title: 'التواصل',
    links: [
      { name: 'البريد الإلكتروني', href: 'mailto:info@devgenius.com' },
      { name: 'الهاتف', href: 'tel:+966500000000' },
      { name: 'العنوان', href: '#' }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4" dir="rtl">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold mb-4">DevGenius</h3>
          <p className="text-gray-400 mb-4">
            نقدم حلولًا برمجية متطورة لتحويل أفكارك الرقمية إلى واقع ملموس.
          </p>
          <div className="flex space-x-reverse space-x-4">
            {socialLinks.map((social, index) => (
              <Link 
                key={index} 
                href={social.href} 
                className="text-gray-400 hover:text-white"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>

        {footerLinks.map((section, index) => (
          <div key={index} className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} DevGenius. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  )
}
