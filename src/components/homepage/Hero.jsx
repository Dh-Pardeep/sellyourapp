import React from 'react'
import { Link } from 'react-router-dom'
// import MyNav from '../common/MyNav'
import Hero_Men_img from '../../assets/img/png/Hero_men_img.png'
import Hero_A_Svg from '../../assets/img/svg/hero_A_svg.svg'
import Header from '../common/Header'
const Hero = () => {
  return (
    <section className='bg-style-bg rounded-br-[32px] rounded-bl-[32px]  relative'>
      {/* <MyNav /> */}
      <Header />
      <div className='w-[400px] h-[680px] rotate-[26deg] blur-[75px] absolute bg-[#4844F2] opacity-[0.2] left-[120px]'></div>
      <div className="w-[546.90px] h-[878.92px] origin-top-left rotate-[26.13deg] bg-red-500 bg-opacity-20 blur-[407px] absolute" />
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
                  <div className=" absolute bottom-2 left-0 w-[60px] h-[58px] bg-gradient-to-r from-red-500 to-indigo-600 rounded-full" />
                  <div className="w-[247px] h-[103px] p-[25px] bg-white bg-opacity-5 rounded-2xl border border-white border-opacity-30 backdrop-blur-[20px] justify-center items-start gap-[33px] inline-flex">
                    <img className="w-[61.37px] h-[61.37px] rounded-full" src={Hero_A_Svg} />
                    <div className="max-w-[109.45px] text-white text-base font-normal font-Inter leading-7">We Buy Your iOS Apps</div>
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
