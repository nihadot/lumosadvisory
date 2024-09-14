import React from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import social_logos from "../../assets/Img/SM Icons-01.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img5 from "../../assets/Img/pexels-photo-3756681.jpg"

function Business_Transformation() {
  return (
    <>
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex">

        <div className="min-h-screen w-60 flex flex-col justify-between">
            
        </div>

        <div className="flex w-full justify-evenly">
            <div className="w-[485px] pr-16 text-justify">
                <img className='-ml-16 mt-5 w-[200px]' src={LA} alt="" />
                <h1 className='-ml-16 mt-10 text-black text-xl font-medium'>Business Transformation</h1>
                <h1 className='-ml-16 text-black text-xl font-medium'>and Performance Improvement</h1>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'>Business Transformation and Performance Improvement services are essential for SMEs striving to remain competitive and achieve sustainable growth. We offer a suite of specialized services designed to optimize various facets of business operations, ensuring efficiency and enhanced performance.</p>

                <h1 className='-ml-16 pt-2 text-teal-600 text-xl font-medium'>Service Offerings</h1>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'><span className='font-medium'>Strategic Planning:</span>We collaborate with your leadership team to develop comprehensive strategic plans that align with your long-term goals.</p>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'><span className='font-medium'>Process Optimization:</span>Our experts analyze and refine your business processes to eliminate inefficiencies and boost productivity.</p>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'><span className='font-medium'>Financial Management:</span>We provide financial analysis and planning, helping you to maintain a healthy cash flow and optimized budget allocation.</p>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'><span className='font-medium'>Technology Integration:</span>We assist in integrating advanced technological solutions that streamline operations and enhance data management.</p>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'><span className='font-medium'>Change Management:</span>Our team supports your organization through transitions, ensuring smooth implementation of new strategies and technologies.</p>

                <h1 className='-ml-16 pt-2 text-teal-600 text-xl font-medium'>Our Process and Approach</h1>

            </div>

            <div className="flex">
                <div className="flex flex-col">
                    <div className="bg-white w-1.5  h-[50%]"></div>
                    <div className="bg-black w-1.5  h-[50%]"></div>
                </div>
                <img className='w-[550px] h-screen' src={img5} alt="Loading..." />
            </div>
        </div>


      </div>
    </div>
    </>
  )
}

export default Business_Transformation
