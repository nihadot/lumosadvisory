import React from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import social_logos from "../../assets/Img/SM Icons-01.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img1 from "../../assets/Img/pexels-cottonbro-4065895.jpg"
import { NavLink } from 'react-router-dom'
import About from '../About/About'
import WhyChoose from '../Choosing/WhyChoose'

function Home() {
  return (
    <>
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex">

        <div className="min-h-screen w-60 flex flex-col justify-between fixed top-0 left-0 z-10">
            {/* <div className="mt-20 pl-5">
                <p className='text-black'>Home</p>
                <p className='text-white'>About Lumos</p>
                <p className='text-white'>Why Choose Us</p>
                <p className='text-white'>Our Services</p>
                <p className='text-white'>Contact</p>
            </div> */}
            {/* <div className="mt-20 pl-5">
              <NavLink to="/" exact activeClassName="font-bold text-yellow-400" className='block py-2'>Home</NavLink>
              <NavLink to="/about" activeClassName="font-bold text-yellow-400" className='block py-2'>About Lumos</NavLink>
              <NavLink to="/why-choose-us" activeClassName="font-bold text-yellow-400" className='block py-2'>Why Choose Us</NavLink>
              <NavLink to="/services" activeClassName="font-bold text-yellow-400" className='block py-2'>Our Services</NavLink>
            </div> */}

                {/* <img className='w-24 h-fit mb-10 pl-5' src={social_logos} alt="Loading..." /> */}
        </div>

        <div className="flex m-auto">
            <div className="w-[780px] mx-auto">
                <img className='w-[400px] mr-28 mx-auto p-16' src={LA} alt="" />
                <div className="w-[500px] p-5 mr-16 mx-auto text-justify">
                <h1 className='text-teal-600 text-2xl font-medium'>Welcome to Lumos Advisory</h1>
                <p className='text-teal-600 pt-3 text-sm'>Lumos Advisory has been established by a seasoned and experienced team to be a trusted partner for Small and Medium Enterprises (SMEs) in the United Arab Emirates (UAE) as they circumnavigate the dynamic challenges and uncertainties of tomorrow.</p>
                <p className='text-teal-600 pt-3 text-sm'>From early-stage ventures seeking strategic direction to established businesses pursuing performance improvement and scalability, our advisory offers bespoke solutions addressing the specific needs of every prospective client.</p>
                <p className='text-teal-600 pt-3 text-sm'>We are proud to help SME owners and stakeholders make informed decisions, manage business risks, and add value at every stage.</p>
                </div>
            </div>

            <div className="flex">
                <div className="bg-black w-1.5 h-[50%]"></div>
                <img className='w-[550px] h-screen' src={img1} alt="Loading..." />
            </div>
        </div>


      </div>


      <About/>
      <WhyChoose/>
    </div>

    </>
  )
}

export default Home;