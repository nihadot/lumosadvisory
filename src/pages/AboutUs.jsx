import React, { useEffect } from "react";
import { paramitaNag, siddharthNag } from "../assets/images";

function AboutUs() {

  useEffect(()=>{
    function handelContextMenu(e) {
      e.preventDefault();
    }

    const paramitaNagElement = document.getElementById("paramitaNag");
    const siddharthNagElement = document.getElementById("siddharthNag");
    
    paramitaNagElement.addEventListener("contextmenu",handelContextMenu);
    siddharthNagElement.addEventListener("contextmenu",handelContextMenu);
    return ()=>{
      paramitaNagElement.removeEventListener("contextmenu",handelContextMenu);
      siddharthNagElement.removeEventListener("contextmenu",handelContextMenu);

    }
  })
  return (
    <>
      <div
        id="about-us"
        className="relative max-h-fit sm:min-h-[100vh] w-full h-fit pb-[5vh] pt-[10vh] sm:pt-[12vh] flex"
      >

        <div className="">
          <h2 className="pb-[2vh] ps-5  sm:ps-[5.333vh] pe-[3vh]">Our Founders</h2>
          


    
    <div className="flex  md:flex-row flex-col flex-1  ps-5  sm:ps-[5.333vh] pe-[3vh]  gap-[4vh]">

          <div className=" flex-1 ">

            <div className="relative flex w-full h-[16vh]">
              <div className="bg-black absolute bottom-0 w-[0.667vh] h-[80%]"></div>
              {/* Pramitha Nag - CA Profile */}
              <img
                className="w-[16vh] h-[16vh] object-cover"
                src={paramitaNag}
                alt=""
                id="paramitaNag"
              />
            </div>

            <h3>Paramita Nag - CA</h3>
            <p className="leading-[2.4vh]">
              A Chartered Accountant qualified from the Institute of Chartered
              Accountants of India, and an accomplished finance professional
              with over 12 years of expertise in core finance, auditing,
              financial management and corporate strategy. <br />
              Comprehensive knowledge of accounting principles and financial
              reporting, ensuring accuracy and transparency in all financial
              statements. Significant experience in auditing ensures minimal
              audit adjustments and structured financial reporting.
            </p>

            <p className="leading-[2.4vh]">
              Proven ability to establish, monitor, and enhance internal
              controls, ensuring compliance with international financial
              standards (IFRS, GAAP) and regulatory requirements. Successfully
              led the implementation of ERP systems, streamlining financial
              processes, enhancing reporting accuracy, and improving overall
              operational efficiency.
            </p>

            <p className="leading-[2.4vh]">
              Proficiency in identifying cost-saving opportunities, improving
              operational efficiency, and enhancing bottom-line performance.
            </p>

            <p className="leading-[2.4vh]">
              Expertise in budgeting, forecasting, and long-term data-driven
              planning to guide strategic decisions and drive profitability.
            </p>

            <p className="leading-[2.4vh]">
              Skilled in aligning financial strategies with business objectives,
              enabling sustainable growth and competitive advantage. <br />
            </p>

            <p className="leading-[2.4vh]">Experience in raising and managing deployment of capital.</p>

            <p className="leading-[2.4vh]">
              Demonstrated ability to lead finance teams and collaborate with
              other departments to drive business success.
            </p>
          </div>

          <div className=" flex-1 pe-[3vh]">
            <div className="relative flex w-full h-[16vh]">
              <div className="bg-black absolute bottom-0 w-[0.667vh] h-[90%]"></div>
              {/* siddharth Nag - CFA */}
              <img
                className="w-[16vh] h-[16vh] object-cover"
                src={siddharthNag}
                alt=""
                id="siddharthNag"
              />
            </div>

            <h3>Siddharth Nag - CFA</h3>
            <p className="leading-[2.4vh]">
            A seasoned C-Suite professional with more than 15 years of experience spearheading strategy, commercial and finance functions, performing a thorough business diligence with full understanding of the industry value chain, building business plans, leading corporate M&A advisory, assessing valuation and investment attractiveness, identifying potential risks and risk-mitigation strategies.

            </p>

            <p className="leading-[2.4vh]">
            Hands-on approach to business management that helps ensure smooth operating workflows, generate high quality of earnings and run a self-financed business with effective working capital management.

            </p>

            <p className="leading-[2.4vh]">
            Adept at assessing potential size of addressable & serviceable markets, and conducting a detailed industry, market and competitive analysis and proven expertise in performance improvement, business restructuring, financial planning and analysis using data-driven strategic insights. 

            </p>

            <p className="leading-[2.4vh]">
            Strong healthcare experience from Sep 2019 to Apr 2024 overseeing a platform owning IVF, Genetics and Women's Health-focused polyclinics and a large UAE hospital group under financial restructuring; this was in the capacity of a C-Suite executive overseeing strategic, commercial, financial, operational and regulatory aspects of the business. 

            </p>

            <p className="leading-[2.4vh]">
            Prior to Sep 2019, worked in various industry agnostic investment roles specializing in research, asset management, and due diligence in private equity (healthcare and education) and venture capital deals.
            </p>

           
          </div>
    </div>

        </div>
      </div>
    </>
  );
}

export default AboutUs;
