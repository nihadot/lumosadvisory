import React from 'react'
import backgroundImage from "../assets/Img/Lumos Advisory Website Background_1.png"
import social_logos from "../assets/Img/SM Icons-01.png"
import { NavLink, Outlet } from 'react-router-dom'
import Home from './Home/Home'
import Accounting from './Services/Accounting'
import About from './About/About'
import WhyChoose from './Choosing/WhyChoose'
import CFO_Services from './Services/CFO_Services'
import Business_Transformation from './Services/Business_Transformation'
import Business_plan from './Services/Business_plan'
import Business_valuations from './Services/Business_valuations'
import Tax from './Services/Tax'
import LeftBar from './LeftBar'

function Layout() {
  return (
    <>
     <div className="relative h-screen bg-cover bg-center top-0 left-0" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* <div className="flex">

        <div className="min-h-screen w-60 flex flex-col justify-between fixed top-0 left-0 z-10">
            <div className="mt-20 pl-5">
              <NavLink to="/" exact activeClassName="font-bold text-yellow-400" className='block py-2'>Home</NavLink>
              <NavLink to="/about" activeClassName="font-bold text-yellow-400" className='block py-2'>About Lumos</NavLink>
              <NavLink to="/why-choose-us" activeClassName="font-bold text-yellow-400" className='block py-2'>Why Choose Us</NavLink>
              <NavLink to="/services" activeClassName="font-bold text-yellow-400" className='block py-2'>Our Services</NavLink>
            </div>
                <img className='w-24 h-fit mb-10 pl-5' src={social_logos} alt="Loading..." />
        </div>

        <div className="">
          <Home/>
          <About/>
          <WhyChoose/>
          <CFO_Services/>
          <Business_Transformation/>
          <Business_plan/>
          <Business_valuations/>
          <Accounting/>
          <Tax/>
        </div>

     </div> */}
        

        <div className="flex">
          <div className="fixed sm:static top-7 left-0 bottom-0 z-50">
            <LeftBar/>
          </div>
          <div className="w-full ml-4">
            <Outlet />
          </div>
        </div>
    </div>
    </>
  )
}

export default Layout
