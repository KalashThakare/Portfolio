"use client"

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/social";

export const Home = () => {
  // Method 1: Direct download from public folder
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume/resume.pdf'; // Place your CV in public/cv/ folder
    link.download = 'resume.pdf';
    link.click();
  };

  // Method 2: Alternative - Open CV in new tab
  const handleViewCV = () => {
    window.open('/resume/resume.pdf', '_blank');
  };

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
              I'm a builder at heart—focused on crafting scalable, high-performance systems that power the apps people rely on. From backend architecture to clean APIs and optimized databases, I love making complex systems run smoothly behind the scenes.

              <br />
              <br />
              Beyond coding, I've collaborated with tech communities, sharing knowledge and growing with like-minded developers. Whether it's building products, solving complex problems, or discussing the latest in tech—I'm always up for it.

              <br />
              <br />
              Let's connect and create something impactful!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleViewCV}
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
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