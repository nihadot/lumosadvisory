import React, { useState } from 'react';
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
    <div className='h-screen hidden fixed top-0 bg-transparent left-0 justify-between z-[100] w-[21.111vh]  md:flex flex-col '>
      <div className="mt-[4.444vh] pl-[2.667vh] text-[1.999vh] ">
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
          <div className="pl-[0vh]">
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

      <div className="w-full h-fit flex gap-[1.333vh] ps-[2.667vh]">
        <a href=''>
         <img className='w-[2.667vh] h-[2.667vh] mb-[4.444vh] m-auto' src={images.facebook_icon} alt="Social Media Icons" />
        </a>

        <a href=''>
         <img className='w-[2.667vh] h-[2.667vh] mb-[4.444vh] m-auto' src={images.instagram} alt="Social Media Icons" />
        </a>


        <a href=''>
         <img className='w-[2.667vh] h-[2.667vh] mb-[4.444vh] m-auto' src={images.linkedin} alt="Social Media Icons" />
        </a>

      </div>
    </div>
  );
}

export default LeftBar;
