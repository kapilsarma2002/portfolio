import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen font-sans">
      <div className="flex flex-col justify-between h-[400px] w-[800px] max-w-[1000px] border border-white/20 rounded-lg">
        <ul className="flex flex-row-reverse gap-8 text-lg text-white/40 m-4">
          <li className="hover:text-white/80 ease-in-out duration-500">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:text-white/80 ease-in-out duration-500">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-white/80 ease-in-out duration-500">
            <Link href="/about">About me</Link>
          </li>
        </ul>

        <div className="text-white/50 flex flex-col m-4">
          <div className='text-lg'>Hi There👋</div>
          <div className='text-2xl text-white/60'>This is <div className='text-5xl'>Kapil Sarma</div></div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
