import Navbar from "@/components/Navbar";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="h-[calc(100vh-4rem)] w-screen flex flex-row justify-between gap-2 items-center border border-white">
        <div className="h-full w-[600px]">
        </div>
        <div className="h-full w-[200px] border border-white">
          <div className="h-full w-full text-slate text-2xl">
            Sar sarle
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;