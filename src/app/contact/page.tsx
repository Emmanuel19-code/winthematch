import DateGenerator from "@/components/DateGenerator";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import { ChevronRight } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full h-full">
     <DateGenerator/>
      <Header />
      <div className="bg-[url('/telephonetwo.jpg')] bg-cover bg-center p-4 w-full h-48 relative">
        <div className="absolute inset-0 " />
        {/* Optional dark overlay */}
        <div className="relative z-10 mt-6">
          <h4 className="text-white text-3xl font-medium">CONTACT</h4>
          <div className="flex flex-row items-center space-x-2">
            <h4 className="text-sm text-white">HOME</h4>
            <ChevronRight className="w-4 text-teal-400" />
            <p className="text-sm text-teal-500 ">CONTACT</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center mt-10">
          <h4 className="text-3xl font-bold">GET IN TOUCH</h4>
          <p className="w-1/2 text-center mt-4">
            WinTheMatch is the ultimate sports prediction platform, delivering
            expert insights and high-stakes betting opportunities across top
            bookmakers and exchanges worldwide
          </p>
        </div>
      </div>
      <div className="p-6 flex flex-row justify-center">
        <div className="bg-white shadow p-2 w-1/2">
          <div className="m-2">
            <h4 className="text-sm m-2">FULL NAME</h4>
            <input
              type="text"
              placeholder="Ex: John Doe"
              className="m-2 py-2 border-b w-full outline-none border-gray-400"
            />
          </div>
          <div className="m-2">
            <h4 className="text-sm m-2">PHONE NO</h4>
            <input
              type="text"
              placeholder="+233 xxx xxx xxx"
              className="m-2 py-2 border-b w-full outline-none border-gray-400"
            />
          </div>
          <div className="m-2">
            <h4 className="text-sm m-2">EMAIL</h4>
            <input
              type="text"
              placeholder="Ex: me@gmail.com"
              className="m-2 py-2 border-b w-full outline-none border-gray-400"
            />
          </div>
          <div className="m-2">
            <h4 className="text-sm m-2">SUBJECT</h4>
            <input
              type="text"
              placeholder="Ex: Service"
              className="m-2 py-2 border-b w-full outline-none border-gray-400"
            />
          </div>
          <div className="m-2">
            <h4 className="text-sm m-2">MESSAGE</h4>
            <input
              type="text"
              placeholder="Ex: Reset Password"
              className="m-2 py-2 border-b w-full outline-none border-gray-400"
            />
          </div>
          <button className="bg-teal-500 p-2 cursor-pointer text-white m-2.5 rounded w-28">
            SUBMIT
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
