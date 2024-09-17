import React from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import social_logos from "../../assets/Img/SM Icons-01.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img3 from "../../assets/Img/pexels-photo-6802052.jpg"


function WhyChoose() {
  return (
    <>
      <div id='why-choose-us' className="flex">


        <div className="flex flex-1">
            <div className="flex-1 p-6 mac-book:p-12">
                <img className='mt-1 mac-book:mt-5  w-[200px]' src={LA} alt="" />
                <h1 className='mt-12 text-black text-[18px] font-medium'>Why Choose Us</h1>
                <h1 className='pt-2 text-teal-600 text-[16px]  font-medium'>What We Offer</h1>
                <p className='text-teal-600 pt-2 text-[12px]'><span className='font-semibold text-[13px]'>Comprehensive Support:</span> We provide end-to-end assistance to SMEs, from ideation to execution, making sure their business vision is realized effectively.</p>
                <p className='text-teal-600 pt-2 text-[12px]'><span className='font-semibold text-[13px]'>Strategic Guidance:</span> Our expert team delivers strategic insights and solutions tailored to individual business needs, fostering sustainable growth.</p>
                <p className='text-teal-600 pt-2 text-[12px]'><span className='font-semibold text-[13px]'>Value Addition:</span> We are committed to adding value by optimizing processes, enhancing operational efficiency, and increasing profitability.</p>
                <p className='text-teal-600 pt-2 text-[12px]'><span className='font-semibold text-[13px]'>Experienced Professionals:</span> Our team has decades of experience across various industries with a deep understanding of financial management, compliance, and strategic planning.</p>
                <p className='text-teal-600 pt-2 text-[12px]'><span className='font-semibold text-[13px]'>Customized Solutions:</span> We offer tailored services to fit your specific business needs. Our team provides flexible engagement options best suited to project-based requirements.</p>
                <p className='text-teal-600 pt-2 text-[12px]'><span className='font-semibold text-[13px]'>Sustainable Results:</span> Our focus is on delivering long-term improvements that continue to benefit your business well into the future.</p>
                <p className='text-teal-600 pt-2 text-[12px]'><span className='font-semibold text-[13px]'>Sustainable Results:</span> Our focus is on delivering long-term improvements that continue to benefit your business well into the future.</p>
                <p className='text-teal-600 pt-2 text-[12px]'><span className='font-semibold text-[13px]'>Client-Centric:</span> We prioritize client satisfaction and work closely with you to ensure that our strategies are effectively implemented.</p>
            </div>

            <div className="flex w-[439px]">
                <div className="bg-black w-1.5 h-[50%]"></div>
                <img className=' w-[433px] h-screen' src={img3} alt="Loading..." />
            </div>
        </div>


      </div>
    {/* </div> */}
    </>
  )
}

export default WhyChoose
