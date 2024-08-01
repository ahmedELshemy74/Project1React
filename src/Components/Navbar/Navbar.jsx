import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toogleMenu = () => {
        setIsOpen(!isOpen)
    }

    
    const [scroll, setScroll] = useState(false)
    const Scrolling = () => {
        if (window.scrollY>30) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    window.addEventListener('scroll',Scrolling)
     {/* Return */}
    return <>
        
        <div className='w-full z-[999] fixed'>
            <nav className=" bg-[#2c3e50] ">
                <div className={scroll? 'h-24 transition-all duration-[500ms]' :'h-28 duration-[500ms] transition-all'}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 text-white">
    <li href="#" className="flex items-center text-4xl  space-x-3 rtl:space-x-reverse font-bold">
        <Link  to=''>Start Framework</Link>
    </li>
                <button onClick={()=> toogleMenu()} data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
                <div className={isOpen ? "visible w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-solid-bg">
      <ul  className="uppercase  flex flex-col font-bold mt-4  w-full md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
        <li className='block text-[18px] py-2 px-3 md:p-0 text-white bg-[#2c3e50]  '>
            <NavLink  to='about'>about</NavLink>
        </li>
        <li className='block text-[18px] py-2 px-3 md:p-0 text-white bg-[#2c3e50]  '>
            <NavLink  to='portfolio'>portfolio</NavLink>
        </li>
        <li className='block text-[18px] py-2 px-3 md:p-0 text-white bg-[#2c3e50]  '>
            <NavLink  to='contact'>contact</NavLink>
        </li>
      </ul>
    </div>
                    </div>
                    </div>
            </nav>
            </div>
    </>
}
