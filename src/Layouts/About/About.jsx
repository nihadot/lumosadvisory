import React, { useState, useRef, useEffect } from 'react';
import LA from "../../assets/Img/Lumos Advisory Logo-01.png";
import img2 from "../../assets/Img/pexels-photo-7108191.jpg";
import { images } from '../../static';


const ourVisionContentOne = 'We are committed to developing a scalable advisory platform that will enable SME owners and stakeholders to chart a clear path towards achieving their financial goals and driving profitable growth.'
const ourVisionContentTwo = 'We envision a world where SME owners and stakeholders are well equipped to achieve their financial goals. SMEs are important to any economy as they drive economic growth through innovation, employment, and community development. We will be your trusted advisor and be by your side in every step of your journey.'

const ourMissionContentOne = 'We strive to help SME clients succeed in their business journey by providing them with data-driven tools for practical decision-making and designing custom and cost-effective strategies for sustainable growth at an affordable price.';
const ourMissionContentTwo = 'Our mission is to guide SME clients through their business journey, ensuring growth and adding significant value every step of the way. We help our clients unlock the right value potential by helping formulate sustainable growth strategies, implementing the right controls as required for the business, and providing customized solutions tailored to the unique needs of each business.';
function About() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const [ourVision, setOurVision] = useState(ourVisionContentOne);
  const [ourMission, setOurMission] = useState(ourMissionContentOne);

  const togglePopup = () => {
    // isPopupVisible ? 
    setOurVision(ourVisionContentTwo)
    // : 
    setOurMission(ourMissionContentTwo)
    // setOurVision(ourVisionContentOne)


    setPopupVisible(prev => !prev);
  };



  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupVisible(false);
      //  isPopupVisible ? 
    // setOurVision(ourVisionContentTwo)
    // : 
    setOurMission(ourMissionContentOne)
    setOurVision(ourVisionContentOne)

    }
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.addEventListener('mousedown', handleClickOutside);

    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupVisible]);




  return (
    <>
      <div id='about' className="relative flex">
        <div className="flex flex-1">
          <div className="flex-1 1200px:p-12">
            <img className='mt-1 mac-book:mt-5 w-[200px]' src={LA} alt="" />
            <h1 className='mt-16 text-black text-[18px] font-medium'>About Lumos</h1>
            <h1 className='pt-2 text-teal-600 text-[16px] font-medium'>Who We Are?</h1>
            <p className='text-teal-600 pt-2 text-[12px]'>We are a team of finance and strategy professionals with a cumulative experience of 30 years working in Big 4 firms and top-tier companies. We have gained in-depth practical knowledge and expertise on handling all financial, strategic and commercial aspects of the business.</p>

            <h1 className='pt-2 text-teal-600 text-[16px] font-medium'>Our Vision</h1>
            <p className='text-teal-600 pt-2 text-[12px]'>{ourVision}</p>

            <h1 className='pt-2 text-teal-600 text-[16px] font-medium'>Our Mission</h1>
            <p className='text-teal-600 pt-2 text-[12px]'>{ourMission}</p>

            <div className="flex gap-5">
              <h1 className='pt-2 text-teal-600 text-[16px] font-medium'>Why focus on SMEs?</h1>
              <div className="flex items-center justify-center mt-2">
              
              <img className='w-5 h-5' src={images.readMore} alt="" />

              <button 
                className="text-teal-600 mt-0 text-[12px] ms-2 text-center"
                onClick={togglePopup}
                >
                Click to know more
              </button>
                </div>
            </div>


            <div className="mt-3">
              <p htmlFor="" className='text-[10px] mb-3 text-teal-600'>references:</p>
              <p className='mb-3 text-[10px] text-teal-600 max-w-[350px] w-full'>
              [1] SMEs contribute 60% of the UAE's GDP, creating more job opportunities for Finance Professionals. (thefinancestory.com)
              </p>

              <p className='text-[10px] text-teal-600 max-w-[350px] w-full'>
              [2] Small and Medium Enterprises | The Official Portal of the UAE Government
              </p>
            



            </div>

            {isPopupVisible && (
              <div  ref={popupRef} className="absolute top-44 right-0 bg-teal-600 text-white bg-opacity-50 py-1 px-5 max-w-[445px] w-full z-50">
                <h2 className="text-xl font-bold mb-0">Why focus on SMEs?</h2>
                <p className='pt-2 text-[10px]'><span className='font-medium'>Innovation:</span> SMEs often pioneer new products and services, pushing industries forward.</p>
                <p className='pt-2 text-[10px]'><span className='font-medium'>Employment:</span> Over 60% of global jobs spring from SMEs, combating unemployment.</p>
                <p className='pt-2 text-[10px]'><span className='font-medium'>Community Impact:</span> SMEs usually operate locally, nurturing community and social cohesion.</p>
                <p className='pt-2 text-[10px]'><span className='font-medium'>Economic Diversity:</span> They offer varied goods and services, balancing economic scales and reducing dependency on large corporations.</p>
                <p className='pt-2 text-[10px]'><span className='font-medium'>Resilience:</span> By spreading risks across numerous small businesses, economies withstand crisis better. During and post the COVID -19 pandemic, we noted the need to build more resilience in the SME segment through offering the right strategic and financial guidance to business owners and key stakeholders and be fully equipped to weather any economic uncertainties.</p>

                <p className='pt-2 text-[10px]'>According to the Ministry of Economy of UAE the SME sector accounts for more than 94% of all companies in the country[1]. They employ more than 86% of the private sector’s workforce and made up over 60% of the non-oil GDP[1][2].</p>
                <p className='pt-2 text-[10px] mb-2'>We seek to serve this underserved yet massive segment with quality financial services which bring value to their business and empower stakeholders to achieve their targets.</p>

             
              </div>
            )}
          </div>

          <div className="flex w-[439px]">
            <div className="bg-black w-1.5 h-[50%]"></div>
            <img className=' h-screen  w-[433px]' src={img2} alt="Loading..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
