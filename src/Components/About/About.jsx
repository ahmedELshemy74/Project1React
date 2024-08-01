import React, { useEffect, useState } from 'react'
import style from './About.module.css'
export default function About() {

    return <>
    <section className='w-full bg-[#1abc9c] '>
            <div className="container flex flex-col justify-between items-center text-white">
                <h2 className="uppercase text-2xl md:text-5xl font-bold pt-40 md:pt-72 pb-8 text-center md:text-center md:">about component</h2>
                <div className='flex justify-center items-center pb-5'>
                    <span className='w-[80px] h-[5px] mr-5 bg-white'></span>
                    <span><i className='fa-solid fa-star mr-5'></i></span>
                    <span className='w-[80px] h-[5px] mr-5 bg-white'></span>
                </div>
                <div className='flex justify-between flex-wrap pb-40'>
                    <p className='md:w-1/2 text-xl pb-10'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className='md:w-1/2 text-xl pb-10'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
    </section>
    </>
}
