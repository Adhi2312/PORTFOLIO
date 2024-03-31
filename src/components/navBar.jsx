import React, { useState } from 'react'
import '../styles/main.css'
// import {MainComponent} from './main.jsx'
// import { useState } from 'react'
import { FaInfoCircle, FaFileAlt, FaCode, FaEnvelope } from "react-icons/fa";


export const About = ()=>
{
  return(
    <div >
     <div style={{marginBottom:"20px",fontFamily:"Satoshi"}}>
            <h3 >About me</h3>  
      </div>

      <div style={{fontFamily:"satoshi" ,color: "hsl(240, 1%, 65%)"}}>
        <p style={{fontSize:"20px"}}>
        I'm a web and mobile app developer, passionate about crafting user-friendly solutions. With an eye for detail, I specialize in creating seamless experiences using the latest technologies. <br/><br/>I love collaborating and thrive on pushing the boundaries of what's possible in the digital world
        </p>
      </div>
      <div style={{marginBottom:"20px",fontFamily:"Satoshi"}}>
            <h3 >What I do! </h3>  
      </div>
      <div style={{display:"flex",flexWrap:"wrap"}}>
      <div style={{width:"40%", backgroundColor:"black",borderRadius:"15px",padding:"20px",Height:"110px",border:"2px solid #3c3c3d",marginRight:"20px",marginBottom:"20px"}}>
      <p style={{fontSize:"large",margin:"0px",marginBottom:"10px",marginLeft:"20px"}}>Web Development</p>
            <div style={{marginLeft:"20px"}}>
             <p style={{fontSize:"medium",margin:"0px",marginBottom:"10px",color:"hsl(240, 1%, 65%)"}}>I'm a web and mobile app developer. I enjoy creating user-friendly websites with the latest tech.</p>
            </div>


            </div>
            <div style={{width:"40%", backgroundColor:"black",borderRadius:"15px",padding:"20px",Height:"110px",border:"2px solid #3c3c3d",marginBottom:"20px"}}>
            <p style={{fontSize:"large",margin:"0px",marginBottom:"10px",marginLeft:"20px"}}>Mobile App Development</p>
            <p style={{fontSize:"medium",margin:"0px",marginBottom:"10px",color:"hsl(240, 1%, 65%)",marginLeft:"20px"}}>I'm a mobile app developer dedicated to crafting smooth user experiences.</p>


            </div>
            <div style={{width:"40%", backgroundColor:"black",borderRadius:"15px",padding:"20px",Height:"110px",border:"2px solid #3c3c3d",marginRight:"20px"}}>
            <p style={{fontSize:"large",margin:"0px",marginBottom:"10px",marginLeft:"20px"}}>UI/UX</p>
            <p style={{fontSize:"medium",margin:"0px",marginBottom:"10px",color:"hsl(240, 1%, 65%)",marginLeft:"20px"}}>I'm a UI/UX designer focused on creating user-friendly experiences. Let's design something amazing together!</p>



            </div>
            <div style={{width:"40%", backgroundColor:"black",borderRadius:"15px",padding:"20px",Height:"110px",border:"2px solid #3c3c3d"}}>
            <p style={{fontSize:"large",margin:"0px",marginBottom:"10px",marginLeft:"20px"}}>Competetive Programming</p>
            <p style={{fontSize:"medium",margin:"0px",marginBottom:"10px",color:"hsl(240, 1%, 65%)",marginLeft:"20px"}}>I excel in competitive programming, solving coding challenges with precision. Let's conquer algorithms together</p>



            </div>
        

      </div>

    </div>
  )
}
export const Project =(props)=>{
  console.log(props)
  // const [no,setNo]=useState("false")
  return(
    <>
    <div >
    <div style={{marginBottom:"20px",fontFamily:"Satoshi"}}>
           <h3 >My Projects </h3>  
     </div>

    
     
     <div style={{display:"flex",flexWrap:"wrap"}}>
     <div style={{width:"40%",marginLeft:"20px",borderRadius:"15px",padding:"20px",minHeight:"110px",marginBottom:"20px",border:"2px solid #1c1c1d"}}>
              <img height={"200px"} width={"100%"} src='https://media.istockphoto.com/id/1764859746/photo/3d-realistic-blood-donation-icon-3d-icon-isolated-on-white.jpg?s=612x612&w=0&k=20&c=vCFVCVaMMezsEwY8Y_ntSzDyDByOYAr77sDCSob7Sa4='/ >
              <p style={{fontSize:"20px",fontFamily:"satoshi" ,color: "hsl(240, 1%, 65%)",marginBottom:"3px"}}>Django</p>
              <p style={{fontSize:"25px",fontFamily:"satoshi" ,color: "white",marginTop:"0px"}}>Blood bank Web</p>

         </div>
         <div style={{width:"40%",marginLeft:"20px",borderRadius:"15px",padding:"10px 20px",minHeight:"250px" ,marginBottom:"20px",border:"2px solid #1c1c1d"}}>
         <img height={"200px"} width={"100%"} src='https://media.istockphoto.com/id/1413735503/photo/social-media-social-media-marketing-thailand-social-media-engagement-post-structure.jpg?s=612x612&w=0&k=20&c=7Y4Bdom9c7paYa67nSCvwSuFoppYxJIh-CTYqe6J4Js='/ >
         <p style={{fontSize:"20px",fontFamily:"satoshi" ,color: "hsl(240, 1%, 65%)",marginBottom:"3px"}}>Django</p>
              <p style={{fontSize:"25px",fontFamily:"satoshi" ,color: "white",marginTop:"0px"}}>social media web</p>
         </div>
         <div style={{width:"40%",marginLeft:"20px",borderRadius:"15px",padding:"10px 20px",minHeight:"110px",border:"2px solid #1c1c1d"}}>
     
         <img height={"200px"} width={"100%"} src='https://plus.unsplash.com/premium_photo-1674911578992-771e7c5ff79f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/ >
         <p style={{fontSize:"20px",fontFamily:"satoshi" ,color: "hsl(240, 1%, 65%)",marginBottom:"3px"}}>React Native</p>
              <p style={{fontSize:"25px",fontFamily:"satoshi" ,color: "white",marginTop:"0px"}}>Nykaa</p>
         </div>
         <div style={{width:"40%",marginLeft:"20px",borderRadius:"15px",padding:"10px 20px",minHeight:"250px",border:"2px solid #1c1c1d"}}>
         <img height={"200px"} width={"100%"} src='https://media.istockphoto.com/id/912299634/photo/computer-crime-concept.webp?b=1&s=170667a&w=0&k=20&c=9-EtbkwCS8yzXnKDM6atojtgL3SLg3hGRfMyyQuAqG4='/ >
         <p style={{fontSize:"20px",fontFamily:"satoshi" ,color: "hsl(240, 1%, 65%)",marginBottom:"3px"}}>React Native</p>
              <p style={{fontSize:"25px",fontFamily:"satoshi" ,color: "white",marginTop:"0px"}}>Hidden Harbour</p>
         </div>

     </div> 

   </div>
   </>
  )
}

