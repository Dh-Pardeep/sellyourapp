

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Logo from '../../assets/img/svg/logo.svg'
const Header = () => {
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
            <nav className='flex justify-between items-center py-4'>
              <div className='cursor-pointer'>
                <img src={Logo} alt="" />
              </div>
              <ul className={`${showNavbar ? 'flex items-center mb-0 nav_sm p-0' : 'flex items-center mb-0 nav_sm nav_show p-0'} `}>
                <li><Link onClick={() => setShowNavbar(true)} className=' lg:me-8 mb-5 lg:mb-0  text-white font-Open text-base font-normal inline-block  relative after:container-[""] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-white after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%] leading-normal opacity-[0.7] hover:opacity-[1]' to="/">About</Link></li>
                <li><Link onClick={() => setShowNavbar(true)} className=' lg:me-8 mb-5 lg:mb-0 font-Open text-white text-base hover:text-white font-normal inline-block  relative after:container-[""] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-white after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%] leading-normal opacity-[0.7] hover:opacity-[1] ' to="/Invest">How it Works</Link></li>
                <li><Link onClick={() => setShowNavbar(true)} className=' mb-5 lg:mb-0 font-Open text-white text-base hover:text-white font-normal inline-block  relative after:container-[""] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-white after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%] leading-normal opacity-[0.7] hover:opacity-[1] ' to="/cofounder">Blog</Link></li>
                <span title="close" className="ms-4 close_nav text-white fw-bold lg:hidden" onClick={() => setShowNavbar(true)} ><RxCross2 fontSize={40} color='white' /></span>
              </ul>
              <ul>
                <li><Link className='py-4 px-2 text-white font-Manrope text-sm relative after:container-[""] after:w-full after:h-[1px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-white after:absolute after:bottom-0 after:left-0  leading-[170%] font-bold hover:opacity-[0.7] hidden lg:block'>How much is my app worth?</Link></li>
                <li>
                <span title="open"
                  className="inline-block lg:hidden fw-bold text-white"
                  onClick={() => setShowNavbar(false)}>
                  <RxHamburgerMenu fontSize={40} color='white' /></span>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Header
