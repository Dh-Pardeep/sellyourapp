import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { LogoIcon } from './Icon';
const MyNav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  if (showNavbar) {
    document.body.classList.remove('overflow-hidden');
  } else {
    document.body.classList.add('overflow-hidden')
  }

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <section className='fixed top-0 w-full z-[1000]'>
        <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
          <div className='container mx-auto'>
            <nav className='flex justify-between items-center py-[17px]'>
              <div className='cursor-pointer'>
                <LogoIcon />
              </div>
              <ul className={`${showNavbar ? 'flex items-center mb-0 nav_sm p-0' : 'flex items-center mb-0 nav_sm nav_show p-0'} `}>
                <li><Link onClick={() => setShowNavbar(true)} className=' md:me-[31px] mb-5 md:mb-0  text-white font-Open text-base font-normal inline-block  relative after:container-[""] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-white after:absolute after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%] leading-normal' to="/">Chat Room</Link></li>
                <li><Link onClick={() => setShowNavbar(true)} className=' md:me-[31px] mb-5 md:mb-0 font-Open text-white text-base hover:text-white font-normal inline-block  relative after:container-[""] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-white after:absolute after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%] leading-normal ' to="/Invest">Invest</Link></li>
                <li><Link onClick={() => setShowNavbar(true)} className='md:me-[22px] mb-5 md:mb-0 font-Open text-white text-base hover:text-white font-normal inline-block  relative after:container-[""] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-white after:absolute after:bottom-0 hover:after:w-full hover:after:left-0 after:left-[50%] leading-normal ' to="/cofounder">Become A Cofounder</Link></li>
                <li><Link onClick={() => setShowNavbar(true)} className='text-white rounded-[100px] border-[1px] border-solid border-white font-Open text-base hover:text-white font-normal inline-block px-[23px] py-[10px] common_btn leading-normal' to="">Log In</Link></li>
                <span title="close" className="ms-4 close_nav text-white fw-bold md:hidden" onClick={() => setShowNavbar(true)} ><RxCross2 fontSize={40} color='black' /></span>
              </ul>
              <span title="open"
                className="inline-block md:hidden fw-bold"
                onClick={() => setShowNavbar(false)}>
                <RxHamburgerMenu fontSize={40} color='white' /></span>
            </nav>
          </div>
        </nav>
      </section>
    </>
  )
}

export default MyNav