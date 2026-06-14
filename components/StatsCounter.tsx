import React from "react";
import { Building2, Calendar, Trophy, Users } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/40 backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-300">
      <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
        {icon}
      </div>
      <span className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
        {value}
      </span>
      <span className="text-slate-400 text-xs sm:text-sm font-medium text-center uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-slate-900 py-16 sm:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem
            icon={<Calendar className="w-6 h-6" />}
            value="15+"
            label="Years Experience"
          />
          <StatItem
            icon={<Building2 className="w-6 h-6" />}
            value="500+"
            label="Projects Completed"
          />
          <StatItem
            icon={<Trophy className="w-6 h-6" />}
            value="1M+"
            label="Sq.ft Built"
          />
          <StatItem
            icon={<Users className="w-6 h-6" />}
            value="100+"
            label="Happy Clients"
          />
        </div>
      </div>
    </section>
  );
}
