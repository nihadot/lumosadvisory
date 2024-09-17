import React, { useEffect, useRef, useState } from 'react';
import LA from "../../assets/Img/Lumos Advisory Logo-01.png";
import img4 from "../../assets/Img/pexels-photo-5716035.jpg";
import { images } from '../../static';

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
      <div id='service-one' className="flex w-full relative h-screen bg-cover bg-center">

        <div className="w-full 1200px:ps-12 ">
          <img className='mt-3 w-[200px]' src={LA} alt="Lumos Advisory Logo" />

          <div className="flex mt-5 h-fit">
            <div className="bg-black w-1.5 h-[50%]">l</div>
            <img className='w-full object-cover h-[250px] mac-book:h-[300px] ' src={img4} alt="Outsourced CFO Services" />
          </div>

          <div className="flex w-full gap-3 1400px:gap-14 mt-3 mac-book:mt-5 ">
            <div className="max-w-[550px] w-full">
              <h1 className='text-black pt-2 text-[18px] font-medium'>Outsourced CFO Services</h1>
              <p className='text-teal-600 pt-2 text-[12px]'>Outsourced CFO Services provides expert financial guidance without the expense of a full-time CFO. Opting for our Outsourced CFO Services positions SME clients for financial stability and strategic growth, equipping them with the expertise and insights to thrive in a competitive market.</p>
              <p className='text-teal-600 pt-2 text-[12px]'>Here’s an in-depth look at what these services entail, why partnering with us is a superior choice, and our comprehensive process and approach.</p>

              <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Financial Planning and Analysis:</span> Tailored financial strategies, forecasting, and budgeting to drive business growth.</p>
              <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Cost Management:</span> Identifying cost-saving opportunities and optimizing spending to enhance profitability.</p>
            </div>

            <div className="max-w-[550px] w-full pt-2 pe-2">
              <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Cash Flow Management:</span> Ensuring liquidity and efficient cash flow handling to maintain business health.</p>
              <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Risk Management:</span> Proactively identifying and mitigating financial risks.</p>
              <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Financial Reporting:</span> Accurate and timely financial reports to inform decision-making.</p>
              <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Strategic Insight:</span> Long-term financial planning and market positioning to achieve sustainable success.</p>
              <p className='text-teal-600 pt-2 text-[12px]'><span className='font-medium'>Continuous Monitoring and Reporting:</span> Provide regular updates, build customizable dashboards, conduct strategic reviews, and help with support and advisory where needed.</p>

              <div className="flex gap-5">
                <h2 className='pt-2 text-teal-600 font-bold'>Our Process and Approach</h2>
                <div className="flex items-center justify-center mt-2">
              
              <img className='w-5 h-5' src={images.readMore} alt="" />

              <button 
                className="text-teal-600 mt-0 text-[12px] ms-2 text-center"
                onClick={togglePopup}
                >
                Click to know more
              </button>
                </div>
              </div>

             
            </div>

            {isPopupVisible && (
                <div ref={popupRef} className="absolute top-[180px] right-0 bg-teal-600 text-white bg-opacity-80 py-3 px-4 w-[420px] z-50">
                  <h2 className="text-xl font-bold mb-0">Why focus on SMEs?</h2>
                  <p className='pt-2 text-[10px]'><span className='font-bold text-[11px]'>Initial Consultation:</span>  Understanding your business, its goals, and financial challenges is the stepping stone. We conduct a thorough analysis to tailor our services.</p>
                  <p className='pt-2 text-[10px]'><span className='font-bold text-[11px]'>Customized Plan Development:</span> Based on the initial consultation, we craft a bespoke financial management plan. This plan covers all critical areas of financial health, from budgeting to risk management.</p>
                  <p className='pt-2 text-[10px]'><span className='font-bold text-[11px]'>Implementation and Integration:</span> We seamlessly integrate into your business operations, ensuring minimal disruption while implementing strategies for immediate and long-term benefits.</p>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CFO_Services;
