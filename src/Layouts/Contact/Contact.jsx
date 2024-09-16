import React from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img9 from "../../assets/Img/pexels-photo-8297478.jpg"

function Contact() {
  return (
    <>
    <div id='contact' className="flex h-screen">

      <div className="w-full">
      <img className='ml-5 mt-5 w-[200px]' src={LA} alt="" />

      <div className="flex ml-5 mt-5 h-[330px]">

        <div className="flex flex-col justify-between">

          <div className="">
            <h1 className='font-bold'>Contact</h1>
            <div className="flex gap-3">
              <div className="w-0.5 bg-teal-600"></div>
              <div className="">
                <p>+971 52 650 4080 [ ]</p>
                <p>+971 52 650 4080</p>
                <p>info@lumosadvisory.me</p>
                <p>Meydan Grandstand, 6th floor, <br />Meydan Road, Nad Al Sheba, <br />Dubai, U.A.E</p>
                <p>@lumos.advisory</p>
              </div>
            </div>
          </div>

          <h1 className='text-teal-600 font-semibold'>Client Testimonies</h1>
        </div>

        <div className="flex">
          <div className="bg-black w-1.5 h-[50%]">l</div>
          <img className='w-[820px]' src={img9} alt="" />
        </div>
      </div>

      <div className="flex gap-14 ml-7">
        <div className="w-[550px]">
          <div className="">
            <h1 className=''>Reprehenderit Involupt:</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod placeat voluptatem totam nulla repudiandae sequi dicta, labore excepturi a fuga eaque error asperiores nesciunt dolore. Voluptatibus ipsa assumenda laboriosam.</p>
          </div>
          <div className="">
            <h1 className=''>Aspernatur Voluptatem:</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eaque aperiam libero consequatur obcaecati sint necessitatibus eveniet soluta aut atque magnam, iusto fuga sed tempora officia vitae tenetur velit temporibus.</p>
          </div>
         
        </div>

        <div className="w-[550px] pt-2">

        </div>
      </div>

      </div>


      </div>
    </>
  )
}

export default Contact
