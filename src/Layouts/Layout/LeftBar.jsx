import React, { useState } from "react";
import { facebookIcon, instagramIcon, linkedInIcon } from "../../assets/icons";

function LeftBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeSubLink, setActiveSubLink] = useState(null);

  const handleClick = (link) => {
    setActiveSection(link);
    document.getElementById(link).scrollIntoView({ behavior: "smooth" });
  };

  const handleSubLinkClick = (subLink) => {
    setActiveSubLink(subLink);
    document.getElementById(subLink).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen hidden fixed top-0 bg-transparent left-0 justify-between z-[100] w-[21.111vh]  md:flex flex-col ">
      <div className="mt-[4.444vh] pl-[2.667vh] text-[1.999vh] ">
        {/* home section */}
        <a
          href="#home"
          className={`block py-[0.444vh] ${
            activeSection === "home" ? "text-black" : "text-white"
          }`}
          onClick={() => handleClick("home")}
        >
          Home
        </a>

        {/* about section */}
        <a
          href="#about"
          className={`block py-[0.444vh] ${
            activeSection === "about" ? "text-black" : "text-white"
          }`}
          onClick={() => handleClick("about")}
        >
          About Lumos
        </a>

        {/* about us section */}
        <a
          href="#about-us"
          className={`block py-[0.444vh] ${
            activeSection === "about-us" ? "text-black" : "text-white"
          }`}
          onClick={() => handleClick("about-us")}
        >
          Our Founders
        </a>

        {/* why choose us section */}
        <a
          href="#why-choose-us"
          className={`block py-[0.444vh] ${
            activeSection === "why-choose-us" ? "text-black" : "text-white"
          }`}
          onClick={() => handleClick("why-choose-us")}
        >
          Why Choose Us
        </a>

        {/* Services section */}
        <a
          href="#services"
          className={`block py-[0.444vh] ${
            activeSection === "services" ? "text-black" : "text-white"
          }`}
          onClick={() => handleClick("services")}
        >
          Our Services
        </a>

        {/* Services sublinks */}
        {activeSection === "services" && (
          <div className="pl-[1.3vh]">
            {/* outsourced CFO services */}
            <a
              href="#service-one"
              className={`block py-[0.444vh] border-b-[1px] border-white ${
                activeSubLink === "service-one" ? "text-black" : "text-white"
              }`}
              onClick={() => handleSubLinkClick("service-one")}
            >
              Outsourced <br />
              CFO Services
            </a>
            {/* business transformation */}
            <a
              href="#service-two"
              className={`block py-[0.444vh]  border-b-[1px] border-white ${
                activeSubLink === "service-two" ? "text-black" : "text-white"
              }`}
              onClick={() => handleSubLinkClick("service-two")}
            >
              Business <br />
              Transformation <br />
              and Performance Improvement
            </a>
            {/* feasibility */}
            <a
              href="#service-three"
              className={`block py-[0.444vh]  border-b-[1px] border-white ${
                activeSubLink === "service-three" ? "text-black" : "text-white"
              }`}
              onClick={() => handleSubLinkClick("service-three")}
            >
              Feasibility <br />
              Studies and <br />
              Business Plan
            </a>
            {/* business valuations */}
            <a
              href="#service-four"
              className={`block py-[0.444vh]  border-b-[1px] border-white ${
                activeSubLink === "service-four" ? "text-black" : "text-white"
              }`}
              onClick={() => handleSubLinkClick("service-four")}
            >
              Business <br />
              Valuations
            </a>
            {/* accounting and book-keeping */}
            <a
              href="#service-five"
              className={`block py-[0.444vh]  border-b-[1px] border-white ${
                activeSubLink === "service-five" ? "text-black" : "text-white"
              }`}
              onClick={() => handleSubLinkClick("service-five")}
            >
              Accounting and <br />
              Book-Keeping
            </a>
            {/* tax, compliance and AML services */}
            <a
              href="#service-six"
              className={`block py-[0.889vh]  ${
                activeSubLink === "service-six" ? "text-black" : "text-white"
              }`}
              onClick={() => handleSubLinkClick("service-six")}
            >
              Tax, Compliance and AML Services
            </a>
          </div>
        )}

        {/* contact section */}
        <a
          href="#contact"
          className={`block py-[0.444vh] ${
            activeSection === "contact" ? "text-black" : "text-white"
          }`}
          onClick={() => handleClick("contact")}
        >
          Contact
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="w-full h-fit flex gap-[1.333vh] ps-[2.667vh]">
        {/* Social Media facebook */}
        <a href="">
          <img
            className="w-[2.667vh] h-[2.667vh] mb-[4.444vh] m-auto"
            src={facebookIcon}
            alt="Social Media Icons"
          />
        </a>

        {/* Social Media instagram */}
        <a href="">
          <img
            className="w-[2.667vh] h-[2.667vh] mb-[4.444vh] m-auto"
            src={instagramIcon}
            alt="Social Media Icons"
          />
        </a>

        {/* Social Media linkedin */}
        <a href="">
          <img
            className="w-[2.667vh] h-[2.667vh] mb-[4.444vh] m-auto"
            src={linkedInIcon}
            alt="Social Media Icons"
          />
        </a>
      </div>
    </div>
  );
}

export default LeftBar;
