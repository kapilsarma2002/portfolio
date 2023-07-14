import Navbar from "@/components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="h-[calc(100vh-4rem)] w-screen flex flex-row justify-between items-center border border-white">
        <div className="h-full w-[400px]">
        </div>
        <div className="h-full w-[100vw-600px] border border-white">
          <div className="h-full w-full text-slate text-2xl">
            Sar sarle
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;