import React from 'react'
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF,FaLinkedinIn,FaInstagram,FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";


import { HiMailOpen } from "react-icons/hi";
export const Contact = () => {
  const [viewMore,setViewMore] = useState(false);
    return (
      <div className='flex p-10 lg:px-24 mx-auto   h-full  flex-col gap-7  '>
       <h1 className='uppercase text-center m-7  font-extrabold text-5xl '>Get in <span className='text-[#ffb400]'>touch</span></h1>
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
            <h1 className='uppercase   font-bold text-2xl'>don't be shy !</h1>
            <p className='text-lg'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div>
              <div className='flex my-6'>
                <FaMap className='mr-4 ' color='#ffb307' size={44}/>
                <div>
                  <h1 className=' m-0 text-md font-medium uppercase text-gray-400'>Adress point</h1>
                  <p className='m-0 text-md font-medium'>Tiruppur,Tamil Nadu.</p>
                </div>

              </div>
              <div className='flex my-6'>
                <HiMailOpen className='mr-4 ' color='#ffb307' size={44}/>
                <div>
                  <h1 className=' m-0 text-md font-medium uppercase text-gray-400'>mail me</h1>
                  <p className='m-0 font-medium text-md'>adhiabcd1234@gmail.com</p>
                </div>

              </div>
              <div className='flex my-6'>
                <FaSquarePhone className='mr-4 ' color='#ffb307' size={44}/>
                <div>
                  <h1 className=' m-0 text-md font-medium uppercase text-gray-400'>call me</h1>
                  <p className='m-0 text-md font-medium'>+91 6385242956</p>
                </div>

              </div>
            </div>
            <div>
              
            </div>
            <div className="flex gap-4">
              

            <a
              href="https://linkedin.com/in/adhi-linga-vignesh-k-261a16259/"
              target="_blank"
              rel="noopener noreferrer"
              className=" p-3 bg-[#999898] dark:bg-[#2a2b2b] rounded-full transition-colors duration-300 hover:bg-[#ffb400]"
              
            >
              <FaLinkedinIn color="white" size={18} />
            </a>
            <a
              href="https://github.com/Adhi2312"
             target="_blank"
              rel="noopener noreferrer"
               className=" p-3 bg-[#999898] dark:bg-[#2a2b2b] rounded-full transition-colors duration-300 hover:bg-[#ffb400]"
              
            >
              <FaGithub color="white" size={18} />
            </a>

            <a
              href="https://instagram.com/adhi5855"
              target="_blank"
              rel="noopener noreferrer"
               className=" p-3 bg-[#999898] dark:bg-[#2a2b2b] rounded-full transition-colors duration-300 hover:bg-[#ffb400]"
              
            >
              <FaInstagram color="white" size={18} />
            </a>
            <a
                href="https://wa.me/916385242956"
                target="_blank"
                rel="noopener noreferrer"
                 className=" p-3 bg-[#999898] dark:bg-[#2a2b2b] rounded-full transition-colors duration-300 hover:bg-[#ffb400]"
                
              >
              <FaWhatsapp color="white" size={18} />
            </a>

  
</div>


          </div>
  )
}
const EmailComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("Sending...");

    // Use your own EmailJS service & template IDs
    emailjs
      .send(
        "service_sc1v4ha", // replace with your EmailJS service ID
        "template_zvogxmm", // replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "pingtoadhi@gmail.com",
        },
        "CvctmxyIEQUjpskFh" // replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setStatus("❌ Failed to send. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <form
      className="p-0 py-16 flex flex-col gap-8 lg:p-10 lg:w-3/5"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-full gap-5 lg:flex-row">
        <input
  required
  className="w-full px-5 py-3 border   dark:bg-[#2b2b2b]  dark:border-black rounded-full lg:w-1/2"
  
  placeholder="Your Name"
  name="name"
  value={formData.name}
  onChange={handleChange}
/>
{errors.name && <p className="text-red-400">{errors.name}</p>}

<input
  required
  type="email"
  className="w-full px-5 py-3 border dark:bg-[#2b2b2b]  dark:border-black rounded-full lg:w-1/2"
  
  placeholder="Your Email"
  name="email"
  value={formData.email}
  onChange={handleChange}
/>
{errors.email && <p className="text-red-400">{errors.email}</p>}
      </div>
      {/* {errors.name && <p className="text-red-400">{errors.name}</p>}
      {errors.email && <p className="text-red-400">{errors.email}</p>} */}

      <input
  required
  className="w-full px-5 py-3 border dark:bg-[#2b2b2b]  dark:border-black rounded-full"
  
  placeholder="Your Subject"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
/>
{errors.subject && <p className="text-red-400">{errors.subject}</p>}

<textarea
  required
  className="w-full min-h-40 px-5 py-3 border  dark:bg-[#2b2b2b]  dark:border-black rounded-3xl"
  
  placeholder="Your Message"
  name="message"
  value={formData.message}
  onChange={handleChange}
/>
{errors.message && <p className="text-red-400">{errors.message}</p>}
      <div class="flex  justify-start    ">
                      <button  class="about-button"  ><p className='ml-6 mr-4 uppercase font-semibold mt-auto mb-auto'>send message </p>  <FaTelegramPlane color='white' size={54} className='p-4 bg-[#ffb400] rounded-full'/></button>
                     
                  </div>

      {status && <p className="text-[#ffb400]">{status}</p>}
    </form>
  );
};