import React from 'react'
import Link from "next/link";
const VerificationPage = () => {
  return (
      <div className="flex justify-center items-center min-h-screen bg-slate-100 p-6">
      <div className="flex flex-col items-center bg-white shadow-2xl rounded-lg p-8 max-w-md text-center">
        <svg
          className="w-16 h-16 text-green-500 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <h1 className="text-2xl font-semibold mb-2 text-green-700">Email Verified Successfully!</h1>
        <p className="text-gray-600 mb-6">Thank you for verifying your email. You can now proceed to login or access your account.</p>
        <Link
          href="/login"  // <-- update this path to your actual login page URL
          className="inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Click here to login
        </Link>
      </div>
    </div>
  )
}

export default VerificationPage