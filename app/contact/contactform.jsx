"use client";

import { Input } from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {sendEmail} from "./sendEmail";
import { useState } from "react";

const initValues={
    firstname:"",
    lastname:"",
    email:"",
    service:"",
    number:"",
    message: ""
};

const initState={ values:initValues};

export const ContactForm = () => {
    const [state,setState]=useState(initState);

    const{values}=state;

    const handleChange=({target})=>setState((prev)=>({
        ...prev,
        values:{
            ...prev.values,
            [target.name]:target.value,
        },
    }));

    const onSubmit=async()=>{
        setState((prev)=>({
            ...prev,
            
        }));
        console.log("State: ",state)
        // nodemailer logic
        await sendEmail(state.values.email, state.values.message,state.values.firstname);

    };

  return (
    <div className=" xl:w-[54%] order-2 xl:order-none justify-start">
                    <form method="post" className="flex flex-col gap-6 p-10 bg-[#27272c]">
                        <h3 className="text-4xl text-accent">Let's work together</h3>
                        <p className="text-white/60 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore est id odit maxime nulla?</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" name="firstname" placeholder="Firstname" value={values.firstname} onChange={handleChange}/>
                            <Input type="lastname" name="lastname" placeholder="Lastname" value={values.lastname} onChange={handleChange}/>
                            <Input type="email" name="email" placeholder="Email address" value={values.email} onChange={handleChange}/>
                            <Input type="phone" name="number" placeholder="Phone number" value={values.number} onChange={handleChange}/>
                        </div>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel value={values.service} onChange={handleChange}>Select service</SelectLabel>
                                    <SelectItem value="est" name="webdev">Web Development</SelectItem>
                                    <SelectItem value="cst" name="video edit">Video Editing</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Textarea className="h-[200px]" placeholder="Type your message here." type="text" name="message" value={values.message} onChange={handleChange}>                       
                        </Textarea>
                    </form>
                    <div className="flex flex-col gap-6 p-10 bg-[#27272c] ">
                    <Button size="" className="max-w-28 rounded-xl text-lg" onClick={onSubmit}>
                        Send
                    </Button>
                    </div>
                    
                </div>
  )
}

export default ContactForm;
