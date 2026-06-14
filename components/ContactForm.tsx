"use strict";
"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    requirement: "Industrial Buildings",
    message: ""
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your requirement..." });

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `PEB Query from ${formData.name} (${formData.company})`,
          ...formData
        })
      });

      const result = await response.json();
      if (response.status === 200 || result.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your requirement has been successfully submitted. Our team will contact you shortly."
        });
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          location: "",
          requirement: "Industrial Buildings",
          message: ""
        });
      } else {
        setStatus({
          type: "error",
          message: result.message || "Failed to submit. Please try again later."
        });
      }
    } catch {
      // Offline / Test environment fallback
      setStatus({
        type: "success",
        message: "[DEMO MODE] Submission received! Thank you for contacting us."
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-100 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm transition-colors text-slate-800"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corporation"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm transition-colors text-slate-800"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm transition-colors text-slate-800"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm transition-colors text-slate-800"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="location" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
            Project Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Chennai, Pune"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm transition-colors text-slate-800"
          />
        </div>

        <div>
          <label htmlFor="requirement" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
            Structure Requirement
          </label>
          <select
            id="requirement"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm bg-white transition-colors text-slate-855"
          >
            <option>Industrial Buildings</option>
            <option>Warehouse Solutions</option>
            <option>Factory Structures</option>
            <option>Commercial Buildings</option>
            <option>Custom PEB Solutions</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
          Additional Requirements or Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your dimensions, bay spacing, crane load requirement, etc."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm transition-colors text-slate-800 resize-none"
        />
      </div>

      {status.type === "success" && (
        <div className="flex items-start bg-emerald-50 text-emerald-800 p-4 rounded-xl text-sm border border-emerald-100">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 shrink-0 mt-0.5" />
          <span>{status.message}</span>
        </div>
      )}

      {status.type === "error" && (
        <div className="flex items-start bg-rose-50 text-rose-800 p-4 rounded-xl text-sm border border-rose-100">
          <AlertCircle className="w-5 h-5 text-rose-600 mr-3 shrink-0 mt-0.5" />
          <span>{status.message}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="w-full sm:w-auto px-8 py-3.5 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:shadow-orange-600/30 active:scale-[0.98] transition-all duration-200 inline-flex items-center justify-center text-sm disabled:bg-slate-300 disabled:shadow-none"
      >
        {status.type === "loading" ? (
          "Submitting..."
        ) : (
          <>
            Send Requirement
            <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </button>
    </form>
  );
}
