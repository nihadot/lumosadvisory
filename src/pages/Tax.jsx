import React from "react";
import { tax } from "../assets/images";

function Tax() {
  return (
    <>
      <div
        id="service-six"
        className="flex sm:pt-[8vw] pt-24  relative max-h-fit min-h-[100vh] w-full h-fit  bg-cover bg-center"
      >
        <div className="w-full ps-5  sm:ps-[5.333vh]">
          <div className="flex h-[43vh] me-5 sm:me-0 ">
            <div className="bg-black w-[0.667vh] h-[50%]">l</div>
            <div className="flex-1">
              <img className="w-full object-cover h-[100%]" src={tax} alt="" />
            </div>
          </div>

          <div className="flex md:flex-row flex-col pe-[3vh] justify-between w-full md:gap-[8vh] sm:gap-[3vh]  lg:gap-[13vh] mt-[0.889vh]">
            <div className="flex-1 w-full  ">
              <h2>Tax, Compliance and AML Services</h2>
              <p>
                Our trusted partners specialize in navigating the intricate
                landscape of UAE tax laws and regulations, ensuring our clients’
                business remains fully compliant while optimizing tax
                efficiency.
              </p>
              <p>
                Our comprehensive range of tax and compliance services includes:
              </p>

              <p>
                <span>VAT Services:</span> Registration for VAT (Value Added
                Tax) with the Federal Tax Authority (FTA), preparation and
                filing of VAT returns in compliance with FTA guidelines, VAT
                advisory services to maximize input tax recovery and minimize
                liabilities.
              </p>
              <p>
                <span>Corporate Tax Services:</span> Preparation and filing of
                corporate income tax returns, tax planning strategies to
                optimize your tax position, compliance with local tax laws and
                regulations.
              </p>
            </div>

            <div className="flex-1 w-full pt-[0.889vh] pe-[3vh]">
              <p>
                <span>Customs and Excise Tax:</span> Guidance on customs duties
                and excise tax compliance, import and export tax advisory
                services, assistance with customs declarations and
                documentation.
              </p>
              <p>
                <span>Tax Advisory and Consulting:</span> Strategic tax advice
                tailored to your business goals, analysis of tax implications
                for business transactions and investments, and assistance in tax
                audits and disputes with tax authorities.
              </p>
              <p>
                <span>Compliance Support:</span> Ensuring adherence to all
                regulatory requirements in the UAE, assistance with regulatory
                filings and reporting obligations, and keeping your business
                updated with changes in tax and compliance regulations
              </p>
              <p>
                {" "}
                <span> Anti-Money Laundering (AML) Support:</span> Development
                and implementation of robust AML policies, conducting in-depth
                risk assessments, preparing essential regulatory compliance
                documentation, conducting training programs, facilitating filing
                of Suspicious Activity Reports (SARs) and regulatory submissions
                to the Executive Office of Control and Non-Proliferation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tax;
