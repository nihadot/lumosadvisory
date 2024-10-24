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
      name:"Ten Films",
      description:"Film Production",
      imaLink:Client1
    },
    {
      name:"M’OISHI",
      description:"F&B Retail",
      imaLink:Client2
    },
    {
      name:"Wadi A’a Zafran",
      description:"Exotic Spice Retail",
      imaLink:Client3
    },
    {
      name:"UCHI ",
      description:"F&B",
      imaLink:Client4
    },
    {
      name:"Accutree ",
      description:"HR Consultancy",
      imaLink:Client5
    },
    {
      name:"Metaled Trade",
      description:"Steel Trading",
      imaLink:Client6
    },
    {
      name:"Luxtron",
      description:"Commodity Trading",
      imaLink:Client7
    },
    {
      name:"The Juice Lab ",
      description:"F&B Retail",
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

      // Calculate the middle point based on scroll position
      const centerPoint = scrollLeft + containerWidth / 1.5; // middle of the visible area

      // Find the index of the center element
      const imageWidth = container.scrollWidth / carouselArray.length;
      const newCenterIndex = Math.floor(centerPoint / imageWidth);

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
    const maxScrollLeft = container.scrollWidth - container.offsetWidth;

    if (container.scrollLeft >= maxScrollLeft) {
      // If at the end, reset scroll position to start smoothly
      container.scrollTo({
        left: 0,
        behavior: 'auto', // Reset instantly without smooth scrolling
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
  const scrollInterval = setInterval(autoScroll, 25);

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

            
              

                <div className="">
              <h2 >Our Clients</h2>

                </div>
          




              {/*  */}
              <div ref={containerRef} className="border-[0.167vh] border-[#5f8f93a9] overflow-hidden sm:pb-[1.111vh] pt-0 py-0 rounded gap-[1vh] flex max-w-[28vh] h-full sm:pt-[1vh]  w-full "> 
                
                      <div className={`w-[7.111vh] ms-0  h-[11.111vh]  justify-center mt-0 items-center flex flex-col  transition-opacity duration-1000  ${ centerIndex === 0 ? 'opacity-100' : 'opacity-20'} `}>
                        <div className="w-[8vh] h-[8vh] ">
                        <img className='w-full h-full object-cover' src={carouselArray[0].imaLink} alt={carouselArray[0].name} />
                        </div>
                        <p className='text-center mt-[0.444vh]  baskervville-regular w-[8.556vh] text-pretty text-[1.333vh] font-bold m-0'>{carouselArray[0].name}</p>
                        <p className='text-center baskervville-regular w-[8.556vh] text-pretty text-[8px] font-medium m-0 h-full'>{carouselArray[0].description}</p>
                      </div>

                      <div className={`w-[7.111vh]  ms-[1.333vh]  h-[11.111vh]  justify-center items-center flex flex-col   transition-opacity duration-1000  ${ centerIndex === 1 ? 'opacity-100' : 'opacity-20'} `}>
                        <div className="w-[8vh] h-[8vh] ">
                        <img className='w-full h-full object-cover' src={carouselArray[1].imaLink} alt={carouselArray[1].name} />
                        </div>
                        <p className='text-center  mt-[0.444vh]  baskervville-regular w-[8.556vh] text-pretty text-[1.333vh] font-bold m-0'>{carouselArray[1].name}</p>
                        <p className='text-center baskervville-regular w-[8.556vh] text-pretty text-[8px] font-medium m-0 h-full'>{carouselArray[1].description}</p>
                      </div>


                      <div className={`w-[7.111vh] ms-4  h-[11.111vh]  justify-center items-center flex flex-col   transition-opacity duration-1000  ${ centerIndex === 2 ? 'opacity-100' : 'opacity-20'} `}>
                        <div className="w-[8vh] h-[8vh] ">
                        <img className='w-full h-full object-cover' src={carouselArray[2].imaLink} alt={carouselArray[2].name} />
                        </div>
                        <p className='text-center mt-[0.444vh]  baskervville-regular w-[16.556vh] text-pretty text-[1.333vh] font-bold m-0'>{carouselArray[2].name}</p>
                        <p className='text-center baskervville-regular w-[16.556vh] text-pretty text-[9px] font-medium m-0 h-full'>{carouselArray[2].description}</p>
                      </div>

                      <div className={`w-[7.111vh] ms-4  h-[11.111vh]  justify-center items-center flex flex-col   transition-opacity duration-1000  ${ centerIndex === 3 ? 'opacity-100' : 'opacity-20'} `}>
                        <div className="w-[8vh] h-[8vh] ">
                        <img className='w-full h-full object-cover' src={carouselArray[3].imaLink} alt={carouselArray[3].name} />
                        </div>
                        <p className='text-center mt-[0.444vh]  baskervville-regular w-[16.556vh] text-pretty text-[1.333vh] font-bold m-0'>{carouselArray[3].name}</p>
                        <p className='text-center baskervville-regular w-[16.556vh] text-pretty text-[9px] font-medium m-0 h-full'>{carouselArray[3].description}</p>
                      </div>

                      <div className={`w-[7.111vh] ms-2  h-[11.111vh]  justify-center items-center flex flex-col   transition-opacity duration-1000  ${ centerIndex === 4 ? 'opacity-100' : 'opacity-20'} `}>
                        <div className="w-[8vh] h-[8vh] ">
                        <img className='w-full h-full object-cover' src={carouselArray[4].imaLink} alt={carouselArray[4].name} />
                        </div>
                        <p className='text-center mt-[0.444vh]  baskervville-regular w-[16.556vh] text-pretty text-[1.333vh] font-bold m-0'>{carouselArray[4].name}</p>
                        <p className='text-center baskervville-regular w-[16.556vh] text-pretty text-[9px] font-medium m-0 h-full'>{carouselArray[4].description}</p>
                      </div>

                      <div className={`w-[7.111vh] ms-4  h-[11.111vh]  justify-center items-center flex flex-col   transition-opacity duration-1000  ${ centerIndex === 5 ? 'opacity-100' : 'opacity-20'} `}>
                        <div className="w-[8vh] h-[8vh] ">
                        <img className='w-full h-full object-cover' src={carouselArray[5].imaLink} alt={carouselArray[5].name} />
                        </div>
                        <p className='text-center mt-[0.444vh]  baskervville-regular w-[16.556vh] text-pretty text-[1.333vh] font-bold m-0'>{carouselArray[5].name}</p>
                        <p className='text-center baskervville-regular w-[16.556vh] text-pretty text-[9px] font-medium m-0 h-full'>{carouselArray[5].description}</p>
                      </div>


                      <div className={`w-[7.111vh] ms-6  h-[11.111vh]  justify-center items-center flex flex-col   transition-opacity duration-1000  ${ centerIndex === 6 ? 'opacity-100' : 'opacity-20'} `}>
                        <div className="w-[8vh] h-[8vh] ">
                        <img className='w-full h-full object-cover' src={carouselArray[6].imaLink} alt={carouselArray[6].name} />
                        </div>
                        <p className='text-center  mt-[0.444vh] baskervville-regular w-[16.556vh] text-pretty text-[1.333vh] font-bold m-0'>{carouselArray[6].name}</p>
                        <p className='text-center  baskervville-regular w-[16.556vh] text-pretty text-[9px] font-medium m-0 h-full'>{carouselArray[6].description}</p>
                      </div>

                     <div className={`w-[7.111vh] ms-6  h-[11.111vh]  justify-center items-center flex flex-col  ${ centerIndex === 7 ? 'opacity-100' : 'opacity-20'} `}>
                        <div className="w-[8vh] h-[8vh] ">
                        <img className='w-full h-full object-cover' src={carouselArray[7].imaLink} alt={carouselArray[7].name} />
                        </div>
                        <p className='text-center mt-[0.444vh]  baskervville-regular w-[16.556vh] text-pretty text-[1.333vh] font-bold m-0'>{carouselArray[7].name}</p>
                        <p className='text-center  baskervville-regular w-[16.556vh] text-pretty text-[9px] font-medium m-0 h-full'>{carouselArray[7].description}</p>
                      </div>


                        
        
              </div>
              {/*  */}



              <div className="flex gap-[2.222vh] mt-[2.111vh]">
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
