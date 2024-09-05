"use client";

import {motion} from "framer-motion";

import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa";

import ContactForm from "./contactform";


const info=[
    {
        icon:<FaPhoneAlt />,
        title:"Phone",
        description:"(+91) --",
    },
    {
        icon:<FaEnvelope />,
        title:"Email",
        description:"kalashthakare898@gmail.com",
    },
    {
        icon:<FaMapMarkerAlt />,
        title:"Address",
        description:"Nagpur",
    },
];

export const Contact = () => {
  return (
    <motion.section 
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{
                delay:0.4,
                duration:0.5,
                ease:"easeIn",
            },
        }}
        className="py-6"
    >
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                <ContactForm />



                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                        {info.map((item,index)=>{
                            return(
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
                                    text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Contact;
