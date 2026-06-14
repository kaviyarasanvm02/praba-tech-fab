import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { products } from "@/data/products";
import { Check } from "lucide-react";

export const metadata = {
  title: "PEB Products | Structural Steel, Roofing & Wall Panels",
  description: "Browse our standard Pre-Engineered Building components: structural frames, standing seam roofs, insulated wall sheets, and crane supports."
};

export default function ProductsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-900 py-16 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 dark-grid-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Catalog"
            title="Premium PEB Building Elements"
            description="Our components are manufactured under strict factory environments with high quality controls, ready for rapid on-site assembly."
            light
          />
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={product.id}
                  id={product.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-100 pb-16 last:border-0 last:pb-0 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Product Image */}
                  <div className={`col-span-1 lg:col-span-6 relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>

                  {/* Product Details */}
                  <div className={`col-span-1 lg:col-span-6 ${
                    isEven ? "lg:order-2 lg:pl-6" : "lg:order-1 lg:pr-6"
                  }`}>
                    <span className="text-orange-500 font-bold text-xs uppercase tracking-widest block mb-2">
                      Product {idx + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {product.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start text-xs sm:text-sm text-slate-700">
                          <div className="w-5 h-5 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
