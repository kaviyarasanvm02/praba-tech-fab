import React from "react";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionTitle({ subtitle, title, description, light = false }: SectionTitleProps) {
  return (
    <div className="max-w-3xl mb-12 sm:mb-16">
      {subtitle && (
        <span className="text-orange-500 font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2 sm:mb-3">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
