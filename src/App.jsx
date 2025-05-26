import logo from './logo.svg';
import './App.css';
import { FaHome } from "react-icons/fa";
import profile from  "./imgs/profile.webp"
import { Home } from './components/Home';
import { CgProfile } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa";
import { useState } from 'react';
import { About } from './components/about';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';



function App() {
  const [page,setPage] = useState("Home");

   const components = {
    Home: <Home />,
    About: <About  />,
    Portfolio: <Portfolio />,
    Contact: <Contact />,
    // Contact: <Contact />
  };

  return (
    // <div className="App">
      <div class="p-10  w-screen h-screen bg-gray-800 text-white ">
        
      {components[page]}
      <NavBar setPage={setPage} />




      
      
     </div>
  );
}
const NavBar = ({setPage}) => {
  return (
   <div class="fixed bottom-0 left-1/2 right-1/2 -translate-x-1/2 w-full p-2  bg-black px-16 flex justify-between 
            md:pl-20 md:pr-20 lg:flex-col lg:w-auto lg:left-auto lg:right-0 lg:top-1/2  lg:p-8 lg:bg-gray-800 lg:bottom-auto lg:gap-8 lg:translate-x-0 lg:-translate-y-1/2">
              <div class="home-button"  onClick={() => setPage("Home")}>
                <p className='hidden lg:block text-center m-auto pl-6'>Home</p>
                <FaHome color='white' size={50} className='p-4 ml-auto bg-yellow-400 rounded-full'/>
              </div>
              <div class="home-button" onClick={()=>{setPage("About")}} >
                <p className='hidden lg:block text-center m-auto pl-6'>About</p>
                <CgProfile color='white' size={50} className='p-4 ml-auto bg-yellow-400 rounded-full'/>
              </div>
              
              <div class="home-button"  onClick={()=>{setPage("Portfolio")}} >
                <p className='hidden lg:block text-center m-auto pl-6 mt-auto mb-auto'>Portfolio</p>
                <FaBriefcase color='white' size={50} className='ml-auto
                 p-4 bg-yellow-400 rounded-full'/>
              </div>
              <div class="home-button" onClick={()=>{setPage("Contact")}} >
                <p className='hidden lg:block text-center m-auto pl-6'>Contact</p>
                <FaHome color='white' size={50} className='p-4 ml-auto bg-yellow-400 rounded-full'/>
              </div>
        
      
</div>
  );
}

export default App;
