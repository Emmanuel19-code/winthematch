import { Instagram, Mail, Phone, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-teal-600 to-teal-800 text-white pt-12 pb-6 px-4">
      {/* Stats Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-10">
        {[
          { count: 0, label: "Subscribed Clients" },
          { count: 0, label: "Predictions" },
          { count: 0, label: "Satisfied Clients" },
        ].map(({ count, label }, i) => (
          <div key={i}>
            <p className="text-4xl font-bold">{count}</p>
            <p className="text-sm text-gray-200 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Contact + Socials */}
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-col sm:flex-row sm:space-x-12 space-y-6 sm:space-y-0 text-center">
          <div>
            <p className="text-lg font-semibold flex items-center justify-center space-x-2">
              <Mail size={18} />
              <span>Email Us</span>
            </p>
            <a
              href="mailto:enochhood69@gmail.com"
              className="text-sm text-gray-200 hover:underline"
            >
              enochhood69@gmail.com
            </a>
          </div>

          <div>
            <p className="text-lg font-semibold flex items-center justify-center space-x-2">
              <Phone size={18} />
              <span>Get In Touch</span>
            </p>
            <a
              href="tel:+233559854849"
              className="text-sm text-gray-200 hover:underline"
            >
              +233 559 854 849
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="text-white hover:text-teal-300 transition" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="text-white hover:text-teal-300 transition" />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-teal-400 mt-10 pt-6 text-center text-sm space-y-2">
        <p>© 2025 winthematch. All rights reserved.</p>
        <div className="flex justify-center space-x-4 text-gray-200">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
        </div>
        <p className="text-gray-300">Powered by <span className="font-semibold">winthematch</span></p>
      </div>
    </footer>
  );
};

export default Footer;
