import React from 'react'
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img1 from "../../assets/Img/pexels-cottonbro-4065895.jpg"


function Home() {
  return (
    <>
      <div id='home' className="flex  w-full h-full max-h-[850px]  ">
        <div className="flex flex-1">
            <div className="flex-1  ps-4 pe-2 ">
                <img className='max-w-[400px] w-full mx-auto p-16' src={LA} alt="" />
                <div className="max-w-[500px] w-full p-5 mx-auto text-justify">
                <h1>Welcome to Lumos Advisory</h1>
                <p>Lumos Advisory has been established by a seasoned and experienced team to be a trusted partner for Small and Medium Enterprises (SMEs) in the United Arab Emirates (UAE) as they circumnavigate the dynamic challenges and uncertainties of tomorrow.</p>
                <p>From early-stage ventures seeking strategic direction to established businesses pursuing performance improvement and scalability, our advisory offers bespoke solutions addressing the specific needs of every prospective client.</p>
                <p>We are proud to help SME owners and stakeholders make informed decisions, manage business risks, and add value at every stage.</p>
                </div>
            </div>

            <div className="flex max-w-[439px] w-full">
                <div className="bg-black w-1.5 h-[50%]"></div>
                <img className='h-screen w-full max-w-[433px] object-cover max-h-[690px]' src={img1} alt="Loading..." />
            </div>
        </div>
      </div>
    </>
  )
}

export default Home;