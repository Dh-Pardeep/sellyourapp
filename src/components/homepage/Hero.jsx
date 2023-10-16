import React from 'react'
import { Link } from 'react-router-dom'
import MyNav from '../common/MyNav'
import Hero_Men_img from '../../assets/img/png/Hero_men_img.png'
import Hero_A_Svg from '../../assets/img/svg/hero_A_svg.svg'
const Hero = () => {
    return (
        <section className='bg-style-bg rounded-br-[32px] rounded-bl-[32px]  relative'>
            <MyNav />
            <div className='w-[400px] h-[680px] rotate-[26deg] blur-[75px] absolute bg-[#4844F2] opacity-[0.2] left-[120px]'></div>
            <div className="container mx-auto relative z-10">
                <div className='flex flex-col lg:flex-row pt-72 justify-between items-center'>
                    <div className='w-full lg:w-6/12'>
                        <h1 className='text-white text-xl max-w-[552px] font-Manrope font-bold leading-normal '>Selling Mobile Apps Made Simple.</h1>
                        <p className='text-white opacity-[0.7] font-Inter text-sm max-w-[552px] font-normal leading-[170%] pt-4 pb-12 '>Looking to sell your mobile app? We buy iOS apps in different categories and revenue levels. We promise 14 days from contact to exit with the best valuation guarantee. Most of our partners are indie developers, studios and companies.</p>
                        <div className='pb-[75px]'>
                            <Link className='text-white font-Manrope text-sm  font-bold leading-[170%] rounded-[38px] py-4 px-10 Sell_bg inline-block '>Sell Your App</Link>
                        </div>
                    </div>
                    <div className='w-full lg:w-6/12'>
                       <div className='bubble'>
                       <div className='relative'>
                            <div className='absolute z-30 top-40 -left-4'>
                                <div className='flex  items-center p-6 border-solid border-[1px] border-opacity-[0.2] rounded-2xl border-white bg-[#1F112B]'>
                                    <img src={Hero_A_Svg} alt="A Sign" />
                                    <h2 className='text-white font-Inter text-sm font-normal leading-[170%] max-w-[110px] ms-8'>We Buy Your iOS Apps</h2>
                                </div>
                            </div>
                            <div>
                                <img className=' translate-y-[-70px] xl:pe-12 w-[70%] ms-auto' src={Hero_Men_img} alt="Hero_Men_img" />
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
