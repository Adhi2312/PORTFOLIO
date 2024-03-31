import React from 'react'
import '../styles/main.css'
import { NavBar } from './navBar'
import {page} from './navBar'
import { Project } from './navBar'



export const MainComponent = (props) => {
  // const pop="Project"
   console.log(props)
  return (
    <div style={{padding:"10px 40px" ,color:"white"}}>
      

        <h1 style={{color:'white'}}>{props.page}</h1>

    </div>)
  
}
