"use strict";
"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, PhoneCall } from "lucide-react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[80] flex flex-col gap-3.5 items-center pointer-events-none">
      {/* WhatsApp Link (WhatsApp icon represented as PhoneCall with customized branding color) */}
      <a
        href="https://wa.me/919894737363"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Praba Tech on WhatsApp"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 pointer-events-auto relative group focus-visible:ring-4 focus-visible:ring-emerald-300 outline-none"
      >
        <span className="absolute -inset-1.5 rounded-full bg-emerald-500/20 animate-ping opacity-60 pointer-events-none" />
        <PhoneCall className="w-5.5 h-5.5 animate-[pulse_2s_infinite]" />
        
        {/* Tooltip */}
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none border border-slate-800">
          Chat on WhatsApp
        </span>
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of the page"
        className={`w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-lg transition-all duration-350 transform pointer-events-auto active:scale-95 focus-visible:ring-4 focus-visible:ring-orange-300 outline-none ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5.5 h-5.5" />
      </button>
    </div>
  );
}
