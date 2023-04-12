import React from 'react'
import pizza from '../assets/pizza.png'
import redimg from '../assets/redbg.svg'
import logo from '../assets/logo.svg'
export default function Overview() {
    return (
        <section className=' h-max flex flex-col md:mb-8 md:flex-row-reverse'>
            <div className='w-full basis-[50%]  relative' >

                <img src={pizza} className='object-contain w-[100%] float-right' alt="pizza" />
                <button className='absolute top-3 w-18 text-xs right-3 border border-white z-20 text-white md:text-base px-2 py-1 lg:text-lg md:right-6 md:top-6 lg:right-7 rounded-full'>Get in Touch</button>
                <img src={redimg} className="float-right object-cover w-[100%] absolute " alt="bg" />
            </div>
            <div className='text-center basis-[50%] h-max md:text-left ' >

                <img src={logo} alt="logo" className="w-[100px] h-[100px] absolute -z-10 top-6 left-8 md:left-16" />
                <h1 className='  pr-4 my-8 pt-5 mx-8 md:mt-[35%]  md:text-[2rem] lg:text-[3rem] md:mx-16 md:text-5xl  lg:pr-[35%] md:pr-22 text-[#0E2368] text-3xl font-bold font-sourcesanspro leading-10 '>
                    Discover the <span className="text-[#E23744]">Best </span>Food and Drinks
                </h1>
                <p className='text-sm md:mx-16 text-[#434957]  md:pr-[40%] font-opensans mx-8 leading-5'>
                    Naturally made Healthcare Products for the better care & support of your body.
                </p>
                <button className='text-white mt-6 mx-8 md:mx-16 px-3 md:px-5 md:py-3 py-2 rounded-full bg-[#E23744] text-base font-semibold font-opensans tracking-wider border-white'>Explore Now!</button>
            </div>

        </section>
    )
}
