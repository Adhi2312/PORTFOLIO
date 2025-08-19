import React from 'react'
import profile from "../imgs/profile.jpg"
import { FaArrowRight } from "react-icons/fa";
import "./screens.css"

export const Home = ({setPage}) => {
  return (
    <div class=" flex flex-col items-center  py-8   h-full lg:flex-row  lg:justify-start lg:p-0 " >
            <img className="border-4 border-gray-500  w-60 h-60 rounded-full md:h-72 md:w-72 lg:rounded-3xl lg:h-full lg:w-1/3 lg:border-none"
                src={profile}
                alt="Profile"
            />
{/* <h1>hai</h1> */}
            <div class="  lg:p-0 lg:w-2/3 h-full    flex flex-col   items-center justify-center ">
                <div className='flex flex-col gap-3 text-center lg:text-start w-auto p-10 h-auto  lg:max-w-2xl'>
                <h1 className=' uppercase tracking-wide text-[#ffb400] text-3xl lg:text-5xl font-extrabold'>Adhilingavignesh K.</h1>
                <h2 className='uppercase    text-3xl  font-bold'>Full Stack Developer       </h2>
                <p className='lg:text-lg my-3 text-[#696969] dark:text-gray-300 tracking-wide '>I’m a passionate full-stack developer with expertise in React Native and the MERN stack. I thrive on solving complex problems that sharpen my skills and drive growth. Always eager to collaborate, I love transforming ideas into impactful, real-world solutions.</p>
                 
                 <div class="flex justify-center lg:justify-start    " onClick={()=>setPage("About")}>
                <button  class="about-button"  ><p className='ml-6 mr-4 uppercase font-semibold mt-auto mb-auto'>More About Me</p>  <FaArrowRight color='white' size={54} className='p-4 bg-[#ffb400] rounded-full'/></button>
               
            </div>
                 </div>
            
            </div>
        





        
      </div>
  )
}