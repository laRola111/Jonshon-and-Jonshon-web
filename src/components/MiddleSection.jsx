import React from 'react';
import { businessData } from '../data/business';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-brand-stone">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-charcoal">Our Services</h2>
          <p className="text-lg text-gray-600">
            We handle a comprehensive range of masonry, stonework, and outdoor construction projects designed to enhance and protect your property.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {businessData.services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="text-brand-red mb-4">
                <CheckCircle2 size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-charcoal group-hover:text-brand-red transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedService() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <img 
              src={businessData.images.featured} 
              alt="Custom stone retaining wall built by Jonshon and Jonshon" 
              className="w-full h-auto aspect-[4/5] object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-brand-red font-bold uppercase tracking-wider text-sm mb-4 block">Specialty</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-charcoal leading-tight">
              Retaining Wall Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Professionally built retaining walls provide essential structure and function while significantly improving your property's appearance. We design and construct custom walls using durable stonework that lasts generations.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Structural stability and erosion control', 'Functional outdoor space creation', 'Enhanced property appearance', 'Custom designs tailored to your land', 'Durable, premium stonework'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#contact" className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-black text-white px-8 py-4 rounded font-bold transition-colors">
              Discuss Your Project <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="work" className="py-20 md:py-32 bg-brand-charcoal text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-300 text-lg">
              Explore our recent masonry and retaining wall projects across Austin.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-block text-brand-red font-bold hover:text-white transition-colors">
            Start your project &rarr;
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {businessData.images.gallery.map((img, i) => (
            <div key={i} className={`relative group overflow-hidden rounded bg-gray-800 ${i === 0 || i === 3 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square'}`}>
              <img 
                src={img} 
                alt={`Masonry project ${i + 1} in Austin`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-brand-red text-white px-6 py-2 font-medium tracking-wide">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
