import React, { useEffect, useRef, useState } from "react";
import { closeWhiteIcon, LeftTriangleIcon } from "../assets/icons";
import { businessPlan } from "../assets/images";

function Business_plan() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  useEffect(()=>{
    function handelContextMenu(e) {
      e.preventDefault();
    }
    const mobileBusinessImageElement = document.getElementById("mobile-busineePlan-image");
    const desktopBusinessImageElement = document.getElementById("desktop-busineePlan-image");
    
    mobileBusinessImageElement.addEventListener("contextmenu",handelContextMenu);
    desktopBusinessImageElement.addEventListener("contextmenu",handelContextMenu);
    return ()=>{
      mobileBusinessImageElement.removeEventListener("contextmenu",handelContextMenu);
      desktopBusinessImageElement.removeEventListener("contextmenu",handelContextMenu);

    }
  })


  return (
    <>
      {/* mobile only visible */}
      <div
        id="business-plan-mobile"
        className=" flex sm:hidden w-full items-center justify-center pt-24"
      >
        <div className="max-w-[200px]  w-full flex h-[300px]">
          <div className="bg-black  w-[4px] h-[50%]"></div>
          <img
            className=" w-[96%] block  object-cover h-full"
            src={businessPlan}
            alt="Loading..."
            id="mobile-busineePlan-image"
          />
        </div>
      </div>

      <div
        id="service-three"
        className="relative max-h-fit min-h-[100vh] w-full h-fit flex"
      >
        <div className="flex flex-1">
          <div className="flex-1 ps-5 sm:ps-[5.333vh] pt-[8vw] pe-[3vh]">
            <h2 className="">Feasibility Studies and Business Plan</h2>
            <p>
              Conducting thorough feasibility studies for existing and new
              services and products and preparing a detailed and robust business
              plan are critical steps for the success of any SME business. Our
              services cater specifically to these needs by offering
              comprehensive planning, analysis, and strategic insights.
            </p>
            <p>
              Partnering with us means leveraging expertise, tailored solutions,
              and a proven approach to inch closer to your business objectives.
              We're committed to empowering SME clients to navigate the
              complexities of the business world with confidence and clarity.
            </p>

            <h3>Services Offered:</h3>
            <p>
              <span>Feasibility Studies:</span> Conducting meticulous due
              diligence to assess potential opportunities, validate business
              viability, and identify key risks that might affect the business’s
              future.
            </p>
            <p>
              <span>Business Plan Development:</span> Crafting detailed,
              actionable business plans that include market analysis, strategy
              formulation, financial projections, and operational planning.
            </p>
            <p>
              <span>Market Research:</span> Providing in-depth market insights
              to identify opportunities and threats.
            </p>
            <p>
              <span>Competitive Analysis:</span> Analyzing competitors to
              understand their strengths and weaknesses and leveraging this
              information to position your business strongly in the market.
            </p>
            <p>
              <span>Financial Analysis:</span> Delivering expert financial
              evaluations, including cash flow projections, break-even analysis,
              and funding requirements.
            </p>
            <p>
              <span>Risk Assessment:</span> Identifying potential business risks
              and developing strategies to mitigate them.
            </p>

            <div className="flex gap-[1.556vh]">
              <h3>Our Process and Approach</h3>
              <div className="flex items-center justify-center mt-0">
                <img
                  className="w-[3vh] h-[4vh] object-cover"
                  src={LeftTriangleIcon}
                  alt=""
                />

                <button onClick={togglePopup}>Click to know more</button>
              </div>
            </div>

            {/* Popup from sm to all devices */}
            {isPopupVisible && (
              <div className="hidden sm:block absolute top-[25%] right-0 bg-[#5F8F93] text-white bg-opacity-50 py-[0.889vh] px-[1.778vh] max-w-[40.5vw] w-full z-50">
                <h3 className="text-white">Our Process and Approach:</h3>
                <p className="text-white">
                  Our methodology is designed to be systematic and thorough,
                  ensuring that each phase is carefully executed.
                </p>
                <p className="text-white">
                  <span className="text-white">Initial Consultation:</span> We
                  start by understanding your business goals, challenges, and
                  requirements.
                </p>
                <p className="text-white">
                  <span className="text-white">Detailed Analysis:</span> Conduct
                  comprehensive research and data collection to gain a deep
                  understanding of your market, competition, and internal
                  operations.
                </p>
                <p className="text-white">
                  <span className="text-white">Strategic Planning:</span>{" "}
                  Develop a strategic plan that aligns with your vision and
                  objectives, including detailed financial projections and risk
                  assessments.
                </p>
                <p className="text-white">
                  <span className="text-white">Report and Recommendations</span>{" "}
                  Provide a detailed report with actionable recommendations to
                  guide your business decisions.
                </p>
                <p className="text-white">
                  <span className="text-white">Implementation Support:</span>{" "}
                  Offer guidance and support during the implementation phase to
                  ensure that the plan is effectively executed.
                </p>
              </div>
            )}

            {/* Popup below sm  */}
            {isPopupVisible && (
              <div className=" sm:hidden block absolute top-[25%] right-0  py-[0.889vh] px-[1.778vh] w-full z-50">
                <div className="bg-[#5F8F93] text-white bg-opacity-90 px-3 py-1 w-full">
                     {/* close function button */}
                     <div className="flex justify-end bg-transparent mt-4">
                      <img
                        onClick={togglePopup}
                        src={closeWhiteIcon}
                        className="w-6 cursor-pointer h-6 object-contain "
                        alt="close icon"
                      />
                    </div>
                  <h3 className="text-white">Our Process and Approach:</h3>
                  <p className="text-white">
                    Our methodology is designed to be systematic and thorough,
                    ensuring that each phase is carefully executed.
                  </p>
                  <p className="text-white">
                    <span className="text-white">Initial Consultation:</span> We
                    start by understanding your business goals, challenges, and
                    requirements.
                  </p>
                  <p className="text-white">
                    <span className="text-white">Detailed Analysis:</span>{" "}
                    Conduct comprehensive research and data collection to gain a
                    deep understanding of your market, competition, and internal
                    operations.
                  </p>
                  <p className="text-white">
                    <span className="text-white">Strategic Planning:</span>{" "}
                    Develop a strategic plan that aligns with your vision and
                    objectives, including detailed financial projections and
                    risk assessments.
                  </p>
                  <p className="text-white">
                    <span className="text-white">
                      Report and Recommendations
                    </span>{" "}
                    Provide a detailed report with actionable recommendations to
                    guide your business decisions.
                  </p>
                  <p className="text-white">
                    <span className="text-white">Implementation Support:</span>{" "}
                    Offer guidance and support during the implementation phase
                    to ensure that the plan is effectively executed.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className=" hidden sm:flex relative max-w-[40vw] w-full">
            <div className="bg-black absolute bottom-0 w-[0.667vh] h-[50%]"></div>
            <img
              className="h-screen w-full ps-[0.5vh] max-w-[40vw] object-cover max-h-[100vh]"
              src={businessPlan}
              alt="Business Plan"
              id="desktop-busineePlan-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Business_plan;
