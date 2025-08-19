import React from 'react'
import profile from '../imgs/profile.jpg'
import { FaArrowRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import hidden from '../imgs/hiddenharbour.jpg'
import fitness from '../imgs/fitness-tracker.webp'
import medtrack from '../imgs/medtrack.webp'
import { FaTelegramPlane } from "react-icons/fa";


export const Portfolio = () => {
  const [viewMore,setViewMore] = useState(false);
  return (
    <div className='py-10 h-full  w-5/6  mx-auto  '>
             {/* <h1 className='uppercase text-center my-12  font-extrabold text-5xl '>My <span className='text-[#ffb400]'>projects</span></h1>
              */}
              <h1 className='uppercase text-center m-7  font-extrabold text-5xl '>My <span className='text-[#ffb400]'>Projects</span></h1>
             <Projects viewMore={viewMore}  />
             {/* <div className='flex justify-center mt-10  '>
             <button onClick={()=>setViewMore(!viewMore)} class="about-button2"  ><p className='ml-24 mr-auto mt-auto mb-auto '>{(!viewMore)?'View More':'View Less'}</p>  <FaEye color='white' size={50} className='p-4 bg-[#ffb400] rounded-full ml-auto'/></button>
             </div>            */}
             {/* <div class="flex pb-16  justify-start mt-2  mb- ">
                                             <button  class="about-button"  ><p className='ml-6 mr-4 mt-auto mb-auto'>More About Me</p>  <FaArrowRight color='white' size={50} className='p-4 bg-[#ffb400] rounded-full'/></button>
                                            
                             </div>  
            */}
    </div>
  )
}
const Projects=({viewMore})=>{
  
  return (
    
    <div className='my-10 pb-20  grid grid-cols-1  justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-10 lg:pb-0'>
                <div className='flex flex-col  gap-1 w-auto p-2  border-gray-500 border-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-yellow-400 '>
                  <img src={hidden} className='h-72 w-full'/>
                  <h2 className='font-semibold text-xl'>Hidden Harbour</h2>
                  <p className=' text-gray-400'>An app for users to share questions and receive answers anonymously, with Perspective API.</p>
                  <div className='flex flex-col gap-3  mt-2'>
                    <div className='flex flex-wrap gap-4'>
                    <p className='bg-[#f2f2f2] dark:bg-gray-600 px-2 py-1 w-max rounded-md'>React Native</p>
                    <p className='bg-[#f2f2f2] dark:bg-gray-600 px-2 py-1 w-max rounded-md'>Django</p>
                    <p className='bg-[#f2f2f2] dark:bg-gray-600 px-2 py-1 w-max rounded-md'>RESTfull API</p>
                    </div>
                    <div>
                    <p className='bg-[#f2f2f2] dark:bg-gray-600 px-2 py-1 w-max rounded-md'>SQLite</p>
                    </div>
                  </div>
                  
                </div>
                <div className='flex flex-col  gap-1 w-auto p-2  border-gray-500 border-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-yellow-400 '>
                  <img src={fitness} className='h-72 w-full'/>
                  <h2 className='font-semibold text-xl'>Hidden Harbour</h2>
                  <p className='text-gray-400'>A health tracking app with dashboards and Google Fit integration for wellness insights.</p>
                  <div className='flex flex-col gap-3  mt-2'>
                    <div className='flex flex-wrap gap-4'>
                    <p className='bg-[#f2f2f2] dark:bg-gray-600 px-2 py-1 w-max rounded-md'>React</p>
                    <p className='bg-[#f2f2f2] dark:bg-gray-600 px-2 py-1 w-max rounded-md'>NodeJS</p>
                    <p className='bg-[#f2f2f2] dark:bg-gray-600 px-2 py-1 w-max rounded-md'>Express</p>
                    </div>
                    <div className='flex  gap-4'>
                      <p className='bg-[#f2f2f2] dark:bg-gray-600 px-2 py-1 w-max rounded-md'>RESTfull API</p>
                    <p className='bg-[#f2f2f2] dark:bg-gray-600 px-2 py-1 w-max rounded-md'>MongoDB</p>
                    </div>
                  </div>
                  
                </div>
                <div className='flex flex-col  gap-1 w-auto p-2  border-gray-500 border-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:border-yellow-400 '>
                 <img src={medtrack} className='h-72 w-full'/>
                  <h2 className='font-semibold text-xl'>Medtrack</h2>
                  <p className='text-gray-400'>A hospital management app for patient records, scheduling, and doctor–patient coordination.</p>
                  <div className='flex flex-col gap-3  mt-2'>
                    <div className='flex flex-wrap gap-4'>
                    <p className='bg-[#f2f2f2] dark:bg-gray-600 px-2 py-1 font-xs w-max rounded-md'>React</p>
                    <p className='bg-[#f2f2f2] dark:bg-gray-600 px-2 py-1 w-max rounded-md'>Django</p>
                    <p className='bg-[#f2f2f2] dark:bg-gray-600 px-2 py-1 w-max rounded-md'>RESTfull API</p>
                    </div>
                    <div>
                    <p className='bg-[#f2f2f2] dark:bg-gray-600 px-2 py-1 w-max rounded-md'>MySQL</p>
                    </div>
                  </div>
                  
                  
                </div>
                
                
                
                

             </div>
  )
}
