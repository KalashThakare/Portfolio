"use client";

import {Sheet,SheetContent,SheetTrigger} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";
import { useState } from "react";

const links=[
    {
        name:"home",
        path:"/"
    },
    {
        name:"services",
        path:"/services"
    },
    {
        name:"resume",
        path:"/resume"
    },
    {
        name:"work",
        path:"/work"
    },
    {
        name:"contact",
        path:"/contact"
    },

]


export const MobileNav = () => {
    const pathname=usePathname();
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent>
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/" onClick={handleLinkClick}>
                    <h1 className="text-4xl font-semibold">Kalash <span className="text-accent">.</span></h1>
                </Link>
            </div>
            <nav className="flex justify-center flex-col items-center gap-8">
                {links.map((link,index)=>{
                    return (
                        <Link 
                            href={link.path} 
                            key={index} 
                            className={`text-xl capitalize hover:text-accent transition-all ${
                                pathname === link.path ? "text-accent" : ""
                            }`}
                            onClick={handleLinkClick}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav;