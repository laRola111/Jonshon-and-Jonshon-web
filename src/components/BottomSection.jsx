import React from 'react';
import { businessData } from '../data/business';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export function Process() {
  return (
    <section className="py-20 md:py-32 bg-brand-stone">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-charcoal">A Simple Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">From initial contact to the final stone laid.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businessData.process.map((p, i) => (
            <div key={i} className="relative">
              <span className="text-6xl md:text-8xl font-bold text-gray-200 absolute -top-8 -left-4 -z-10">{p.step}</span>
              <h3 className="text-xl font-bold mb-3 text-brand-charcoal pt-4">{p.title}</h3>
              <p className="text-gray-600">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <img 
              src={businessData.images.about} 
              alt="Jonshon and Jonshon masonry craftsmanship" 
              className="w-full h-auto aspect-square object-cover rounded shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-charcoal">Quality Masonry. Thoughtful Craftsmanship.</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in {businessData.location}, Jonshon and Jonshon Retaining Walls Solutions provides expert masonry, stonework, and outdoor construction services tailored to residential properties.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We specialize in retaining walls, repairs, additions, and custom outdoor installations. Our focus is on delivering structurally sound and visually striking stonework that stands the test of time.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {businessData.whyChooseUs.map((reason, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                  <span className="text-gray-700 font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementation ready for Formspree/Resend/etc.
    alert("Form submission handler ready for configuration.");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-charcoal text-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Build Your Next Project</h2>
            <p className="text-gray-300 text-lg mb-10">
              Contact us to discuss your masonry, retaining wall, or stonework project. We'll review your needs and provide a comprehensive estimate.
            </p>
            
            <div className="space-y-6">
              <a href={`tel:${businessData.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-4 bg-gray-800 p-6 rounded hover:bg-gray-700 transition-colors">
                <div className="bg-brand-red p-3 rounded-full"><Phone size={24} /></div>
                <div>
                  <span className="block text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Call Us</span>
                  <span className="text-xl font-bold">{businessData.phone}</span>
                </div>
              </a>
              
              <a href={businessData.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-gray-800 p-6 rounded hover:bg-gray-700 transition-colors">
                <div className="bg-green-600 p-3 rounded-full"><MessageSquare size={24} /></div>
                <div>
                  <span className="block text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">WhatsApp</span>
                  <span className="text-xl font-bold">{businessData.phone}</span>
                </div>
              </a>
              
              <a href={`mailto:${businessData.email}`} className="flex items-center gap-4 bg-gray-800 p-6 rounded hover:bg-gray-700 transition-colors">
                <div className="bg-blue-600 p-3 rounded-full"><Mail size={24} /></div>
                <div>
                  <span className="block text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Email</span>
                  <span className="text-xl font-bold">{businessData.email}</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white text-brand-charcoal p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Request an Estimate</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none" placeholder="Your name" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none" placeholder="Your phone number" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none" placeholder="Your email address" />
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-bold text-gray-700 mb-1">Project Type</label>
                  <select id="project" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none bg-white">
                    <option>Retaining Wall</option>
                    <option>Stonework / Masonry</option>
                    <option>Repair / Addition</option>
                    <option>Other Outdoor Construction</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none" placeholder="Tell us about your project..."></textarea>
                </div>
                
                <button type="submit" className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 rounded transition-colors text-lg">
                  Request a Free Estimate
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white text-xl font-bold uppercase tracking-tighter mb-4">{businessData.shortName}</h4>
            <p className="mb-4">Premium retaining walls and custom masonry solutions in {businessData.location}.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-brand-red transition-colors">Retaining Walls</a></li>
              <li><a href="#services" className="hover:text-brand-red transition-colors">Custom Stonework</a></li>
              <li><a href="#services" className="hover:text-brand-red transition-colors">Repairs & Additions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-2">
              <li>{businessData.phone}</li>
              <li>{businessData.email}</li>
              <li>{businessData.location}</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {year} {businessData.businessName}. All rights reserved.</p>
          <a href="#home" className="hover:text-white transition-colors mt-4 md:mt-0">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
