'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import { FiGithub } from 'react-icons/fi'
import Link from 'next/link'

const Projects = [
  {
    title: 'Billow',
    link: 'https://github.com/kapilsarma2002/billow',
    deployedUrl: 'https://billow-three.vercel.app/',
    date: 'June-25',
    description:
      'Bill + Flow = Billow - A full-stack application that combines TypeScript and Golang for Invoice Analytics, for Freelancers',
    techstack: 'Next.js, React, Prisma, Clerk, Postgres, Tailwind CSS, Golang, Heroku',
  },
  {
    title: 'LaunchPulse',
    link: 'https://github.com/kapilsarma2002/launchpulse',
    deployedUrl: 'https://launchpulse-nu.vercel.app/',
    date: 'June-25',
    description:
      "🚀 LaunchPulse: The ultimate platform for building branded waitlist pages, collecting signups, and managing your app’s early access community—all with beautiful, customizable public pages.",
    techstack: 'Next.js, React, Prisma, Clerk, Postgres, Framer Motion, Recharts, Tabler icons',
  },
  {
    title: 'Echo Post(In Progress)',
    link: 'https://github.com/kapilsarma2002/echo-post',
    deployedUrl: '',
    date: 'May-25',
    description:
      'A powerful social media automation platform that enables users to schedule and publish posts across multiple social platforms simultaneously.',
    techstack: 'TypeScript, Next.js, Social Media APIs',
  },
  {
    title: 'Travex',
    link: 'https://github.com/kapilsarma2002/travex',
    deployedUrl: 'https://travex-olive.vercel.app/',
    date: 'Feb-25',
    description:
      'A Next.js travel management app with interactive world map visualization. Features dynamic trip plotting, AI-powered experience analysis, and comprehensive travel logging capabilities.',
    techstack: 'Next.js, Prisma, Clerk, Postgres, Framer Motion, Leaflet',
  },
  {
    title: 'Gita GPT',
    link: 'https://github.com/kapilsarma2002/gita-gpt',
    deployedUrl: 'https://gita-gpt-bice.vercel.app/',
    date: 'Dec-24',
    description:
      'An AI-powered application that provides insights from the Bhagavad Gita. Built with modern web technologies and integrating advanced language models for spiritual guidance.',
    techstack: 'Next.js, TypeScript, Prisma, AI Integration',
  },
  {
    title: 'Saarathi',
    link: 'https://github.com/kapilsarma2002/saarathi',
    deployedUrl: 'https://saarathi-one.vercel.app/',
    date: 'Dec-24',
    description:
      'A modern Next.js application focused on providing guidance and assistance based in scriptures. Features a clean, responsive design and seamless user experience.',
    techstack: 'Next.js, TypeScript, Tailwind CSS',
  },
]

const ProjectPage = () => {
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
            <h1 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for
              building modern web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {Projects.map((project, index) => (
              <ProjectCard key={project.title} props={project} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Link
              href="https://github.com/kapilsarma2002"
              target="_blank"
              className="inline-flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
              <span>View more projects on GitHub</span>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default ProjectPage
