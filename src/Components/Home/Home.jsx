import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import home from '../../assets/images/home.svg'
export default function Home() {

    return <>
        <section className='bg-[#1abc9c]'>
            <div className="container flex flex-col justify-between items-center text-white">
                <img className='pt-40 pb-16' src={home} width={300} alt="" />
                <h2 className="uppercase text-5xl font-bold pb-5">start Framework</h2>
                <div className='flex justify-center items-center pb-5'>
                    <span className='w-[80px] h-[4px] mr-5 bg-white'></span>
                    <span><i className='fa-solid fa-star mr-5'></i></span>
                    <span className='w-[80px] h-[4px] mr-5 bg-white'></span>
                </div>
                <h4 className='text-xl pb-16'>Graphic Artist - Web Designer - Illustrator</h4>
            </div>
    </section>
    </>
}
