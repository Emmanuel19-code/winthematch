"use client";
import TickSvg from "@/components/TickSvg";
import WrongSvg from "@/components/WrongSvg";
import { ChevronDown, ChevronUp, Instagram, Mail, Phone,  Twitter } from "lucide-react";
import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';



export default function Home() {
  const [previousWon, setPreviousWon] = useState(false);
  const [hotOdds,setHotOdds] = useState(false);
  const [midNight,setMidNight] = useState(false)
  const pathname = usePathname();
  const router = useRouter();
  
  return (
    <div className="w-full h-full">
      {/* Top Banner with Date */}
      <div className="bg-teal-600 p-2">
        <p className="text-white font-medium">3 MAY 2025</p>
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-0 z-20 bg-black p-4 flex items-center justify-between  transition-all duration-300">
        {/* Logo or Title */}
        <h4 className="text-white text-lg font-semibold">WIN THE MATCH</h4>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-10">
          <Link href="/">
          <li className={` ${pathname == "/"?"text-teal-700":"text-white"} cursor-pointer hover:text-teal-700`}>
            HOME
          </li>
          </Link>
         
          <li className="text-white cursor-pointer hover:text-teal-700">
            ABOUT US
          </li>
          <li className="text-white cursor-pointer hover:text-teal-700">
            VIP PAGE
          </li>
          <Link href={"/contact"}>
          <li className={` ${pathname == "/contact"?"text-teal-700":"text-white"} cursor-pointer hover:text-teal-700`}>
            CONTACT US
          </li>
          </Link>
         
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-white hover:text-teal-500" onClick={()=>router.push("/login")}>
            LOGIN
          </button>
          <button className="px-4 py-2 bg-white text-teal-500 rounded hover:bg-gray-100" onClick={()=>router.push("/register")}>
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
          <div className="mt-4 md:flex flex-row items-center">
            <div className="mr-4 text-center bg-teal-500 py-2 w-48 cursor-pointer rounded hover:bg-white hover:text-teal-500 text-white">
              JOIN VIP PAGE
            </div>
            <div className="w-72 mt-2 md:mt-0  bg-teal-500 py-2 cursor-pointer rounded hover:bg-white hover:text-teal-500 text-white">
              <p className="text-center">JOIN TELEGRAM CHANNEL</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 items-center">
        <div>
          <p className="text-center font-bold text-2xl">FREE PREDICTIONS</p>
        </div>
        <div className="md:flex md:flex-row space-x-10 mt-4">
          <div className="">
            <div className="bg-black opacity-70 p-3.5 ">
              <p className="text-white">
                NB: These free Predictions are limited. Log In or Sign Up to
                enjoy more Free slips with higher returns
              </p>
            </div>
            <div className="bg-[#20c997] mt-5 w-full   rounded">
              <div
                className="p-3  cursor-pointer flex flex-row items-center justify-between"
                onClick={() => setPreviousWon(!previousWon)}
              >
                <p className="text-white font-bold">
                  PREVIOUSLY WON SLIPS <span>(Click to View)</span>
                </p>
                {
                  previousWon ? <ChevronUp className="text-gray-300"/> : <ChevronDown className="text-gray-300" />
                }
                
              </div>
              {/*Previous won tips */}
              {previousWon && (
                <div className="mt-3 ">
                  <div className="bg-white rounded m-0.5 p-1.5">
                    <div></div>
                    <hr className="mt-5 text-gray-300" />
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                      <thead className=" text-gray-900  mt-3  ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            League
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Teams
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Tips
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Results
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-200 border-b border-gray-200">
                          <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                          >
                            La Liga
                          </th>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Espanyol vs Getafe
                          </td>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Home or Draw
                          </td>
                          <td className="px-6 py-4">
                            <div className="">
                              <TickSvg />
                            </div>
                          </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-200 border-b border-gray-200">
                          <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                          >
                            Ligue 1
                          </th>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Rennes vs FC Nantes
                          </td>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Home or Draw
                          </td>
                          <td className="px-6 py-4">
                            <div className="">
                              <TickSvg />
                            </div>
                          </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-100">
                          <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                          >
                            Liga Portugal
                          </th>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Rio Ave FC vs Santa Clara Azores
                          </td>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Home or Away
                          </td>
                          <td className="px-6 py-4">
                            <div className="">
                              <WrongSvg />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              <div className="p-3 hover:transparent flex justify-between flex-row items-center  cursor-pointer" onClick={()=>setHotOdds(!hotOdds)}>
                <p className="text-white font-bold">
                  FREE HOT ODDS
                </p>
                {
                  hotOdds ? <ChevronUp className="text-gray-300"/> : <ChevronDown className="text-gray-300" />
                }
                
              </div>
              {
                 hotOdds && (
                  <div className="mt-3">
                  <div className="bg-white rounded m-0.5 p-1.5">
                    <div></div>
                    <hr className="mt-5 text-gray-300" />
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                      <thead className=" text-gray-900  mt-3  ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            League
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Teams
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Tips
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Results
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-200 border-b border-gray-200">
                          <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                          >
                            La Liga
                          </th>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Espanyol vs Getafe
                          </td>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Home or Draw
                          </td>
                          <td className="px-6 py-2">
                            <div className="">
                              <TickSvg />
                            </div>
                          </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-200 border-b border-gray-200">
                          <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                          >
                            Ligue 1
                          </th>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Rennes vs FC Nantes
                          </td>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Home or Draw
                          </td>
                          <td className="px-6 py-2">
                            <div className="">
                              <TickSvg />
                            </div>
                          </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-100">
                          <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                          >
                            Liga Portugal
                          </th>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Rio Ave FC vs Santa Clara Azores
                          </td>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Home or Away
                          </td>
                          <td className="px-6 py-2">
                            <div className="">
                              <WrongSvg />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-5 mb-2 flex justify-center items-center">
                        <div className="flex flex-row items-center justify-between rounded-lg bg-[#20c997] w-96 p-2">
                           <p className="text-white text-sm"> BET DIRECTLY ON SPORTYBET</p>
                            |
                            <p className="text-white">CODE:<span>1231236</span></p>
                        </div>
                  </div>
                  </div>
                  
                </div>
                 )
              }
              <div className="p-3 flex flex-row items-center justify-between hover:transparent cursor-pointer" onClick={()=>setMidNight(!midNight)}>
                <p className="text-white font-bold">
                  MIDNIGHT ODDS
                </p>
                {
                  midNight ? <ChevronUp className="text-gray-300"/> : <ChevronDown className="text-gray-300" />
                }
                
              </div>
              {
                 midNight && (
                  <div className="mt-4">
                  <div className="bg-white rounded   m-0.5 p-1.5">
                    <div></div>
                    <hr className="mt-5 text-gray-300" />
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                      <thead className=" text-gray-900  mt-3  ">
                        <tr>
                          <th scope="col" className="px-6 py-2">
                            League
                          </th>
                          <th scope="col" className="px-6 py-2">
                            Teams
                          </th>
                          <th scope="col" className="px-6 py-2">
                            Tips
                          </th>
                          <th scope="col" className="px-6 py-2">
                            Results
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-200 border-b border-gray-200">
                          <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                          >
                            La Liga
                          </th>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Espanyol vs Getafe
                          </td>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Home or Draw
                          </td>
                          <td className="px-6 py-4">
                            <div className="">
                              <TickSvg />
                            </div>
                          </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-200 border-b border-gray-200">
                          <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                          >
                            Ligue 1
                          </th>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Rennes vs FC Nantes
                          </td>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Home or Draw
                          </td>
                          <td className="px-6 py-2">
                            <div className="">
                              <TickSvg />
                            </div>
                          </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-100">
                          <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                          >
                            Liga Portugal
                          </th>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Rio Ave FC vs Santa Clara Azores
                          </td>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Home or Away
                          </td>
                          <td className="px-6 py-2">
                            <div className="">
                              <WrongSvg />
                            </div>
                          </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-100">
                          <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                          >
                            Liga Portugal
                          </th>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Rio Ave FC vs Santa Clara Azores
                          </td>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Home or Away
                          </td>
                          <td className="px-6 py-2">
                            <div className="">
                              <WrongSvg />
                            </div>
                          </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-100">
                          <th
                            scope="row"
                            className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                          >
                            Liga Portugal
                          </th>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Rio Ave FC vs Santa Clara Azores
                          </td>
                          <td className="px-6 py-2 font-medium text-gray-900">
                            Home or Away
                          </td>
                          <td className="px-6 py-2">
                            <div className="">
                              <WrongSvg />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                 )
              }
              <div className=" py-0.5">
                 
              </div>
            </div>
            <div className="mt-6 mb-4">
              <div className="w-96" onClick={()=>router.push("/login")}>
                <p className="bg-teal-500 rounded py-2.5 font-medium hover:bg-gray-800 text-center cursor-pointer text-white">
                  SIGN UP OR LOGIN FOR FREE EXTRA TIPS
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            {/*Popular leagues */}
            <div className="bg-white w-80 h-72  shadow-2xl">
              <p className="bg-[#20c997] p-2 text-center text-white">
                POPULAR LEAGUES
              </p>
              <ul className="p-2 list-disc list-inside">
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
            <div className="w-80 h-72 mt-4 bg-[#17a2b8] rounded">
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
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-200 mt-1">Subscribed Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-200 mt-1">Predictions</p>
          </div>
          <div>
            <p className="text-3xl font-bold">0</p>
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
                winthematch001@gmail.com
              </a>
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold flex items-center justify-center space-x-2">
                <Phone size={18} />
                <span>Get In Touch</span>
              </p>
              <a href="tel:+233559854849" className="text-sm text-gray-200">
                +233 53 045 1122
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
