import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">DevGenius</h3>
            <p className="text-sm">Innovating the future of software development, one line of code at a time.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cloud Solutions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AI & Machine Learning</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} DevGenius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

