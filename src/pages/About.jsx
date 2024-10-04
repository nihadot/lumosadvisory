import React, { useEffect, useState} from 'react';
import { LeftTriangleIcon } from '../assets/icons';
import { about } from '../assets/images';


function About() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    setPopupVisible(prev => !prev);
  };

  useEffect(()=>{
    function handelContextMenu(e) {
      e.preventDefault();
    }
    const mobileHomeImageElement = document.getElementById("mobile-about-image");
    const desktopHomeImageElement = document.getElementById("desktop-about-image");
    
    mobileHomeImageElement.addEventListener("contextmenu",handelContextMenu);
    desktopHomeImageElement.addEventListener("contextmenu",handelContextMenu);
    return ()=>{
      mobileHomeImageElement.removeEventListener("contextmenu",handelContextMenu);
      desktopHomeImageElement.removeEventListener("contextmenu",handelContextMenu);

    }
  })

  return (
    <>

<div id='about-mobile' className=" flex sm:hidden w-full items-center justify-center pt-24">
        <div className="max-w-[200px]  w-full flex h-[300px]">
          <div className="bg-black  w-[4px] h-[50%]"></div>
          <img
            className=" w-[96%] block  object-cover h-full"
            src={about}
            alt="Loading..."
            id='mobile-about-image'
          />
        </div>
      </div>

      <div id='about' className="relative max-h-fit sm:min-h-[100vh] w-full h-fit flex">
        <div className="flex flex-1">
          <div className="flex-1 pt-[8vw] ps-5  sm:ps-[5.333vh] pe-[3vh] ">
            <div className=" max-w-[100vh] w-full ">
       
            <h2 >About Lumos</h2>
            <h3>Who We Are?</h3>
            <p className=''>We are a team of finance and strategy professionals with a cumulative experience of 30 years working in Big 4 firms and top-tier companies. We have gained in-depth practical knowledge and expertise on handling all financial, strategic and commercial aspects of the business.</p>

            <h3>Our Vision</h3>
            <p className=''>We are committed to developing a scalable advisory platform that will enable SME owners and stakeholders to chart a clear path towards achieving their financial goals and driving profitable growth.</p>

            <h3>Our Mission</h3>
            <p className=''>We are committed to developing a scalable advisory platform that will enable SME owners and stakeholders to chart a clear path towards achieving their financial goals and driving profitable growth.</p>

            <div className="flex gap-[2.222vh]">
              <h3>Why focus on SMEs?</h3>
              <div className="flex items-center justify-center">
              
              <img className='w-[3vh] h-[4vh] object-cover' src={LeftTriangleIcon} alt="" />

              <button 
                onClick={togglePopup}
                >
                Click to know more
              </button>
                </div>
            </div>


            <div className="-mt-[1vh]">
              <p htmlFor="" className='text-[1.333vh] mb-[1.333vh] text-[#5F8F93]'>references:</p>
              <h6 className='mb-[1.333vh] text-[1.333vh] text-[#5F8F93] w-full'>
              [1] SMEs contribute 60% of the UAE's GDP, creating more job opportunities for Finance Professionals. (thefinancestory.com)
              </h6>

              <h6 className='text-[1.333vh] text-[#5F8F93] w-full'>
              [2] Small and Medium Enterprises | The Official Portal of the UAE Government
              </h6>
            



            </div>

            {isPopupVisible && (
              <div className="absolute top-[25%] right-0 bg-[#5F8F93] text-white md:block hidden bg-opacity-50 py-[0.444vh] px-[2.222vh] max-w-[40.5vw] w-full z-50">
                <h3 className="text-white">Why focus on SMEs?</h3>
                <p className='text-white'><span className='text-white'>Innovation:</span> SMEs often pioneer new products and services, pushing industries forward.</p>
                <p className='text-white'><span className='text-white'>Employment:</span> Over 60% of global jobs spring from SMEs, combating unemployment.</p>
                <p className='text-white'><span className='text-white'>Community Impact:</span> SMEs usually operate locally, nurturing community and social cohesion.</p>
                <p className='text-white'><span className='text-white'>Economic Diversity:</span> They offer varied goods and services, balancing economic scales and reducing dependency on large corporations.</p>
                <p className='text-white'><span className='text-white'>Resilience:</span> By spreading risks across numerous small businesses, economies withstand crisis better. During and post the COVID -19 pandemic, we noted the need to build more resilience in the SME segment through offering the right strategic and financial guidance to business owners and key stakeholders and be fully equipped to weather any economic uncertainties.</p>

                <p className='text-white'>According to the Ministry of Economy of UAE the SME sector accounts for more than 94% of all companies in the country[1]. They employ more than 86% of the private sector’s workforce and made up over 60% of the non-oil GDP[1][2].</p>
                <p className='text-white mb-[0.889vh]'>We seek to serve this underserved yet massive segment with quality financial services which bring value to their business and empower stakeholders to achieve their targets.</p>

             
              </div>
            )}



{isPopupVisible && (
              <div className="absolute -top-[10%] right-0  md:hidden block  py-[0] px-[15px] w-full z-50">
                <div className="bg-[#5F8F93] text-white bg-opacity-90 px-3 py-1">

                <h3 className="text-white">Why focus on SMEs?</h3>
                <p className='text-white text-[10px] '><span className='text-white'>Innovation:</span> SMEs often pioneer new products and services, pushing industries forward.</p>
                <p className='text-white text-[10px] '><span className='text-white'>Employment:</span> Over 60% of global jobs spring from SMEs, combating unemployment.</p>
                <p className='text-white text-[10px] '><span className='text-white'>Community Impact:</span> SMEs usually operate locally, nurturing community and social cohesion.</p>
                <p className='text-white text-[10px] '><span className='text-white'>Economic Diversity:</span> They offer varied goods and services, balancing economic scales and reducing dependency on large corporations.</p>
                <p className='text-white text-[10px] '><span className='text-white'>Resilience:</span> By spreading risks across numerous small businesses, economies withstand crisis better. During and post the COVID -19 pandemic, we noted the need to build more resilience in the SME segment through offering the right strategic and financial guidance to business owners and key stakeholders and be fully equipped to weather any economic uncertainties.</p>

                <p className='text-white text-[10px]'>According to the Ministry of Economy of UAE the SME sector accounts for more than 94% of all companies in the country[1]. They employ more than 86% of the private sector’s workforce and made up over 60% of the non-oil GDP[1][2].</p>
                <p className='text-white text-[10px] mb-[0.889vh]'>We seek to serve this underserved yet massive segment with quality financial services which bring value to their business and empower stakeholders to achieve their targets.</p>

                </div>
             
              </div>
            )}
            </div>

          </div>

          <div className="sm:flex hidden max-w-[40vw] w-full">
            <div className="bg-black w-[0.667vh] h-[50%]"></div>
            <img
            id='desktop-about-image'
            className=' h-screen w-full max-w-[39.444vw] object-cover max-h-[100vh]' src={about} alt="Loading..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
