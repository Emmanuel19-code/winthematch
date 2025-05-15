"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { useRegisterUserMutation } from "@/state/api";
import { useRouter } from "next/navigation";
import { ArrowLeftCircle } from "lucide-react";
import Image from "next/image";
type UserFormData = {
  fullname: string;
  mobile_number: string;
  email: string;
  password: string;
  confirm_password: string;
};

const RegisterPage = () => {
  const [createUser, { isLoading }] = useRegisterUserMutation();
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
  const [formData, setFormData] = useState<UserFormData>({
    fullname: "",
    mobile_number: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      setMessage({ text: "Passwords do not match", type: "error" });
      return;
    }

    try {
      const res = await createUser(formData).unwrap();
      setMessage({ text: "User created successfully!", type: "success" });
      router.push("/sendverification");
    } catch (err: any) {
      if (err?.data?.detail) {
        setMessage({ text: err.data.detail, type: "error" });
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
    <div className="flex justify-center items-center min-h-screen bg-slate-100 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded overflow-hidden w-full max-w-5xl">
        {/* Left Image */}
        <div
          className="md:w-1/2 bg-cover bg-center hidden md:flex items-center justify-center p-6"
          style={{
            backgroundImage: "url('/winthematch.png')",
          }}
        ></div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8">
          {/* Back to Home Link */}
          <div className="mb-4">
            <Link
              href="/"
              className="text-green-700 flex flex-row items-center space-x-1 hover:underline text-sm font-semibold"
            >
              <ArrowLeftCircle />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Optional logo or banner for mobile */}
          <div className="md:hidden mb-6 flex justify-center">
            <Image
              src="/winthematch.png"
              alt="WIN THE MATCH"
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
          </div>

          <div className="mb-6 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-green-700">
              Sign up to Join WIN THE MATCH
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              All fields are required
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

          <form className="space-y-4" onSubmit={handleCreateUser}>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="eg. Lionel Messi"
                onChange={handleChange}
                value={formData.fullname}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Mobile Number
              </label>
              <input
                type="text"
                name="mobile_number"
                placeholder="eg. 233XXXXXXXXX"
                onChange={handleChange}
                value={formData.mobile_number}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="eg. youremail@email.com"
                onChange={handleChange}
                value={formData.email}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Repeat Password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  onChange={handleChange}
                  value={formData.confirm_password}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-2 flex-col sm:flex-row">
              <input type="checkbox" required className="accent-green-600" />
              <span className="text-sm text-gray-700">
                I am 18 years and above & I agree to the
                <a href="#" className="text-green-700 underline ml-1">
                  Terms and Conditions
                </a>
                .
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-700 text-white font-semibold py-2 rounded-lg hover:bg-green-800 transition"
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-green-700 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
