import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { businessData } from "../data/business";
import logoImg from "../assets/logo.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMobileMenuOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-black shadow-md border-b border-white/10 py-3" : "bg-brand-black/95 py-4 md:py-6"}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center min-w-0">
        <a href="#home" className="flex items-center group flex-shrink-0">
          <img src={logoImg} alt="Jonshon & Jonshon Logo" className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {[["#home","Home"],["#services","Services"],["#work","Our Work"],["#about","About"],["#contact","Contact"]].map(([href,label]) => (
            <a key={href} href={href} className="text-sm font-medium text-brand-white-soft hover:text-white hover:underline decoration-brand-gold underline-offset-4 transition-all whitespace-nowrap">{label}</a>
          ))}
          <a href="#contact" className="bg-brand-red text-white px-5 py-2.5 rounded-sm hover:bg-brand-red-light transition-colors font-medium tracking-wide whitespace-nowrap text-sm">Get a Free Estimate</a>
        </nav>

        <button className="lg:hidden text-white p-2 flex-shrink-0" aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-black shadow-xl border-t border-white/10 flex flex-col p-4 space-y-1">
          {[["#home","Home"],["#services","Services"],["#work","Our Work"],["#about","About"],["#contact","Contact"]].map(([href,label]) => (
            <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 font-medium text-white hover:text-brand-gold hover:bg-white/5 rounded-sm transition-colors">{label}</a>
          ))}
          <div className="pt-2 space-y-2">
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block bg-brand-red text-white px-4 py-3 rounded-sm text-center font-medium">Get a Free Estimate</a>
            <a href={`tel:${businessData.phone.replace(/[^0-9+]/g, "")}`} className="flex items-center justify-center gap-2 text-white px-4 py-3 border border-white/20 rounded-sm font-medium hover:border-brand-gold transition-colors">
              <Phone size={16} className="text-brand-gold flex-shrink-0" />
              <span>{businessData.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20 bg-brand-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={businessData.images.hero} alt="Premium stone retaining wall construction in Austin, Texas" className="w-full h-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/50 sm:via-brand-black/80 sm:to-brand-black/30 md:to-brand-black/25"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black-elevated to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 py-16 md:py-20 min-w-0">
        <div className="max-w-xs sm:max-w-xl md:max-w-2xl xl:max-w-3xl">
          <span className="inline-flex items-center gap-2 py-1 px-3 border border-brand-red/70 text-brand-red text-xs font-bold tracking-widest uppercase mb-5 md:mb-6 rounded-sm">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse flex-shrink-0"></span>
            {businessData.location}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none mb-5 md:mb-8 tracking-tight">
            Built to<br />
            <span className="text-brand-gray">Last.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-white-soft mb-7 md:mb-10 leading-relaxed max-w-xs sm:max-w-sm md:max-w-xl">
            Premium retaining walls and custom masonry solutions for residential properties. Craftsmanship that defines your outdoor space.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#contact" className="bg-brand-red hover:bg-brand-red-light text-white text-center px-6 sm:px-10 py-3.5 sm:py-4 rounded-sm font-bold transition-colors tracking-wide text-sm sm:text-base">Request a Free Estimate</a>
            <a href={`tel:${businessData.phone.replace(/[^0-9+]/g, "")}`} className="bg-transparent border border-white/25 hover:border-white/60 text-white text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm font-bold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
              <Phone size={16} className="text-brand-gold flex-shrink-0" />
              <span>{businessData.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 opacity-40 pointer-events-none">
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Projects Done" },
    { value: "100%", label: "Satisfaction" },
    { value: "Free", label: "Estimate" },
  ];
  return (
    <div className="bg-brand-black-elevated text-brand-white border-y border-white/5 py-8 md:py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => {
            const mobileRightBorder = i % 2 === 0 ? "border-r border-white/10" : "";
            const desktopRightBorder = i < 3 ? "md:border-r md:border-white/10" : "md:border-r-0";
            const mobileTopBorder = i >= 2 ? "border-t border-white/10 md:border-t-0" : "";
            return (
              <div key={i} className={`px-3 sm:px-6 py-5 text-center ${mobileRightBorder} ${desktopRightBorder} ${mobileTopBorder}`}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-gold mb-1 tracking-tight">{stat.value}</div>
                <div className="text-xs text-brand-gray uppercase tracking-wider leading-tight">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
    </div>
  );
}

