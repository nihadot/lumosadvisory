import React, { useState } from "react";
import { contact, metaled_trade_logo } from "../assets/images";
import { callIcon, downArrow, facebookIconLightGreen, instagramIconLightGreen, linkedInIconLightGreen, upwardTriangle, whatsAppIcon } from "../assets/icons";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const [testimonials, setTestimonials] = useState([
    {
      imageUrl: metaled_trade_logo,
      paragraph: `Metaled Trade DMCC engaged Lumos Advisory recently on a financial planning and business valuation assignment. The team helped build a detailed 5-year business plan for budgeting and performance tracking purposes. The business plan formed a fundamental basis using which they also performed a business valuation using the projected cash flows. The team validated the valuation using comparable public and private transactions in the metals trading space which was very reassuring and gave me comfort to understand the range of valuation. In addition, Lumos also carried out a sensitivity analysis on the key valuation drivers to help understand the impact of these on my business valuation in an upcycle, downcycle and a normalized commodity cycle scenario. They were extremely professional in their dealings, demonstrated a strong understanding of my business and added value with their thought process. I do sincerely recommend Lumos Advisory for any business analysis, commercial and financial due diligence, valuation, outsourced CFO services and financial planning assignments
\nIndronil Mukherjee, Manager Director.
www.metaledtrade.com`,
    },
  ]);

  const [index, setIndex] = useState(1);

  const incrementIndex = () => {
    const length = testimonials.length;

    if (length === index) {
      return true;
    }

    setIndex((prev) => {
      if (length > prev) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };

  const decrementIndex = () => {
    const length = testimonials.length;

    setIndex((prev) => {
      if (prev === 1) {
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  const [readMore, setReadMore] = useState(272);

  const toggleHandleMoreReadOption = () => {
    setReadMore((prev) => {
      if (prev === 272) {
        return testimonials[index - 1]?.paragraph.length;
      } else {
        return 272;
      }
    });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <div id="contact" className="flex pb-5 flex-col pt-24 sm:pt-0 sm:mt-0">
        <div className="flex-col-reverse sm:flex-row ps-5 sm:ps-[5.333vh] flex w-full h-fit">
          <div className="max-w-[32.222vh] w-full h-full">
            <div className="  pt-[8vw] text-[1.333vh] text-[#5F8F93]">
              <h2>Contact</h2>
              <div className="flex gap-[1.333vh]">
                <div className="w-[0.222vh] bg-[#5F8F93]"></div>
                {/* Address section */}
                <div className="">
                  <p>
                    <b className="flex gap-1 items-center">
                      <img src={callIcon} className="w-5 h-5" alt="" />{" "}
                      +971 52 650 4080 [{" "}
                      <div className="flex items-center justify-center">
                        <img
                          src={whatsAppIcon}
                          className="w-5 h-5"
                          alt=""
                        />
                      </div>{" "}
                      ]
                    </b>
                    <b className="flex gap-1 items-center">
                      {" "}
                      <img
                        src={callIcon}
                        className="w-5 h-5"
                        alt=""
                      />{" "}
                      +971 52 650 4080
                    </b>
                    info@lumosadvisory.me <br />
                    Meydan Grandstand, 6th floor, <br />
                    Meydan Road, Nad Al Sheba, <br />
                    Dubai, U.A.E <br />
                  </p>
                  <div className="flex items-center -mt-3">
                    <div className="flex gap-0 me-1">
                      <img
                        src={facebookIconLightGreen}
                        alt=""
                        className="w-[2vh] h-[2h]"
                      />
                      <img
                        src={instagramIconLightGreen}
                        alt=""
                        className="w-[2vh] h-[2vh] me-1 "
                      />
                      <img
                        src={linkedInIconLightGreen}
                        alt=""
                        className="w-[2vh] h-[2vh]"
                      />
                    </div>
                    <p> @lumos.advisory</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 me-5 sm:me-0 ">
            <div className="bg-black w-[0.667vh] h-[20vh] sm:h-[65%]">l</div>
            <img
              className="object-cover w-full h-[43vh] "
              src={contact}
              alt=""
            />
          </div>
        </div>
        <div className=" ps-5 sm:ps-[5.333vh]">
          <h2>Client Testimonies</h2>

          <div className="flex sm:flex-row flex-col justify-between gap-10 sm:gap-[3vh] pe-[2vh] md:pe-[8vh]">
            <div className="">
              <div className="xl:max-w-[60vh] lg:max-w-[55vh] md:max-w-[50vh] w-full h-[22vh] p-[0.889vh]  bg-[#5F8F93]">
                <div className="relative w-full h-full bg-white rounded p-[1.778vh] text-[1.333vh]">
                  <img
                    className="w-[12vh] h-[3vh]"
                    src={testimonials[index - 1]?.imageUrl}
                    alt="logo"
                  />
                  <p
                    className={`sm:line-clamp-4 line-clamp-3 whitespace-pre !text-balance ${
                      readMore !== 272 && "!overflow-y-scroll"
                    } `}
                  >
                    {testimonials[index - 1]?.paragraph &&
                    testimonials[index - 1]?.paragraph.length > readMore
                      ? testimonials[index - 1]?.paragraph.split(
                          0,
                          readMore - 3
                        ) + "..."
                      : testimonials[index - 1]?.paragraph}
                  </p>

                  {testimonials[index - 1]?.paragraph &&
                    testimonials[index - 1]?.paragraph.length > readMore && (
                      <p onClick={toggleHandleMoreReadOption}>more...</p>
                    )}

                  <div className="flex absolute bottom-[0.444vh] left-[48%] items-center justify-center ">
                    <img
                      onClick={incrementIndex}
                      className="w-[2vh]  h-[2.9vh] object-cover"
                      src={upwardTriangle}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="xl:max-w-[60vh] lg:max-w-[55vh] md:max-w-[50vh] relative w-full h-[21.111vh]  px-[0.889vh] bg-[#5F8F93]">
                <div className="w-full h-full bg-white rounded-b-none rounded-t p-[1.778vh] text-[1.333vh]">
                  <div className="flex absolute top-[0.444vh] left-[48%] justify-center mb-[0.444vh] items-center">
                    <img
                      onClick={decrementIndex}
                      className="w-[2vh] h-[2vh]"
                      src={downArrow}
                      alt=""
                    />
                  </div>
                  <span>{testimonials[index]?.title}</span>
                  <p>{testimonials[index]?.paragraph}</p>
                </div>
              </div>
            </div>

            {/* contact form */}
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSdkTxJHoJUbKiHSdpFaGG6Ziav1290OthtnWeCgCltU5wqDwA/formResponse"
              className="xl:max-w-[60vh] lg:max-w-[55vh] md:max-w-[40vh] w-full h-[45vh] bg-[#5F8F93]  px-[1.333vh]"
            >
              <input
                name="entry.2003910202"
                type="text"
                placeholder="Name"
                className="text-[1.777vh] placeholder:text-[#5f8f93a9] placeholder:font-bold  w-full h-[4.999vh] outline-none px-[1.0vh] rounded mt-[1.5vh]"
              />
              <input
                name="entry.2006136947"
                type="number"
                placeholder="Mobile no."
                className="text-[1.777vh] placeholder:text-[#5f8f93a9] placeholder:font-bold w-full h-[4.999vh] outline-none px-[1.0vh] rounded mt-[1.5vh]"
              />
              <input
                name="entry.730477543"
                type="email"
                placeholder="Email ID"
                className="text-[1.777vh]  w-full h-[4.999vh] placeholder:text-[#5f8f93a9] placeholder:font-bold outline-none px-[1.0vh] rounded mt-[1.5vh]"
              />
              <textarea
                name="entry.1911790893"
                placeholder="Message"
                className="text-[1.777vh]  w-full h-[17.999vh] placeholder:text-[#5f8f93a9] placeholder:font-bold outline-none p-[1.0vh] rounded mt-[1.5vh]"
              ></textarea>
              <div className="flex justify-between text-white text-[2vh]">
                <input type="submit" value="Send" />
                <input type="reset" value="Cancel" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
