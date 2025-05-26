import React from 'react'
import profile from "../imgs/profile.webp"
import { FaArrowRight } from "react-icons/fa";
import "./screens.css"

export const Home = () => {
  return (
    <div class=" flex flex-col items-center pt-16   h-full lg:flex-row  lg:justify-start lg:p-0">
            <img className="border-4 border-gray-500  w-52 h-52 rounded-full md:h-60 md:w-60 lg:rounded-3xl lg:h-full lg:w-1/3 lg:border-none"
                src={profile}
                alt="Profile"
            />
{/* <h1>hai</h1> */}
            <div class=" lg:p-0 lg:w-2/3 h-full bg-gray-800   flex flex-col items-center justify-center">
                <div className='text-center lg:text-start w-auto p-10 h-auto  lg:max-w-2xl'>
                <h1 className='uppercase tracking-wide text-yellow-400  text-4xl lg:text-5xl font-bold'>- I'm Irina shayk .</h1>
                <h1 className='uppercase    text-4xl lg:text-5xl font-bold'>Russian model        </h1>
                <p className='text-lg'>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                 
                 <div class="flex justify-center lg:justify-start mt-8  mb-8 ">
                <button  class="about-button"  ><p className='ml-6 mr-4 mt-auto mb-auto'>More About Me</p>  <FaArrowRight color='white' size={50} className='p-4 bg-yellow-400 rounded-full'/></button>
               
            </div>
                 </div>
            
            </div>
        





        
      </div>
  )
}
