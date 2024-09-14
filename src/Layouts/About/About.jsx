import React from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import social_logos from "../../assets/Img/SM Icons-01.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img2 from "../../assets/Img/pexels-photo-7108191.jpg"

function About() {
  return (
    <>
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex">

        <div className="min-h-screen w-60 flex flex-col justify-between">
            
        </div>

        <div className="flex w-full justify-evenly">
            <div className="w-[485px] text-justify">
                <img className='-ml-16 mt-5 w-[200px]' src={LA} alt="" />
                <h1 className='-ml-16 mt-16 text-black text-xl font-medium'>About Lumos</h1>
                <h1 className='-ml-16 pt-2 text-teal-600 text-xl font-medium'>Who We Are?</h1>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'>We are a team of finance and strategy professionals with a cumulative experience of 30 years working in Big 4 firms and top-tier companies. We have gained in-depth practical knowledge and expertise on handling all financial, strategic and commercial aspects of the business.</p>

                <h1 className='-ml-16 pt-2 text-teal-600 text-xl font-medium'>Our Vision</h1>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'>We are committed to developing a scalable advisory platform that will enable SME owners and stakeholders to chart a clear path towards achieving their financial goals and driving profitable growth.</p>

                <h1 className='-ml-16 pt-2 text-teal-600 text-xl font-medium'>Our Mission</h1>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'>We strive to help SME clients succeed in their business journey by providing them with data-driven tools for practical decision-making and designing custom and cost-effective strategies for sustainable growth at an affordable price.</p>

                <h1 className='-ml-16 pt-2 text-teal-600 text-xl font-medium'>Why focus on SMEs?</h1>

                <p className='-ml-16 text-teal-600 pt-8'>references:</p>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'>[1] SMEs contribute 60% of the UAE's GDP, creating more job opportunities for Finance Professionals. (thefinancestory.com)</p>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'>[2] Small and Medium Enterprises | The Official Portal of the UAE Government</p>
            </div>

            <div className="flex">
                <div className="bg-black w-1.5 h-[50%]"></div>
                <img className='w-[550px] h-screen' src={img2} alt="Loading..." />
            </div>
        </div>


      </div>
    </div>
    </>
  )
}

export default About
