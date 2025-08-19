import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import images from '../imgs/images.png'
import django from '../imgs/django.svg'
import { FaDownload } from "react-icons/fa";

import { motion } from "framer-motion";



export const About = () => {
  return (
    <div className='px-5 py-10  mx-auto   h-full flex flex-col gap-7  '>
      
        <h1 className='uppercase text-center m-7  font-extrabold text-6xl  '>About <span className='text-[#ffb400]'>ME</span></h1>
        <FirstComponent />
        <h1 className='uppercase my-7  font-bold text-3xl mb-5 text-center'>My Skills</h1> 
         <Skills />
         <h1 className='uppercase my-7  font-bold text-3xl mb-5 text-center'>Experience</h1>
         <Education/>
    </div>
  )
}
const FirstComponent = () => {return(
          <div className='flex  flex-col  lg:flex-row my-6   '>
            <PersonalInfo />
            <Achievements />
          </div>
)}
const Education = () => {
  return(
    <div class=" pb-20  lg:px-40    lg:mb-0  ">
                {/* <h1 className='uppercase text-center my-7  font-bold text-3xl mb-5 lg:text-start'>Education</h1> */}
                <div className=' flex  mb-5'>
                  <div>
                  <button className='relative mt-0 bg-[#ffb400] p-2 rounded-full'><FaBriefcase color='white' size={20}/></button>
                  </div>
                  <div className='time-line'>
                    <div className='flex  flex-col border border-gray-600 gap-2 mb-3 p-5 rounded-lg'>
                    <p className='uppercase  px-4 py-2 mb-3 max-w-20 text-center text-xs bg-[#f2f2f2] dark:bg-gray-600 rounded-full'>2024</p>
                    <h1 className='text-2xl font-semibold lg:text-3xl'>Data Science Intern     </h1>
                    <h1 className='text-lg font-semibold'>V3 Analytics     </h1>
                    <p className='text-gray-400'>  Leveraged advanced data science techniques for comprehensive data cleaning, exploratory data analysis, preprocessing, and analysis to extract actionable insights supporting critical business decisions.</p>
                    </div>
                  </div>
                </div>
                <div className=' flex  mb-5'>
                  <div>
                  <button className='relative mt-0 bg-[#ffb400] p-2 rounded-full'><FaBriefcase color="white" size={20}/></button>
                  </div>
                  <div className='time-line'>
                    <div className='flex  flex-col border border-gray-600 gap-2 mb-3 p-5 rounded-lg'>
                    <p className='uppercase  px-4 py-2 mb-3 max-w-20 text-center text-xs bg-[#f2f2f2] dark:bg-gray-600 rounded-full'>2024</p>
                    <h1 className='text-2xl font-semibold lg:text-3xl'>MERN Stack Developer    </h1>
                    <h1 className='text-lg font-semibold'>G-Soft Technologies    </h1>
                    <p className='text-gray-400'> Engineered responsive web applications utilizing the MERN Stack, advancing expertise in frontend development, backend architecture, and database integration.</p>
                    </div>
                  </div>
                </div>
                
                
                
  


            </div>

  )
}
const Skills = () => {
  return(
    <div className='w-full  px-0  lg:px-40  '>

          {/* <Education /*/}
          <div className=' grid   grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-20 w-full'>
            <div className=' flex flex-col gap-3 items-center justify-center p-5 rounded-lg'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" class="min-w-20 min-h-20 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"   />
            <p className='text-center text-lg font-medium '>HTML</p>
            </div>
            <div className=' flex flex-col gap-3 items-center justify-center p-5 rounded-lg'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"  class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            <p className='text-center text-lg font-medium '>CSS</p>
            </div>
            <div className=' flex flex-col gap-3 items-center justify-center p-5 rounded-lg'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"  class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            <p className='text-center text-lg font-medium'>Javascript</p>
            </div>
            <div className=' flex flex-col gap-3 items-center justify-center p-5 rounded-lg'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"  class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            <p className='text-center text-lg font-medium'>Tailwind CSS</p>
            </div>
            <div className=' flex flex-col gap-3 items-center justify-center p-5 rounded-lg'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            <p className='text-center text-lg font-medium'>React</p>
            </div>
            <div className=' flex flex-col gap-3 items-center justify-center p-5 rounded-lg'>
            <img src={images}  class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            <p className='text-center text-lg font-medium'>Node</p>
            </div>
            <div className=' flex flex-col gap-3 items-center justify-center p-5 rounded-lg'>
            <img src={django} className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28'/> <p className='text-center text-lg font-medium'>Django</p>
            </div>
            <div className=' flex flex-col gap-3 items-center justify-center p-5 rounded-lg'>
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"  class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
           <p className='text-center text-lg font-medium'>Git</p>
            </div>
          </div>    
     </div>
  )
}
const PersonalInfo = () => {
  return(
    <div class="lg:w-auto  border-0  py-8  border-yellow-400 rounded-lg h-auto lg:h-full  text-[#696969] dark:text-white lg:border-2 lg:px-8">
                <h1 className='uppercase mb-6  flex flex-col text-center font-bold text-3xl'>Personal Info</h1>
                <div className='flex flex-col items-center'>
                <div class="flex gap-20   md:text-lg lg:text-lg  ">
                <div className='flex flex-col gap-5  mb-5'>
                <p><span className='text-gray-400'>First Name:</span > Adhilingavignesh</p>
                <p><span className='text-gray-400'>Last Name: </span> Kalaiselvan</p> 
                <p><span className='text-gray-400'>Age:</span> 19 Years</p>
                
                <p className='text-green-400'><span className='text-gray-400'>Freelance</span>: Available</p>
                </div>
                <div className='flex flex-col gap-5'>
                <p><span className='text-gray-400'>Nationality</span>: Indian</p>
                <p><span className='text-gray-400'>phone:</span> +91 6385242956</p>
                <p><span className='text-gray-400'>Email:</span> adhiabcd1234@mail.com</p>
                
                <p><span className='text-gray-400'>languages:</span> Tamil, English</p>
                </div>
                </div>
  <a
    href="/resume.pdf"
    download="AdhilingaVignesh_CV.pdf"
    className="about-button flex items-center"
  >
    <p className='ml-6 mr-4 mt-auto mb-auto'>DOWNLOAD CV</p>
    <FaDownload color='white' size={50} className='p-4 bg-[#ffb400] rounded-full'/>
  </a>
</div>
                </div>
  )
}
const Achievements = () => {
  return(
    <div className='grid grid-cols-2 gap-6  py-2 ml-auto mr-auto  px-4 lg:w-2/4  '>
      <div className="flex flex-col justify-center items-center border border-gray-600 rounded-md  p-4 ">
  <h1 className="text-4xl mg:text-5xl lg:text-5xl font-extrabold text-[#ffb400] p-2">400+</h1>
  <p className="text-lg font-medium tracking-wide text-[#696969] dark:text-gray-300 upper">Problems Solved</p>
</div>


      <div className="flex flex-col justify-center items-center border border-gray-600 rounded-md m p-4 ">
  <h1 className="text-4xl mg:text-5xl  mg:text-5xl lg:text-5xl font-extrabold text-[#ffb400] p-2">Top 15%</h1>
  <p className="text-lg tracking-wide font-medium text-[#696969] dark:text-gray-300 u">Leetcode Rating</p>
</div>
 <div className="flex flex-col justify-center items-center border border-gray-600 rounded-md  p-4  ">
  <h1 className="text-5xl font-extrabold text-[#ffb400] p-2">7.5</h1>
  <p className="text-lg tracking-wide font-medium text-[#696969] dark:text-gray-300 uppercase">CGPA</p>
</div>
 <div className="flex flex-col justify-center items-center border border-gray-600 rounded-md  p-4  ">
  <h1 className="text-4xl mg:text-5xl lg:text-5xl font-extrabold text-[#ffb400] p-2">2026</h1>
  <p className="text-lg tracking-wide font-medium text-[#696969] dark:text-gray-300 ">Graduate</p>
</div>
      

    </div>
  )
}
