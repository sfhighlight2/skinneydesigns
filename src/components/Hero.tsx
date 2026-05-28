import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import heroBg from '../../assets/hero.avif';

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] md:h-screen pt-20 overflow-hidden bg-[#2C2B29]">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg}
          className="w-full h-full object-cover opacity-60"
          alt="Hero background"
          fetchPriority="high"
          loading="eager"
        />
      </div>

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-3xl">
          <p className="text-white/80 font-mono text-sm uppercase tracking-widest mb-6">FDA Cleared</p>
          <h1 className="text-4xl md:text-5xl lg:text-h1 font-serif text-white tracking-tight leading-[1.05] mb-6">
            Lifted skin. No surgery.
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-normal mb-10 max-w-2xl">
            XERF helps tighten and smooth sagging skin using advanced multi-frequency RF technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#waitlist">
              <Button variant="primary" withArrow className="!bg-white !text-black hover:!bg-gray-100 px-8 py-4 shadow-md font-semibold">
                Book Consultation
              </Button>
            </a>
            <a href="#process">
              <Button variant="outline" className="!text-white !border-white hover:!bg-white/10 px-8 py-4 font-semibold">
                See How It Works
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
