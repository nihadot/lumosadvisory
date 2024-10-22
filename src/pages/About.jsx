import React, { useEffect, useRef, useState } from 'react';
import { closeWhiteIcon, LeftTriangleIcon } from '../assets/icons';
import { about } from '../assets/images';
import {Client1,Client2,Client3,Client4,Client5,Client6,Client7,Client8} from "../assets/clients-Logos"

function About() {


  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    setPopupVisible(prev => !prev);
  };
 

  const carouselArray = [
    {
      name:"Ten Films - Film Production",
      imaLink:Client1
    },
    {
      name:"M’OISHI - F&B Retail",
      imaLink:Client2
    },
    {
      name:"Wadi A’a Zafran - Exotic Spice Retail",
      imaLink:Client3
    },
    {
      name:"UCHI - F&B",
      imaLink:Client4
    },
    {
      name:"Accutree - HR Consultancy",
      imaLink:Client5
    },
    {
      name:"Metaled Trade - Steel Trading",
      imaLink:Client6
    },
    {
      name:"Luxtron - Commodity Trading",
      imaLink:Client7
    },
    {
      name:"The Juice Lab F&B Retail",
      imaLink:Client8
    },
  ]
  

  const containerRef = useRef(null);

  const [centerIndex, setCenterIndex] = useState(0); // Tracks the center image index

  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position

  // useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;

  //   let scrollAmount = 0;
  //   const scrollStep = 0.2; // Adjust the speed (lower is slower)
  //   let isScrolling = true; // Track if scrolling is enabled

  //   const autoScroll = () => {
  //     if (scrollContainer && isScrolling) {
  //       scrollAmount += scrollStep;
  //       scrollContainer.scrollLeft = scrollAmount;

  //       // Reset scroll when reaching the end
  //       if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
  //         scrollAmount = 0; // Reset to start
  //       }

  //       // Request the next frame for smooth animation
  //       requestAnimationFrame(autoScroll);
  //     }
  //   };

  //   // Start the auto-scrolling
  //   requestAnimationFrame(autoScroll);

  //   // Clean up the effect when the component unmounts
  //   return () => {
  //     isScrolling = false; // Stop scrolling when unmounting
  //   };
  // }, []);


  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current; // current container
      const scrollLeft = container.scrollLeft; // scrolled width
      const containerWidth = container.offsetWidth; // visible full width

      console.log(container,scrollLeft,containerWidth,'[[[')

      // Calculate the middle index based on scroll position
      const centerPoint = scrollLeft + containerWidth / 2.1;

      // Find the index of the center element
      const imageWidth = container.scrollWidth / carouselArray.length;
      const newCenterIndex = Math.floor(centerPoint / imageWidth);
      console.log(newCenterIndex,'newCenterIndex')
      // Update the centerIndex state
      setCenterIndex(newCenterIndex);
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    // Cleanup scroll event listener
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [carouselArray]);


