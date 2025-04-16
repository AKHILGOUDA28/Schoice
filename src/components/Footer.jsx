// src/components/Footer.jsx
import React from 'react';
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center space-y-4">

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-6 text-2xl">
          <a href="mailto:nanihello57@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaEnvelope />
          </a>
          <a href="https://t.me/schoice3" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTelegramPlane />
          </a>
          <a href="https://whatsapp.com/channel/0029Vb5Kon39hXF5GlnX7q30" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/sdealspro?igsh=MW9vc2s5Z2VucHc3Nw==" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
        </div>

        {/* Email & Copyright */}
        <div className="text-sm space-y-1">
          <p>📧 Email: nanihello57@gmail.com</p>
          <p>© {new Date().getFullYear()} Schoice Affiliate Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
