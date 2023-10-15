import React from 'react'

const AboutYou = () => {
    return (
        <section>
            <div className='container mx-auto flex justify-center'>
                <div className='about_bg sm:p-[40px] p-[12px] w-[922px] rounded-[40px] shadow-[4px_5px_65px_0px_rgba(0, 0, 0, 0.06)]'>
                    <h2 className="text-dark text-center text-lg font-medium mb-4 font-Manrope">Tell us about your app</h2>
                    <p className='text-center text-sm font-normal text-dark opacity-70 mb-[44px] font-Inter max-w-[890px]'> If you have a non-gaming ios app with 5000+ monthly downloads and it's been on the App Store for more than a year, we're interested in buying it!</p>
                    <div className='px-[21px] mb-[44px]'>
                        <div className='flex flex-col sm:flex-row  gap-6 mb-6'>
                            <input className='w-full text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]' type="text" placeholder='Your Name' />
                            <input required className='w-full text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]' type="text" placeholder='Your Email' />
                        </div>
                        <div className='flex gap-6 mb-6 flex-col sm:flex-row'>
                            <input required className='w-full text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]' type="text" placeholder='Revenue Last Month' />
                            <input className='w-full text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]' type="text" placeholder='Download Last Month' />
                        </div>
                        <input required className='w-full mb-6 text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]' type="text" placeholder='App URL...' />
                        <textarea className='w-full height-[74px] text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[10px] pb-[7px] rounded-lg border border-[#969696]' type="text" placeholder='Anything else you’d like us to know...' />
                    </div>
                    <div className='flex justify-center mb-[44px]'><button className='leading-[174%] font-Manrope font-bold text-sm text-white py-4 px-[30px] rounded-[38px] submit_btn'>Submit Now</button></div>
                    <div className='flex justify-center'><p className='text-center about_text opacity-70 border border-[#FF3939] capitalize text-xmd text px-[40px] py-5 rounded-xl inline-block'>We guarantee to give you an offer within 48 hours</p></div>
                </div>
            </div>
        </section>
    )
}

export default AboutYou