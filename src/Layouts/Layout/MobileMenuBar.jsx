import React, { useState } from "react";
import { closeIcon } from "../../assets/icons";
import { useLocation } from 'react-router-dom';

function MobileMenuBar({ setMenuOpen }) {
  const [activeSection, setActiveSection] = useState("home");
  const [activeSubLink, setActiveSubLink] = useState(null);

  const handleClick = (link) => {
    setActiveSection(link);
    document.getElementById(link).scrollIntoView({ behavior: "smooth" });
  };

  const handleSubLinkClick = (subLink) => {
    console.log(subLink,'submnk')
    setActiveSubLink(subLink);
    document.getElementById(subLink).scrollIntoView({ behavior: "smooth" });
  };

  const {hash} = useLocation();

  console.log(hash,'location')



  const handleClickMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-[45%]  sm:hidden block fixed z-[200] px-5 top-0 left-0 min-h-[360px] max-h-fit bg-[#5F8F93] opacity-80">
      {/* close function button */}
      <div className=" bg-transparent mt-4">
        <img
          onClick={handleClickMenu}
          src={closeIcon}
          className="w-6 h-6 object-contain "
          alt="close icon"
        />
      </div>

      {/* mobile menu links */}
      <div className="mt-[3vh] text-[15px] ">
        {/* Home section */}
        <a
          href="#home-mobile"
          className={`block py-[0.444vh] ${
            activeSection === "home-mobile" ? "text-black" : "text-white"
          }`}
          onClick={() => {
            handleClick("home-mobile");
            handleClickMenu();
          }}
        >
          Home
        </a>

        {/* About Lumos section */}
        <a
          href="#about-mobile"
          className={`block py-[0.444vh] ${
            activeSection === "about-mobile" ? "text-black" : "text-white"
          }`}
      
          onClick={() => {
            handleClick("about-mobile");
            handleClickMenu();
          }}
        >
          About Lumos
        </a>

        {/* About Us section */}
        <a
          href="#about-us"
          className={`block py-[0.444vh] ${
            activeSection === "about-us" ? "text-black" : "text-white"
          }`}
          onClick={() => {
            handleClick("about-us");
            handleClickMenu();

          }}
        >
          Our Founders
        </a>

        {/* Why Choose Us section */}
        <a
          href="#why-choose-us-mobile"
          className={`block py-[0.444vh] ${
            activeSection === "why-choose-us-mobile"
              ? "text-black"
              : "text-white"
          }`}
          onClick={() => {
            handleClick("why-choose-us-mobile")
            handleClickMenu();
          }}
        >
          Why Choose Us
        </a>

        {/* Our Services section */}
        <a
          // href="#services"
          className={`block py-[0.444vh] ${
            activeSection === "services" ? "text-black" : "text-white"
          }`}
          onClick={() => {
            handleClick("services");
            handleClickMenu();

          }}
        >
          Our Services
        </a>

        {/* Services section */}
        {activeSection === "services" && (
          <div className="pl-[2vh] text-[14px] h-fit ">
            {/* Outsourced CFO Services */}
            <a
              href="#service-one"
              className={`block py-[0.444vh]  border-b-[1px] border-white ${
                activeSubLink === "service-one" || (hash === '#service-one') ? "text-black" : "text-white"
              }`}
              onClick={() => {
                handleSubLinkClick("service-one")
            handleClickMenu();

              }}
            >
              Outsourced <br />
              CFO Services
            </a>

            {/* Business Transformation and Performance Improvement */}
            <a
              href="#business-transform"
              className={`block py-[0.444vh]  border-b-[1px] border-white ${
                activeSubLink === "business-transform" || (hash === '#business-transform')
                  ? "text-black"
                  : "text-white"
              }`}
              onClick={() => {
                handleSubLinkClick("business-transform");
                handleClickMenu();

              }}
            >
              Business <br />
              Transformation <br />
              and Performance Improvement
            </a>

            {/* Feasibility Studies and Business Plan */}
            <a
              href="#business-plan-mobile"
              className={`block py-[0.444vh]  border-b-[1px] border-white ${
                activeSubLink === "business-plan-mobile" || (hash === '#business-plan-mobile')
                  ? "text-black"
                  : "text-white"
              }`}
              onClick={() => {
                handleSubLinkClick("business-plan-mobile");
            handleClickMenu();

              }}
            >
              Feasibility <br />
              Studies and <br />
              Business Plan
            </a>  
            {/* Business Valuations */}
            <a
              href="#business-valuations"
              className={`block py-[0.444vh]  border-b-[1px] border-white ${
                activeSubLink === "business-valuations" || (hash === '#business-valuations')
                  ? "text-black"
                  : "text-white"
              }`}
              onClick={() => {
                handleSubLinkClick("business-valuations")
            handleClickMenu();

              }}
            >
              Business <br />
              Valuations
            </a>

            {/* Accounting and Book-Keeping */}
            <a
              href="#accounting-mobile"
              className={`block py-[0.444vh]  border-b-[1px] border-white ${
                activeSubLink === "accounting-mobile" || (hash === '#accounting-mobile')
                  ? "text-black"
                  : "text-white"
              }`}
              onClick={() => {
                handleSubLinkClick("accounting-mobile")
            handleClickMenu();

              }}
            >
              Accounting and <br />
              Book-Keeping
            </a>

            {/* Tax and Compliance Services */}
            <a
              href="#service-six"
              className={`block py-[0.444vh] ${
                activeSubLink === "service-six" || (hash === '#service-six') ? "text-black" : "text-white"
              }`}
              onClick={() => {
                handleSubLinkClick("service-six")
            handleClickMenu();

              }}
            >
              Tax and <br />
              Compliance <br />
              Services
            </a>
          </div>
        )}

        {/* Contact section */}
        <a
          href="#contact"
          className={`block pt-[0.666vh] pb-4 ${
            activeSection === "contact" ? "text-black" : "text-white"
          }`}
          onClick={() => {handleClick("contact");

            handleClickMenu();

          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default MobileMenuBar;
