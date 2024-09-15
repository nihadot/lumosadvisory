import React from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img4 from "../../assets/Img/pexels-photo-5716035.jpg"

function CFO_Services() {
  return (
    <>
    {/* <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}> */}
      <div className="flex">

        {/* <div className="min-h-screen w-60 flex flex-col justify-between">
            
        </div> */}

        <div className="w-full pl-5">
        <img className='mt-5 w-[200px]' src={LA} alt="" />

        <div className="flex mt-5 h-[330px]">
          <div className="bg-black w-1.5 h-[50%]">l</div>
          <img className='w-[1220px]' src={img4} alt="" />
        </div>

        <div className="flex gap-14">
          <div className="w-[550px]">
            <h1 className='text-black pt-2 text-xl font-medium'>Outsourced CFO Services</h1>
            <p className='text-teal-600 pt-2 text-sm'>Outsourced CFO Services provides expert financial guidance without the expense of a full-time CFO. Opting for our Outsourced CFO Services positions SME clients for financial stability and strategic growth, equipping them with the expertise and insights to thrive in a competitive market.</p>
            <p className='text-teal-600 pt-2 text-sm'>Here’s an in-depth look at what these services entail, why partnering with us is a superior choice, and our comprehensive process and approach.</p>

            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Financial Planning and Analysis:</span> Tailored financial strategies, forecasting, and budgeting to drive business growth.</p>
            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Cost Management:</span> Identifying cost-saving opportunities and optimizing spending to enhance profitability.</p>

          </div>

          <div className="w-[550px] pt-2">
            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Cash Flow Management:</span>Ensuring liquidity and efficient cash flow handling to maintain business health.</p>
            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Risk Management:</span>Proactively identifying and mitigating financial risks.</p>
            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Financial Reporting:</span>Accurate and timely financial reports to inform decision-making.</p>
            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Strategic Insight:</span>Long-term financial planning and market positioning to achieve sustainable success.</p>
            <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Continuous Monitoring and Reporting:</span>Provide regular updates, build customizable dashboards, conduct strategic reviews and help with support and advisory where needed</p>

            <h1 className='pt-2 text-teal-600 text-xl font-medium'>Our Process and Approach</h1>

          </div>
        </div>

        </div>


      </div>
    {/* </div> */}
    </>
  )
}

export default CFO_Services
