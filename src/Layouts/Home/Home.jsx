import React from 'react'
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img1 from "../../assets/Img/pexels-cottonbro-4065895.jpg"


function Home() {
  return (
    <>
      <div id='home' className="flex max-w-7xl w-full">
        <div className="flex flex-1">
            <div className="flex-1">
                <img className='max-w-[400px] w-full mx-auto p-16' src={LA} alt="" />
                <div className="max-w-[500px] w-full p-5 mx-auto text-justify">
                <h1 className='text-teal-600 text-2xl font-medium'>Welcome to Lumos Advisory</h1>
                <p className='text-teal-600 pt-3 text-[12px]'>Lumos Advisory has been established by a seasoned and experienced team to be a trusted partner for Small and Medium Enterprises (SMEs) in the United Arab Emirates (UAE) as they circumnavigate the dynamic challenges and uncertainties of tomorrow.</p>
                <p className='text-teal-600 pt-3 text-[12px]'>From early-stage ventures seeking strategic direction to established businesses pursuing performance improvement and scalability, our advisory offers bespoke solutions addressing the specific needs of every prospective client.</p>
                <p className='text-teal-600 pt-3 text-[12px]'>We are proud to help SME owners and stakeholders make informed decisions, manage business risks, and add value at every stage.</p>
                </div>
            </div>

            <div className="flex w-[439px]">
                <div className="bg-black w-1.5 h-[50%]"></div>
                <img className='h-screen w-[433px]' src={img1} alt="Loading..." />
            </div>
        </div>
      </div>
    </>
  )
}

export default Home;