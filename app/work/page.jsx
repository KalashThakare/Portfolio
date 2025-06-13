"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../components/WorkSliderBtns.jsx";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "CloudDrop - Secure File Sharing Platform",
    description: `CloudDrop is a secure file-sharing SaaS that allows users to upload large files to their own or a default S3 bucket and share them via signed URLs. It includes access control, real-time chat, and email-based link verification.`,
    stack: [
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "AWS S3" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
      { name: "Socket.io" },
      { name: "Razorpay" }
    ],
    image: "/clouddrop.jpg", // Update this with your actual banner or screenshot
    live: "https://clouddrop.pro/", // Replace if deployed elsewhere
    github: "",
    isLive: true
  },
  {
    num: "02",
    category: "Backend",
    title: "Razorpay Payment Integration",
    description: `Integrated Razorpay Payment Gateway in test mode using Node.js. The project demonstrates secure server-side payment processing with basic order creation and payment flow.`,
    stack: [
      {
        name: "Node.js"
      },
      {
        name: "Express.js"
      },
      {
        name: "Razorpay"
      }
    ],
    image: "/razorpay.png", // Update this with a more relevant image if available
    live: "", // Replace with actual deployed link if available
    github: "https://github.com/KalashThakare/PaymentGateway",
    isLive: false
  },

  {
    num: "03",
    category: "Fullstack",
    title: "ChatSync - Real-Time Chat App",
    description: `ChatSync is a full-featured real-time chat application built with React, Node.js, and Socket.io. It supports instant messaging, image/video uploads via Cloudinary, and features a sleek responsive UI with Tailwind CSS.`,
    stack: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Socket.io" },
      { name: "Cloudinary" }
    ],
    image: "/chatsync.png", // Replace with an actual relevant image path
    live: "https://chatsync-pqe6.onrender.com/",
    github: "https://github.com/KalashThakare/Chat-Application",
    isLive: true
  },

];

export const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] xl:gap-[30px] h-full xl:h-[50%]">
              {/* Project number */}
              <div className="text-6xl xl:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Project category and status */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-accent text-primary px-3 py-1 rounded-md text-sm font-medium uppercase tracking-wide">
                  {project.category}
                </span>
                <span className={`px-3 py-1 rounded-md text-sm font-medium uppercase tracking-wide ${
                  project.isLive 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {project.isLive ? 'Live' : 'Not Live'}
                </span>
              </div>

              {/* Project title */}
              <h2 className="text-[28px] xl:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* Project description */}
              <p className="text-white/60 text-sm xl:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack - Fixed for mobile responsiveness */}
              <div className="w-full">
                <ul className="flex flex-wrap gap-2 xl:gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-base xl:text-xl text-accent whitespace-nowrap">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Border */}
              <div className="border border-white/20"></div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] xl:w-[70px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl xl:text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GitHub button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] xl:w-[70px] xl:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl xl:text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[300px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerstyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />

            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;