import { Instagram, Mail, Phone, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer