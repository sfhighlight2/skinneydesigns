import { type ReactNode } from 'react';
import { Sparkles, Activity, ShieldCheck, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';

export function IntroSection() {
  return (
    <section className="pt-20 pb-24 md:pt-32 md:pb-32 bg-[#fbfaf8] relative overflow-hidden">
      {/* Background Gradient to match the aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fbfaf8] via-[#FCFBF8] to-[#F1EFE6] opacity-60 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center mb-24 md:mb-32">
          
          {/* Left: Form Container */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-200/50 w-full relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-serif text-[#2C2B29] mb-4">Be the first to experience XERF in NYC</h3>
            <p className="text-sm text-gray-600 mb-8 font-normal leading-relaxed">
              XERF Skin Tightening is coming to New York City, bringing one of the most advanced non-surgical tightening technologies to patients seeking real, visible results without downtime. As XERF's popularity spreads, early access spots will fill quickly.
            </p>
            
            <div className="text-left bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
              <h4 className="font-semibold text-[#2C2B29] mb-3 text-sm">Join the waitlist to secure your spot. You'll receive:</h4>
              <ul className="space-y-2 text-xs md:text-sm">
                <li className="flex gap-2 text-gray-600">
                   <span className="text-[#2C2B29] font-bold">•</span>
                   Early access to appointment scheduling
                </li>
                <li className="flex gap-2 text-gray-600">
                   <span className="text-[#2C2B29] font-bold">•</span>
                   Priority placement on the first available treatment dates
                </li>
                <li className="flex gap-2 text-gray-600">
                   <span className="text-[#2C2B29] font-bold">•</span>
                   Exclusive pricing and launch promotions
                </li>
              </ul>
            </div>

            <form className="flex flex-col gap-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="intro-first-name" className="sr-only">First Name</label>
                  <input id="intro-first-name" type="text" placeholder="First Name" className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#2C2B29] focus:outline-none transition-colors font-normal text-gray-800 bg-white" />
                </div>
                <div>
                  <label htmlFor="intro-last-name" className="sr-only">Last Name</label>
                  <input id="intro-last-name" type="text" placeholder="Last Name" className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#2C2B29] focus:outline-none transition-colors font-normal text-gray-800 bg-white" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="intro-email" className="sr-only">Email Address</label>
                  <input id="intro-email" type="email" placeholder="Email Address" className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#2C2B29] focus:outline-none transition-colors font-normal text-gray-800 bg-white" />
                </div>
                <div>
                  <label htmlFor="intro-phone" className="sr-only">Phone Number</label>
                  <input id="intro-phone" type="tel" placeholder="Phone Number" className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#2C2B29] focus:outline-none transition-colors font-normal text-gray-800 bg-white" />
                </div>
              </div>
              <div>
                <label htmlFor="intro-location" className="sr-only">Preferred Location</label>
                <select id="intro-location" className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-[#2C2B29] focus:outline-none transition-colors bg-white text-gray-500 font-normal">
                   <option value="">Preferred Location (NYC & Miami)</option>
                   <option value="flatiron">Flatiron Flagship</option>
                   <option value="east-60th">East 60th Street</option>
                   <option value="saks-miami">Saks Fifth Ave Miami</option>
                </select>
              </div>
              
              <Button variant="primary" className="py-3.5 text-sm mt-2 w-full font-semibold animate-none">
                Reserve My Spot
              </Button>
            </form>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col max-w-[620px] lg:pl-10 xl:pl-20 mt-8 lg:mt-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C2B29] leading-tight mb-8">
              Tighten, lift, and glow without surgery.
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed font-normal mb-12">
              Discover a healthier, more vibrant you with SKINNEY Medspa. Explore our treatments today and take the first step towards a fuller, more rewarding life.
            </p>
            
            <div>
              <a href="#waitlist">
                <Button variant="primary" withArrow className="animate-none">
                  Find your treatment
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Feature Row */}
        <div className="border-t border-gray-200/60 pt-20">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-12 text-[#2C2B29]">The world's first <span className="text-gray-400">multi-frequency RF</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <Feature icon={<Activity className="w-6 h-6" />} title="Multi-Frequency RF" desc="XERF is the first system to use dual monopolar RF frequencies (6.78 MHz and 2 MHz), treating both surface and deep structural layers in one session." />
            <Feature icon={<ShieldCheck className="w-6 h-6" />} title="Medically Supervised" desc="Every treatment is delivered by SKINNEY's highly trained, medically supervised provider team with deep expertise in energy-based skin tightening." />
            <Feature icon={<Sparkles className="w-6 h-6" />} title="Never-Numb™ Comfort" desc="Integrated cooling and pulse technology keeps treatments comfortable while delivering powerful energy where it matters most." />
            <Feature icon={<TrendingUp className="w-6 h-6" />} title="Real, Visible Results" desc="Instant tightening from collagen contraction, plus progressive lifting and firming as your skin rebuilds over the following weeks." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="p-4 bg-white/60 backdrop-blur rounded-2xl text-gray-700 border border-gray-200/50 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
        {icon}
      </div>
      <h4 className="text-[20px] font-semibold text-[#1c1c1c] leading-snug">{title}</h4>
      <p className="text-[15px] text-gray-600 leading-relaxed font-normal">{desc}</p>
    </div>
  );
}
