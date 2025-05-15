import Link from "next/link";
import React from "react";

const FailVerificationPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 p-6">
      <div className="flex flex-col items-center bg-white shadow-2xl rounded-lg p-8 max-w-md text-center">
        <svg
          className="w-16 h-16 text-red-500 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h1 className="text-2xl font-semibold mb-2 text-red-700">
          Verification Failed
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn't verify your email. The link may have expired or is
          invalid.
        </p>
        <Link
          href="/sendverification" // <-- update this path to your actual resend verification page
          className="inline-block px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Resend Verification Email
        </Link>
      </div>
    </div>
  );
};

export default FailVerificationPage;
