import Link from 'next/link'
import Image from 'next/image'
import leftarrow from '@/public/leftarrow.svg'

const Navbar = () => {
  return (
    <div className="bg-black border-b text-lg h-16 w-screen">
      <div className="flex flex-row h-full w-full justify-between items-center px-48 text-white/40">
        <Link href="/">
          <Image src={leftarrow} alt="left-arrow" color="white" />
        </Link>
        <div className="flex flex-row gap-8">
          <div className="hover:text-white/80 ease-in-out duration-500">
            <Link href="/contact">Contact</Link>
          </div>
          <div className="hover:text-white/80 ease-in-out duration-500">
            <Link href="/project">Projects</Link>
          </div>
          <div className="hover:text-white/80 ease-in-out duration-500">
            <Link href="/about">About me</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
