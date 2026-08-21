import React from 'react';
import { businessData } from '../data/business';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-black relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Our Services</h2>
          <p className="text-lg text-brand-gray">
            We handle a comprehensive range of masonry, stonework, and outdoor construction projects designed to enhance and protect your property.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessData.services.map((service) => (
            <div key={service.id} className="bg-brand-black-soft p-8 border border-white/10 hover:border-brand-red/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-1 bg-brand-red transition-all duration-500 group-hover:w-full"></div>
              
              <div className="text-brand-gold mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-brand-white-soft transition-colors tracking-wide">{service.title}</h3>
              <p className="text-brand-gray leading-relaxed text-sm md:text-base">{service.description}</p>
              
              <div className="mt-6 flex items-center text-brand-red text-sm font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedService() {
  return (
    <section className="py-24 md:py-32 bg-brand-black border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
            <img 
              src={businessData.images.featured} 
              alt="Custom stone retaining wall built by Jonshon and Jonshon" 
              className="w-full h-auto aspect-[4/5] object-cover border border-white/10 shadow-2xl relative z-10"
              loading="lazy"
            />
            <div className="absolute top-8 -left-6 w-12 h-12 bg-brand-black border border-brand-gold flex items-center justify-center z-20">
              <span className="text-brand-gold font-bold">01</span>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4 block flex items-center gap-4">
              <div className="w-8 h-px bg-brand-gold"></div> Specialty
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight tracking-tight">
              Retaining Wall<br/>Solutions
            </h2>
            <p className="text-lg text-brand-gray mb-10 leading-relaxed">
              Professionally built retaining walls provide essential structure and function while significantly improving your property's appearance. We design and construct custom walls using durable stonework that lasts generations.
            </p>
            
            <ul className="space-y-6 mb-12">
              {['Structural stability and erosion control', 'Functional outdoor space creation', 'Enhanced property appearance', 'Custom designs tailored to your land', 'Durable, premium stonework'].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-brand-red flex items-center justify-center group-hover:bg-brand-red transition-colors">
                    <div className="w-2 h-2 bg-brand-gold rounded-full group-hover:bg-white transition-colors"></div>
                  </div>
                  <span className="text-brand-white-soft font-medium tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#contact" className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-light text-white px-10 py-5 rounded-sm font-bold transition-all hover:pr-8 group tracking-wide">
              Discuss Your Project <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="work" className="py-24 md:py-32 bg-brand-black relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="w-12 h-0.5 bg-brand-gold mb-6"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">Our Work</h2>
            <p className="text-brand-gray text-lg md:text-xl">
              Explore our recent masonry and retaining wall projects across Austin.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-brand-gold font-bold hover:text-white transition-colors uppercase tracking-widest text-sm">
            Start your project <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {businessData.images.gallery.map((img, i) => (
            <div key={i} className={`relative group overflow-hidden border border-white/5 bg-brand-black-elevated ${i === 0 || i === 3 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square'}`}>
              <img 
                src={img} 
                alt={`Masonry project ${i + 1} in Austin`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/70 transition-colors duration-500 flex flex-col items-center justify-center p-6">
                
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 flex flex-col items-center">
                  <div className="w-8 h-8 border border-brand-gold mb-4 flex items-center justify-center">
                    <span className="w-2 h-2 bg-brand-red"></span>
                  </div>
                  <span className="text-white font-bold tracking-widest uppercase text-sm border-b border-brand-red pb-1">View Details</span>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center md:hidden">
          <a href="#contact" className="inline-flex items-center gap-2 text-brand-gold font-bold hover:text-white transition-colors uppercase tracking-widest text-sm border border-brand-gold px-8 py-4">
            Start your project <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
