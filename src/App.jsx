import logo from './logo.svg';
import './App.css';
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import { HiMailOpen } from "react-icons/hi";
import profile from  "./imgs/profile.jpg"

import { Home } from './components/Home';
import { About } from './components/about';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

import { useState, useEffect } from 'react';
import { InitialTransition } from './IntialTransaction';
import { AnimatePresence, motion } from "framer-motion";
import CustomCursor from './components/Cursor';
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

// ================== APP ===================
function App() {
  const [page, setPage] = useState("Home");
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  // Update theme when changed
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const components = {
    Home: <Home setPage={setPage} />,
    About: <About />,
    Portfolio: <Portfolio />,
    Contact: <Contact />,
  };

  return (
    <div className="py-10 w-screen min-h-screen bg-white dark:bg-black text-[#696969] dark:text-white lg:px-10 transition-colors duration-500">
      <CustomCursor />
      <InitialTransition />

      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {components[page]}
          </motion.div>
        </AnimatePresence>
      </div>

      <ThemeToggle theme={theme} setTheme={setTheme} />
      <NavBar setPage={setPage} page={page} />
    </div>
  );
}

// ================== NAVBAR ===================
const NavBar = ({ setPage, page }) => {
  return (
    <div
  className="fixed bottom-0 left-1/2 right-1/2 -translate-x-1/2 w-full p-2 px-16 flex justify-between 
      shadow-inner dark:shadow-none dark:bg-[#2b2b2a]
      md:pl-20 md:pr-20 lg:flex-col lg:w-auto lg:left-auto lg:right-0 lg:top-1/2 lg:p-8 lg:bottom-auto lg:gap-8 
      lg:translate-x-0 lg:-translate-y-1/2 lg:bg-transparent lg:dark:bg-transparent lg:shadow-none transition-colors duration-500">


      {/* Nav Item */}
      {[
        { name: "Home", icon: <FaHome size={22} /> },
        { name: "About", icon: <IoPerson size={22} /> },
        { name: "Portfolio", icon: <FaBriefcase size={22} /> },
        { name: "Contact", icon: <HiMailOpen size={22} /> },
      ].map((item) => (
        <div key={item.name} className="home-button group" onClick={() => setPage(item.name)}>
          <p className="hidden lg:block text-center m-auto pl-6">{item.name}</p>
          <div
            className={`rounded-full p-4 transition-colors duration-300 ease-in-out ${
              page === item.name
                ? "bg-[#ffb400] text-white"
                : "bg-[#f2f2f2] dark:bg-[#454540] text-gray-600 dark:text-gray-400 group-hover:bg-[#ffb400] group-hover:text-white"
            }`}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

// ================== THEME TOGGLE ===================
const ThemeToggle = ({ theme, setTheme }) => {
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      onClick={toggle}
      className="fixed top-8 right-8 rounded-full p-4  bg-[#f2f2f2] dark:bg-[#454540] text-gray-900 dark:text-white transition-colors duration-300"
    >
      {theme === "dark" ? <MdOutlineWbSunny size={22}/> :<IoMoonOutline size={22}/>}
    </button>
  );
};

export default App;