// Auto scroll effect with smooth scrolling
useEffect(() => {
  const container = containerRef.current;

  const autoScroll = () => {
    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
      // If at the end, reset scroll position to start smoothly
      container.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    } else {
      // Scroll right by a few pixels smoothly
      container.scrollBy({
        left: 1, // Adjust speed for smoothness
        behavior: 'smooth',
      });
    }
  };

  // Auto-scroll every 20ms for smooth continuous scroll (adjust for speed)
  const scrollInterval = setInterval(autoScroll, 150);

  return () => {
    clearInterval(scrollInterval); // Clear interval on unmount
  };
}, [carouselArray]);

  useEffect(() => {
    function handelContextMenu(e) {
      e.preventDefault();
    }
    const mobileHomeImageElement = document.getElementById("mobile-about-image");
    const desktopHomeImageElement = document.getElementById("desktop-about-image");

    mobileHomeImageElement.addEventListener("contextmenu", handelContextMenu);
    desktopHomeImageElement.addEventListener("contextmenu", handelContextMenu);
    return () => {
      mobileHomeImageElement.removeEventListener("contextmenu", handelContextMenu);
      desktopHomeImageElement.removeEventListener("contextmenu", handelContextMenu);

    }
  })






  return (
    <>

      <div id='about-mobile' className=" flex sm:hidden w-full items-center justify-center pt-24">
        <div className="max-w-[200px]  w-full flex h-[300px]">
          <div className="bg-black  w-[4px] h-[50%]"></div>
          <img
            className=" w-[96%] block  object-cover h-full"
            src={about}
            alt="Loading..."
            id='mobile-about-image'
          />
        </div>
      </div>

      <div id='about' className="relative max-h-fit sm:min-h-[100vh] w-full h-fit flex">
        <div className="flex flex-1">
          <div className="flex-1 pt-[8vw] ps-5  sm:ps-[5.333vh] pe-[3vh] ">
            <div className=" max-w-[100vh] w-full ">

              <h2 >About Lumos</h2>
              <h3>Who We Are?</h3>
              <p className=''>We are a team of finance and strategy professionals with a cumulative experience of 30 years working in Big 4 firms and top-tier companies. We have gained in-depth practical knowledge and expertise on handling all financial, strategic and commercial aspects of the business.</p>

              <h3>Our Vision</h3>
              <p className=''>We are committed to developing a scalable advisory platform that will enable SME owners and stakeholders to chart a clear path towards achieving their financial goals and driving profitable growth.</p>

              <h3>Our Mission</h3>
              <p className=''>We strive to help SME clients succeed in their business journey by providing them with data-driven tools for practical decision-making and designing custom and cost-effective strategies for sustainable growth at an affordable price.</p>

              <div className="flex gap-[2.222vh]">
                <h3>Why focus on SMEs?</h3>
                <div className="flex items-center justify-center">

                  <img className='w-[3vh] h-[4vh] object-cover' src={LeftTriangleIcon} alt="" />

                  <button
                    onClick={togglePopup}
                  >
                    Click to know more
                  </button>
                </div>
              </div>
              

                <div className="">
              <h2 >Our Clients</h2>

                </div>
              {/* <div className="relative w-[21.111vh] pt-[0.444vh] overflow-hidden pb-[0.444vh] border border-[#5f8f93a9]">
      <div
        className="absolute left-0 w-[6.222vh] h-[6.667vh] bg-[#e9e9e99c] transition-opacity duration-300"
        style={{ opacity: leftOpacity }}
      ></div>
      <div
        className="absolute right-0 w-[7.111vh] h-[6.667vh] bg-[#fdfdfd96] transition-opacity duration-300"
        style={{ opacity: rightOpacity }}
      ></div>

              <div 
              ref={scrollContainerRef}
              className="flex  gap-[0.444vh] px-0 w-[21.111vh] overflow-hidden">
               { carouselArray.length > 0 && carouselArray.map((item,index)=> {
                return (
                <div className="w-full h-[11.111vh]">
                  <div className="w-[6.667vh] h-[6.667vh]">
                  <img className='w-full h-full object-cover' src={item.imaLink} alt={item.name} key={index} />
                  </div>
                  <p className=' line-clamp-2 text-left'>{item.name}</p>
                </div>)
               }) }
                
              </div>
              </div> */}




              {/*  */}
              <div ref={containerRef} className="border-[1.5px] border-[#5f8f93a9] overflow-hidden rounded gap-0 flex max-w-[180px] h-[95px] ">
                {
                  carouselArray.length > 0 && carouselArray.map((item,index)=> {
                    return (
                      <div className={`w-[64px] h-[14.111vh] justify-center items-center flex flex-col  ${ centerIndex === index ? 'opacity-100' : 'opacity-30'} `}>
                        <div className="w-[8vh] h-[8vh] ">
                        <img className='w-full h-full object-cover' src={item.imaLink} alt={item.name} key={index} />
                        </div>
                        <p className='text-center h-5 baskervville-regular w-[68px] text-pretty text-[8px] font-bold mt-1'>{item.name}</p>
                      </div>)
                  })
                }
        
              </div>
              {/*  */}

           
              {/* desktop popup */}
              {isPopupVisible && (
                <div className="absolute top-[18%] right-0 bg-[#5F8F93] text-white md:block hidden bg-opacity-50 py-[0.444vh] px-[2.222vh] max-w-[40.5vw] w-full z-50">
                  <h3 className="text-white">Why focus on SMEs?</h3>
                  <p className='text-white'><span className='text-white'>Innovation:</span> SMEs often pioneer new products and services, pushing industries forward.</p>
                  <p className='text-white'><span className='text-white'>Employment:</span> Over 60% of global jobs spring from SMEs, combating unemployment.</p>
                  <p className='text-white'><span className='text-white'>Community Impact:</span> SMEs usually operate locally, nurturing community and social cohesion.</p>
                  <p className='text-white'><span className='text-white'>Economic Diversity:</span> They offer varied goods and services, balancing economic scales and reducing dependency on large corporations.</p>
                  <p className='text-white'><span className='text-white'>Resilience:</span> By spreading risks across numerous small businesses, economies withstand crisis better. </p>

                  <p  className='text-white'>During and post the COVID -19 pandemic, we noted the need to build more resilience in the SME segment through offering the right strategic and financial guidance to business owners and key stakeholders and be fully equipped to weather any economic uncertainties.</p>

                  <p className='text-white'>According to the Ministry of Economy of UAE the SME sector accounts for more than 94% of all companies in the country[1]. They employ more than 86% of the private sector’s workforce and made up over 60% of the non-oil GDP[1][2].</p>
                  <p className='text-white mb-[0.889vh]'>We seek to serve this underserved yet massive segment with quality financial services which bring value to their business and empower stakeholders to achieve their targets.</p>

                  <div className="mb-[1.5vh]">
                <p htmlFor="" className='text-[1.333vh] mb-[1.333vh] text-white'>references:</p>
                <h6 className='mb-[1.333vh] text-[1.333vh] text-white w-full'>
                  [1] SMEs contribute 60% of the UAE's GDP, creating more job opportunities for Finance Professionals. (thefinancestory.com)
                </h6>

                <h6 className='text-[1.333vh] text-white w-full'>
                  [2] Small and Medium Enterprises | The Official Portal of the UAE Government
                </h6>
              </div>

                </div>
              )}


              {/* mobil epopup */}
              {isPopupVisible && (
                <div className="absolute -top-[10%] right-0  md:hidden block  py-[0] px-[15px] w-full z-50">




                  <div className="bg-[#5F8F93] text-white bg-opacity-90 px-3 py-1">
                    {/* close function button */}
                    <div className="flex justify-end bg-transparent mt-4">
                      <img
                        onClick={togglePopup}
                        src={closeWhiteIcon}
                        className="w-6 cursor-pointer h-6 object-contain "
                        alt="close icon"
                      />
                    </div>
                    <h3 className="text-white">Why focus on SMEs?</h3>
                    <p className='text-white text-[10px] '><span className='text-white'>Innovation:</span> SMEs often pioneer new products and services, pushing industries forward.</p>
                    <p className='text-white text-[10px] '><span className='text-white'>Employment:</span> Over 60% of global jobs spring from SMEs, combating unemployment.</p>
                    <p className='text-white text-[10px] '><span className='text-white'>Community Impact:</span> SMEs usually operate locally, nurturing community and social cohesion.</p>
                    <p className='text-white text-[10px] '><span className='text-white'>Economic Diversity:</span> They offer varied goods and services, balancing economic scales and reducing dependency on large corporations.</p>
                    <p className='text-white text-[10px] '><span className='text-white'>Resilience:</span> By spreading risks across numerous small businesses, economies withstand crisis better. </p>

                    <p className='text-white text-[10px]'>During and post the COVID -19 pandemic, we noted the need to build more resilience in the SME segment through offering the right strategic and financial guidance to business owners and key stakeholders and be fully equipped to weather any economic uncertainties.</p>

                    <p className='text-white text-[10px]'>According to the Ministry of Economy of UAE the SME sector accounts for more than 94% of all companies in the country[1]. They employ more than 86% of the private sector’s workforce and made up over 60% of the non-oil GDP[1][2].</p>
                    <p className='text-white text-[10px] mb-[0.889vh]'>We seek to serve this underserved yet massive segment with quality financial services which bring value to their business and empower stakeholders to achieve their targets.</p>

                    <div className="mb-[1.5vh]">
                <p htmlFor="" className='text-[1.333vh] mb-[1.333vh] text-white'>References:</p>
                <h6 className='mb-[1.333vh] text-[1.333vh] text-white w-full'>
                  [1] SMEs contribute 60% of the UAE's GDP, creating more job opportunities for Finance Professionals. (thefinancestory.com)
                </h6>

                <h6 className='text-[1.333vh] text-white w-full'>
                  [2] Small and Medium Enterprises | The Official Portal of the UAE Government
                </h6>
              </div>
              
                  </div>

                </div>
              )}
            </div>

          </div>

          <div className="sm:flex hidden max-w-[40vw] w-full">
            <div className="bg-black w-[0.667vh] h-[50%]"></div>
            <img
              id='desktop-about-image'
              className=' h-screen w-full max-w-[39.444vw] object-cover max-h-[100vh]' src={about} alt="Loading..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
