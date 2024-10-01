import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { closeIcon } from '../../assets/icons'

function MobileMenuBar({setMenuOpen}) {
  const [activeSection, setActiveSection] = useState('home');
  const [activeSubLink, setActiveSubLink] = useState(null);


    const handleClick = (link) => {
        setActiveSection(link);
        document.getElementById(link).scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false)
      };

      const handleSubLinkClick = (subLink) => {
        setActiveSubLink(subLink);
        document.getElementById(subLink).scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false)
      };

      const handleClickMenu = ()=>{
        setMenuOpen(prev => !prev)
      }

  return (
    <div
    className='w-[60%] sm:hidden block fixed z-[200] p-5 top-0 left-0 min-h-screen max-h-fit bg-[#5F8F93]'
    >
        <div className=" bg-transparent my-4">
            <img onClick={handleClickMenu} src={closeIcon} className='w-6 h-12 object-cover ' alt="close icon" />

        </div>


        <div className="mt-[4.444vh] text-[1.999vh] ">
        <a
          href="#home"
          className={`block py-[0.444vh] ${activeSection === 'home' ? 'text-black' : 'text-white'}`}
          onClick={() => handleClick('home')}
        >
          Home
        </a>

        <a
          href="#about"
          className={`block py-[0.444vh] ${activeSection === 'about' ? 'text-black' : 'text-white'}`}
          onClick={() => handleClick('about')}
        >
          About Lumos
        </a>


        <a
          href="#about-us"
          className={`block py-[0.444vh] ${activeSection === 'about-us' ? 'text-black' : 'text-white'}`}
          onClick={() => handleClick('about-us')}
        >
          About Us
        </a>

        <a
          href="#why-choose-us"
          className={`block py-[0.444vh] ${activeSection === 'why-choose-us' ? 'text-black' : 'text-white'}`}
          onClick={() => handleClick('why-choose-us')}
        >
          Why Choose Us
        </a>

        {/* Services section */}
        <a
          href="#services"
          className={`block py-[0.444vh] ${activeSection === 'services' ? 'text-black' : 'text-white'}`}
          onClick={() => handleClick('services')}
        >
          Our Services
        </a>
        {activeSection === 'services' && (
          <div className="pl-[0vh] ">
            <a
              href="#service-one"
              className={`block py-[0.444vh] ${activeSubLink === 'service-one' ? 'text-black' : 'text-white'}`}
              onClick={() => handleSubLinkClick('service-one')}
            >
              Outsourced <br />CFO Services
            </a>
            <a
              href="#service-two"
              className={`block py-[0.444vh] ${activeSubLink === 'service-two' ? 'text-black' : 'text-white'}`}
              onClick={() => handleSubLinkClick('service-two')}
            >
              Business <br />Transformation <br />and Performance Improvement
            </a>
            <a
              href="#service-three"
              className={`block py-[0.444vh] ${activeSubLink === 'service-three' ? 'text-black' : 'text-white'}`}
              onClick={() => handleSubLinkClick('service-three')}
            >
              Feasibility <br />Studies and <br />Business Plan
            </a>
            <a
              href="#service-four"
              className={`block py-[0.444vh] ${activeSubLink === 'service-four' ? 'text-black' : 'text-white'}`}
              onClick={() => handleSubLinkClick('service-four')}
            >
              Business <br />Valuations
            </a>
            <a
              href="#service-five"
              className={`block py-[0.444vh] ${activeSubLink === 'service-five' ? 'text-black' : 'text-white'}`}
              onClick={() => handleSubLinkClick('service-five')}
            >
              Accounting and <br />Book-Keeping
            </a>
            <a
              href="#service-six"
              className={`block py-[0.889vh] ${activeSubLink === 'service-six' ? 'text-black' : 'text-white'}`}
              onClick={() => handleSubLinkClick('service-six')}
            >
              Tax and <br />Compliance <br />Services
            </a>
          </div>
        )}
        {/* End of Services section */}

        <a
              href="#contact"
              className={`block py-[0.444vh] ${activeSection === 'contact' ? 'text-black' : 'text-white'}`}
              onClick={() => handleClick('contact')}
            >
              Contact
            </a>

      </div>
    </div>
  )
}

export default MobileMenuBar