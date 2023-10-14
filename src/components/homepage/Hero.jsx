import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <header className='bg-style-bg relative'>
            <div className='w-[400px] h-[680px] rotate-[26deg] blur-[75px] absolute bg-[#4844F2] opacity-[0.2] left-[120px]'></div>
            <div className="container mx-auto relative z-10">
                <h1 className='text-white text-xl max-w-[552px] font-Manrope font-bold leading-normal pt-72'>Selling Mobile Apps Made Simple.</h1>
                <p className='text-white opacity-[0.7] font-Inter text-sm max-w-[552px] font-normal leading-[170%] pt-4 pb-12 '>Looking to sell your mobile app? We buy iOS apps in different categories and revenue levels. We promise 14 days from contact to exit with the best valuation guarantee. Most of our partners are indie developers, studios and companies.</p>
               <div className='pb-[75px]'>
               <Link className='text-white font-Manrope text-sm  font-bold leading-[170%] rounded-[38px] py-4 px-10 Sell_bg inline-block '>Sell Your App</Link>
               </div>
            </div>
        </header>
    )
}

export default Hero