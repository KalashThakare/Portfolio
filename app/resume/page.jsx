"use client";

import { Description } from "@radix-ui/react-dialog";
import {FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs} from "react-icons/fa";
import {SiTailwindcss,SiNextdotjs} from "react-icons/si";

const about={
  title:"About me",
  Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, id.",
  info:[
    {
      fieldname:"Name",
      fieldValue:"Kalash Thakare",
    },
    {
      fieldname:"Gmail",
      fieldValue:"kalashthakare898@gmail.com",
    },
    {
      fieldname:"Contact",
      fieldValue:"(+91) --"
    },
    {
      fieldname:"Freelance",
      fieldValue:"Available",
    },
  ]
  
};

const Skills={
  title:"My Skills",
  Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quis?",
  skillslist:[
    {
      icon:<FaHtml5 />,
      name:"HTML 5",
    },
    {
      icon:<FaCss3 />,
      name:"Css3",
    },
    {
      icon:<FaJs />,
      name:"JavaScript",
    },
    {
      icon:<FaReact />,
      name:"React.Js",
    },
    {
      icon:<FaNodeJs />,
      name:"Node.Js",
    },
    {
      icon:<SiNextdotjs />,
      name:"Next.Js",
    },
    {
      icon:<SiTailwindcss />,
      name:"Tailwind.Css",
    },
  ]
};

import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area"
import {motion} from "framer-motion";


export const Resume = () => {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"},
    }}
    className="min-h-[80vh] flex py-12 xl:py-0 justify-center items-center"
    
    >
      <div className="container mx-auto">
        <Tabs defaultValue="Skills" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList>
            <TabsTrigger value="Skills">
              Skills
            </TabsTrigger>
            <TabsTrigger value="About me">
              About me
            </TabsTrigger>
          </TabsList>

          {/* content */}

          <div className="min-h-[70vh] w-full">
            {/*skills*/}
            <TabsContent value="Skills" className="w-full">
              Skills
            </TabsContent>
          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;
