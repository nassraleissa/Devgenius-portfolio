'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Twitter } from 'lucide-react'

const team = [
  {
    name: 'Alice Johnson',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years of experience in software development and entrepreneurship.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    bio: 'Tech guru with a passion for cutting-edge technologies and scalable architectures.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Carol Davis',
    role: 'Lead Designer',
    bio: 'Creative powerhouse with an eye for detail and a knack for user-centric design.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
]

export default function Team() {
  return (
    <section id="team" className="px-4 py-16 md:py-24 bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-poppins">Meet Our Team</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 font-poppins">{member.name}</h3>
              <p className="text-gray-400 mb-4">{member.role}</p>
              <p className="text-gray-300 mb-4">{member.bio}</p>
              <div className="flex space-x-4">
                <a href={member.social.twitter} className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href={member.social.linkedin} className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={member.social.github} className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
