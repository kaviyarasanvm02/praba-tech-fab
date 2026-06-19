"use strict";
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Plus,
  Minus,
  Sparkles,
  Zap,
  ShieldAlert,
  Award,
  Layers,
  ArrowUpRight
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 4);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const bestFeatures = [
    {
      title: "Quality Construction",
      desc: "We strictly adhere to AISC, AWS, and IS 800 codes to assure structural stability."
    },
    {
      title: "Fast-Track Delivery",
      desc: "Our pre-fabricated sections bolt together quickly, saving weeks of on-site labor."
    },
    {
      title: "Cost-Effective PEB",
      desc: "Optimized steel framing minimizes shipping bulk and concrete base dimensions."
    }
  ];

  const pricingPlans = [
    {
      name: "Standard Warehouse",
      price: "₹1,200",
      unit: "per Sq.ft",
      desc: "Perfect for basic storage, agricultural sheds, and inventory spaces.",
      features: [
        "Lightweight I-Beam Frames",
        "Single Skin Roofing sheets",
        "Standard Anchor bolt systems",
        "Wind load rating up to 140km/h"
      ]
    },
    {
      name: "Premium Factory",
      price: "₹1,650",
      unit: "per Sq.ft",
      desc: "Engineered for active manufacturing lines, machining bays, and FMCG packaging.",
      features: [
        "Medium-Heavy H-Beams",
        "Insulated Sandwich wall panels",
        "Overhead crane brackets (up to 10T)",
        "Turbo ventilators & skylights included"
      ]
    },
    {
      name: "Heavy Industrial Hangar",
      price: "₹2,200",
      unit: "per Sq.ft",
      desc: "Tailored for heavy assembly units, logistics complexes, and cold storages.",
      features: [
        "Heavy-duty built-up sections",
        "Sandwich PUF panel insulation",
        "Heavy crane supports (20T+)",
        "Seismic Zone III/IV wind compliance"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is the typical completion time for a warehouse building?",
      answer: "A standard 50,000 Sq.ft PEB warehouse requires approximately 10 to 12 weeks for fabrication inside our Karur yard, followed by 4 to 6 weeks for complete site erection."
    },
    {
      question: "Do you supply customized heavy steel fabrication?",
      answer: "Yes. In addition to standard PEB frames, we fabricate custom steel trusses, mezzanine floor framing, factory walkways, platforms, and heavy-duty built-up sections."
    },
    {
      question: "Which code standards does Prabatech follow?",
      answer: "All structural designs comply with IS 800 (Indian Standards), AISC (American Institute of Steel Construction), and AWS (American Welding Society) code rules."
    }
  ];

  const blogPosts = [
    {
      title: "Why PEB Is Replacing Traditional Concrete Warehouses",
      desc: "Explore how pre-engineered building frameworks reduce build costs by 30% and timeline durations by half.",
      date: "June 10, 2026",
      image: "/WhatsApp Image 2026-06-03 at 8.40.54 PM.jpeg"
    },
    {
      title: "Essential Design Rules For Heavy EOT Crane Integration",
      desc: "Learn why structural calculations must account for dynamic overhead crane vibrations and load brackets.",
      date: "May 28, 2026",
      image: "/WhatsApp Image 2026-06-03 at 8.40.57 PM.jpeg"
    },
    {
      title: "A Closer Look At Insulated Sandwich Panel Benefits",
      desc: "How Sandwiched PUF/Rockwool panels save HVAC energy consumption inside food storage environments.",
      date: "May 15, 2026",
      image: "/WhatsApp Image 2026-06-03 at 8.41.01 PM.jpeg"
    }
  ];

  return (
    <>
      {/* 1. Hero Section (Screenshot style: Left content, Right isometric) */}
      <HeroSection />

      {/* 2. Services Grid (Screenshot Style: Dark Blue backdrop, orange active card) */}
      <section className="bg-[#0b1426] py-20 text-white relative">
        <div className="absolute inset-0 dark-grid-bg opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-wider text-xs block mb-3">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Our Engineering & Fabrication Services
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We design, manufacture, and erect pre-engineered structures designed for reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Design & Engineering Service Card */}
            <div className="group bg-slate-900/40 backdrop-blur-md border border-slate-800/60 p-8 rounded-3xl flex flex-col justify-between h-80 transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent hover:shadow-2xl hover:shadow-orange-500/20 shadow-xl shadow-black/10">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 group-hover:bg-white/10 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Award className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Design & Engineering</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed group-hover:text-orange-100 transition-colors duration-300">
                  Structural load analysis, 3D modeling, detail shop drawings.
                </p>
              </div>
              <Link href="/services#design-engineering" className="inline-flex items-center text-xs font-bold gap-1 mt-4 text-orange-500 group-hover:text-white transition-colors duration-300 hover:underline">
                Read Details
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {services.map((service, idx) => (
              <div key={service.id} className="group bg-slate-900/40 backdrop-blur-md border border-slate-800/60 p-8 rounded-3xl flex flex-col justify-between h-80 transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent hover:shadow-2xl hover:shadow-orange-500/20 shadow-xl shadow-black/10">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 group-hover:bg-white/10 flex items-center justify-center mb-6 transition-colors duration-300">
                    <Zap className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed group-hover:text-orange-100 transition-colors duration-300">
                    {service.shortDescription}
                  </p>
                </div>
                <Link href={`/services#${service.id}`} className="inline-flex items-center text-xs font-bold gap-1 mt-4 text-orange-500 group-hover:text-white transition-colors duration-300 hover:underline">
                  Read Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Commercial (Screenshot Style: Left Circular Image Panel, Right Bullet Lists) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Panel with Rounded screenshot effect */}
            <div className="relative h-[350px] sm:h-[480px] w-full max-w-[500px] mx-auto rounded-full overflow-hidden border-8 border-slate-100 shadow-2xl">
              <Image
                src="/Pre-Engineered Buildings & Warehouse Construction.png"
                alt="Karur PEB Steel Factory Site Work"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Bullet Info */}
            <div className="space-y-6">
              <span className="text-orange-500 font-bold uppercase tracking-wider text-xs block">
                About the Company
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Pre-Engineered Buildings & Warehouse Construction
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Praba Tech is a specialized steel fabrication company based in Karur. We deliver safe, economical, and fast-track structural solutions tailored to industrial, agricultural, and logistics spaces.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  "We strictly design to AISC & IS 800 building codes.",
                  "Precision fabrication ensures quick on-site bolt-together erection.",
                  "Overhead EOT crane supporting structures designed up to 50T.",
                  "High-tensile insulated roofing and PUF wall cladding systems."
                ].map((bullet, index) => (
                  <div key={index} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/10 text-sm transition-colors mt-6"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Projects Showcase (Screenshot Style: Headline, 4 Horizontal Cards, CTA) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-wider text-xs block mb-3">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Our Latest Completed And Running Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProjects.map(project => (
              <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-left">
                  <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest block mb-1">
                    {project.category}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm truncate mb-2">{project.title}</h4>
                  <div className="flex justify-between items-center text-[11px] text-slate-500 border-t border-slate-100 pt-3">
                    <span>{project.location}</span>
                    <span>{project.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/10 text-sm transition-colors"
          >
            All Projects Portfolio
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* 5. Our Best Features (Screenshot Style: 6-block Grid Layout with Center Highlight) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-wider text-xs block mb-3">
              Why We Lead
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Our Best Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Block 1 */}
            <div className="relative h-64 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
              <Image
                src="/WhatsApp Image 2026-06-03 at 8.40.59 PM.jpeg"
                alt="Karur Truss Design"
                fill
                sizes="33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/40 flex items-end p-6">
                <h4 className="text-white font-bold text-base">Expert Steel Detailing</h4>
              </div>
            </div>

            {/* Block 2 (Highlighted Feature Badge) */}
            <div className="bg-[#0b1426] text-white p-8 rounded-3xl flex flex-col justify-center items-center text-center border border-slate-800 shadow-xl">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Erection</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Advanced rigging, strict leveling checks, and calibrated structural bolting.
              </p>
            </div>

            {/* Block 3 */}
            <div className="relative h-64 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
              <Image
                src="/WhatsApp Image 2026-06-03 at 8.41.01 PM.jpeg"
                alt="Erection Alignment"
                fill
                sizes="33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/40 flex items-end p-6">
                <h4 className="text-white font-bold text-base">Turnkey Erection Efficency</h4>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-center">
              <h4 className="font-extrabold text-slate-900 text-lg mb-2">Value Engineering</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We design custom weights to lower foundations concrete cost requirements.
              </p>
            </div>

            {/* Block 5 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-center">
              <h4 className="font-extrabold text-slate-900 text-lg mb-2">High-Performance Roofings</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Leak-proof, insulated, and durable roofing profiles optimized for industrial environments.
              </p>
            </div>

            {/* Block 6 */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-center">
              <h4 className="font-extrabold text-slate-900 text-lg mb-2">Seismic Load Ratings</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Buildings prepared for regional seismic activity and high-speed wind drafts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Newsletter Banner (Screenshot Style: Dark container with email input) */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b1426] rounded-[2rem] p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 dark-grid-bg pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                Stay Updated with Prabatech
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm max-w-md">
                Get project milestones reports, price trends estimations, and construction tips sent directly to your inbox.
              </p>
            </div>
            <div className="w-full lg:w-auto relative z-10 shrink-0">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 w-full sm:w-[480px]">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  className="flex-grow px-5 py-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-sm transition-colors active:scale-95 shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Accordions (Screenshot Style: Left visual engineer, Right lists) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="col-span-1 lg:col-span-5 relative h-[350px] sm:h-[460px] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <Image
                src="/faq section.png"
                alt="Karur PEB Engineer checking plan"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
              />
            </div>

            {/* Right Accordions */}
            <div className="col-span-1 lg:col-span-7 space-y-6">
              <div>
                <span className="text-orange-500 font-bold uppercase tracking-wider text-xs block mb-2">
                  Frequently Asked Questions
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Have Any Questions?
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full px-6 py-5 text-left font-bold text-slate-900 text-sm sm:text-base flex justify-between items-center bg-slate-50 hover:bg-slate-100/60 transition-colors"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? <Minus className="w-4 h-4 text-orange-500" /> : <Plus className="w-4 h-4 text-orange-500" />}
                      </button>
                      {isOpen && (
                        <div className="px-6 py-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section (Screenshot Style: Profile Avatars and Quotes) */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-wider text-xs block mb-3">
              Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl border border-slate-100/80 shadow-lg shadow-slate-100/50 text-left relative">
              <p className="text-slate-600 text-sm italic leading-relaxed mb-6">
                "Praba Tech built our food processing factory in Namakkal within record time. The truss accuracy and site engineering alignment were exceptional."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center font-bold text-white text-sm">
                  K
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Karthik Raja</h4>
                  <span className="text-[11px] text-slate-500">Director, Food Tech Industries</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100/80 shadow-lg shadow-slate-100/50 text-left relative">
              <p className="text-slate-600 text-sm italic leading-relaxed mb-6">
                "Prabatech fabricated 3,10,000 Sq.ft of logistic warehouse sheds. The value engineering saved us considerable foundation costs."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center font-bold text-white text-sm">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Ram Krishnan</h4>
                  <span className="text-[11px] text-slate-500">Operations Manager, E-Store Logistics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Pricing Section (Screenshot Style: Three pricing cards) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-wider text-xs block mb-3">
              Project Estimations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Transparent Pricing Plans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, idx) => {
              const isFeatured = idx === 1;
              return (
                <div
                  key={idx}
                  className={`rounded-[2rem] p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between text-left h-full ${isFeatured
                    ? "bg-slate-950 text-white border-orange-500/20 shadow-2xl relative"
                    : "bg-white text-slate-900 border-slate-200 shadow-md hover:shadow-xl"
                    }`}
                >
                  {isFeatured && (
                    <div className="absolute top-5 right-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md shadow-orange-500/10">
                      Popular Choice
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold mb-4">{plan.name}</h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">{plan.price}</span>
                      <span className={`text-xs ml-2 ${isFeatured ? "text-slate-400" : "text-slate-500"}`}>
                        {plan.unit}
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isFeatured ? "text-slate-400" : "text-slate-500"}`}>
                      {plan.desc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2.5 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className={`w-full py-3.5 text-center font-extrabold rounded-xl text-sm transition-all duration-300 active:scale-95 ${isFeatured
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md shadow-orange-500/10"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                      }`}
                  >
                    Select Plan & Quote
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Building Trust (Screenshot Style: Left copy description, Right visual) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-orange-500 font-bold uppercase tracking-wider text-xs block">
                Karur Steel Yard
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                We Are Build Strong Building In Town
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                By maintaining detailed ultrasonic testing on welds and thickness checks on coils, our Karur plant ensures standard-grade structural frame members.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="w-14 h-14 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold text-lg shrink-0">
                  15+
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Years of Engineering Efficency</h4>
                  <p className="text-slate-500 text-xs sm:text-sm">Designing reliable structural solutions.</p>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <Image
                src="/We Are Build Strong Building In Town-1.png"
                alt="Karur PEB Steel Erection Site"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Latest News (Screenshot Style: 3 Cards blog grid) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-500 font-bold uppercase tracking-wider text-xs block mb-3">
              Publications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Our Latest News
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-orange-500 text-xs font-bold uppercase tracking-wider block mb-2">
                      {post.date}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {post.desc}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href="/gallery"
                    className="inline-flex items-center text-xs font-bold text-orange-500 hover:text-orange-600"
                  >
                    Read More
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
