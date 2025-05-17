'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ContactCardProps {
  props: {
    title: string
    id: string
    link: string
    iconLink: string
  }
}

const ContactCard = ({ props }: ContactCardProps) => {
  const { title, id, link, iconLink } = props

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-slate-900 rounded-xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300"
    >
      <Link href={link} target="_blank" className="block">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-16 h-16">
            <Image
              src={iconLink}
              alt={title}
              fill
              className="object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          <p className="text-slate-400">{id}</p>
        </div>
      </Link>
    </motion.div>
  )
}

export default ContactCard
