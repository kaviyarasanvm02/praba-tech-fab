"use strict";
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const slides = [
    {
      subtitle: "CONSTRUCTION BUSINESS.",
      title: "We build something new and consistent.",
      description: "Praba Tech specializes in high-strength pre-engineered steel buildings, heavy structural fabrication, and turnkey logistics warehouses across Karur.",
      image: "/silhouette-factory-building.jpeg"
    },
    {
      subtitle: "PREMIUM STEEL SOLUTIONS.",
      title: "Engineered for maximum scale and safety.",
      description: "We manufacture heavy steel trusses, platforms, and mezzanine frames to international standards directly in our Karur workshop.",
      image: "/Industrial PEB Fabrication Shed.png"
    },
    {
      subtitle: "FAST-TRACK ERECTION.",
      title: "Rapid modular building solutions.",
      description: "Our experienced site alignment teams deploy safe rigging and bolting to complete structures within weeks.",
      image: "/Erection.png"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Grid overlay pattern */}
      <div className="absolute inset-0 bg-slate-950/10" />
      <div className="absolute inset-0 dark-grid-bg pointer-events-none opacity-10" />

      {/* Slide Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full flex justify-start">
        <div className="max-w-2xl bg-slate-950/30 backdrop-blur-lg border border-white/10 p-8 sm:p-12 lg:p-14 rounded-[2.5rem] shadow-2xl shadow-black/30 transition-all duration-500">
          {/* Slide Progress/Indicator */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-orange-500 font-black tracking-widest text-sm sm:text-base">
              0{current + 1}
            </span>
            <div className="w-16 h-[2px] bg-slate-800 relative rounded-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-orange-500 transition-all duration-500" 
                style={{ width: `${((current + 1) / slides.length) * 100}%` }}
              />
            </div>
            <span className="text-slate-400 font-bold text-xs tracking-wider">
              0{slides.length}
            </span>
          </div>

          <span className="text-orange-500 font-extrabold uppercase tracking-widest text-xs sm:text-sm block mb-4">
            {slides[current].subtitle}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.15]">
            {slides[current].title}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-medium">
            {slides[current].description}
          </p>

          <div>
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold rounded-xl transition-all duration-300 text-sm inline-flex items-center gap-1.5 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] outline-none"
            >
              Read Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Indicators */}
      <button
        onClick={handlePrev}
        className="absolute left-6 bottom-8 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 w-12 h-12 rounded-full border border-white/10 hover:border-orange-500/50 text-white flex items-center justify-center bg-white/5 hover:bg-orange-500 backdrop-blur-md transition-all duration-300 z-20 outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 bottom-8 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 w-12 h-12 rounded-full border border-white/10 hover:border-orange-500/50 text-white flex items-center justify-center bg-white/5 hover:bg-orange-500 backdrop-blur-md transition-all duration-300 z-20 outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        aria-label="Next slide"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Scroll indicator bullet dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex gap-2.5 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-350 ${
              idx === current ? "bg-orange-500 scale-125 w-6" : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
