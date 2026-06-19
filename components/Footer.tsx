import React from "react";
import Link from "next/link";
import { Landmark, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 text-white mb-6">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="Praba Tech Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-black tracking-wider block leading-none">PRABA TECH FAB</span>
                <span className="text-[10px] text-orange-500 font-bold tracking-widest uppercase">STEEL SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              We are a leading Pre-Engineered Building (PEB) manufacturer and steel fabrication company specializing in the design, engineering, manufacturing, and installation of high-quality steel structures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Products", href: "/products" },
                { name: "Services Portfolio", href: "/services" },
                { name: "Featured Projects", href: "/projects" },
                { name: "Media Gallery", href: "/gallery" }
              ].map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors flex items-center">
                    <ArrowUpRight className="w-3.5 h-3.5 mr-1.5 text-orange-500 shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Tech */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Our Products</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products#peb-structures" className="hover:text-white transition-colors">Pre-Engineered Buildings</Link></li>
              <li><Link href="/products#warehouse-construction" className="hover:text-white transition-colors">Warehouse Construction</Link></li>
              <li><Link href="/products#steel-fabrication" className="hover:text-white transition-colors">Steel Fabrication</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                <span>40b, Semangi Vettamangalam Village, Pugalur taluk, Karur - 639 117</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                <a href="tel:+919894737363" className="hover:text-white transition-colors">+91 98947 37363</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                <a href="mailto:Prabatechfab@gmail.com" className="hover:text-white transition-colors">Prabatechfab@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {currentYear} Praba Tech Steel Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
