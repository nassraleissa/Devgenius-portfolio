import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navbar from './components/Navbar'

// Configure Arabic font
const tajawal = Tajawal({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-tajawal'
})

export const metadata: Metadata = {
  title: 'DevGenius - شركة برمجيات متطورة',
  description: 'حلول برمجية متكاملة لتحويل أفكارك الرقمية إلى واقع',
  keywords: ['تطوير برمجيات', 'تطبيقات الويب', 'تطبيقات الموبايل', 'حلول الذكاء الاصطناعي']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} font-sans bg-gray-900 text-white`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
