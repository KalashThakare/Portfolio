import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

import Social from "@/components/social"; 

export const Home = () => {
  return (
    <section className="h-full sm:p-2">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /><span className="text-accent">Kalash Thakare</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            A web developer and video editor with a creative edge.
            I specialize in building dynamic websites and editing compelling videos that tell a story. My work is a fusion of technical expertise and artistic vision, aimed at delivering polished, user-friendly experiences. Dive into my portfolio to discover how I turn concepts into digital realities.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center
                  text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    
  )
}

export default Home;
