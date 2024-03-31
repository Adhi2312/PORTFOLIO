import React from 'react'
import '../styles/main.css'

import { FaInstagram,FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";
import { click } from '@testing-library/user-event/dist/click';
// import { FaFacebookF ,FaTwitter,FaLinkedinIn} from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

export const SubComponent = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"10px 50px"}}>
       <div>
        <img src='https://media.istockphoto.com/id/1133604495/photo/hacker-dark-face-using-laptop.jpg?s=2048x2048&w=is&k=20&c=Y0JXSLH5k2la-jLUbJ8yeoo3DrLPKrOMKM83juWV5bg=' style={{height:"250px",width:"250px",marginTop:"50px",borderRadius:"25px",border:"3px solid #4c4c4d"}}/>

       </div>
       <div style={{marginBottom:"8px"}}>
        <h2 style={{fontSize:"xx-large",marginBottom:"0px",color:"white"}}>Adhi Linga Vignesh</h2>


       </div>
       {/* <div style={{marginTop:"0px", backgroundColor:"gray"}}> */}
        <p style={{fontSize:"large",marginTop:"8px", backgroundColor:"#2c2c2d",padding:"6px 10px",borderRadius:"8px",marginLeft:"0px",color:"white",marginBottom:"16px",fontFamily:"satoshi" ,color: "hsl(240, 1%, 65%)"}}>FullStack Developer</p>

       {/* </div> */}
       <div style={{display:"flex"}}>
       <a href='https://www.facebook.com/'> <button onMouseEnter={(e)=>{e.target.style.background="linear-gradient(to right, #f64b59, #e02973)"}} onMouseLeave={(e)=>{e.target.style.background="#2c2c2d"}} style={{marginRight:"13px",backgroundColor:"#2c2c2d",borderWidth:"0px",padding:"6px 8px",borderRadius:"2px"}}><FaFacebook  color='white' size={25}/></button></a>
      <a href='https://www.instagram.com/'>  <button onMouseEnter={(e)=>{e.target.style.background="linear-gradient(to right, #f64b59, #e02973)"}} onMouseLeave={(e)=>{e.target.style.background="#2c2c2d"}} style={{marginRight:"13px",backgroundColor:"#2c2c2d",borderWidth:"0px",padding:"6px 8px",borderRadius:"2px"}}> <FaInstagram color="white" size={25} /></button></a>
      <a href='https://twitter.com/?lang=en'>  <button onMouseEnter={(e)=>{e.target.style.background="linear-gradient(to right, #f64b59, #e02973)"}} onMouseLeave={(e)=>{e.target.style.background="#2c2c2d"}} style={{marginRight:"13px",backgroundColor:"#2c2c2d",borderWidth:"0px",padding:"6px 8px",borderRadius:"2px"}}><FaTwitter color='white' size={25}/></button></a>
      <a href='https://www.linkedin.com/in/adhi-linga-vignesh-k-261a16259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>  <button onMouseEnter={(e)=>{e.target.style.background="linear-gradient(to right, #f64b59, #e02973)"}} onMouseLeave={(e)=>{e.target.style.background="#2c2c2d"}} style={{marginRight:"10px",backgroundColor:"#2c2c2d",borderWidth:"0px",padding:"6px 8px",borderRadius:"2px"}}><FaLinkedin color='white' size={25}/></button></a>

       </div>
       <div style={{display:"flex",minWidth:"100%",backgroundColor:"#2c2c2d",marginTop:"20px",borderRadius:"15px",padding:"20px",flexDirection:"column"}}>
       <div style={{display:'flex',marginBottom:"10px",color:"white"}}>

<button  style={{marginTop:"5px",marginRight:"10px",backgroundColor:"black",borderRadius:"5px",borderWidth:"0",padding:"10px"}}><MdOutlineSmartphone  size={20} color='#ee2791'/></button>
<div>
  <p style={{margin:"0px",fontSize:"small",marginBottom:"3px"}}>
    phone
  </p>
  <p style={{margin:"0px",fontSize:"large"}}>6385242956</p>
  
</div>

</div>
        <hr color='grey' style={{width:"100%"}}/>
        
        <div style={{display:'flex',marginBottom:"10px",color:"white"}}>

<button style={{marginTop:"5px",marginRight:"10px",backgroundColor:"black",borderRadius:"5px",borderWidth:"0",padding:"10px"}}><FaLocationDot  size={20} color='#ee2791'/></button>
<div>
  <p style={{margin:"0px",fontSize:"small",marginBottom:"3px"}}>
    Location
  </p>
  <p style={{margin:"0px",fontSize:"large"}}>Tiruppur</p>
  
</div>

</div>
<hr color='grey' style={{width:"100%"}}/>

<div style={{display:'flex',marginBottom:"10px",color:"white"}}>

<button style={{marginTop:"5px",marginRight:"10px",backgroundColor:"black",borderRadius:"5px",borderWidth:"0",padding:"10px"}}><IoIosMail  size={20} color='#ee2791'/></button>
<div>
  <p style={{margin:"0px",fontSize:"small",marginBottom:"3px"}}>
    Email
  </p>
  <p style={{margin:"0px",fontSize:"large"}}>Adhiabcd1234@gmail.com</p>
  
</div>

</div>
<hr color='grey' style={{width:"100%"}}/>

<div style={{display:'flex',marginBottom:"10px",color:"white"}}>

<button style={{marginTop:"5px",marginRight:"10px",backgroundColor:"black",borderRadius:"5px",borderWidth:"0",padding:"10px"}}><FaCalendarAlt  size={20} color='#ee2791'/></button>
<div>
  <p style={{margin:"0px",fontSize:"small",marginBottom:"3px"}}>
    D.O.B
  </p>
  <p style={{margin:"0px",fontSize:"large"}}>23-12-2004</p>
  
</div>

</div>

       </div>
       <div style={{ textAlign: "center", marginTop: "50px" }}>
          <a
            href="" target='_blank' download="adhi.pdf"
            
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "18px",
              backgroundColor: "#c52d2d",
            }}
          >
            Download CV
          </a>
        </div>
    </div>
  )
}
