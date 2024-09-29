import React from "react";
import { images } from "../../static";

function AboutUs() {
  return (
    <>
      <div
        id="about-us"
        className="relative max-h-fit sm:min-h-[100vh] w-full h-fit pb-[5vh] pt-[10vh] sm:pt-0 flex"
      >
        <div className="flex  md:flex-row flex-col flex-1 pt-[8vw] ps-5  sm:ps-[5.333vh] pe-[3vh]  gap-[4vh]">
          {/* <div className="flex-1 pt-[8vw] ps-5  sm:ps-[5.333vh] pe-[3vh] "> */}
            <div className=" flex-1 ">
              <div className="relative flex w-full h-[16vh]">
                <div className="bg-black absolute bottom-0 w-[0.667vh] h-[80%]"></div>
                <img
                  className="w-[16vh] h-[16vh] object-cover"
                  src={images.person1}
                  alt=""
                />
              </div>

              <h3>Paramita Nag - CA</h3>
              <p className="">
                A Chartered Accountant from the Institute of Chartered
                Accountants of India, she has spent the last 12 years working
                for Big 4 consulting firms such as PwC and Deloitte in India. In
                UAE, her career focus shifted to the underserved SME sector,
                where she gained extensive experience in handling clients for
                the international firm Moore Stephens.{" "}
              </p>

              <p>
                She has also gained extensive industry experience as the Finance
                Controller of the Moishi Group (a homegrown UAE luxury dessert
                brand) and has guided the company through the COVID pandemic and
                its subsequent expansion in the GCC, North Africa and the Indian
                subcontinent. She has also been instrumental in the setting up,
                and implementation of operations of the brand’s sister concept,
                UCHI, a fine dining sushi highball concept located in DIFC.
              </p>
            </div>
          {/* </div> */}

          <div className=" flex-1 pe-[3vh]">
              <div className="relative flex w-full h-[16vh]">
                <div className="bg-black absolute bottom-0 w-[0.667vh] h-[90%]"></div>
                <img
                  className="w-[16vh] h-[16vh] object-cover"
                  src={images.person2}
                  alt=""
                />
              </div>

              <h3>Siddharth Nag - CFA</h3>
              <p className="">
              A seasoned C-Suite professional with more than 15 years of experience spearheading strategy, commercial and finance functions, conducting industry, market and competitive analysis, performing detailed business due diligence with full understanding of the industry value chain, building business plans, leading valuation and corporate M&A transactions, and assessing investment attractiveness with potential risks and mitigation strategies.

              </p>

              <p>
              Ability to assess potential size of addressable & serviceable markets, focus on building a scalable revenue model with a lean cost structure and profitable unit economics, generate high quality of earnings and conversion to cash flows, and run an effective self-financing business model with a robust working capital management.
              </p>

              <p>Key expertise in performance improvement, business restructuring and turnarounds, financial planning and analysis, putting together data-driven strategic insights and driving value creation plans.</p>

              <p>Worked in global organizations, start-ups, boutique regional firms as well as companies undergoing financial restructuring before starting his own business advisory venture effective May 2024.</p>

<p>Strong healthcare experience from Sep 2019 to Apr 2024 overseeing a platform owning IVF, Genetics and Women's Health-focused polyclinics and a large UAE hospital group under financial restructuring; this was in his capacity as a C-Suite executive overseeing strategic, commercial, financial, operational and regulatory aspects of the business.</p>

<p>Worked in the field of investments spanning research, asset management, private equity and venture capital (industry agnostic) in roles prior to Sep 2019.</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
