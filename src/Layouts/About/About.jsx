import React, { useState } from 'react';
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png";
import social_logos from "../../assets/Img/SM Icons-01.png";
import LA from "../../assets/Img/Lumos Advisory Logo-01.png";
import img2 from "../../assets/Img/pexels-photo-7108191.jpg";

function About() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <>
      {/* <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}> */}
        <div className="flex">
          {/* <div className="min-h-screen w-60 flex flex-col justify-between"></div> */}

          <div className="flex w-full justify-around">
            <div className="w-[780px] px-5 text-justify">
              <img className='mt-5 w-[200px]' src={LA} alt="" />
              <h1 className='mt-16 text-black text-xl font-medium'>About Lumos</h1>
              <h1 className='pt-2 text-teal-600 text-xl font-medium'>Who We Are?</h1>
              <p className='text-teal-600 pt-2 text-sm'>We are a team of finance and strategy professionals with a cumulative experience of 30 years working in Big 4 firms and top-tier companies. We have gained in-depth practical knowledge and expertise on handling all financial, strategic and commercial aspects of the business.</p>

              <h1 className='pt-2 text-teal-600 text-xl font-medium'>Our Vision</h1>
              <p className='text-teal-600 pt-2 text-sm'>We are committed to developing a scalable advisory platform that will enable SME owners and stakeholders to chart a clear path towards achieving their financial goals and driving profitable growth.</p>

              <h1 className='pt-2 text-teal-600 text-xl font-medium'>Our Mission</h1>
              <p className=' text-teal-600 pt-2 text-sm'>We strive to help SME clients succeed in their business journey by providing them with data-driven tools for practical decision-making and designing custom and cost-effective strategies for sustainable growth at an affordable price.</p>

              <h1 className='pt-2 text-teal-600 text-xl font-medium'>Why focus on SMEs?</h1>
              <button 
                className="text-teal-600 underline mt-2"
                onClick={togglePopup}
              >
                Click to know more
              </button>

              {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-end mr-20 z-50">
                  <div className="bg-teal-600 text-white bg-opacity-50 py-1 px-5 w-[565px]">
                    <h2 className="text-xl font-bold mb-4">Why focus on SMEs?</h2>
                    <p className='pt-2 text-sm'><span className='font-medium'>Innovation:</span> SMEs often pioneer new products and services, pushing industries forward.</p>
                    <p className='pt-2 text-sm'><span className='font-medium'>Employment:</span> Over 60% of global jobs spring from SMEs, combating unemployment.</p>
                    <p className='pt-2 text-sm'><span className='font-medium'>Community Impact:</span> SMEs usually operate locally, nurturing community and social cohesion.</p>
                    <p className='pt-2 text-sm'><span className='font-medium'>Economic Diversity:</span> They offer varied goods and services, balancing economic scales and reducing dependency on large corporations.</p>
                    <p className='pt-2 text-sm'><span className='font-medium'>Resilience:</span> By spreading risks across numerous small businesses, economies withstand crisis better. During and post the COVID -19 pandemic, we noted the need to build more resilience in the SME segment through offering the right strategic and financial guidance to business owners and key stakeholders and be fully equipped to weather any economic uncertainties.</p>

                <p className='pt-2 text-sm'>According to the Ministry of Economy of UAE the SME sector accounts for more than 94% of all companies in the country[1]. They employ more than 86% of the private sector’s workforce and made up over 60% of the non-oil GDP[1][2].</p>
                <p className='pt-2 text-sm'>We seek to serve this underserved yet massive segment with quality financial services which bring value to their business and empower stakeholders to achieve their targets.</p>

                    <button
                      className="bg-teal-600 text-white px-4 py-2 rounded"
                      onClick={togglePopup}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex">
              <div className="bg-black w-1.5 h-[50%]"></div>
              <img className='w-[550px] h-screen' src={img2} alt="Loading..." />
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default About;
