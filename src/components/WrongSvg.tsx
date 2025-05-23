import React from 'react'

const WrongSvg = () => {
  return (
    <div className=" w-6 h-6 flex justify-center items-center rounded">
    <svg
      className="w-3 h-3 text-red-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  </div>
  )
}

export default WrongSvg