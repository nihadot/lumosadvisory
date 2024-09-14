import React from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import social_logos from "../../assets/Img/SM Icons-01.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img6 from "../../assets/Img/pexels-photo-7693686.jpg"

function Business_plan() {
  return (
    <>
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex">

        <div className="min-h-screen w-60 flex flex-col justify-between">
            
        </div>

        <div className="flex w-full justify-evenly">
            <div className="w-[485px] pr-14 text-justify">
                <img className='-ml-16 mt-5 w-[200px]' src={LA} alt="" />
                <h1 className='-ml-16 mt-10 text-black text-xl font-medium'>Feasibility Studies and Business Plan</h1>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'>Conducting thorough feasibility studies for existing and new services and products and preparing a detailed and robust business plan are critical steps for the success of any SME business. Our services cater specifically to these needs by offering comprehensive planning, analysis, and strategic insights.</p>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'>Partnering with us means leveraging expertise, tailored solutions, and a proven approach to inch closer to your business objectives. We're committed to empowering SME clients to navigate the complexities of the business world with confidence and clarity.</p>

                <h1 className='-ml-16 pt-2 text-teal-600 text-xl font-medium'>Services Offered:</h1>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'><span className='font-medium'>Feasibility Studies:</span>Conducting meticulous due diligence to assess potential opportunities, validate business viability, and identify key risks that might affect the business’s future.</p>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'><span className='font-medium'>Business Plan Development:</span>Crafting detailed, actionable business plans that include market analysis, strategy formulation, financial projections, and operational planning.</p>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'><span className='font-medium'>Market Research:</span>Providing in-depth market insights to identify opportunities and threats.</p>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'><span className='font-medium'>Competitive Analysis:</span>Analyzing competitors to understand their strengths and weaknesses and leveraging this information to position your business strongly in the market.</p>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'><span className='font-medium'>Financial Analysis:</span>Delivering expert financial evaluations, including cash flow projections, break-even analysis, and funding requirements.</p>
                <p className='-mx-16 text-teal-600 pt-2 text-sm'><span className='font-medium'>Risk Assessment:</span>Identifying potential business risks and developing strategies to mitigate them.</p>
          
                <h1 className='-ml-16 pt-2 text-teal-600 text-xl font-medium'>Our Process and Approach</h1>

            </div>

            <div className="flex">
                <div className="flex flex-col">
                    <div className="bg-white w-1.5  h-[50%]"></div>
                    <div className="bg-black w-1.5  h-[50%]"></div>
                </div>
                <img className='w-[550px] h-screen' src={img6} alt="Loading..." />
            </div>
        </div>


      </div>
    </div>
    </>
  )
}

export default Business_plan
