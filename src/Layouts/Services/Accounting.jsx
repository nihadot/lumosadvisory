import React from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img8 from "../../assets/Img/pexels-mikhail-nilov-8297226.jpg"

function Accounting() {
  return (
    <>
    {/* <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}> */}
      <div className="flex">

        {/* <div className="min-h-screen w-60 flex flex-col justify-between">
            
        </div> */}

        <div className="flex w-full justify-between">
            <div className="w-[650px] px-5 text-justify">
                <img className='mt-5 w-[200px]' src={LA} alt="" />
                <h1 className='mt-10 text-black text-xl font-medium'>Accounting and Book-Keeping </h1>
                <p className='text-teal-600 pt-2 text-sm'>Our expert accounting and bookkeeping services are designed to keep our clients’ business running smoothly, allowing you to focus on what you do best – growing your enterprise.</p>
                <p className='text-teal-600 pt-2 text-sm'>Whether you’re a start-up, small business, or established corporation, our commitment remains the same: to deliver reliable, efficient, and personalized accounting services that support your financial success.</p>
                <p className='text-teal-600 pt-2 text-sm'>Our accounting packages are designed to cater to the diverse needs of businesses at every stage of their journey. We offer a range of comprehensive services to ensure your financial health and compliance:</p>

                <h1 className='pt-2 text-teal-600 text-xl font-medium'>Services Offered</h1>
                <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Bookkeeping Services:</span> Provide assistance with regular recording of financial transactions, bank reconciliation, accounts payable and receivable management, and general ledger maintenance.</p>
                <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Financial Reporting:</span> Prepare monthly, quarterly, and annual financial statements, customize financial reports to suit your business needs and support with detailed budgeting and forecasting to plan for future growth.</p>
                <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Payroll Processing:</span> Provide timely and accurate payroll processing, ensure compliant calculation of wages, arrears and deductions in-line with labor regulations.</p>
            </div>

            <div className="flex">
                <div className="flex flex-col">
                    <div className="bg-white w-1.5  h-[50%]"></div>
                    <div className="bg-black w-1.5  h-[50%]"></div>
                </div>
                <img className='w-[510px] h-screen' src={img8} alt="Loading..." />
            </div>
        </div>


      </div>
    {/* </div> */}
    </>
  )
}

export default Accounting
