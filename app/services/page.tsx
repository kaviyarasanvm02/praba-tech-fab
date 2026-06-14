import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { services } from "@/data/services";
import { Landmark, Hammer, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "PEB Services | Design, Fabrication & Erection",
  description: "Explore our end-to-end Pre-Engineered Building solutions from advanced structural CAD design to automated factory fabrication and safe crane rigging."
};

export default function ServicesPage() {
  const getIcon = (id: string) => {
    switch (id) {
      case "design-engineering":
        return <Landmark className="w-6 h-6 text-orange-500" />;
      case "fabrication":
        return <Hammer className="w-6 h-6 text-orange-500" />;
      case "installation":
        return <ShieldCheck className="w-6 h-6 text-orange-500" />;
      default:
        return <Hammer className="w-6 h-6 text-orange-500" />;
    }
  };

  const getServiceImage = (id: string) => {
    switch (id) {
      case "design-engineering":
        return "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80";
      case "fabrication":
        return "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80";
      case "installation":
        return "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80";
      default:
        return "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80";
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-900 py-16 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 dark-grid-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Expertise"
            title="Comprehensive Project Lifecycle Management"
            description="We coordinate every phase of your pre-engineered building layout, structural design, panel fabrication, shipping, and final assembly."
            light
          />
        </div>
      </section>

      {/* Detail Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-100 pb-16 last:border-0 last:pb-0 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Image */}
                <div className={`col-span-1 lg:col-span-6 relative h-[300px] sm:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}>
                  <Image
                    src={getServiceImage(service.id)}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Service Details */}
                <div className={`col-span-1 lg:col-span-6 ${
                  isEven ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"
                }`}>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6">
                    {getIcon(service.id)}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                    {service.longDescription}
                  </p>

                  <div className="space-y-6">
                    {service.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center mr-4 shrink-0 mt-0.5 shadow-md">
                          0{sIdx + 1}
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-sm sm:text-base mb-1">
                            {step.name}
                          </h4>
                          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
