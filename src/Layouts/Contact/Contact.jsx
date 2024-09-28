import React, { useState } from "react";
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png";
import LA from "../../assets/Img/Lumos Advisory Logo-01.png";
import img9 from "../../assets/Img/pexels-photo-257923 1.svg";
import { images } from "../../static";
import { Link } from "react-router-dom";

function Contact() {

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const [formData,setFormData]= useState({
    name:"",
    email:"",
    mobileNumber:"",
    message:""
  });

  const [testimonials,setTestimonials]= useState([
    {
      imageUrl:images.metaled_trade,
      paragraph:`Metaled Trade DMCC engaged Lumos Advisory recently on a financial planning and business valuation assignment. The team helped build a detailed 5-year business plan for budgeting and performance tracking purposes. The business plan formed a fundamental basis using which they also performed a business valuation using the projected cash flows. The team validated the valuation using comparable public and private transactions in the metals trading space which was very reassuring and gave me comfort to understand the range of valuation. In addition, Lumos also carried out a sensitivity analysis on the key valuation drivers to help understand the impact of these on my business valuation in an upcycle, downcycle and a normalized commodity cycle scenario. They were extremely professional in their dealings, demonstrated a strong understanding of my business and added value with their thought process. I do sincerely recommend Lumos Advisory for any business analysis, commercial and financial due diligence, valuation, outsourced CFO services and financial planning assignments
\nIndronil Mukherjee, Manager Director.
www.metaledtrade.com`
    },
    
  ]);

  const [index,setIndex] = useState(1);

  const incrementIndex = () =>{
    
    const length = testimonials.length;

   if(length === (index)){
    return true;
   }

    setIndex((prev)=>{
      if(length > prev){
        return prev+1;
      }else{
        return prev;
      }
    })
  }

  const decrementIndex = () =>{
    
    const length = testimonials.length;

    setIndex((prev)=>{
      if(prev === 1){
        return prev;
      }else{
        return prev-1;
      }
    })
  }

  const [readMore,setReadMore] = useState(272);

  const toggleHandleMoreReadOption = ()=>{
    setReadMore((prev)=>{
      if(prev === 272){
        return testimonials[index-1]?.paragraph.length;
      }else{
        return 272;
      }
    })
  }

  const handleChange = (e)=> setFormData({...formData,[e.target.name]:e.target.value})
  return (
    <>
      <div id="contact" className="flex pb-5 flex-col">
        <div className=" ps-[5.333vh] flex w-full h-fit">
          <div className="max-w-[32.222vh] w-full h-full">
           {/* <div className="sticky h-20 flex items-center top-0 left-0">
            
            <img className='mt-[1.778vh]  w-[22.222vh]' src={LA} alt="" />
          </div> */}
            <div className="  pt-[8vw] text-[1.333vh] text-[#5F8F93]">
              <h2 >Contact</h2>
              <div className="flex gap-[1.333vh]">
                <div className="w-[0.222vh] bg-[#5F8F93]"></div>
                <div className="">
                  <p>
                  <b>+971 52 650 4080</b> [ ] <br />
                  <b>+971 52 650 4080</b> <br />
                  info@lumosadvisory.me <br />
                  Meydan Grandstand, 6th floor, <br />
                    Meydan Road, Nad Al Sheba, <br />
                    Dubai, U.A.E <br />
                    @lumos.advisory
                   
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="bg-black w-[0.667vh] h-[65%]">l</div>
            <img className="object-cover w-full h-[43vh] " src={img9} alt="" />
          </div>
        </div>
        <div className=" ps-[5.333vh]">
          <h3 className="m-[3.111vh]">
            Client Testimonies
          </h3>


          <div className="flex justify-between pe-[3.556vh]">
            <div className="">
              <div className="max-w-[60vh] w-full h-[22vh] p-[0.889vh]  bg-[#5F8F93]">
                <div className="relative w-full h-full bg-white rounded p-[1.778vh] text-[1.333vh]">
                  {/* <span>
                    {testimonials[index-1]?.title}
                  </span> */}
                  <img className="w-[12vh] h-[3vh]" src={testimonials[index-1]?.imageUrl} alt="logo" />
                  <p className={`line-clamp-4 whitespace-pre text-balance ${ readMore  !== 272 && 'overflow-y-scroll' } `} >
                    {testimonials[index-1]?.paragraph && testimonials[index-1]?.paragraph.length > readMore ? testimonials[index-1]?.paragraph.split(0,readMore-3)+'...' : testimonials[index-1]?.paragraph }
                  </p>
               
                  { testimonials[index-1]?.paragraph && testimonials[index-1]?.paragraph.length > readMore && <p onClick={toggleHandleMoreReadOption}>more...</p>}
                   
                   <div className="flex absolute bottom-[0.444vh] left-[48%] items-center justify-center ">

              <img onClick={incrementIndex} className='w-[2.222vh]  h-[2.222vh]' src={images.nextSlide} alt="" />
                   </div>

                </div>
              </div>
              <div className="max-w-[60vh] relative w-full h-[21.111vh]  px-[0.889vh] bg-[#5F8F93]">
                <div className="w-full h-full bg-white rounded-b-none rounded-t p-[1.778vh] text-[1.333vh]">
              <div className="flex absolute top-[0.444vh] left-[48%] justify-center mb-[0.444vh] items-center">
              <img onClick={decrementIndex} className='w-[2.222vh] h-[2.222vh]' src={images.bottomSlide} alt="" />

              </div>
                  <span >
                    {testimonials[index]?.title}
                  </span>
                  <p >
                  {testimonials[index]?.paragraph}
                  </p>



                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-[60vh] w-full h-[45vh] bg-[#5F8F93]  px-[1.333vh]">
              <input name="name" onChange={handleChange} value={formData.name} type="text" placeholder="Name" className="text-[1.777vh] placeholder:text-[#5f8f93a9] placeholder:font-bold  w-full h-[4.999vh] outline-none px-[1.0vh] rounded mt-[1.5vh]" />
              <input  name="mobileNumber" onChange={handleChange} value={formData.mobileNumber} type="number" placeholder="Mobile no." className="text-[1.777vh] placeholder:text-[#5f8f93a9] placeholder:font-bold w-full h-[4.999vh] outline-none px-[1.0vh] rounded mt-[1.5vh]" />
              <input name="email" onChange={handleChange} value={formData.email} type="email" placeholder="Email ID" className="text-[1.777vh]  w-full h-[4.999vh] placeholder:text-[#5f8f93a9] placeholder:font-bold outline-none px-[1.0vh] rounded mt-[1.5vh]" />
              <textarea name="message" onChange={handleChange} value={formData.message} placeholder="Message" className="text-[1.777vh]  w-full h-[17.999vh] placeholder:text-[#5f8f93a9] placeholder:font-bold outline-none p-[1.0vh] rounded mt-[1.5vh]"></textarea>
              <div className="flex justify-between text-white text-[2vh]">
                <input type="submit" value='Send' />
                <input type="reset" value='Cancel'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
