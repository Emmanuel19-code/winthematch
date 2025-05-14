"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { useLoginUserMutation } from "@/state/api";
const LoginPage = () => {
  const [loginUser,{isLoading}] = useLoginUserMutation();
  const [message, setMessage] = useState<{
      text: string;
      type: "success" | "error";
    } | null>(null);
  const [formData, setFormData] = useState<UserFormData>({
    email: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleLoginUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData).unwrap();
      setMessage({ text: "User created successfully!", type: "success" });
    } catch (err: any) {
      if (err?.data?.detail) {
        setMessage({ text: "Please make sure all details are correct", type: "error" });
      } else {
        setMessage({
          text: "An unexpected error occurred. Please try again.",
          type: "error",
        });
        console.error("Registration error:", err);
      }
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded overflow-hidden w-full max-w-4xl">
        {/* Left Banner / Image */}
        <div
          className="md:w-1/2 bg-cover bg-center hidden md:flex items-center justify-center p-6"
          style={{
            backgroundImage: "url('/winthematch.png')",
          }}
        ></div>

        {/* Right Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-6">
            <h4 className="text-green-700 text-2xl font-bold text-center">
              WIN THE MATCH
            </h4>
            <p className="text-center text-gray-600 mt-2">
              Log into your account to place your bets
            </p>
          </div>
          {message && (
            <div
              className={`mb-4 text-sm font-medium px-4 py-3 rounded ${
                message.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {message.text}
            </div>
          )}
          <form className="space-y-4" onSubmit={handleLoginUser}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name ="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="examplekofi@gmail.com"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange = {handleChange}
                value = {formData.password}
                placeholder="********"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-green-600" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-green-700 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-700 text-white font-semibold py-2 rounded-lg hover:bg-green-800 transition"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?
            <Link href="/register" className="text-green-700 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
