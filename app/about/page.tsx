import Navbar from "@/components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="h-[calc(100vh-4rem)] w-screen flex flex-row justify-between gap-2 items-center">
        <div className="h-full w-11/12 flex justify-center items-center">
          <Image src='/code1.jpg' height='800' width='800' alt='coding image' />
        </div>
        <div className="h-full w-full ">
          <div className="h-full w-full text-slate text-2xl text-zinc-400">
            <ul className="h-full w-full flex flex-col gap-3 items-left px-[200px] justify-center">
              <li>My name is Kapil Sarma</li>
              <li>I am from Kakinada, India</li>
              <li>I like to code</li>
              <li>I am a web dev enthusiast</li>
              <li>I am interested in learning about web3</li>
              <li>
                Some of the technologies I have worked with are:
                <div className="text-2xl text-zinc-500 my-2">
                  React, Next, Angular, Node, C++ (for problem solving), Python, SQL, Java
                </div>
              </li>            
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;