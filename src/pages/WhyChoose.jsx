import React, { useEffect } from "react";
import { whyChooseUs } from "../assets/images";

function WhyChoose() {

  useEffect(()=>{
    function handelContextMenu(e) {
      e.preventDefault();
    }
    const mobileWhyChooseImageElement = document.getElementById("mobile-whyChoose-image");
    const desktopWhyChooseImageElement = document.getElementById("desktop-whyChoose-image");
    
    mobileWhyChooseImageElement.addEventListener("contextmenu",handelContextMenu);
    desktopWhyChooseImageElement.addEventListener("contextmenu",handelContextMenu);
    return ()=>{
      mobileWhyChooseImageElement.removeEventListener("contextmenu",handelContextMenu);
      desktopWhyChooseImageElement.removeEventListener("contextmenu",handelContextMenu);

    }
  })
  return (
    <>
      {/* mobile only visible */}
      <div
        id="why-choose-us-mobile"
        className=" flex sm:hidden w-full items-center justify-center pt-24"
      >
        <div className="max-w-[200px]  w-full flex h-[300px]">
          <div className="bg-black  w-[4px] h-[50%]"></div>
          <img
            className=" w-[96%] block  object-cover h-full"
            src={whyChooseUs}
            alt="Loading..."
            id="mobile-whyChoose-image"
          />

        </div>
      </div>

      <div
        id="why-choose-us"
        className="flex w-full h-fit max-h-fit min-h-[100vh]"
      >
        <div className="flex flex-1">
          <div className="flex-1 pt-[8vw]  max-w-[100vh] ps-5 sm:ps-[5.333vh] pe-[3vh] ">
            <h2>Why Choose Us</h2>
            <h3>What We Offer</h3>
            <p>
              <span>Comprehensive Support:</span> We provide end-to-end
              assistance to SMEs, from ideation to execution, making sure their
              business vision is realized effectively.
            </p>
            <p>
              <span>Strategic Guidance:</span> Our expert team delivers
              strategic insights and solutions tailored to individual business
              needs, fostering sustainable growth.
            </p>
            <p>
              <span>Value Addition:</span> We are committed to adding value by
              optimizing processes, enhancing operational efficiency, and
              increasing profitability.
            </p>
            <p>
              <span>Experienced Professionals:</span> Our team has decades of
              experience across various industries with a deep understanding of
              financial management, compliance, and strategic planning.
            </p>
            <p>
              <span>Customized Solutions:</span> We offer tailored services to
              fit your specific business needs. Our team provides flexible
              engagement options best suited to project-based requirements.
            </p>
            <p>
              <span>Sustainable Results:</span> Our focus is on delivering
              long-term improvements that continue to benefit your business well
              into the future.
            </p>
            <p>
              <span>Sustainable Results:</span> Our focus is on delivering
              long-term improvements that continue to benefit your business well
              into the future.
            </p>
            <p>
              <span>Client-Centric:</span> We prioritize client satisfaction and
              work closely with you to ensure that our strategies are
              effectively implemented.
            </p>
          </div>

          {/* mobile only hide */}
          <div className="sm:flex hidden max-w-[40vw] w-full">
            <div className="bg-black w-[0.667vh] h-[50%]"></div>
            <img
              className=" h-screen w-full max-w-[39.444vw] object-cover max-h-[100vh]"
              src={whyChooseUs}
              alt="Loading..."
              id="desktop-whyChoose-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChoose;
