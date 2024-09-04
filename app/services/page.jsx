"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import {motion} from 'framer-motion';

const services=[
  {
    num:'01',
    title:'Web Development',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, quo.',
    href:""
  },
  {
    num:'02',
    title:'Video Editing',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, quo.',
    href:""
  },
];


export const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-centre py-12 xl:py-0">
      <div className="container mx-auto mt-6">
        <motion.div 
          initial={{opacity:0}}
          animate={{
            opacity:1,
            transition:{
              delay:0.5,
              duration:0.4,
              ease:"easeIn"
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] mt-6"
        >
          {services.map((service,index)=>{
            return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-semibold text-outline group-hover:text-accent transition-all duration-500">
                  {service.num}
                </div>
                <Link href={service.href} className="w-[60px] h-[60px] rounded-full bg-white
                group-hover:bg-accent transition-all duration-500 flex 
                justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none group-hover:text-accent transition all duration-500">{service.title}</h2>
              <p className="text-white/50">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
            );
          })}

        </motion.div>
      </div>
    </section>
  )
}

export default Services;
