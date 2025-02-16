'use client';
import React, { useState } from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";



const page = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="w-full text-white h-screen font-[Geist] bg-zinc-900">
        <div
          className={`sidebar ${
            nav ? "translate-x-0" : "translate-x-[-100%]"
          } absolute h-full w-[300px] bg-black p-10 transition-all duration-300`}
        >
          <IoClose
            onClick={() => setNav(false)}
            className="absolute top-5 right-5"
            size={25}
            cursor="pointer"
          />
        </div>
        <div className="header w-full h-[10%] md:px-5 px-2 flex justify-between items-center">
          <CgMenuGridO
            onClick={() => setNav(true)}
            size={30}
            cursor="pointer"
          />
          <button className="bg-white text-black px-6 py-2 rounded-full font-normal">
            Contact Me
          </button>
        </div>
        <div className="header px-5 w-full h-[90%] flex flex-col md:items-center">
          <h1 className="md:text-8xl text-4xl mt-[180px] md:mt-[180px]">KHAYAM IJAZ</h1>
          <p className='md:text-xl md:text-center'>
            Turning Features into Desire: <br /> Crafting Product Descriptions That
            Sell.
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
