import React from 'react'
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png"
import LA from "../../assets/Img/Lumos Advisory Logo-01.png"
import img8 from "../../assets/Img/pexels-mikhail-nilov-8297226 1.svg"

function Accounting() {
  return (
    <>
      <div id='service-five' className="flex max-h-[850px] w-full h-full">

        <div className="flex w-full justify-between">
            <div className="w-[650px] ps-4 pe-2  text-justify">
                <img className='mt-5 w-[200px]' src={LA} alt="" />
                <h2 className='mt-16'>Accounting and Book-Keeping </h2>
                <p>Our expert accounting and bookkeeping services are designed to keep our clients’ business running smoothly, allowing you to focus on what you do best – growing your enterprise.</p>
                <p>Whether you’re a start-up, small business, or established corporation, our commitment remains the same: to deliver reliable, efficient, and personalized accounting services that support your financial success.</p>
                <p>Our accounting packages are designed to cater to the diverse needs of businesses at every stage of their journey. We offer a range of comprehensive services to ensure your financial health and compliance:</p>

                <h3>Services Offered</h3>
                <p><span>Bookkeeping Services:</span> Provide assistance with regular recording of financial transactions, bank reconciliation, accounts payable and receivable management, and general ledger maintenance.</p>
                <p><span>Financial Reporting:</span> Prepare monthly, quarterly, and annual financial statements, customize financial reports to suit your business needs and support with detailed budgeting and forecasting to plan for future growth.</p>
                <p><span>Payroll Processing:</span> Provide timely and accurate payroll processing, ensure compliant calculation of wages, arrears and deductions in-line with labor regulations.</p>
            </div>

            <div className="flex relative w-[439px] max-h-[690px] h-full">
              <div className="bg-black absolute bottom-0 w-1.5 h-[50%]"></div>
            <img className=' max-w-[433px] ms-[6px] object-cover max-h-[690px] h-screen' src={img8} alt="Business Plan" />
          </div>
        </div>


      </div>
    </>
  )
}

export default Accounting
