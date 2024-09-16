import React, { useEffect, useRef, useState } from 'react';
import LA from "../../assets/Img/Lumos Advisory Logo-01.png";
import img4 from "../../assets/Img/pexels-photo-5716035.jpg";

function CFO_Services() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupVisible(false);
    }
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <>
      <div id='service-one' className="flex h-screen bg-cover bg-center">

        <div className="w-full pl-5">
          <img className='mt-5 w-[200px]' src={LA} alt="Lumos Advisory Logo" />

          <div className="flex mt-5 h-[330px]">
            <div className="bg-black w-1.5 h-[50%]">l</div>
            <img className='w-full max-w-[1220px]' src={img4} alt="Outsourced CFO Services" />
          </div>

          <div className="flex gap-14">
            <div className="w-[550px]">
              <h1 className='text-black pt-2 text-xl font-medium'>Outsourced CFO Services</h1>
              <p className='text-teal-600 pt-2 text-sm'>Outsourced CFO Services provides expert financial guidance without the expense of a full-time CFO. Opting for our Outsourced CFO Services positions SME clients for financial stability and strategic growth, equipping them with the expertise and insights to thrive in a competitive market.</p>
              <p className='text-teal-600 pt-2 text-sm'>Here’s an in-depth look at what these services entail, why partnering with us is a superior choice, and our comprehensive process and approach.</p>

              <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Financial Planning and Analysis:</span> Tailored financial strategies, forecasting, and budgeting to drive business growth.</p>
              <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Cost Management:</span> Identifying cost-saving opportunities and optimizing spending to enhance profitability.</p>
            </div>

            <div className="w-[550px] pt-2">
              <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Cash Flow Management:</span> Ensuring liquidity and efficient cash flow handling to maintain business health.</p>
              <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Risk Management:</span> Proactively identifying and mitigating financial risks.</p>
              <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Financial Reporting:</span> Accurate and timely financial reports to inform decision-making.</p>
              <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Strategic Insight:</span> Long-term financial planning and market positioning to achieve sustainable success.</p>
              <p className='text-teal-600 pt-2 text-sm'><span className='font-medium'>Continuous Monitoring and Reporting:</span> Provide regular updates, build customizable dashboards, conduct strategic reviews, and help with support and advisory where needed.</p>

              <div className="flex gap-5">
                <h1 className='pt-2 text-teal-600 text-xl font-medium'>Our Process and Approach</h1>
                <button 
                  className="text-teal-600 underline mt-2"
                  onClick={togglePopup}
                >
                  Click to know more
                </button>
              </div>

              {isPopupVisible && (
                <div ref={popupRef} className="fixed top-16 right-5 bg-teal-600 text-white bg-opacity-80 py-4 px-6 w-[520px] z-50">
                  <h2 className="text-xl font-bold mb-4">Why focus on SMEs?</h2>
                  <p className='pt-2 text-sm'><span className='font-medium'>Innovation:</span> SMEs often pioneer new products and services, pushing industries forward.</p>
                  <p className='pt-2 text-sm'><span className='font-medium'>Employment:</span> Over 60% of global jobs spring from SMEs, combating unemployment.</p>
                  <p className='pt-2 text-sm'><span className='font-medium'>Community Impact:</span> SMEs usually operate locally, nurturing community and social cohesion.</p>
                  <p className='pt-2 text-sm'><span className='font-medium'>Economic Diversity:</span> They offer varied goods and services, balancing economic scales and reducing dependency on large corporations.</p>
                  <p className='pt-2 text-sm'><span className='font-medium'>Resilience:</span> By spreading risks across numerous small businesses, economies withstand crises better. During and post the COVID-19 pandemic, we noted the need to build more resilience in the SME segment through offering the right strategic and financial guidance to business owners and key stakeholders to weather any economic uncertainties.</p>
                  <p className='pt-2 text-sm'>According to the Ministry of Economy of UAE, the SME sector accounts for more than 94% of all companies in the country. They employ more than 86% of the private sector’s workforce and made up over 60% of the non-oil GDP.</p>
                  <p className='pt-2 text-sm'>We seek to serve this underserved yet massive segment with quality financial services that bring value to their business and empower stakeholders to achieve their targets.</p>

                  <button
                    className="bg-teal-600 text-white px-4 py-2 rounded mt-4"
                    onClick={togglePopup}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CFO_Services;
