"use client";

import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue} from "@/components/ui/select";

export const ContactForm = () => {
  return (
    <div className=" xl:w-[54%] order-2 xl:order-none justify-start">
                    <form action="/submit" method="post" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-4xl text-accent">Let's work together</h3>
                        <p className="text-white/60 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore est id odit maxime nulla?</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" name="firstName" placeholder="Firstname" />
                            <Input type="lastname" name="LastName" placeholder="Lastname" />
                            <Input type="email" name="Email" placeholder="Email address" />
                            <Input type="phone" name="number" placeholder="Phone number" />
                        </div>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select service</SelectLabel>
                                    <SelectItem value="est" name="webdev">Web Development</SelectItem>
                                    <SelectItem value="cst" name="video edit">Video Editing</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Textarea className="h-[200px]" placeholder="Type your message here.">                       
                        </Textarea>
                        <Button size="" className="max-w-28 rounded-xl text-lg ">
                            Send 
                        </Button>
                    </form>
                </div>
  )
}

export default ContactForm;
