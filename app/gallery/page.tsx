"use strict";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";
import { products } from "@/data/products";
import { X, ZoomIn } from "lucide-react";

// Gather all high resolution images from mock data
const galleryItems = [
  ...projects.map(p => ({ title: p.title, src: p.image, category: p.category })),
  ...products.map(pr => ({ title: pr.title, src: pr.image, category: "Product" }))
];

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-900 py-16 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 dark-grid-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Gallery"
            title="PEB Site & Manufacturing Showcase"
            description="A detailed visual catalog detailing our precision design modeling, components manufacturing, and on-site alignment installations."
            light
          />
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(item.src)}
                className="break-inside-avoid relative group overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden w-full h-64 sm:h-80">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-[1.03] transition-transform duration-500 rounded-2xl"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                    <div className="text-center p-4">
                      <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                      <h4 className="text-white font-bold text-sm sm:text-base">{item.title}</h4>
                      <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-5xl aspect-video max-h-[85vh]">
            <Image
              src={activeImage}
              alt="PEB Structure Lightbox Preview"
              fill
              sizes="90vw"
              className="object-contain rounded-xl shadow-2xl border border-white/5"
            />
          </div>
        </div>
      )}
    </div>
  );
}
