import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import images from '../imgs/images.png'
import django from '../imgs/django.svg'

export const About = () => {
  return (
    <div className='p-10  mx-auto   h-full flex flex-col gap-7  '>
        <h1 className='uppercase text-center  font-extrabold text-5xl '>About <span className='text-yellow-400'>ME</span></h1>
        <FirstComponent />
        <h1 className='uppercase my-7  font-bold text-3xl mb-5 text-center'>Skills</h1> 
         <Skills />
    </div>
  )
}
const FirstComponent = () => {return(
          <div className='flex  flex-col  lg:flex-row my-6   '>
            <PersonalInfo />
            <Education />
          </div>
)}
const Education = () => {
  return(
    <div class="  lg:w-7/12 lg:px-16   mb-10 lg:mb-0  ">
                <h1 className='uppercase text-center my-7  font-bold text-3xl mb-5 lg:text-start'>Education</h1>
                <div className=' flex  mb-5'>
                  <div>
                  <button className='relative bg-yellow-400 p-2 rounded-full'><FaBriefcase size={20}/></button>
                  </div>
                  <div className='time-line'>
                    <p className='uppercase p-1 mb-3 max-w-28 text-center text-xs bg-gray-400 rounded-full'>2022 - present</p>
                    <h1 className='font-semibold text-lg uppercase'>B.E Mechanical engineering</h1>
                    <p className='text-gray-400'> Sri Eshwar College Of Engineering </p>
                  </div>
                </div>
                <div className='flex mb-5'>
                  <div>
                  <button className='relative bg-yellow-400 p-2 rounded-full'><FaBriefcase size={20}/></button>
                  </div>
                  <div className='time-line'>
                    <p className='uppercase p-1 mb-3 max-w-28 text-center text-xs bg-gray-400 rounded-full'>2020 - 2022</p>
                    <h1 className='font-semibold text-lg uppercase'>higher secondary certificate | <span className='text-sm'><span className='text-gray-400'>Percentage</span> : 98 </span> </h1>
                    <p className='text-gray-400'> RKR Gnanodhaya Matric Higher Secondary School </p>
                  </div>
                </div>
                <div className='flex mb-5'>
                  <div>
                  <button className='relative bg-yellow-400 p-2 rounded-full'><FaBriefcase size={20}/></button>
                  </div>
                  <div className='time-line'>
                    <p className='uppercase p-1 mb-3 max-w-28 text-center text-xs bg-gray-400 rounded-full'>2019 - 2020</p>
                    <h1 className='font-semibold text-lg uppercase'>Secondary School Leaving Certificate | <span className='text-sm'><span className='text-gray-400'>Percentage</span> : 98 </span></h1>
                    <p className='text-gray-400'> RKR Gnanodhaya Matric Higher Secondary School - Tiruppur . </p>
                  </div>
                </div>
  


            </div>

  )
}
const Skills = () => {
  return(
    <div className='w-full  px-0 pb-20 lg:px-40  '>

          {/* <Education /*/}
          <div className=' grid   grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-20 w-full'>
            <div className=' flex flex-col items-center justify-center p-5 rounded-lg'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" class="min-w-20 min-h-20 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"   />
            <p className='text-center '>HTML</p>
            </div>
            <div className=' flex flex-col items-center justify-center p-5 rounded-lg'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"  class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            <p className='text-center '>CSS</p>
            </div>
            <div className=' flex flex-col items-center justify-center p-5 rounded-lg'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"  class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            <p className='text-center '>Javascript</p>
            </div>
            <div className=' flex flex-col items-center justify-center p-5 rounded-lg'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"  class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            <p className='text-center '>Tailwind CSS</p>
            </div>
            <div className=' flex flex-col items-center justify-center p-5 rounded-lg'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            <p className='text-center '>React</p>
            </div>
            <div className=' flex flex-col items-center justify-center p-5 rounded-lg'>
            <img src={images}  class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            <p className='text-center '>Node</p>
            </div>
            <div className=' flex flex-col items-center justify-center p-5 rounded-lg'>
            <img src={django} className='w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28'/> <p className='text-center '>Django</p>
            </div>
            <div className=' flex flex-col items-center justify-center p-5 rounded-lg'>
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"  class="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
           <p className='text-center '>Git</p>
            </div>
          </div>    
     </div>
  )
}
const PersonalInfo = () => {
  return(
    <div class="lg:w-5/12 max-h-svh border-0 p-5 px-0 mr-10 border-yellow-400 rounded-lg h-auto lg:h-full bg-gray-800 text-white lg:border-2 lg:px-8">
                <h1 className='uppercase mb-6  flex flex-col text-center font-bold text-3xl'>Personal Info</h1>
                <div class="flex justify-between  text-lg  ">
                <div className='flex flex-col gap-2  mb-5'>
                <p><span className='text-gray-400'>First Name:</span > Steve</p>
                <p><span className='text-gray-400'>Last Name: </span> Milner</p> 
                <p><span className='text-gray-400'>Age:</span> 27 Years</p>
                <p><span className='text-gray-400'>Nationality</span>: Tunisian</p>
                <p><span className='text-gray-400'>Freelance</span>: Available</p>
                </div>
                <div className='flex flex-col gap-2'>
                <p><span className='text-gray-400'>Address:</span> Tunis</p>
                <p><span className='text-gray-400'>phone:</span> +21621184010</p>
                <p><span className='text-gray-400'>Email:</span> you@mail.com</p>
                <p><span className='text-gray-400'>Skype:</span> steve.milner</p>
                <p><span className='text-gray-400'>langages:</span> French, English</p>
                </div>
                </div>
                <button  class="about-button"  ><p className='ml-6 mr-4 mt-auto mb-auto'>More About Me</p>  <FaArrowRight color='white' size={50} className='p-4 bg-yellow-400 rounded-full'/></button>
            </div >
  )
}

