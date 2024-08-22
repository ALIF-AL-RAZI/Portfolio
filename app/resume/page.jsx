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
            <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[38px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3> 
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {experience.description} </p> 
              <ScrollArea className="h-[400px]"> 
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]"> {experience.items.map((item, index) => { 
                  return <li key={index}
                  className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"> 
                    <span className="text-accent">{item.duration}</span> 
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3> 
                    <div className="flex items-center gap-3"> 
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> 
                      <p className="text-white/60">{item.company}</p>
                    </div> 
                  </li> 
                  })} 
                </ul> 
              </ScrollArea> 
            </div> 
            </TabsContent>
          
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[38px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3> 
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {education.description} </p> 
              <ScrollArea className="h-[400px]"> 
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]"> {education.items.map((item, index) => { 
                  return <li key={index}
                  className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"> 
                    <span className="text-accent">{item.duration}</span> 
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3> 
                    <div className="flex items-center gap-3"> 
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> 
                      <p className="text-white/60">{item.institution}</p>
                    </div> 
                  </li> 
                  })} 
                </ul> 
              </ScrollArea> 
            </div> 
            </TabsContent>
          
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]"> 
                <div className="flex flex-col gap-[38px] text-center xl:text-left"> 
                  <h3 className="text-4xl font-bold">{skills.title}</h3> 
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {skills.description} </p> 
                </div> 
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]"> 
                  {skills.skillList.map((skill, index) => { 
                    return ( 
                    <li key={index}> 
                    <TooltipProvider delayDuration={100}> 
                      <Tooltip> 
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"> 
                          <div className="text-6xl group-hover : text-accent transition-all duration-300"> 
                            {skill.icon} 
                          </div> 
                        </TooltipTrigger> 
                        <TooltipContent>
                           <p className="capitalize">{skill.name}</p> 
                        </TooltipContent> 
                      </Tooltip> 
                    </TooltipProvider>
                  </li>); })} 
                </ul> 
              </div>
            </TabsContent>
          
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[38px]"> 
                <h3 className="text-4xl font-bold">{about.title}</h3> 
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {about.description} </p> 
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0"> 
                  {about.info.map((item, index) => { 
                    return ( 
                    <li key={index} className="flex items-center justify-center gap-4">
                       <span className="text-white/60">{item.fieldName}</span>
                       <span className="text-xl">{item.fieldValue}</span> 
                    </li> ); 
                    })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume