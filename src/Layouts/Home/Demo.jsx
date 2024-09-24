import React from 'react'
import Leftside from './Leftside'
import "./index.css"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img1 from "../../assets/Img/pexels-cottonbro-4065895.jpg"
import { images } from '../../static'
import About from '../About/About'


function Demo() {
  return (
    <div className=' bg w-full h-screen'>
      <Leftside/>
      <div className="ms-[200px] main h-[100vh] overflow-y-auto me-20">



    <div className="flex">


<div className="flex m-auto">
    <div className="w-[780px] mx-auto">
        <img className='w-[400px] mr-28 mx-auto p-16' src={LA} alt="" />
        <div className="w-[500px] p-5 mr-16 mx-auto text-justify">
        <h1 className='text-[#5F8F93] text-2xl font-medium'>Welcome to Lumos Advisory</h1>
        <p className='text-[#5F8F93] pt-3 text-[1.556vh]'>Lumos Advisory has been established by a seasoned and experienced team to be a trusted partner for Small and Medium Enterprises (SMEs) in the United Arab Emirates (UAE) as they circumnavigate the dynamic challenges and uncertainties of tomorrow.</p>
        <p className='text-[#5F8F93] pt-3 text-[1.556vh]'>From early-stage ventures seeking strategic direction to established businesses pursuing performance improvement and scalability, our advisory offers bespoke solutions addressing the specific needs of every prospective client.</p>
        <p className='text-[#5F8F93] pt-3 text-[1.556vh]'>We are proud to help SME owners and stakeholders make informed decisions, manage business risks, and add value at every stage.</p>
        </div>
    </div>

    <div className="flex">
        <div className="bg-black w-[0.667vh] h-[50%]"></div>
        <img className='w-[550px] h-screen' src={images.image1} alt="Loading..." />
    </div>
</div>


    </div>

<About/>

      </div>
     
    </div>
  )
}

export default Demo




function ContentOne() {
  return (
    <div>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam voluptates dolorum quas nemo. Fuga minus incidunt nesciunt distinctio, debitis veritatis, ducimus magnam veniam perspiciatis eveniet deserunt eum accusantium illo fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus reiciendis iure vero cum minus doloribus esse rerum ut odit! Itaque fugiat iste ipsa amet libero expedita eveniet quia provident.
    </div>
  )
}

