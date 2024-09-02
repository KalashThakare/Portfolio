"use client";
import { AnimatePresence , motion } from "framer-motion"
import { usePathname } from "next/navigation";
;


export const PageTransition = ({children}) => {
    const pathname=usePathname();
  return (
    <AnimatePresence>
    <div>
        <motion.div
            initial={{opacity:1}}
            animate={{
                opacity:0,
                transition:{delay:0.5,duration:0.3,ease:"easeInOut"},
            }}
            className="h-screen w-screen fixed bg-primary top-8 pointer-events-none"
        />
        {children}

    </div>
    </AnimatePresence>
  );
};

export default PageTransition;