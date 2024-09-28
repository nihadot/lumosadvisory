import React from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img8 from "../../assets/Img/pexels-mikhail-nilov-8297226 1.svg"

function Accounting() {
  return (
    <>
      <div id='service-five' className="relative max-h-fit min-h-[100vh] w-full h-fit flex">

        <div className="flex flex-1">
            <div className=" flex-1 pt-[8vw]  ps-[5.333vh] pe-[3vh] ">
             {/* <div className="sticky h-20 flex items-center top-0 left-0">
            
            <img className='mt-[1.778vh]  w-[22.222vh]' src={LA} alt="" />
          </div> */}
                <h2 >Accounting and Book-Keeping </h2>
                <p>Our expert accounting and bookkeeping services are designed to keep our clients’ business running smoothly, allowing you to focus on what you do best – growing your enterprise.</p>
                <p>Whether you’re a start-up, small business, or established corporation, our commitment remains the same: to deliver reliable, efficient, and personalized accounting services that support your financial success.</p>
                <p>Our accounting packages are designed to cater to the diverse needs of businesses at every stage of their journey. We offer a range of comprehensive services to ensure your financial health and compliance:</p>

                <h3>Services Offered</h3>
                <p><span>Bookkeeping Services:</span> Provide assistance with regular recording of financial transactions, bank reconciliation, accounts payable and receivable management, and general ledger maintenance.</p>
                <p><span>Financial Reporting:</span> Prepare monthly, quarterly, and annual financial statements, customize financial reports to suit your business needs and support with detailed budgeting and forecasting to plan for future growth.</p>
                <p><span>Payroll Processing:</span> Provide timely and accurate payroll processing, ensure compliant calculation of wages, arrears and deductions in-line with labor regulations.</p>
            </div>

            <div className="flex relative max-w-[40vw] w-full">
              <div className="bg-black absolute bottom-0 w-[0.667vh] h-[50%]"></div>
            <img className='h-screen w-full max-w-[39.444vw] object-cover max-h-[100vh]' src={img8} alt="Business Plan" />
          </div>
        </div>


      </div>
    </>
  )
}

export default Accounting
