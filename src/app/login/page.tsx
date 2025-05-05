import React from 'react'

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-4xl">
        {/* Left Banner / Image */}
        <div
          className="md:w-1/2 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1605283134472-685df9f7b166?auto=format&fit=crop&w=800&q=80)",
          }}
        >
          {/* You can replace the URL with a sports-related image */}
        </div>

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

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder='examplekofi@gmail.com'
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
                id="password"
                placeholder='********'
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
              className="w-full bg-green-700 text-white font-semibold py-2 rounded-lg hover:bg-green-800 transition"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?
            <a href="#" className="text-green-700 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage