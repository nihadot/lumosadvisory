import React from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img9 from "../../assets/Img/pexels-photo-8297478 1.svg"

function Tax() {
  return (
    <>
      <div id='service-six' className="flex w-full h-full relative max-h-[111.111vh] min-h-[110.444vh]  bg-cover bg-center">

        <div className="w-full   ps-[5.333vh]">
        <img className=' mt-[1.333vh] w-[22.222vh]' src={LA} alt="" />

        <div className="flex  mt-[2.222vh] h-[50vh] ">
          <div className="bg-black w-[0.667vh] h-[50%]">l</div>
          <div className="flex-1">

          <img className='w-full object-cover h-[48.333vh]' src={img9} alt="" />
          </div>
        </div>

        <div className="flex justify-between w-full gap-[1.333vh] mt-[0.889vh]">
          <div className="max-w-[61.111vh] w-full ">
            <h2 >Tax and Compliance Services</h2>
            <p>Our trusted partners specialize in navigating the intricate landscape of UAE tax laws and regulations, ensuring our clients’ business remains fully compliant while optimizing tax efficiency.</p>
            <p>Our comprehensive range of tax and compliance services includes:</p>

            <p><span>VAT Services:</span> Registration for VAT (Value Added Tax) with the Federal Tax Authority (FTA), preparation and filing of VAT returns in compliance with FTA guidelines, VAT advisory services to maximize input tax recovery and minimize liabilities.</p>
            <p><span>Corporate Tax Services:</span> Preparation and filing of corporate income tax returns, tax planning strategies to optimize your tax position, compliance with local tax laws and regulations.</p>

          </div>

          <div className="max-w-[61.111vh] w-full pt-[0.889vh] pe-[0.889vh]">
            <p><span>Customs and Excise Tax:</span> Guidance on customs duties and excise tax compliance, import and export tax advisory services, assistance with customs declarations and documentation.</p>
            <p><span>Tax Advisory and Consulting:</span> Strategic tax advice tailored to your business goals, analysis of tax implications for business transactions and investments, and assistance in tax audits and disputes with tax authorities.</p>
            <p><span>Compliance Support:</span> Ensuring adherence to all regulatory requirements in the UAE, assistance with regulatory filings and reporting obligations, and keeping your business updated with changes in tax and compliance regulations</p>
          </div>
        </div>

        </div>


      </div>
    </>
  )
}

export default Tax;