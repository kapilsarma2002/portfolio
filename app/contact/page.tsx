'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import ContactCard from '@/components/Contactcard'

const Profiles = [
  {
    title: 'GitHub',
    icon: 'Github',
    id: '@kapilsarma2002',
    link: 'https://www.github.com/kapilsarma2002',
    iconLink: '/github.png',
  },
  {
    title: 'LinkedIn',
    icon: 'LinkedIn',
    id: 'Kapil Sarma',
    link: 'https://www.linkedin.com/in/kapil-sarma-5bb174184/',
    iconLink: '/linkedin.png',
  },
  {
    title: 'X',
    icon: 'X',
    id: '@kapil_sarma_',
    link: 'https://www.x.com/kapil_sarma_',
    iconLink: '/x.avif',
  },
  {
    title: 'Email',
    icon: 'Email',
    id: 'sarmakapil1817@gmail.com',
    link: 'mailto:sarmakapil1817@gmail.com',
    iconLink: '/mail.png',
  },
  {
    title: 'Instagram',
    icon: 'Instagram',
    id: '@_kapilsarma_',
    link: 'https://www.instagram.com/_kapilsarma_/',
    iconLink: '/insta.webp',
  },
]

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="pt-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Feel free to reach out through any of these platforms. I&apos;m
              always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Profiles.map((profile) => (
              <ContactCard key={profile.id} props={profile} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
