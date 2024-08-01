import React, { useEffect, useState } from 'react'
import style from './Portfolio.module.css'
import img1 from '../../assets/images/poert1.png'
import img2 from '../../assets/images/port2.png'
import img3 from '../../assets/images/port3.png'
export default function Portfolio() {

    let data = [
        {
            id: 1,
            src: img1,
        },
        {
            id: 2,
            src:img2,
        },
        {
            id: 3,
            src:img3,
        },
        {
            id: 4,
            src: img1,
        },
        {
            id: 5,
            src:img2,
        },
        {
            id: 6,
            src:img3,
        }
    ]

    let newSrc = (src) => {
        document.getElementById('img').src=src
        document.getElementById('closeImg').classList.replace('hidden','visible')
    }
    let closeImgs = () => {
        document.getElementById('closeImg').classList.replace('visible','hidden')
    }
    return <>
    <section>
                <h2 className="uppercase text-2xl md:text-5xl text-[#2c3e50] font-bold pt-32 pb-6 text-center md:text-center ">portfolio component
                </h2>
                <div className='flex justify-center items-center pb-16'>
                    <span className='w-[80px] h-[5px] mr-5 bg-[#2c3e50]'></span>
                    <span><i className='fa-solid fa-star mr-5 text-[#2c3e50]'></i></span>
                    <span className='w-[80px] h-[5px] mr-5 bg-[#2c3e50]'></span>
                </div>
            <div className="container mx-auto">
                <div className='flex flex-wrap justify-center'>
                    {data.map((item, index) => {
                          return  <div className='md:w-[30%] mx-5 my-5 cursor-pointer'>
                          <div onClick={()=> newSrc(item.src)} key={index}  className='relative'>
                                  <img  src={item.src} className='w-full' alt="" />
                                  <div className='absolute flex justify-center items-center top-0 left-0 opacity-0 hover:opacity-100 hover:transition-all bg-[#1abc9ce6] w-full h-full'>
                                      <i className='fa-solid fa-plus text-5xl text-white'></i>
                                  </div>
                          </div>
                          </div>
                    })}
                    </div>
            </div>

            <div id='closeImg' onClick={closeImgs} className='hidden fixed top-0 left-0 w-full h-screen bg-blue-400 bg-opacity-60'>
                <div className=' flex justify-center items-center h-[100%]'>
                    <img className='absolute z-[999] opacity-100' id='img' src={img1} width={600} alt="" />
                </div>
            </div>
    </section>
    </>
}
