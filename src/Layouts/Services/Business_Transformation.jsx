import React, { useState } from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import social_logos from "../../assets/Img/SM Icons-01.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img5 from "../../assets/Img/pexels-photo-3756681.jpg"
import { GoTriangleLeft } from "react-icons/go";

function Business_Transformation() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  return (
    <>
    {/* <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}> */}
      <div className="flex">

        {/* <div className="min-h-screen w-60 flex flex-col justify-between">
            
        </div> */}

        <div className="flex w-full justify-between">
            <div className="w-[650px] px-5 text-justify">
                <img className='mt-5 w-[200px]' src={LA} alt="" />
                <h1 className='mt-10 text-black text-xl font-medium'>Business Transformation</h1>
                <h1 className='text-black text-xl font-medium'>and Performance Improvement</h1>
                <p className='text-teal-600 pt-2 text-sm'>Business Transformation and Performance Improvement services are essential for SMEs striving to remain competitive and achieve sustainable growth. We offer a suite of specialized services designed to optimize various facets of business operations, ensuring efficiency and enhanced performance.</p>

                <h1 className='pt-2 text-teal-600 text-xl font-medium'>Service Offerings</h1>
                <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Strategic Planning:</span>We collaborate with your leadership team to develop comprehensive strategic plans that align with your long-term goals.</p>
                <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Process Optimization:</span>Our experts analyze and refine your business processes to eliminate inefficiencies and boost productivity.</p>
                <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Financial Management:</span>We provide financial analysis and planning, helping you to maintain a healthy cash flow and optimized budget allocation.</p>
                <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Technology Integration:</span>We assist in integrating advanced technological solutions that streamline operations and enhance data management.</p>
                <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Change Management:</span>Our team supports your organization through transitions, ensuring smooth implementation of new strategies and technologies.</p>

            <div className="flex gap-5">
                <h1 className='pt-2 text-teal-600 text-xl font-medium'>Our Process and Approach</h1>
                <button 
                className="text-teal-600 underline mt-2"
                onClick={togglePopup}
                >
                  <p className='flex gap-3 items-center'><span className=''><GoTriangleLeft /></span><span>Click to know more</span></p>
                </button>
            </div>


                {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-end mr-20 z-50">
                  <div className="bg-teal-600 text-white bg-opacity-50 py-1 px-5 w-[565px]">
                    <h2 className="text-xl font-bold mb-4">Our Process and Approach</h2>
                    <p className='pt-2 text-sm'><span className='font-medium'>Initial Assessment:</span> Conduct a thorough analysis of current business operations and identify key areas for improvement and potential growth opportunities.</p>
                    <p className='pt-2 text-sm'><span className='font-medium'>Strategic Development:</span> Collaborate with your team to develop a strategic plan tailored to your business objectives and set measurable goals and implement a roadmap for achieving them.</p>
                    <p className='pt-2 text-sm'><span className='font-medium'>Implementation:</span> Execute the strategic plan using our proven methodologies and integrate new processes, technologies, and practices across your organization.</p>
                    <p className='text-sm'><span className=''>Monitoring and Support:</span> Continuously monitor progress and adjust strategies as needed and provide ongoing support and training to ensure successful adoption of new initiatives.</p>
                    <p className='pt-2 text-sm'><span className='font-medium'>Review and Improvement:</span> Conduct regular reviews to assess the effectiveness of implemented strategies and identify further areas for enhancement and continue to refine processes.</p>
                    {/* <p className='pt-2 text-sm'><span className='font-medium'>:</span></p> */}
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
                <div className="flex flex-col">
                    <div className="bg-white w-1.5  h-[50%]"></div>
                    <div className="bg-black w-1.5  h-[50%]"></div>
                </div>
                <img className='w-[510px] h-screen' src={img5} alt="Loading..." />
            </div>
        </div>


      </div>
    {/* </div> */}
    </>
  )
}

export default Business_Transformation
