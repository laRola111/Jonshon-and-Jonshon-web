import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { businessData } from '../data/business';
import logoImg from '../assets/logo.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black shadow-md border-b border-white/10 py-4' : 'bg-brand-black/95 py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* LOGO */}
        <a href="#home" className="flex items-center group">
          <img 
            src={logoImg} 
            alt="Jonshon & Jonshon Logo" 
            className="h-10 md:h-12 lg:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
          />
        </a>
        
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-brand-white-soft hover:text-white hover:underline decoration-brand-gold underline-offset-4 transition-all">Home</a>
          <a href="#services" className="text-sm font-medium text-brand-white-soft hover:text-white hover:underline decoration-brand-gold underline-offset-4 transition-all">Services</a>
          <a href="#work" className="text-sm font-medium text-brand-white-soft hover:text-white hover:underline decoration-brand-gold underline-offset-4 transition-all">Our Work</a>
          <a href="#about" className="text-sm font-medium text-brand-white-soft hover:text-white hover:underline decoration-brand-gold underline-offset-4 transition-all">About</a>
          <a href="#contact" className="text-sm font-medium text-brand-white-soft hover:text-white hover:underline decoration-brand-gold underline-offset-4 transition-all">Contact</a>
          <a href="#contact" className="bg-brand-red text-white px-6 py-2.5 rounded-sm border border-brand-red hover:bg-brand-red-light transition-colors font-medium tracking-wide">
            Get a Free Estimate
          </a>
        </nav>

        <button className="lg:hidden text-white p-2" aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-black shadow-xl border-t border-white/10 flex flex-col p-4 space-y-4">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 font-medium text-white hover:text-brand-gold">Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 font-medium text-white hover:text-brand-gold">Services</a>
          <a href="#work" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 font-medium text-white hover:text-brand-gold">Our Work</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 font-medium text-white hover:text-brand-gold">About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 font-medium text-white hover:text-brand-gold">Contact</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-brand-red text-white px-4 py-3 rounded-sm text-center font-medium">
            Get a Free Estimate
          </a>
          <a href={`tel:${businessData.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center justify-center gap-2 text-white px-4 py-3 border border-white/20 rounded-sm text-center font-medium hover:border-brand-gold transition-colors">
            <Phone size={18} className="text-brand-gold" /> {businessData.phone}
          </a>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 bg-brand-black">
      <div className="absolute inset-0 z-0">
        <img 
          src={businessData.images.hero} 
          alt="Premium stone retaining wall construction in Austin, Texas" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/70 to-brand-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 bg-transparent border border-brand-red text-brand-red text-xs font-bold tracking-widest uppercase mb-6 rounded-sm">
            {businessData.location}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Built to Last.<br />
            <span className="text-brand-gray">Designed to Stand Out.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-white-soft mb-8 max-w-2xl leading-relaxed">
            Premium retaining walls and custom masonry solutions for residential properties. 
            Craftsmanship that defines your outdoor space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-brand-red hover:bg-brand-red-light text-white text-center px-8 py-4 rounded-sm font-bold transition-colors">
              Request a Free Estimate
            </a>
            <a href={`tel:${businessData.phone.replace(/[^0-9+]/g, '')}`} className="bg-transparent border border-white/30 hover:border-white text-white text-center px-8 py-4 rounded-sm font-bold transition-colors flex items-center justify-center gap-2">
              <Phone size={20} className="text-brand-gold" /> Call Now: {businessData.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <div className="bg-brand-black-elevated text-brand-white border-y border-white/5 py-10 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/10">
          <div className="px-4"><h3 className="font-medium text-lg md:text-xl text-brand-white-soft uppercase tracking-wide">Custom Stonework</h3></div>
          <div className="px-4"><h3 className="font-medium text-lg md:text-xl text-brand-white-soft uppercase tracking-wide">Retaining Walls</h3></div>
          <div className="px-4"><h3 className="font-medium text-lg md:text-xl text-brand-white-soft uppercase tracking-wide">Repairs & Additions</h3></div>
          <div className="px-4"><h3 className="font-medium text-lg md:text-xl text-brand-white-soft uppercase tracking-wide">Residential Masonry</h3></div>
        </div>
      </div>
    </div>
  );
}

