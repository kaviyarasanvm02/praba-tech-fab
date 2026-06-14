import React from "react";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Get a PEB Building Estimate",
  description: "Reach out to Praba Tech for engineered building cost estimations, structural detailing questions, or pricing quotation queries."
};

export default function ContactPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-900 py-16 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 dark-grid-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Get in Touch"
            title="Start Building With Us"
            description="Have a structural requirement or need an estimate? Drop us your details, and our technical design team will coordinate a concept layout."
            light
          />
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Info Panel */}
            <div className="col-span-1 lg:col-span-5 space-y-8 lg:pr-6">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">
                Corporate Office
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mr-4 shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      40b, Semangi Vettamangalam Village, Pugalur taluk, Karur - 639 117
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mr-4 shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Phone Line</h4>
                    <a href="tel:+919894737363" className="text-slate-600 text-sm hover:text-orange-600 transition-colors">
                      +91 98947 37363
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mr-4 shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Coordinates</h4>
                    <a href="mailto:Prabatechfab@gmail.com" className="text-slate-600 text-sm hover:text-orange-600 transition-colors">
                      Prabatechfab@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mr-4 shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Office Hours</h4>
                    <p className="text-slate-600 text-sm">
                      Mon - Sat: 9:00 AM - 6:00 PM (IST)
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed Panel */}
              <div className="h-64 rounded-3xl overflow-hidden relative border border-slate-100 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62704.77884144439!2d78.03748281313783!3d10.959714856428784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2f0674d825c3%3A0xc3163fbbf8c7b805!2sKarur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1718306000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Praba Tech Location Map"
                ></iframe>
              </div>
            </div>

            {/* Contact Form Wrapper */}
            <div className="col-span-1 lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
