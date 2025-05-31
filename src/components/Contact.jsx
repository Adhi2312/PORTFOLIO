import React from 'react'
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF,FaLinkedinIn,FaInstagram,FaGithub } from "react-icons/fa";


export const Contact = () => {
  const [viewMore,setViewMore] = useState(false);
    return (
      <div className='flex p-10 lg:px-24 mx-auto   h-full  flex-col gap-7  '>
        <h1 className='uppercase text-center  font-extrabold text-5xl '>get in  <span className='text-yellow-400'>touch</span></h1>
        {/* <FirstComponent /> */}
        <div className='flex h-full w-full   flex-col  lg:flex-row    '>
          <FirstComponent/>
          <EmailComponent />
          
        </div>

       
    </div>
    )
}

const FirstComponent=()=>{
  return (
    <div className='p-0 lg:w-2/5  lg:p-10'>
            <h1 className='uppercase   font-bold text-3xl'>don't be shy !</h1>
            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div>
              <div className='flex my-6'>
                <FaMap className='mr-4 ' color='yellow' size={40}/>
                <div>
                  <h1 className=' m-0 text-md uppercase text-gray-400'>Adress point</h1>
                  <p className='m-0'>123 Stree New York City , United States Of America 750065.</p>
                </div>

              </div>
              <div className='flex my-6'>
                <IoIosMail className='mr-4 ' color='yellow' size={40}/>
                <div>
                  <h1 className=' m-0 text-md uppercase text-gray-400'>mail me</h1>
                  <p className='m-0 font-semibold text-md'>adhi@gmail.com</p>
                </div>

              </div>
              <div className='flex my-6'>
                <FaSquarePhone className='mr-4 ' color='yellow' size={40}/>
                <div>
                  <h1 className=' m-0 text-md uppercase text-gray-400'>call me</h1>
                  <p className='m-0'>6385242956</p>
                </div>

              </div>
            </div>
            <div>
              
            </div>
            <div class="flex gap-4 ">
              <div className='bg-gray-500 p-2 rounded-full'>
              <FaFacebookF className='' color='white' size={18}/>
              </div>
              <div className='bg-gray-500 p-2 rounded-full'>
              <FaLinkedinIn className='' color='white' size={18}/>
              </div>
              <div className='bg-gray-500 p-2 rounded-full'>
              <FaInstagram className='' color='white' size={18}/>
              </div>
              <div className='bg-gray-500 p-2 rounded-full'>
              <FaGithub className='' color='white' size={18}/>
              </div>
            </div>

          </div>
  )
}
const EmailComponent=()=>{
  return(
    <div className='p-0 py-16  flex  flex-col gap-8   lg:p-10 lg:w-3/5  '>
              <div className=' flex flex-col w-full gap-5 lg:flex-row ' >
                <input className='w-full p-3 bg-gray-500 rounded-full lg:w-1/2' placeholder='Your Name'/>
                 <input className='w-full p-3 bg-gray-500 rounded-full lg:w-1/2' placeholder='Your Name'/>
               </div>
               <input className='w-full p-3 bg-gray-500 rounded-full' placeholder='Your Subject'/>
                {/* <input type='text' className='w-full h-full bg-gray-500  rounded-lg'/> */}
                <textarea className='w-full  h-40 p-3 bg-gray-500 rounded-3xl' placeholder='Your Message'></textarea>
                <div class="flex  justify-start mt-2  mb-2 ">
                                <button  class="about-button"  ><p className='ml-6 mr-4 mt-auto mb-auto'>More About Me</p>  <FaArrowRight color='white' size={50} className='p-4 bg-yellow-400 rounded-full'/></button>
                               
                </div>               


            </div>
  )
}