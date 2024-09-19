import React, { useState } from 'react';
import social_logos from "../../assets/Img/SM Icons-01.png";
import { images } from '../../static';

function LeftBar() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeSubLink, setActiveSubLink] = useState(null);

  const handleClick = (link) => {
    setActiveSection(link);
    document.getElementById(link).scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubLinkClick = (subLink) => {
    setActiveSubLink(subLink);
    document.getElementById(subLink).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='h-screen hidden fixed top-0 left-0 justify-between z-[100] w-[180px]  md:flex flex-col '>
      <div className="mt-10 pl-6 text-sm mac-book:text-base">
        <a
          href="#home"
          className={`block py-1 ${activeSection === 'home' ? 'text-black' : 'text-white'}`}
          onClick={() => handleClick('home')}
        >
          Home
        </a>

        <a
          href="#about"
          className={`block py-1 ${activeSection === 'about' ? 'text-black' : 'text-white'}`}
          onClick={() => handleClick('about')}
        >
          About
        </a>

        <a
          href="#why-choose-us"
          className={`block py-1 ${activeSection === 'why-choose-us' ? 'text-black' : 'text-white'}`}
          onClick={() => handleClick('why-choose-us')}
        >
          Why Choose Us
        </a>

        {/* Services section */}
        <a
          href="#services"
          className={`block py-1 ${activeSection === 'services' ? 'text-black' : 'text-white'}`}
          onClick={() => handleClick('services')}
        >
          Our Services
        </a>
        {activeSection === 'services' && (
          <div className="pl-2">
            <a
              href="#service-one"
              className={`block py-1 ${activeSubLink === 'service-one' ? 'text-black' : 'text-white'}`}
              onClick={() => handleSubLinkClick('service-one')}
            >
              Outsourced <br />CFO Services
            </a>
            <a
              href="#service-two"
              className={`block py-1 ${activeSubLink === 'service-two' ? 'text-black' : 'text-white'}`}
              onClick={() => handleSubLinkClick('service-two')}
            >
              Business <br />Transformation <br />and Performance Improvement
            </a>
            <a
              href="#service-three"
              className={`block py-1 ${activeSubLink === 'service-three' ? 'text-black' : 'text-white'}`}
              onClick={() => handleSubLinkClick('service-three')}
            >
              Feasibility <br />Studies and <br />Business Plan
            </a>
            <a
              href="#service-four"
              className={`block py-1 ${activeSubLink === 'service-four' ? 'text-black' : 'text-white'}`}
              onClick={() => handleSubLinkClick('service-four')}
            >
              Business <br />Valuations
            </a>
            <a
              href="#service-five"
              className={`block py-1 ${activeSubLink === 'service-five' ? 'text-black' : 'text-white'}`}
              onClick={() => handleSubLinkClick('service-five')}
            >
              Accounting and <br />Book-Keeping
            </a>
            <a
              href="#service-six"
              className={`block py-1 ${activeSubLink === 'service-six' ? 'text-black' : 'text-white'}`}
              onClick={() => handleSubLinkClick('service-six')}
            >
              Tax and <br />Compliance <br />Services
            </a>
          </div>
        )}
        {/* End of Services section */}

        <a
              href="#contact"
              className={`block py-1 ${activeSection === 'contact' ? 'text-black' : 'text-white'}`}
              onClick={() => handleClick('contact')}
            >
              Contact
            </a>

      </div>

      <div className="w-full h-fit flex gap-3 ps-6">
        <a href=''>
         <img className='w-6 h-6 mb-10 m-auto' src={images.facebook_icon} alt="Social Media Icons" />
        </a>

        <a href=''>
         <img className='w-6 h-6 mb-10 m-auto' src={images.instagram} alt="Social Media Icons" />
        </a>


        <a href=''>
         <img className='w-6 h-6 mb-10 m-auto' src={images.linkedin} alt="Social Media Icons" />
        </a>

      </div>
    </div>
  );
}

export default LeftBar;
