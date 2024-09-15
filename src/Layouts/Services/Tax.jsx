import React from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img9 from "../../assets/Img/pexels-photo-8297478.jpg"

function Tax() {
  return (
    <>
    {/* <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}> */}
      <div className="flex h-screen">

        {/* <div className="min-h-screen w-60 flex flex-col justify-between">
            
        </div> */}

        <div className="w-full">
        <img className='ml-5 mt-5 w-[200px]' src={LA} alt="" />

        <div className="flex ml-5 mt-5 h-[330px]">
          <div className="bg-black w-1.5 h-[50%]">l</div>
          <img className='w-[1220px]' src={img9} alt="" />
        </div>

        <div className="flex gap-14 ml-7">
          <div className="w-[550px]">
            <h1 className='text-black pt-2 text-xl font-medium'>Tax and Compliance Services</h1>
            <p className='text-teal-600 pt-2 text-sm'>Our trusted partners specialize in navigating the intricate landscape of UAE tax laws and regulations, ensuring our clients’ business remains fully compliant while optimizing tax efficiency.</p>
            <p className='text-teal-600 pt-2 text-sm'>Our comprehensive range of tax and compliance services includes:</p>

            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>VAT Services:</span> Registration for VAT (Value Added Tax) with the Federal Tax Authority (FTA), preparation and filing of VAT returns in compliance with FTA guidelines, VAT advisory services to maximize input tax recovery and minimize liabilities.</p>
            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Corporate Tax Services:</span> Preparation and filing of corporate income tax returns, tax planning strategies to optimize your tax position, compliance with local tax laws and regulations.</p>

          </div>

          <div className="w-[550px] pt-2">
            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Customs and Excise Tax:</span> Guidance on customs duties and excise tax compliance, import and export tax advisory services, assistance with customs declarations and documentation.</p>
            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Tax Advisory and Consulting:</span> Strategic tax advice tailored to your business goals, analysis of tax implications for business transactions and investments, and assistance in tax audits and disputes with tax authorities.</p>
            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Compliance Support:</span> Ensuring adherence to all regulatory requirements in the UAE, assistance with regulatory filings and reporting obligations, and keeping your business updated with changes in tax and compliance regulations</p>
          </div>
        </div>

        </div>


      </div>
    {/* </div> */}
    </>
  )
}

export default Tax;