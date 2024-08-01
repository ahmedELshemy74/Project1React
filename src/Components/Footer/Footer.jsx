import React, { useEffect, useState } from "react";
import style from "./Footer.module.css";
export default function Footer() {
  return <>
    <footer className="bg-[#2c3e50] py-28 w-full">
          <div className="container flex justify-between text-white">
              <div className="flex flex-wrap justify-between md:w-full">
            <div className="flex flex-col items-center  w-full md:w-1/3 pb-16 md:flex-wrap ">
                <h2 className="text-4xl font-semibold pb-2">LOCATION</h2>
                <p className="pb-3 text-xl">2215 John Daniel Drive</p>
                <p className="pb-3 text-l">Clark, MO 65243</p>
            </div>
            <div className="flex flex-col items-center pb-16 md:w-1/3 w-full md:flex-wrap">
                <h2 className="text-4xl font-semibold pb-2">AROUND THE WEB</h2>
                <ul className="flex justify-center">
                    <li><i className="fa-brands fa-facebook mx-2 rounded-[50%] border border-solid p-2" ></i></li>
                    <li><i className="fa-brands fa-twitter mx-2 rounded-[50%] border border-solid p-2"></i></li>
                    <li><i className="fa-brands fa-linkedin-in mx-2 rounded-[50%] border border-solid p-2"></i></li>
                    <li><i className="fa-solid fa-globe mx-2 rounded-[50%] border border-solid p-2"></i></li>
                </ul>
            </div>
            <div className="flex flex-col  items-center pb-16 md:w-1/3 w-full md:flex-wrap">
                <h2 className="text-4xl font-semibold pb-2">ABOUT FREELANCER</h2>
                <p className="pb-3 text-xl">Freelance is a free to use, licensed <span className="block">Bootstrap theme created by Route</span> </p>
                  </div>
                  </div>
        </div>
    </footer>
            <div className="bg-[#1a252f] py-6 w-full">
                <p className="text-center text-white">Copyright © Your Website 2021</p>
            </div>
    </>
}
