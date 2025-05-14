"use client";
import { useSendEmailVerificationMutation } from "@/state/api";
import React, { useState, FormEvent, ChangeEvent } from "react";

const SendVerificationPage = () => {
  const [sendverification] = useSendEmailVerificationMutation();
  const [email, setEmail] = useState("");
  const [message,setMessage] = useState("")
  const [formData, setFormData] = useState<UserFormData>({
    email: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   try {
      const res = await sendverification(formData).unwrap();
      
      
    } catch (err: any) {
      if (err?.data?.detail) {
        setMessage({ text: err.data.detail, type: "error" });
      } else {
        setMessage({
          text: "An unexpected error occurred. Please try again.",
          type: "error",
        });
        console.log("Registration error:", err);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          Send Verification Email
        </h2>
        {
          /**<p className="text-gray-600 mb-6">
          Enter your email to receive a verification link.
        </p> */
        }
        
         {
          message && <p className="text-green-700 font-medium mb-6">
          {message}
        </p>
         }
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          <button
            type="submit"
            
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
          >
            Send Verification
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendVerificationPage;
