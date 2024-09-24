import React from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import social_logos from "../../assets/Img/SM Icons-01.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img3 from "../../assets/Img/pexels-photo-6802052 2.svg"


function WhyChoose() {
  return (
    <>
      <div id='why-choose-us' className="flex max-h-[77.778vh] w-full h-full">


        <div className="flex flex-1">
            <div className="flex-1  ps-[5.333vh] pe-[0.889vh] ">
              <div className="sticky h-20 flex items-center top-0 left-0">

                <img className='mt-[4.222vh]  w-[22.222vh]' src={LA} alt="" />
              </div>

                <h2 >Why Choose Us</h2>
                <h3 >What We Offer</h3>
                <p><span>Comprehensive Support:</span> We provide end-to-end assistance to SMEs, from ideation to execution, making sure their business vision is realized effectively.</p>
                <p><span>Strategic Guidance:</span> Our expert team delivers strategic insights and solutions tailored to individual business needs, fostering sustainable growth.</p>
                <p><span>Value Addition:</span> We are committed to adding value by optimizing processes, enhancing operational efficiency, and increasing profitability.</p>
                <p><span>Experienced Professionals:</span> Our team has decades of experience across various industries with a deep understanding of financial management, compliance, and strategic planning.</p>
                <p><span>Customized Solutions:</span> We offer tailored services to fit your specific business needs. Our team provides flexible engagement options best suited to project-based requirements.</p>
                <p><span>Sustainable Results:</span> Our focus is on delivering long-term improvements that continue to benefit your business well into the future.</p>
                <p><span>Sustainable Results:</span> Our focus is on delivering long-term improvements that continue to benefit your business well into the future.</p>
                <p><span>Client-Centric:</span> We prioritize client satisfaction and work closely with you to ensure that our strategies are effectively implemented.</p>
            </div>

            <div className="flex w-[48.778vh]">
                <div className="bg-black w-[0.667vh] h-[50%]"></div>
                <img className=' max-w-[48.111vh] object-cover max-h-[77.778vh] h-screen' src={img3} alt="Loading..." />
            </div>
        </div>


      </div>
    {/* </div> */}
    </>
  )
}

export default WhyChoose
