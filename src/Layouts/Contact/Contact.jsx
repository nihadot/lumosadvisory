import React, { useState } from "react";
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png";
import LA from "../../assets/Img/Lumos Advisory Logo-01.png";
import img9 from "../../assets/Img/pexels-photo-257923 1.svg";
import { images } from "../../static";

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
      title:"Lorem ipsum dolor, sit amet consectetur",
      paragraph:`reiciendis minima eius dicta laudantium earum officiis
                    possimus, aliquam quos ratione incidunt non nobis enim.
                    Reprehenderit nisi perspiciatis distinctio dolorum.
                    adipisicing elit. Veritatis rem, facere quas inventore
                    commodi id minus, dolor nisi`
    },
    {
      title:"Lorem ipsum dolor, sit amet consectetur",
      paragraph:`
        nisi perspiciatis distinctio dolorum. adipisicing elit.
                    Veritatis rem, facere quas inventore commodi id minus, dolor
                    nisi officiis ipsa eligendi beatae modi necessitatibus eius
                    at non ipsum, recusandae suscipit!
      `
    },
    {
      title:"Lorem ipsum dolor, sit amet consectetur",
      paragraph:`
        nisi perspiciatis distinctio dolorum. adipisicing elit.
                    Veritatis rem, facere quas inventore commodi id minus, dolor
                    nisi officiis ipsa eligendi beatae modi necessitatibus eius
                    at non ipsum, recusandae suscipit!
      `
    }
    ,
    {
      title:"Lorem ipsum dolor, sit amet consectetur",
      paragraph:`
        nisi perspiciatis distinctio dolorum. adipisicing elit.
                    Veritatis rem, facere quas inventore commodi id minus, dolor
                    nisi officiis ipsa eligendi beatae modi necessitatibus eius
                    at non ipsum, recusandae suscipit!
      `
    }
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

  const handleChange = (e)=> setFormData({...formData,[e.target.name]:e.target.value})
  return (
    <>
      <div id="contact" className="flex pb-5 flex-col">
        <div className=" ps-[5.333vh] flex w-full h-[60.333vh]">
          <div className="max-w-[32.222vh] w-full h-full">
            <img className=" ml-[2.222vh] mt-[10.222vh] w-full max-w-[22.222vh]" src={LA} alt="" />

            <div className=" mt-[6.111vh] text-[1.333vh] text-[#5F8F93]">
              <h2 >Contact</h2>
              <div className="flex gap-[1.333vh]">
                <div className="w-[0.222vh] bg-[#5F8F93]"></div>
                <div className="">
                  <p>
                  +971 52 650 4080 [ ] <br />
                  +971 52 650 4080 <br />
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
            <img className="object-cover w-full min-h-[200px]  h-full" src={img9} alt="" />
          </div>
        </div>
        <div className=" ps-[5.333vh]">
          <h3 className="m-[3.111vh]">
            Client Testimonies
          </h3>


          <div className="flex justify-between pe-[3.556vh]">
            <div className="">
              <div className="max-w-[60vh] w-full h-[22vh] p-[0.889vh] bg-[#5F8F93]">
                <div className="w-full h-full bg-white rounded p-[1.778vh] text-[1.333vh]">
                  <span>
                    {testimonials[index-1]?.title}
                  </span>
                  <p >
                    {testimonials[index-1]?.paragraph}
                  </p>
                   
                   <div className="flex items-center justify-center ">

              <img onClick={incrementIndex} className='w-[2.222vh] h-[2.222vh]' src={images.nextSlide} alt="" />
                   </div>

                </div>
              </div>
              <div className="max-w-[60vh] w-full h-[21.111vh]  px-[0.889vh] pt-0 bg-[#5F8F93]">
                <div className="w-full h-full bg-white rounded-b-none rounded-t p-[1.778vh] text-[1.333vh]">
              <div className="flex justify-center mb-1 items-center">
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
              <input name="name" onChange={handleChange} value={formData.name} type="text" placeholder="Name" className="text-[1.777vh]  w-full h-[4.999vh] outline-none px-[1.0vh] rounded mt-[1.5vh]" />
              <input  name="mobileNumber" onChange={handleChange} value={formData.mobileNumber} type="number" placeholder="Mobile no." className="text-[1.777vh]  w-full h-[4.999vh] outline-none px-[1.0vh] rounded mt-[1.5vh]" />
              <input name="email" onChange={handleChange} value={formData.email} type="email" placeholder="Email ID" className="text-[1.777vh]  w-full h-[4.999vh] outline-none px-[1.0vh] rounded mt-[1.5vh]" />
              <textarea name="message" onChange={handleChange} value={formData.message} placeholder="Message" className="text-[1.777vh]  w-full h-[17.999vh] outline-none px-[1.0vh] rounded mt-[1.5vh]"></textarea>
              <div className="flex justify-between text-white text-[2vh]">
                <input type="submit" value='Sent' />
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
