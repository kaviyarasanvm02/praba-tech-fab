import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Compass, Warehouse, Settings2, Play, Check } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "About Us | Praba Tech Steel Solutions",
  description: "Learn about Praba Tech's vision, manufacturing facility, design standards, and steel fabrications."
};

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-900 py-16 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 dark-grid-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Who We Are"
            title="Pioneering Pre-Engineered Steel Infrastructure"
            description="Established with a goal to deliver state-of-the-art PEB solutions that combine robust structural engineering with rapid construction cycles."
            light
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Custom Leaf-shaped Image with Video Overlay */}
            <div className="relative p-3 bg-slate-100/80 rounded-[120px_20px_120px_20px] sm:rounded-[160px_30px_160px_30px] shadow-sm max-w-[540px] mx-auto lg:mx-0 w-full">
              <div className="relative h-[300px] sm:h-[480px] rounded-[110px_15px_110px_15px] sm:rounded-[145px_20px_145px_20px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                  alt="Construction engineers working on site"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                
                {/* Play Button with Pulsing Concentric Rings */}
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Ring 3 (Outer) */}
                    <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-orange-500/20 bg-orange-500/5 animate-pulse" />
                    {/* Ring 2 (Middle) */}
                    <div className="absolute w-20 h-20 sm:w-26 sm:h-26 rounded-full border border-orange-500/40 bg-orange-500/10" />
                    {/* Ring 1 (Inner Pulsing) */}
                    <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-500/30 animate-ping opacity-75" />
                    {/* Play Button */}
                    <Link
                      href="/contact"
                      className="relative w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all outline-none"
                    >
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content Panel */}
            <div className="flex flex-col justify-center">
              {/* Category */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm">
                  ABOUT US
                </span>
                <span className="w-12 h-[1.5px] bg-orange-500/80" />
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-5">
                Construction For Commercial
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                Construction is a general term meaning the art and science to form objects systems organizations, and comes from Latin construction and Old French construction. To construct is the verb:
              </p>

              {/* Blockquote / Callout */}
              <div className="border-l-[3px] border-orange-500 pl-4 py-1 mb-6 bg-slate-50/50 rounded-r-lg">
                <p className="text-slate-900 font-extrabold text-sm sm:text-base leading-relaxed">
                  It is a long established fact that a reader will be distracted by the readable content
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3 mb-8">
                {[
                  "Interior Design Package",
                  "Renovation Of Commercial Office",
                  "Repairing Of Residential Roof"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-orange-500 text-white rounded flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3px]" />
                    </div>
                    <span className="text-slate-800 font-extrabold text-sm tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-extrabold rounded-md text-xs sm:text-sm shadow-md hover:shadow-orange-500/20 active:scale-95 transition-all duration-200"
                >
                  Discover More +
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Facility */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Infrastructure"
            title="State-of-the-Art Fabrication Plant"
            description="Our primary facility in Chennai boasts automated fabrication systems, CNC plasma cutters, and submerged arc welding lines to handle 24,000 MT of steel annually."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-6">
                <Warehouse className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">High Capacity Yards</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Dedicated bay space for raw plate storing, template staging, welding, final shot-blasting, and shipping.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-6">
                <Settings2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">CNC Automation</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Multi-torch CNC machines cut raw heavy plate material with strict millimeter tolerance, ensuring a perfect onsite fit.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">Quality Auditing</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Ultrasonic testing on high stress weld points, raw coil thickness testing, and primer paint dry-film thickness verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Capabilities & Quality Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Standards"
                title="Design Criteria & Codes"
                description="We design structures to withstand highest wind speeds, seismic parameters, and heavy crane vibrations. Our structural designs conform strictly to international standard regulations."
              />
              <div className="space-y-4 text-sm sm:text-base text-slate-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-3 shrink-0" />
                  <span>AISC (American Institute of Steel Construction) standards for steel design.</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-3 shrink-0" />
                  <span>AWS (American Welding Society) standards for all factory welding.</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-3 shrink-0" />
                  <span>MBMA (Metal Building Manufacturers Association) design rules.</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mr-3 shrink-0" />
                  <span>IS 800 (Indian Standard Code of Practice for general steel construction).</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[300px] sm:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="Engineering modeling team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
