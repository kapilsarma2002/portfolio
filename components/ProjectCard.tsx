import Link from 'next/link'

const ProjectCard = ({ props }) => {
  const { date, title, link, description, techstack } = props

  return (
    <Link href={link} target="_blank">
      <div className="h-[300px] w-[600px] border border-zinc-600 flex flex-col justify-center items-center gap-2 rounded-xl hover:border-zinc-800 ease-in-out duration-1000 ">
        <div className="text-sm text-slate-500">{date}</div>
        <div className="text-4xl">{title}</div>
        <div className="italic text-slate-400 flex justify-end w-full pr-8">{techstack}</div>
        <div className="text-md flex justify-center items-center px-6 w-full pt-4">{description}</div>
      </div>
    </Link>
  )
}

export default ProjectCard
