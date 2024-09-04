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

const edu={
  icon:"/assets/resume/cap.svg",
  title:"My Education",
  Description:"jwidnwiedn cwecncwiec iucnweic wedhwcnswiuwscs i usicwsieduc siuvnscj sdjnn vdbxm vjdfiueqwjdov ",
  items:[
    {
      institution:"Online Course Platform",
      degree:"Full Stack Web Development Bootcamp",
      duration:"2024"
    },
    {
      institution:"Online Course",
      degree:"Programing Course",
      duration:"2024"
    },
  ],
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
          <TabsList className="flex flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="Education">
              Education
            </TabsTrigger>
            <TabsTrigger value="Skills">
              Skills
            </TabsTrigger>
            <TabsTrigger value="About me">
              About me
            </TabsTrigger>
          </TabsList>

          {/* content */}

          <div className="min-h-[70vh] w-full">
            {/*education*/}
            <TabsContent value="Education" className="w-full">
              <div className="flex flex-col gap-[30px] text-centre xl:text-left">
                <h3 className="text-4xl font-bold">
                  {edu.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {edu.Description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {edu.items.map((item,index)=>{
                      return(
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col item-centre justify-centre lg:items-start gap-1">
                          <span className="text-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex item-centre gap-3">
                            <span className="w-[60px] h-[6px] rounded-full bg-accent">.</span>
                            <p className="text-white/60">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                    
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="Skills" className="w-full">
              Skills
            </TabsContent>
            <TabsContent value="About me" className="w-full">
              About
            </TabsContent>
          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;
