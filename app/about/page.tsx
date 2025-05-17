'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', '.NET', 'SQL', 'Prisma', 'FastAPI'],
  },
  {
    category: 'Other',
    items: ['Git', 'Docker', 'GCP', 'Problem Solving', 'Web3'],
  },
]

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="pt-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="aspect-square relative max-w-[400px] mx-auto">
                <Image
                  src="/Kapil.jpeg"
                  alt="Kapil Sarma"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl" />
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl opacity-20 transform -rotate-6 scale-110" />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <h1 className="text-4xl font-bold text-white">About Me</h1>

              <div className="space-y-4 text-gray-300">
                <p>
                  Hello! I&apos;m Kapil Sarma, a passionate Full Stack Developer
                  from Kakinada, India. Currently working at Deloitte, I
                  specialize in building modern web applications and exploring
                  cutting-edge technologies.
                </p>
                <p>
                  With a strong foundation in both frontend and backend
                  development, I enjoy creating seamless user experiences while
                  ensuring robust and scalable backend architectures.
                </p>
                <p>
                  I&apos;m particularly interested in Web3 technologies and
                  constantly expanding my knowledge in this exciting space.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">
                  Skills & Technologies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {skills.map((skillSet) => (
                    <motion.div
                      key={skillSet.category}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-2"
                    >
                      <h3 className="text-lg font-medium text-blue-400">
                        {skillSet.category}
                      </h3>
                      <ul className="space-y-1">
                        {skillSet.items.map((item) => (
                          <li key={item} className="text-gray-400">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default About
