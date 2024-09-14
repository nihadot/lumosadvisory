import React from 'react'
import social_logos from "../assets/Img/SM Icons-01.png"
import { NavLink } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'


function LeftBar() {
  return (
    <>
    <div className="min-h-screen w-60 flex flex-col justify-between fixed top-0 left-0 z-10">
        <div className="mt-20 pl-5">
            <NavLink to="" exact activeClassName="font-bold text-yellow-400" className='block py-2'>Home</NavLink>
            <NavLink to="about" activeClassName="font-bold text-yellow-400" className='block py-2'>About Lumos</NavLink>
            <NavLink to="why-choose-us" activeClassName="font-bold text-yellow-400" className='block py-2'>Why Choose Us</NavLink>
            <NavLink to="services" activeClassName="font-bold text-yellow-400" className='block py-2'>Our Services</NavLink>
        </div>
            <img className='w-24 h-fit mb-10 pl-5' src={social_logos} alt="Loading..." />
    </div>
    </>
  )
}

export default LeftBar
