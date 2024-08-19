"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs,} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs } from "react-icons/si"; 


import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"; 
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area"; 
import {easeIn, motion } from "framer-motion";

const about = { 
  title : "About me", 
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  info : [
    { 
      fieldName : "Name", 
      fieldValue : "Alif AL Razi"
     }, 
     { 
      fieldName : "Phone", 
      fieldValue : "+8801872792494"
     }, 
     { 
      fieldName : "Email", 
      fieldValue : "alifalrazi1@gmail.com"
     }, 
     { 
      fieldName : "Experience", 
      fieldValue : "5+ years"
     },
    { 
      fieldName : "Freelance", 
      fieldValue : "Available"
     },
     { 
      fieldName : "Nationality", 
      fieldValue : "Bangladeshi"
     }, 
     { 
      fieldName : "Language", 
      fieldValue : "English, Bengali"
     }, 
    ]
}

const experience = { 
  icon : "/assets/resume/badge.svg", 
  title : "My experience", 
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.", 
  items : [ 
    { company : "Tech Solutions Inc.", 
      position : "Full Stack Developer", 
      duration : "2022 - Present"
    },
    { company : "Tech Solutions Inc.", 
      position : "Full Stack Developer", 
      duration : "2022 - Present"
    },
    { company : "Tech Solutions Inc.", 
      position : "Full Stack Developer", 
      duration : "2022 - Present"
    },
    { company : "Tech Solutions Inc.", 
      position : "Full Stack Developer", 
      duration : "2022 - Present"
    },
    { company : "Tech Solutions Inc.", 
      position : "Full Stack Developer", 
      duration : "2022 - Present"
    },
  ]
}

const education = { 
  icon : "/assets/resume/cap.svg", 
  title : "My education", 
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.", 
  items : [ 
    { institution : "North South University", 
      degree : "BSC Engineering in CSE", 
      duration : "2020 - 2024"
    },
    { institution : "Adamjee Cantonment College", 
      degree : "Higher Secondary School Certificate", 
      duration : "2016 - 2018"
    },
    { institution : "BAF Shaheen College, Kurmitola", 
      degree : "Secondary School Certificate", 
      duration : "2014 - 2016"
    },
  ]
}

const skills = { 
  title : "My skills", 
  description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.", 
  skillList : [
    {
      icon : <FaHtml5 />,
      name : "html 5", 
    },
    {
      icon : <FaCss3 />,
      name : "css 3", 
    },
    {
      icon : <FaJs />,
      name : "javascript", 
    },
    {
      icon : <FaReact/>,
      name : "react.js", 
    },
  ]
 };

const Resume = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition: {  duration:0.4, ease: easeIn},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experince"
        className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList 
          className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">experience</TabsContent>
          
            <TabsContent value="education" className="w-full">education</TabsContent>
          
            <TabsContent value="skills" className="w-full">skills</TabsContent>
          
            <TabsContent value="about" className="w-full">about</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume