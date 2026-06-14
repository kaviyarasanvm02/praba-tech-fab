import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { MapPin, Calendar, Layers } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          priority={false}
        />
        <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
          {project.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors duration-200">
          {project.title}
        </h3>
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 border-t border-slate-100 pt-4 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>
          <div className="flex items-center">
            <Layers className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
            <span className="truncate">{project.area}</span>
          </div>
          <div className="flex items-center col-span-2">
            <Calendar className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
            <span>Completed Year: {project.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
