import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight, CheckCircle2 } from 'lucide-react';
import { businessData } from '../data/business';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-bold text-brand-charcoal uppercase tracking-tighter">
          Jonshon & Jonshon
        </a>
        
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium hover:text-brand-red transition-colors">Home</a>
          <a href="#services" className="text-sm font-medium hover:text-brand-red transition-colors">Services</a>
          <a href="#work" className="text-sm font-medium hover:text-brand-red transition-colors">Our Work</a>
          <a href="#about" className="text-sm font-medium hover:text-brand-red transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-red transition-colors">Contact</a>
          <a href="#contact" className="bg-brand-red text-white px-6 py-2.5 rounded hover:bg-brand-red-dark transition-colors font-medium">
            Get a Free Estimate
          </a>
        </nav>

        <button className="lg:hidden text-brand-charcoal p-2" aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 flex flex-col p-4 space-y-4">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 font-medium">Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 font-medium">Services</a>
          <a href="#work" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 font-medium">Our Work</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 font-medium">About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 font-medium">Contact</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-brand-red text-white px-4 py-3 rounded text-center font-medium">
            Get a Free Estimate
          </a>
          <a href={`tel:${businessData.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center justify-center gap-2 text-brand-charcoal px-4 py-3 border border-gray-200 rounded text-center font-medium">
            <Phone size={18} /> {businessData.phone}
          </a>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={businessData.images.hero} 
          alt="Premium stone retaining wall construction in Austin, Texas" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 bg-brand-red text-white text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">
            {businessData.location}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Built to Last.<br />
            <span className="text-gray-200">Designed to Stand Out.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Premium retaining walls and custom masonry solutions for residential properties. 
            Craftsmanship that defines your outdoor space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-brand-red hover:bg-brand-red-dark text-white text-center px-8 py-4 rounded font-bold transition-colors">
              Request a Free Estimate
            </a>
            <a href={`tel:${businessData.phone.replace(/[^0-9+]/g, '')}`} className="bg-white hover:bg-gray-100 text-brand-charcoal text-center px-8 py-4 rounded font-bold transition-colors flex items-center justify-center gap-2">
              <Phone size={20} /> Call Now: {businessData.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <div className="bg-brand-charcoal text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-700">
          <div className="px-4"><h3 className="font-bold text-lg md:text-xl">Custom Stonework</h3></div>
          <div className="px-4"><h3 className="font-bold text-lg md:text-xl">Retaining Walls</h3></div>
          <div className="px-4"><h3 className="font-bold text-lg md:text-xl">Repairs & Additions</h3></div>
          <div className="px-4"><h3 className="font-bold text-lg md:text-xl">Residential Masonry</h3></div>
        </div>
      </div>
    </div>
  );
}