export const Skills =()=>{
  return(
   <div >
     <div style={{marginBottom:"20px",fontFamily:"Satoshi"}}>
            <h3 style={{marginLeft:"0px"}}>Education</h3>  

          <div style={{display:"flex",flexDirection:"column",marginBottom:"20px"}}>
            <div style={{width:"100%" ,backgroundColor:"black",height:"100px",marginBottom:"10px",border:"2px solid #3c3c3d",borderRadius:"15px"}}>
              <p style={{fontSize:"small",marginLeft:"20px"}}>2022-2026</p>
              <p style={{fontSize:"large",marginLeft:"40px"}}>B.E. Mechanical Engineering : Sri Eshwar College of engineering</p>

            </div>
            <div style={{width:"100%" ,backgroundColor:"black",height:"100px",marginBottom:"10px",border:"2px solid #3c3c3d",borderRadius:"15px"}}>
            <p style={{fontSize:"small",marginLeft:"20px"}}>2021-2022</p>
              <p style={{fontSize:"large",marginLeft:"40px"}}>HSE : RKR Gnanodhaya matric higher secondary school</p>

            </div>
            <div style={{width:"100%" ,backgroundColor:"black",height:"100px" ,border:"2px solid #3c3c3d",borderRadius:"15px"}}>
            <p style={{fontSize:"small",marginLeft:"20px"}}>2019-2020</p>
            <p style={{fontSize:"large",marginLeft:"40px"}}>SSLC : RKR Gnanodhaya matric higher secondary school</p>

            </div>
          </div>
          <h3 style={{marginLeft:"0px",marginBottom:"20px",fontFamily:"Satoshi"}}>Skills</h3> 
          <div style={{display:"flex"}}>
            <div style={{width:"50%", backgroundColor:"black",borderRadius:"15px",padding:"20px",Height:"110px",border:"2px solid #3c3c3d"}}>
            <p style={{fontSize:"large",margin:"0px",marginBottom:"10px"}}>Languages:</p>
            <div style={{marginLeft:"20px"}}>
              <ul style={{fontSize:"medium",margin:"0px"}}>
                <li>C/C++</li>
                
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>MySql</li>
                <li>PostgreSQL</li>

              </ul>
            </div>


            </div>
            <div style={{width:"50%", backgroundColor:"black",marginLeft:"20px",borderRadius:"15px",padding:"20px",minHeight:"110px",border:"2px solid #3c3c3d"}}>
            <p style={{fontSize:"large",margin:"0px",marginBottom:"10px"}}>Frame Works:</p>
            <div style={{marginLeft:"20px"}}>
              <ul style={{fontSize:"medium",margin:"0px"}}>
                <li>Django</li>
                
                <li>React</li>
                <li>React Native</li>
                <li>TailWind</li>

              </ul>
            </div>

            </div>
            
          </div>
      </div>
   </div>
  )
}
export const Contact =()=>{
  return(
    <div style={{display:'flex', flexDirection:"column"}}>
        <div style={{marginBottom:"20px"}}>
            <h3 style={{marginTop:"0px"}} >Contact Page</h3>  
        </div>
        <div style={{display:'flex',marginBottom:"20px"}}>
         
          <div style={{width:"50%", backgroundColor:"white",marginLeft:"20px",borderRadius:"15px",padding:"20px",minHeight:"110px"}}>
            <p style={{color:'black',fontSize:"medium",marginBottom:"0PX",marginBottom:"10px"}}>PHONE</p>
            <p style={{color:'black',fontSize:"medium",marginTop:"5PX",marginBottom:"10px"}}>6385242956</p>
            <p style={{color:'black',fontSize:"medium",marginTop:"5PX",marginBottom:"10px"}}>9361693956</p>

          </div>
          <div style={{width:"50%", backgroundColor:"white",marginLeft:"20px",borderRadius:"15px",padding:"20px",minHeight:"110px"}}>
          <p style={{color:'black',fontSize:"medium",marginBottom:"0PX",marginBottom:"10px"}}>EMAIL:</p>
              <p style={{color:'black',fontSize:"medium",marginTop:"5PX",marginBottom:"10px"}}>adhiabcd1234@gmail.com</p>
            <p style={{color:'black',fontSize:"medium",marginTop:"5PX",marginBottom:"10px"}}>adhlingavignesh@gmail.com</p>
          </div>

        </div>
        <div style={{padding:'10px' ,backgroundColor:"WHITE",width:"94%",minHeight:"300px",borderRadius:"15px",color:"black",paddingBottom:"30px",marginLeft:"20px",marginTop:"30px"}}>
          <p style={{FontSize:"xx-large" ,marginBottom:"0px",fontFamily:"Satoshi",margin:"10px"}}>I'm always open to discussing product</p>
          <p  style={{fontSize:"xx-large",marginTop:"0px",fontFamily:"Satoshi",margin:"10px",marginBottom:"10px"}}>design work or partnerships.</p>
          <p style={{fontSize:"medium",marginLeft:"20px"}}>Username</p>
          <input />
          <p style={{fontSize:"medium",marginLeft:"20px"}}>Email</p>
          <input />
          <p style={{fontSize:"medium",marginLeft:"20px"}}>Message</p>
          <input />
          <button onMouseEnter={(e)=>{e.target.style.background="linear-gradient(to right, #f64b59, #e02973)"}} onMouseLeave={(e)=>{e.target.style.background="white"}} style={{padding:"10px 20px",marginLeft:"20px",marginTop:"20px"}} >Submit</button>
          


        </div>
    </div>
  )
}
 export const NavBar = ({props,setPage}) => {
  console.log(props)
  const [select,setSelect]=useState("About")
  console.log(select)
   

  return (
    <div style={{marginLeft:"0px"}}>
        <div style={{display:'flex',padding:"30px 0px",justifyContent:"center",alignItems:"center"}}>
          
          
          {/* <p>{props}</p> */}
          {select=="About"?<button style={{marginRight:"40px",background: " linear-gradient(to right, #f64b59, #e02973)",padding:"15px",borderRadius:"12px",border:"2px solid #2c2c2d"}} onClick={()=>{setPage(About);setSelect("About")}}><FaInfoCircle color='white' size={18}/><p style={{color:"white", fontFamily:"Satoshi",fontSize:"small",margin:"0px"}}>About</p></button>:<button style={{marginRight:"40px",backgroundColor:"black",padding:"15px",borderRadius:"12px",border:"2px solid #2c2c2d"}} onClick={()=>{setPage(About);setSelect("About")}}><FaInfoCircle color='white' size={18}/><p style={{color:"white", fontFamily:"Satoshi",fontSize:"small",margin:"0px"}}>About</p></button>}
          {select=="skills"?<button style={{marginRight:"40px",background: " linear-gradient(to right, #f64b59, #e02973)",padding:"15px",borderRadius:"12px",border:"2px solid #2c2c2d"}} onClick={()=>{setPage(Skills);setSelect("skills")}}><FaFileAlt color='white' size={18}/><p style={{color:"white", fontFamily:"Satoshi",fontSize:"small",margin:"0px"}}>Resume</p></button>:<button style={{marginRight:"40px",backgroundColor:"black",padding:"15px",borderRadius:"12px",border:"2px solid #2c2c2d"}} onClick={()=>{setPage(Skills);setSelect("skills")}}><FaInfoCircle color='white' size={18}/><p style={{color:"white", fontFamily:"Satoshi",fontSize:"small",margin:"0px"}}>Resume</p></button>}
          {select=="project"?<button style={{marginRight:"40px",background: " linear-gradient(to right, #f64b59, #e02973)",padding:"15px",borderRadius:"12px",border:"2px solid #2c2c2d"}} onClick={()=>{setPage(Project);setSelect("project")}}><FaCode color='white' size={18}/><p style={{color:"white", fontFamily:"Satoshi",fontSize:"small",margin:"0px"}}>Works</p></button>:<button style={{marginRight:"40px",backgroundColor:"black",padding:"15px",borderRadius:"12px",border:"2px solid #2c2c2d"}} onClick={()=>{setPage(Project);setSelect("project")}}><FaCode color='white' size={18}/><p style={{color:"white", fontFamily:"Satoshi",fontSize:"small",margin:"0px"}}>works</p></button>}
          {select=="contact"?<button style={{marginRight:"40px",background: " linear-gradient(to right, #f64b59, #e02973)",padding:"15px",borderRadius:"12px",border:"2px solid #2c2c2d"}} onClick={()=>{setPage(Contact);setSelect("contact")}}><FaEnvelope color='white' size={18}/><p style={{color:"white", fontFamily:"Satoshi",fontSize:"small",margin:"0px"}}>Contact</p></button>:<button style={{marginRight:"40px",backgroundColor:"black",padding:"15px",borderRadius:"12px",border:"2px solid #2c2c2d"}} onClick={()=>{setPage(Contact);setSelect("contact")}}><FaEnvelope color='white' size={18}/><p style={{color:"white", fontFamily:"Satoshi",fontSize:"small",margin:"0px"}}>Contact</p></button>}
           
            
           
            {/* <MainComponent props={page}/> */}
          
        </div>
    </div>
  )
}
// export {NavBar,page}




