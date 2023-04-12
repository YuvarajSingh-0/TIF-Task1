import React from 'react'
import logo from '../assets/logo.svg'
import insta from '../assets/insta.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'

export default function Footer() {
    return (
        <div>
            <footer className='bg-[#F8F8F8] h-[85vh] px-16  md:py-10 md:h-max py-[15%]'>
                <div className='flex flex-col content-between md:flex-row md:justify-between '>

                    <div className='w-40 self-center'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='w-[20%]'>
                        <h2 className='text-lg font-semibold text-[#0E2368] font-sourcesanspro md:text-2xl'>Contact Us</h2>
                        <address className='  my-2'>

                            <p className='text-[#767984] text-[9px] md:text-lg font-normal font-sourcesanspro not-italic '>
                                Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
                            </p>
                        </address>
                        <p className='text-[#767984] text-[9px] my-2 md:text-lg font-normal font-sourcesanspro '><a href="mailto:example2020@gmail.com">example2020@gmail.com</a></p>
                        <p className='text-[#767984] text-[9px] my-3 md:text-lg font-normal font-sourcesanspro '><a href="tel:555-1234">(904) 443-0343</a></p>
                    </div>
                    <div>
                        <h2 className='text-lg text-[#0E2368] md:text-2xl font-semibold font-sourcesanspro '>More</h2>
                        <ul className='flex flex-col space-y-2 mt-2'>
                            <li className='text-[#767984] text-[9px] md:text-lg font-normal font-sourcesanspro '><a href="#">About Us</a></li>
                            <li className='text-[#767984] text-[9px] md:text-lg font-normal font-sourcesanspro '><a href="#">Products</a></li>
                            <li className='text-[#767984] text-[9px] md:text-lg font-normal font-sourcesanspro '><a href="#">Career</a></li>
                            <li className='text-[#767984] text-[9px] md:text-lg font-normal font-sourcesanspro '><a href="#">Contact Us</a></li>
                        </ul>


                    </div>
                    <div className='self-center md:flex md:flex-col mt-11 content-between md:self-start  text-center'>
                        <p className='text-[#767984] text-[9px] md:hidden md:text-base font-roboto'>© 2022 Food Truck Example</p>
                        <p className='text-lg text-[#0E2368] mt-0 md:text-2xl font-semibold font-sourcesanspro text-left hidden md:inline mb-3'>Social Links</p>
                        <ul className='flex flex-row space-x-6 md:justify-between    items-center justify-center mt-2'>
                            <li className='text-[#767984] w-6'><a href="#"><img src={insta} className='w-full' alt="instagram" /></a></li>
                            <li className='text-[#767984] w-6 '><a href="#"><img src={twitter} className='w-full' alt="twitter" /></a></li>
                            <li className='text-[#767984] w-4'><a href="#"><img src={facebook} className='w-full' alt="facebook" /></a></li>
                        </ul>

                        <p className='text-[#767984] -ml-11 mt-20 text-[9px] hidden md:inline md:text-base font-roboto'>© 2022 Food Truck Example</p>
                    </div>
                </div>

            </footer>
        </div>
    )
}
