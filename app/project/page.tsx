import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import github from '@/public/github.png'
import Image from 'next/image'
import Link from 'next/link'

const MainProject = {
  title: '',
  link: '',
  description: '',
  techstack: '',
  date: '',
}

const Projects = [
  {
    title: 'Docs Clone',
    link: 'https://github.com/kapilsarma2002/docs-clone',
    date: 'May-23',
    description:
      'This project is a clone of google docs, it has been built using React, TS and Tailwind CSS and deployed to Vercel. The Skeloton of the page is built using Flexbox. It consists of three components Titlebar, Sidebar and Editor',
    techstack: 'React, Tailwind, draft-js',
  },
  {
    title: 'Post Share',
    link: 'https://github.com/kapilsarma2002/post-share',
    date: 'Mar-23',
    description:
      'A post sharing app which lets users share their thoughts in posts. This was my first experience using a complete framework like angular for frontend and using .Net as well',
    techstack: 'Angular, .Net, SQL Server',
  },
  {
    title: 'Blog website',
    link: 'https://github.com/kapilsarma2002/blog',
    date: 'Oct-22',
    description:
      "A Simple bloggin website built using nextjs 12 which lets the users write their blogs and also lets the users read others' blogs",
    techstack: 'Nextjs 12 , React, Chakra UI, Prisma',
  },
  {
    title: 'Password Manager',
    link: 'https://github.com/kapilsarma2002/passman-fullst-',
    date: 'Sept-22',
    description:
      'A password manager built using nextjs 12 which lets users store the passwords for different websites. The passwords are encrypted using bcrypt.',
    techstack: 'Nextjs 12, React, Chakra UI, Prisma',
  },
]

const Project = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="h-[calc(100%-4rem)] grid grid-cols-2 gap-24 place-items-center mx-40 overflow-y-auto py-10">
        {Projects.map((project) => (
          <ProjectCard key={project.title} props={project} />
        ))}
      </div>

      <div className="text-2xl w-full ">
        <Link
          href="https://github.com/kapilsarma2002"
          target="_blank"
          className="flex flex-row items-center justify-center gap-2 pb-10"
        >
          <div className="text-xl text-zinc-400">
            For more projects please visit my github page
          </div>
          <Image src={github} alt="github" height="20" width="20" />
        </Link>
      </div>
    </div>
  )
}

export default Project
