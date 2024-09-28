import React, { useState, useRef, useEffect } from 'react';
import img2 from "../../assets/Img/pexels-photo-7108191 1.svg";
import { images } from '../../static';


const ourVisionContentOne = 'We are committed to developing a scalable advisory platform that will enable SME owners and stakeholders to chart a clear path towards achieving their financial goals and driving profitable growth.'
// const ourVisionContentTwo = 'We envision a world where SME owners and stakeholders are well equipped to achieve their financial goals. SMEs are important to any economy as they drive economic growth through innovation, employment, and community development. We will be your trusted advisor and be by your side in every step of your journey.'

const ourMissionContentOne = 'We strive to help SME clients succeed in their business journey by providing them with data-driven tools for practical decision-making and designing custom and cost-effective strategies for sustainable growth at an affordable price.';
// const ourMissionContentTwo = 'Our mission is to guide SME clients through their business journey, ensuring growth and adding significant value every step of the way. We help our clients unlock the right value potential by helping formulate sustainable growth strategies, implementing the right controls as required for the business, and providing customized solutions tailored to the unique needs of each business.';
function About() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const [ourVision, setOurVision] = useState(ourVisionContentOne);
  const [ourMission, setOurMission] = useState(ourMissionContentOne);

  const togglePopup = () => {
    // isPopupVisible ? 
    // setOurVision(ourVisionContentTwo)
    // : 
    // setOurMission(ourMissionContentTwo)
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

  // useEffect(() => {
  //   if (isPopupVisible) {
  //     document.addEventListener('mousedown', handleClickOutside);

  //   } else {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [isPopupVisible]);




  return (
    <>
      <div id='about' className="relative max-h-fit min-h-[100vh] w-full h-fit flex">
        <div className="flex flex-1">
          <div className="flex-1 pt-[8vw]  ps-[5.333vh] pe-[3vh] ">
            <div className=" ">
       
            <h2 >About Lumos</h2>
            <h3>Who We Are?</h3>
            <p>We are a team of finance and strategy professionals with a cumulative experience of 30 years working in Big 4 firms and top-tier companies. We have gained in-depth practical knowledge and expertise on handling all financial, strategic and commercial aspects of the business.</p>

            <h3>Our Vision</h3>
            <p>{ourVision}</p>

            <h3>Our Mission</h3>
            <p>{ourMission}</p>

            <div className="flex gap-[2.222vh]">
              <h3>Why focus on SMEs?</h3>
              <div className="flex items-center justify-center">
              
              <img className='w-[2.222vh] h-[2.222vh]' src={images.readMore} alt="" />

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
              <div  ref={popupRef} className="absolute top-[25%] right-0 bg-[#5F8F93] text-white bg-opacity-50 py-[0.444vh] px-[2.222vh] max-w-[40.5vw] w-full z-50">
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
            </div>

          </div>

          <div className="flex max-w-[40vw] w-full">
            <div className="bg-black w-[0.667vh] h-[50%]"></div>
            <img className=' h-screen w-full max-w-[39.444vw] object-cover max-h-[100vh]' src={img2} alt="Loading..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
