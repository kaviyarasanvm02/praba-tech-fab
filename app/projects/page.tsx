"use strict";
"use client";

import React, { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { X } from "lucide-react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"All" | "Industrial" | "Warehouse" | "Commercial" | "Custom">("All");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  const filterButtons = ["All", "Industrial", "Warehouse", "Commercial", "Custom"] as const;

  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-900 py-16 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 dark-grid-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Projects Portfolio"
            title="Structural Steel Masterpieces"
            description="Explore our portfolio of successfully completed warehouses, heavy-duty industrial complexes, and custom-designed steel environments."
            light
          />
        </div>
      </section>

      {/* Grid Showcase */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 sm:mb-12">
            {filterButtons.map(btn => (
              <button
                key={btn}
                onClick={() => setFilter(btn)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 ${
                  filter === btn
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} onClick={() => setActiveImage(project.image)} className="cursor-pointer">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No projects found in this category. More updates coming soon!
            </div>
          )}
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
              alt="PEB Project Preview"
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
