'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

interface ProjectCardProps {
  props: {
    title: string
    description: string
    techstack: string
    link: string
    date: string
  }
}

const ProjectCard = ({ props }: ProjectCardProps) => {
  const { title, description, techstack, link, date } = props

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-slate-400">{date}</span>
          <div className="flex items-center space-x-4">
            <Link
              href={link}
              target="_blank"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 mb-4 flex-grow">{description}</p>

        <div className="text-sm text-slate-500">
          <div className="flex flex-wrap gap-2">
            {techstack.split(',').map((tech) => (
              <span
                key={tech.trim()}
                className="bg-slate-800 px-2 py-1 rounded-md"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
