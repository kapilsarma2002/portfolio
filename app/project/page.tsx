import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'

const MainProject = {
  title: '',
  link: '',
  description: '',
  techstack: '',
  date: ''
}

const Projects = [
  {
    title: 'title1',
    link: 'link1',
    date: 'date1',
    description: 'desc1',
    techstack: 'tech1',
  },
  {
    title: 'title2',
    link: 'link2',
    date: 'date2',
    description: 'desc2',
    techstack: 'tech2',
  },
  {
    title: 'title2',
    link: 'link2',
    date: 'date2',
    description: 'desc2',
    techstack: 'tech2',
  },
  {
    title: 'title2',
    link: 'link2',
    date: 'date2',
    description: 'desc2',
    techstack: 'tech2',
  },
  {
    title: 'title2',
    link: 'link2',
    date: 'date2',
    description: 'desc2',
    techstack: 'tech2',
  },
  {
    title: 'title2',
    link: 'link2',
    date: 'date2',
    description: 'desc2',
    techstack: 'tech2',
  },
  {
    title: 'title2',
    link: 'link2',
    date: 'date2',
    description: 'desc2',
    techstack: 'tech2',
  },
  {
    title: 'title2',
    link: 'link2',
    date: 'date2',
    description: 'desc2',
    techstack: 'tech2',
  },
  {
    title: 'title2',
    link: 'link2',
    date: 'date2',
    description: 'desc2',
    techstack: 'tech2',
  },
]

const Project = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="h-[calc(100%-4rem)] grid grid-cols-2 gap-12 place-items-center mx-40 overflow-y-auto py-10">
        {Projects.map((project) => (
          <ProjectCard key={project.title} props={project} />
        ))}
      </div>
    </div>
  )
}

export default Project
