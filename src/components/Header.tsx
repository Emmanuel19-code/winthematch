"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/vip", label: "VIP PAGE" },
    { href: "/contact", label: "CONTACT US" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold tracking-wide">WIN THE MATCH</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 items-center">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className={`cursor-pointer transition-colors duration-200 ${
                  pathname === href ? "text-teal-500" : "text-white"
                } hover:text-teal-500`}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-white hover:text-teal-500 transition"
            onClick={() => router.push("/login")}
          >
            LOGIN
          </button>
          <button
            className="px-4 py-2 bg-white text-teal-500 rounded hover:bg-gray-100 transition"
            onClick={() => router.push("/register")}
          >
            SIGN UP
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 pb-4">
          <ul className="space-y-4">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>
                  <span
                    className={`block py-2 border-b border-gray-700 ${
                      pathname === href ? "text-teal-500" : "text-white"
                    } hover:text-teal-500 transition`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <button
                className="w-full text-left px-4 py-2 bg-teal-500 text-white rounded hover:bg-white hover:text-teal-500 transition"
                onClick={() => {
                  router.push("/login");
                  setMenuOpen(false);
                }}
              >
                LOGIN
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 bg-white text-teal-500 rounded hover:bg-gray-100 transition"
                onClick={() => {
                  router.push("/register");
                  setMenuOpen(false);
                }}
              >
                SIGN UP
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
