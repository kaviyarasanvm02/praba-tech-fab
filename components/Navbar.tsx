"use strict";
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ];

  const isHome = pathname === "/";
  const shouldStyleHeader = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-[38px] left-0 right-0 z-50 transition-all duration-350 bg-slate-950/90 backdrop-blur-md border-b border-orange-500/20 shadow-lg shadow-black/25 ${shouldStyleHeader
          ? "py-2.5"
          : "py-3"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 text-white group focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-lg outline-none"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white shrink-0 border border-slate-800 transition-all duration-300 ring-2 ring-orange-500/40 group-hover:ring-orange-500 group-hover:scale-105 logo-pulse">
                <img
                  src="/logo.jpeg"
                  alt="Praba Tech Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-black tracking-wider block leading-none text-white">PRABA TECH FAB</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  STEEL SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1 relative">
              {navLinks.map(link => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg ${isActive ? "text-orange-500 font-bold" : "text-slate-300 hover:text-white"
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-[-4px] left-4 right-4 h-[2px] bg-orange-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions / CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full text-sm shadow-md hover:shadow-orange-500/20 active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 outline-none group"
              >
                <span className="absolute -inset-1 rounded-full bg-orange-500/30 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                Get Quote
                <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 outline-none"
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Menu className={`absolute w-6 h-6 transition-all duration-300 ${isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`} />
                <X className={`absolute w-6 h-6 transition-all duration-300 ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} />
              </div>
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Drawer (Full Height Sliding Side Sheet) */}
      <div
        className={`fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-80 max-w-full h-full bg-slate-900 border-l border-slate-800 p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 text-white"
              >
                <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white shrink-0">
                  <img
                    src="/logo.jpeg"
                    alt="Praba Tech Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-base font-black tracking-wider block leading-none">PRABA TECH FAB</span>
                  <span className="text-[9px] text-orange-500 font-bold tracking-widest uppercase">STEEL SOLUTIONS</span>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-orange-500 outline-none"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map(link => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3.5 rounded-xl text-sm font-bold transition-all ${isActive ? "bg-orange-500/10 text-orange-400" : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center font-extrabold rounded-2xl text-sm block hover:from-orange-600 hover:to-orange-700 transition-colors shadow-lg shadow-orange-500/10"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes logoPulse {
          0%, 100% { box-shadow: 0 0 0 2px rgba(249,115,22,0.4); }
          50% { box-shadow: 0 0 0 5px rgba(249,115,22,0.6); }
        }
        .logo-pulse:hover {
          animation: logoPulse 1.8s infinite ease-in-out;
        }
      `}</style>
    </>
  );
}
