import React from "react";
import Link from "next/link";
import { Service } from "@/data/services";
import { Hammer, Landmark, ShieldCheck, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case "design-engineering":
        return <Landmark className="w-8 h-8 text-orange-500" />;
      case "fabrication":
      case "steel-fabrication":
        return <Hammer className="w-8 h-8 text-orange-500" />;
      case "installation":
      case "erection-installation":
        return <ShieldCheck className="w-8 h-8 text-orange-500" />;
      default:
        return <Hammer className="w-8 h-8 text-orange-500" />;
    }
  };

  return (
    <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between h-full">
      <div>
        <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
          <div className="group-hover:text-white transition-colors duration-300">
            {getIcon(service.id)}
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>
        <ul className="space-y-2 mb-6">
          {service.steps.map((step, idx) => (
            <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-2 shrink-0" />
              <span>
                <strong className="text-slate-800">{step.name}:</strong> {step.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={`/services#${service.id}`}
        className="inline-flex items-center text-xs font-semibold text-orange-600 group-hover:text-orange-700 transition-colors duration-200"
      >
        Learn details
        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
