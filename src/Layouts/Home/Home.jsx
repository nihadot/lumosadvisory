import React from 'react'
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img1 from "../../assets/Img/pexels-cottonbro-4065895.jpg"


function Home() {
  return (
    <>
      {/* <div id='home' className="flex  w-full h-fit max-h-fit min-h-[77.778vh]  ">
        <div className="flex flex-1">
            <div className="flex-1  ps-[5.333vh] pe-[0.889vh] ">
                <img className='max-w-[44.444vh] w-full mx-auto p-[7.111vh]' src={LA} alt="" />
                <div className="max-w-[58.999vh] w-full p-[2.222vh] mx-auto text-justify">
                <h1>Welcome to Lumos Advisory</h1>
                <p>Lumos Advisory has been established by a seasoned and experienced team to be a trusted partner for Small and Medium Enterprises (SMEs) in the United Arab Emirates (UAE) as they circumnavigate the dynamic challenges and uncertainties of tomorrow.</p>
                <p>From early-stage ventures seeking strategic direction to established businesses pursuing performance improvement and scalability, our advisory offers bespoke solutions addressing the specific needs of every prospective client.</p>
                <p>We are proud to help SME owners and stakeholders make informed decisions, manage business risks, and add value at every stage.</p>
                </div>
            </div>

            <div className="flex max-w-[48.778vh] w-full">
                <div className="bg-black w-[0.667vh] h-[50%]"></div>
                <img className='h-screen w-full max-w-[48.111vh] object-cover max-h-[77.778vh]' src={img1} alt="Loading..." />
            </div>
        </div>
      </div> */}


<div id='home' className="flex  w-full h-fit pb-10 sm:pb-0 max-h-fit min-h-[100vh]  ">
        <div className="flex flex-1 flex-col sm:flex-row">
            <div className="flex-1 sm:pt-[10vh] pt-0  sm:ps-[5.333vh] ps-0 pe-[0.889vh] ">
                <img className=' sm:max-w-[44.444vh] max-w-[300px] w-full mx-auto p-[7.111vh]' src={LA} alt="" />
                <div className="max-w-[58.999vh] w-full p-[2.222vh] mx-auto text-justify">
                <h1 className='sm:text-start text-center'>Welcome to Lumos Advisory</h1>
                <p>Lumos Advisory has been established by a seasoned and experienced team to be a trusted partner for Small and Medium Enterprises (SMEs) in the United Arab Emirates (UAE) as they circumnavigate the dynamic challenges and uncertainties of tomorrow.</p>
                <p>From early-stage ventures seeking strategic direction to established businesses pursuing performance improvement and scalability, our advisory offers bespoke solutions addressing the specific needs of every prospective client.</p>
                <p>We are proud to help SME owners and stakeholders make informed decisions, manage business risks, and add value at every stage.</p>
                </div>
            </div>

            <div className="flex p-5 sm:p-0 sm:max-w-[40vw]  sm:justify-end w-full">
                <div className="bg-black sm:block hidden w-[0.700vh] h-[50%]"></div>
                <img className='sm:h-screen w-full sm:max-w-[39.300vw] sm:object-cover object-contain h-[300px] sm:max-h-[100vh]' src={img1} alt="Loading..." />
            </div>
        </div>
      </div>
    </>
  )
}

export default Home;