import React from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img7 from "../../assets/Img/pexels-photo-7698819.jpg"

function Business_valuations() {
  return (
    <>
    {/* <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}> */}
      <div id='service-four' className="flex">

        {/* <div className="min-h-screen w-60 flex flex-col justify-between">
            
        </div> */}

        <div className="flex w-full justify-between">
            <div className="w-[650px] px-5 text-justify">
                <img className='mt-5 w-[200px]' src={LA} alt="" />
                <h1 className='mt-10 text-black text-xl font-medium'>Business Valuations </h1>
                <p className='text-teal-600 pt-2 text-sm'>Business valuations are critical for numerous purposes, including mergers and acquisitions, estate planning, tax planning, and financing. They provide a clear and accurate depiction of your business's market value. For SME clients, having an accurate valuation is essential for strategic growth, competitive edge, and informed decision-making in terms of potential divestment and monetization.</p>

                <h1 className='pt-2 text-teal-600 text-xl font-medium'>Services Offered</h1>
                <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'> Company Valuation:</span>Determining the potential selling price of your business in the open market.</p>
                <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'> Income Approach Valuations for products and services:</span>Identifying the contribution to business valuation by assessing the income and profit-generating capacity from key products or services.</p>
                <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'> Asset-Based Valuations:</span>Evaluating the total value of your business's assets.</p>
                <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'> Comparative Market Analysis:</span>Benchmarking your business against similar companies in your industry.</p>
          
                <h1 className='pt-2 text-teal-600 text-xl font-medium'>Our Process and Approach</h1>

            </div>

            <div className="flex">
                <div className="flex flex-col">
                    <div className="bg-white w-1.5  h-[50%]"></div>
                    <div className="bg-black w-1.5  h-[50%]"></div>
                </div>
                <img className='w-[510px] h-screen' src={img7} alt="Loading..." />
            </div>
        </div>


      </div>
    {/* </div> */}
    </>
  )
}

export default Business_valuations
