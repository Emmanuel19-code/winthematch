import { Instagram, Mail, Phone, Twitter } from "lucide-react";



export default function Home() {
  return (
    <div className="w-full">
      {/* Top Banner with Date */}
      <div className="bg-teal-600 p-2">
        <p className="text-white font-medium">3 MAY 2025</p>
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-0 z-20 bg-black p-4 flex items-center justify-between  transition-all duration-300">
        {/* Logo or Title */}
        <h4 className="text-white text-lg font-semibold">WIN THE MATCH</h4>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-10">
          <li className="text-white cursor-pointer ">HOME</li>
          <li className="text-white cursor-pointer ">ABOUT US</li>
          <li className="text-white cursor-pointer ">VIP PAGE</li>
          <li className="text-white cursor-pointer ">CONTACT US</li>
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-white hover:text-teal-500">
            LOGIN
          </button>
          <button className="px-4 py-2 bg-white text-teal-500 border border-teal-500 rounded hover:bg-gray-100">
            SIGN UP
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[700px] bg-[url('/african.jpg')] bg-black/40 bg-cover p-4 bg-center bg-no-repeat">
        <div className="w-full h-full mt-4 ">
          <h3 className="text-white text-6xl font-bold w-96">
            Welcome to Win The Match Odds Hub
          </h3>
          <p className="text-white font-medium">
            The Ultimate Sports Prediction Expert
          </p>
          <div className="mt-4">
            <button className="mr-4 bg-teal-500 py-2 w-48 cursor-pointer rounded text-white">
              JOIN VIP PAGE
            </button>
            <button className="w-72 bg-teal-500 py-2 cursor-pointer rounded text-white">
              JOIN TELEGRAM CHANNEL
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 items-center">
        <div>
          <p className="text-center font-bold text-2xl">FREE PREDICTIONS</p>
        </div>
        <div className="flex flex-row space-x-10 mt-4">
          <div>
            <div className="bg-slate-600 p-3.5 rounded">
              <p className="text-white">
                NB: These free Predictions are limited. Log In or Sign Up to
                enjoy more Free slips with higher returns
              </p>
            </div>
            <div className="mt-4 mb-4">
              <div className="w-96">
                <p className="bg-teal-500 rounded py-2.5 font-medium hover:bg-gray-800 text-center cursor-pointer text-white">
                  SIGN UP OR LOGIN FOR FREE EXTRA TIPS
                </p>
              </div>
            </div>
          </div>

          <div>
            {/*Popular leagues */}
            <div className="bg-white w-80 h-72  shadow-2xl">
              <p className="bg-teal-500 p-2 text-center text-white">
                POPULAR LEAGUES
              </p>
              <ul className="p-2">
                <li className="cursor-pointer hover:text-blue-500">
                  English Premier League
                </li>
                <li className="cursor-pointer hover:text-blue-500">
                  Spanish La Liga
                </li>
                <li className="cursor-pointer hover:text-blue-500">
                  Bundesliga
                </li>
                <li className="cursor-pointer hover:text-blue-500">Ligue 1</li>
                <li className="cursor-pointer hover:text-blue-500">Serie A</li>
                <li className="cursor-pointer hover:text-blue-500">
                  Eredivise
                </li>
                <li className="cursor-pointer hover:text-blue-500">
                  UEFA Champions League
                </li>
                <li className="cursor-pointer hover:text-blue-500">
                  UEFA Europa League
                </li>
                <li className="cursor-pointer hover:text-blue-500">
                  UEFA Europa Conference League
                </li>
              </ul>
            </div>
            {/*Popular Advise */}
            <div className="w-80 h-72 mt-4 bg-teal-500 rounded">
              <p className=" border-b-2 border-teal-700 p-2  text-white">
                Tipster Advise
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full bg-gradient-to-r from-teal-500 to-teal-700 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold">154,154</p>
            <p className="text-sm text-gray-200 mt-1">Subscribed Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold">40,560</p>
            <p className="text-sm text-gray-200 mt-1">Predictions</p>
          </div>
          <div>
            <p className="text-3xl font-bold">103,550</p>
            <p className="text-sm text-gray-200 mt-1">Satisfied Clients</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-8 space-y-6">
          <div className="flex flex-row space-x-12">
            <div className="text-center">
              <p className="text-lg font-semibold flex items-center justify-center space-x-2">
                <Mail size={18} />
                <span>Email Us</span>
              </p>
              <a
                href="mailto:enochhood69@gmail.com"
                className="text-sm text-gray-200"
              >
                enochhood69@gmail.com
              </a>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold flex items-center justify-center space-x-2">
                <Phone size={18} />
                <span>Get In Touch</span>
              </p>
              <a href="tel:+233559854849" className="text-sm text-gray-200">
                +233 559 854 849
              </a>
            </div>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-white hover:text-teal-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="text-white hover:text-teal-300" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
