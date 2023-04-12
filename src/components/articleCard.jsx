import React from 'react'

export default function
    ({ srcimg, title }) {
    return (
        <article className='md:flex-shrink-0 md:pb-8  md:mr-9 md:inline-block  md:border-[rgba(147, 162, 211, 0.38)] md:w-[31%] border-2 p-6  rounded-3xl'>
            <div className='flex flex-col space-y-8 '>

                <div className='place-self-center w-full'>
                    <img src={srcimg} className='place-self-center self-center w-full justify-self-center' alt="meal" />
                </div>
                <div className='flex ml-2 flex-col mb-12 space-y-5'>

                    <h3 className='font-bold text-2xl font-poppins text-[#0E2368] mt-1'>{title}</h3>
                    <p className='text-lg font-opensans text-[#434957] font-normal'>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                </div>
                <button className='border-2 md:border my-6 text-lg font-sourcesanspro font-semibold border-[#434957] text-[#434957] w-max rounded-3xl px-5 py-2'>Read More</button>
            </div>
        </article>
    )
}
