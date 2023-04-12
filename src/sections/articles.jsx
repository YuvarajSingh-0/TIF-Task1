import React, { useState } from 'react'
import ArticleCard from '../components/articleCard'
import meal1 from '../assets/meal1.png'
import meal2 from '../assets/meal2.png'
import meal3 from '../assets/meal3.png'
import meal4 from '../assets/meal4.png'
import meal5 from '../assets/meal5.png'
import meal6 from '../assets/meal6.png'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export default function Articles() {

    const srcimg = [meal1, meal2, meal3, meal4, meal5, meal6]
    const [pos, setPos] = useState(1)
    const title = ["Grilled  Tomatoes at Home", "Snacks for Travel", "Post-workout Recipes", "How To Grill Corn", "Crunchwrap Supreme", "Broccoli Cheese Soup"]
    const slideLeft = () => {
        const slider = document.getElementsByClassName('slider')
        slider[0].scrollLeft -= 10000
        slider[1].scrollLeft -= 10000
        const leftbtn = document.getElementById('leftbtn')
        const rightbtn = document.getElementById('rightbtn')
        leftbtn.classList.remove('border-[#434957]')
        rightbtn.classList.add('border-[#434957]')
        setPos(prev => {
            if (prev === 1) {
                return 1
            }
            else {
                return prev - 1
            }
        })
    }
    const slideRight = () => {
        const slider = document.getElementsByClassName('slider')
        const leftbtn = document.getElementById('leftbtn')
        const rightbtn = document.getElementById('rightbtn')
        rightbtn.classList.remove('border-[#434957]')
        leftbtn.classList.add('border-[#434957]')
        slider[0].scrollLeft += 10000
        slider[1].scrollLeft += 10000
        setPos(prev => {
            if (prev === 2) {
                return 2
            }
            else {
                return prev + 1
            }
        })
    }

    return (
        <div className='my-11'>

            <div className=' m-8 hidden md:block' >
                <h1 className='text-4xl ml-16 mb-11 font-semibold  text-[#0E2368] font-sourcesanspro'>Latest Articles</h1>
                <div id="slider" className='flex slider mx-16 overflow-x-scroll scroll flex-nowrap scroll-smooth scrollbar-hide'>
                    {srcimg.map((item, index) => {
                        return (
                            <ArticleCard key={index} srcimg={item} title={title[index]} />
                        )

                    })}


                </div>
            </div>

            <div className='md:hidden'>
                <center>

                    <h1 className='text-2xl font-semibold text-[#0E2368] font-sourcesanspro'>
                        Latest Articles
                    </h1>
                </center>

                <div className='flex flex-col items-center mt-5 space-y-8'>
                    <div className='flex w-full overflow-x-scroll scroll items-center   space-x-8 flex-nowrap scroll-smooth scrollbar-hide'>
                        <div className='p-4  w-[100%]   relative flex-shrink-0 pb-8  md:mr-9 inline-block] md:w-[31%]'>
                            <ArticleCard srcimg={meal1} title={title[0]} />
                        </div>
                        <div className='p-4  w-[100%]   relative flex-shrink-0 pb-8  md:mr-9 inline-block] md:w-[31%]'>

                            <ArticleCard srcimg={meal2} title={title[1]} />
                        </div>
                    </div>
                    <div className='flex w-full overflow-x-scroll scroll items-center   space-x-5 flex-nowrap scroll-smooth scrollbar-hide'>

                        <div className='p-4  w-[100%]   relative flex-shrink-0 pb-8  md:mr-9 inline-block] md:w-[31%]'>

                            <ArticleCard srcimg={meal3} title={title[2]} />
                        </div>
                        <div className='p-4  w-[100%]   relative flex-shrink-0 pb-8  md:mr-9 inline-block] md:w-[31%]'>

                            <ArticleCard srcimg={meal4} title={title[3]} />
                        </div>
                    </div>
                    <div className='flex w-full slider overflow-x-scroll scroll items-center   space-x-5 flex-nowrap scroll-smooth scrollbar-hide'>
                        <div className='p-4  w-[100%]   relative flex-shrink-0 pb-8  md:mr-9 inline-block] md:w-[31%]'>

                            <ArticleCard srcimg={meal5} title={title[4]} />
                        </div>
                        <div className='p-4  w-[100%]   relative flex-shrink-0 pb-8  md:mr-9 inline-block] md:w-[31%]'>

                            <ArticleCard srcimg={meal6} title={title[5]} />
                        </div>
                    </div>

                </div>



            </div>
            <div className='flex mt-7 items-center space-x-5 justify-center'>
                <MdChevronLeft id="leftbtn" size={40} onClick={slideLeft} className='border  rounded-lg cursor-pointer '>right</MdChevronLeft>
                <p className='text-lg font-sourcesanspro font-normal text-[#434957'>{pos}/2</p>
                <MdChevronRight id="rightbtn" size={40} onClick={slideRight} className='border border-[#434957] rounded-lg cursor-pointer'>left</MdChevronRight>
            </div>
        </div>


    )
}
