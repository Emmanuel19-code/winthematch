import React from 'react'

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl">
        {/* Left Image or Logo Area */}
        <div
          className="md:w-1/2 bg-cover bg-center hidden md:flex items-center justify-center p-6"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?auto=format&fit=crop&w=800&q=80)",
          }}
        >
          <div className="text-white text-3xl font-bold">WIN THE MATCH</div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-6 text-center">
            
            <h2 className="text-2xl font-bold text-green-700">
              Sign up to Join WIN THE MATCH
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              All fields are required
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="eg. Lionel Messi"
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
                placeholder="eg. 233XXXXXXXXX"
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
                placeholder="eg. youremail@email.com"
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
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  value="Ghana"
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
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
              className="w-full bg-green-700 text-white font-semibold py-2 rounded-lg hover:bg-green-800 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="#" className="text-green-700 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage