import React, { useState } from "react";
import backgroundImage from "../../assets/Img/Lumos Advisory Website Background_1.png";
import LA from "../../assets/Img/Lumos Advisory Logo-01.png";
import img9 from "../../assets/Img/pexels-photo-8297478.jpg";

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

  const handleChange = (e)=> setFormData({...formData,[e.target.name]:e.target.value})
  return (
    <>
      <div id="contact" className="flex flex-col h-screen">
        <div className="1200px:ps-12 flex w-full h-[300px] ">
          <div className="max-w-[290px] w-full h-full">
            <img className="ml-5 mt-5 w-full max-w-[200px]" src={LA} alt="" />

            <div className=" mt-10 text-[12px] text-teal-600">
              <h1 className="font-bold mb-2 text-[16px]">Contact</h1>
              <div className="flex gap-3">
                <div className="w-0.5 bg-teal-600"></div>
                <div className="">
                  <p>+971 52 650 4080 [ ]</p>
                  <p>+971 52 650 4080</p>
                  <p>info@lumosadvisory.me</p>
                  <p>
                    Meydan Grandstand, 6th floor, <br />
                    Meydan Road, Nad Al Sheba, <br />
                    Dubai, U.A.E
                  </p>
                  <p>@lumos.advisory</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="bg-black w-1.5 h-[65%]">l</div>
            <img className="object-cover w-full h-full" src={img9} alt="" />
          </div>
        </div>
        <div className="1200px:ps-12">
          <h1 className="text-teal-600 m-2 mac-book:m-4 text-[16px] font-semibold">
            Client Testimonies
          </h1>
          <div className="flex justify-between pe-8">
            <div className="">
              <div className="max-w-[450px] w-full h-[180px] p-2 bg-teal-600">
                <div className="w-full text-emerald-600 h-full bg-white rounded p-4 text-[12px]">
                  <h4 className="mb-3 text-[12px] font-bold overflow-hidden">
                    Lorem ipsum dolor, sit amet consectetur{" "}
                  </h4>
                  <p className="text-[12px]">
                    {" "}
                    reiciendis minima eius dicta laudantium earum officiis
                    possimus, aliquam quos ratione incidunt non nobis enim.
                    Reprehenderit nisi perspiciatis distinctio dolorum.
                    adipisicing elit. Veritatis rem, facere quas inventore
                    commodi id minus, dolor nisi officiis ipsa eligendi beatae
                    modi necessitatibus eius at non ipsum, recusandae suscipit!
                  </p>
                </div>
              </div>
              <div className="max-w-[450px] w-full max-h-[100px] h-full px-2 pt-0 bg-teal-600">
                <div className="w-full text-emerald-600 h-full bg-white rounded-b-none rounded-t p-4 text-[12px]">
                  <h4 className="mb-0 text-[12px] font-bold overflow-hidden">
                    Lorem ipsum dolor, sit amet consectetur{" "}
                  </h4>
                  <p className="text-[12px]">
                    {" "}
                    nisi perspiciatis distinctio dolorum. adipisicing elit.
                    Veritatis rem, facere quas inventore commodi id minus, dolor
                    nisi officiis ipsa eligendi beatae modi necessitatibus eius
                    at non ipsum, recusandae suscipit!
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-[450px] w-full h-auto bg-teal-600 px-3">
              <input name="name" onChange={handleChange} value={formData.name} type="text" placeholder="Name" className="text-[12px]  w-full h-[25px] outline-none px-2 rounded mt-2" />
              <input  name="mobileNumber" onChange={handleChange} value={formData.mobileNumber} type="number" placeholder="Mobile no." className="text-[12px]  w-full h-[25px] outline-none px-3 rounded mt-2" />
              <input name="email" onChange={handleChange} value={formData.email} type="email" placeholder="Email ID" className="text-[12px]  w-full h-[25px] outline-none px-3 rounded mt-2" />
              <textarea name="message" onChange={handleChange} value={formData.message} placeholder="Message" className="text-[12px]  w-full h-[140px] outline-none px-3 rounded mt-2"></textarea>
              <div className="flex justify-between text-white text-sm">
                <button type="submit"> Sent</button>
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
