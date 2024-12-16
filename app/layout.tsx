import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata = {
  title: 'DevGenius - Cutting-Edge Software Solutions',
  description: 'We craft innovative, high-performance software solutions that propel businesses into the future.',
  keywords: ['software development', 'web applications', 'mobile apps', 'AI solutions', 'cloud computing'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

