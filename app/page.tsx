'use client'

import Link from 'next/link'
import Typed from 'typed.js'
import { useRef, useEffect } from 'react'

const company = 'Deloitte'

const textArr = [
  'This is Kapil Sarma',
  `I currently work at ${company}`,
  'I am a Web Dev Enthusiast'
]

const HomePage = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: textArr,
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });
    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);


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

        <div className="text-white/50 flex flex-col m-4 gap-4">
          <div className="text-lg">Hi There👋</div>
          <div>
            <span
              className="text-4xl text-white/60 inline-block w-auto"
              ref={el}
            ></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
