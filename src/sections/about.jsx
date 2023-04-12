import React from 'react'
import aboutimg from '../assets/aboutimg.png'

export default function About() {
    return (

        <section className='py-[13%] h-[70%] md:h-[100vh]'>
            <div className='flex flex-col h-[514px] md:flex-row align-middle  justify-center text-center md:text-left bg-[#F7F8FB]'>
                {/* <div className='md:block hidden'> */}
                <img src={aboutimg} className='mx-[10%] hidden md:block' alt="" />
                {/* </div> */}
                <div className='flex flex-col items-center justify-center md:items-start'>
                    <h1 className='text-[#0E2368] font-poppins text-2xl font-bold pt-6 px-10 md:pt-0 md:text-[40px]'>
                        About Us
                    </h1>
                    <p className='text-xs mt-4 leading-[25px] py-3 md:py-0 px-10 md:w-[80%] font-semibold font-opensans'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
                    </p>
                    <button className='bg-[#E23744] md:mx-10 text-white text-[11px] py-[7px] px-5 my-4 rounded-3xl font-semibold font-sourcesanspro'>Read More</button>

                </div>

            </div>
        </section>
    )
}
