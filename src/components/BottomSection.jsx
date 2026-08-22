import React from 'react';
import { businessData } from '../data/business';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import logoImg from '../assets/logo.png';

export function Process() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-brand-black border-y border-white/5 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-4 md:mb-6"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">A Simple Process</h2>
          <p className="text-base md:text-lg text-brand-gray max-w-2xl mx-auto">From initial contact to the final stone laid.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0"></div>
          
          {businessData.process.map((p, i) => (
            <div key={i} className="flex-1 relative z-10 px-0 md:px-4 group">
              <div className="bg-brand-black border border-white/10 p-6 md:p-8 h-full hover:border-brand-gold/50 transition-colors duration-300 relative">
                <span className="text-5xl md:text-6xl font-bold text-brand-gold opacity-10 absolute top-4 right-4 group-hover:opacity-30 transition-opacity pointer-events-none">{p.step}</span>
                <span className="text-brand-gold font-bold text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-4 block">{p.step}</span>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white pr-8">{p.title}</h3>
                <p className="text-brand-gray text-sm md:text-base leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative">
            <div className="hidden md:block absolute inset-0 bg-brand-gold/8 translate-x-4 -translate-y-4 border border-brand-gold/20 pointer-events-none"></div>
            <img
              src={businessData.images.about}
              alt="Jonshon and Jonshon masonry craftsmanship"
              className="w-full h-auto aspect-square object-cover shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
              loading="lazy"
            />
            <div className="hidden md:block absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-brand-gold z-20 opacity-60 pointer-events-none"></div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-12 h-0.5 bg-brand-gold mb-4 md:mb-6"></div>
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 block">About Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-8 text-white tracking-tight leading-tight">
              Quality Masonry.<br />Thoughtful Craftsmanship.
            </h2>
            <p className="text-base md:text-lg text-brand-gray mb-4 md:mb-6 leading-relaxed">
              Based in {businessData.location}, Jonshon and Jonshon Retaining Walls Solutions provides expert masonry, stonework, and outdoor construction services tailored to residential properties.
            </p>
            <p className="text-base md:text-lg text-brand-gray mb-8 md:mb-10 leading-relaxed">
              We specialize in retaining walls, repairs, additions, and custom outdoor installations. Our focus is on delivering structurally sound and visually striking stonework that stands the test of time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 mb-8 md:mb-10">
              {businessData.whyChooseUs.map((reason, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4">
                  <div className="w-1.5 h-1.5 bg-brand-gold flex-shrink-0"></div>
                  <span className="text-brand-white-soft font-medium tracking-wide text-sm">{reason}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-3 bg-transparent border border-brand-gold/40 hover:border-brand-gold text-brand-gold hover:text-white hover:bg-brand-gold/10 px-6 md:px-8 py-3.5 md:py-4 rounded-sm font-bold transition-all duration-300 tracking-wide text-sm uppercase">
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submission handler ready for configuration.");
  };
  return (
    <section id="contact" className="bg-brand-black relative">
      <div className="bg-brand-red py-14 md:py-20 text-center relative border-b border-brand-red-dark">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white tracking-tight">Ready to Transform Your Property?</h2>
          <p className="text-sm sm:text-base md:text-lg text-brand-white-soft max-w-2xl mx-auto mb-8 md:mb-10">
            Request a free estimate today and let's start planning your custom masonry project.
          </p>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto"></div>
        </div>
      </div>
      <div className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24">
            <div className="w-full lg:w-5/12">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4 block">Contact Information</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-white tracking-tight">Let's Build</h2>
              <p className="text-brand-gray text-base md:text-lg mb-10 md:mb-12 leading-relaxed">
                Reach out to discuss your masonry, retaining wall, or stonework project. We'll review your needs and provide a comprehensive estimate.
              </p>
              <div className="space-y-3 md:space-y-6">
                <a href={`tel:${businessData.phone.replace(/[^0-9+]/g, "")}`} className="group flex items-center gap-4 md:gap-6 p-3 md:p-4 border border-transparent hover:border-white/10 transition-colors rounded-sm">
                  <div className="text-brand-red group-hover:text-brand-gold transition-colors flex-shrink-0"><Phone size={24} strokeWidth={1.5} /></div>
                  <div className="min-w-0">
                    <span className="block text-xs text-brand-gray font-bold uppercase tracking-widest mb-1">Call Us</span>
                    <span className="text-base md:text-xl font-bold text-white tracking-wide truncate block">{businessData.phone}</span>
                  </div>
                </a>
                <a href={businessData.whatsapp} target="_blank" rel="noreferrer" className="group flex items-center gap-4 md:gap-6 p-3 md:p-4 border border-transparent hover:border-white/10 transition-colors rounded-sm">
                  <div className="text-brand-red group-hover:text-brand-gold transition-colors flex-shrink-0"><MessageSquare size={24} strokeWidth={1.5} /></div>
                  <div className="min-w-0">
                    <span className="block text-xs text-brand-gray font-bold uppercase tracking-widest mb-1">WhatsApp</span>
                    <span className="text-base md:text-xl font-bold text-white tracking-wide truncate block">{businessData.phone}</span>
                  </div>
                </a>
                <a href={`mailto:${businessData.email}`} className="group flex items-center gap-4 md:gap-6 p-3 md:p-4 border border-transparent hover:border-white/10 transition-colors rounded-sm">
                  <div className="text-brand-red group-hover:text-brand-gold transition-colors flex-shrink-0"><Mail size={24} strokeWidth={1.5} /></div>
                  <div className="min-w-0">
                    <span className="block text-xs text-brand-gray font-bold uppercase tracking-widest mb-1">Email</span>
                    <span className="text-sm md:text-base font-bold text-white tracking-wide truncate block">{businessData.email}</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <form onSubmit={handleSubmit} className="bg-brand-black-elevated border border-white/10 p-6 sm:p-8 md:p-12 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white tracking-wide">Request an Estimate</h3>
                <div className="space-y-5 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">Name</label>
                    <input type="text" id="name" required className="w-full px-4 py-3.5 md:py-4 bg-brand-black border border-white/15 text-white placeholder-brand-gray-dark focus:ring-0 focus:border-brand-red outline-none transition-colors text-sm md:text-base" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">Phone Number</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-3.5 md:py-4 bg-brand-black border border-white/15 text-white placeholder-brand-gray-dark focus:ring-0 focus:border-brand-red outline-none transition-colors text-sm md:text-base" placeholder="Your phone number" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3.5 md:py-4 bg-brand-black border border-white/15 text-white placeholder-brand-gray-dark focus:ring-0 focus:border-brand-red outline-none transition-colors text-sm md:text-base" placeholder="Your email address" />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">Project Type</label>
                    <select id="project" className="w-full px-4 py-3.5 md:py-4 bg-brand-black border border-white/15 text-white focus:ring-0 focus:border-brand-red outline-none transition-colors appearance-none rounded-none text-sm md:text-base">
                      <option className="bg-brand-black text-white">Retaining Wall</option>
                      <option className="bg-brand-black text-white">Stonework / Masonry</option>
                      <option className="bg-brand-black text-white">Repair / Addition</option>
                      <option className="bg-brand-black text-white">Other Outdoor Construction</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">Message</label>
                    <textarea id="message" rows="4" className="w-full px-4 py-3.5 md:py-4 bg-brand-black border border-white/15 text-white placeholder-brand-gray-dark focus:ring-0 focus:border-brand-red outline-none transition-colors resize-none text-sm md:text-base" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-red hover:bg-brand-red-light text-white font-bold py-4 md:py-5 mt-2 md:mt-4 transition-colors text-base md:text-lg tracking-wide">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-black text-brand-gray py-12 md:py-16 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          <div className="sm:col-span-2">
            <a href="#home" className="flex items-center mb-5 md:mb-6 group">
              <img src={logoImg} alt="Jonshon & Jonshon Logo" className="h-8 sm:h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
            </a>
            <p className="mb-6 max-w-xs md:max-w-sm leading-relaxed text-sm">
              Premium retaining walls and custom masonry solutions in {businessData.location}. Built to last, designed to stand out.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-3 md:space-y-4 text-sm">
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Retaining Walls</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Custom Stonework</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Repairs & Additions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-3 md:space-y-4 text-sm">
              <li className="flex items-center gap-2 min-w-0"><Phone size={14} className="text-brand-gold flex-shrink-0" /> <span className="truncate">{businessData.phone}</span></li>
              <li className="flex items-center gap-2 min-w-0"><Mail size={14} className="text-brand-gold flex-shrink-0" /> <span className="truncate text-xs sm:text-sm">{businessData.email}</span></li>
              <li className="flex items-center gap-2 pt-2 border-t border-white/10 text-brand-white-soft">{businessData.location}</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs tracking-wide gap-3 md:gap-0">
          <p className="text-center md:text-left">&copy; {year} {businessData.businessName}. All rights reserved.</p>
          <a href="#home" className="text-brand-gold hover:text-white transition-colors uppercase tracking-widest">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
