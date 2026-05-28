import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ProductSection } from './components/ProductSection';
import { Process } from './components/Process';
import { WhyChoose } from './components/WhyChoose';
import { Testimonial } from './components/Testimonial';
import { FAQ } from './components/FAQ';
import { Waitlist } from './components/Waitlist';
import { Locations } from './components/Locations';
import { Footer } from './components/Footer';
import { xerfProducts, xerfTreatmentAreas, faqs } from './data';
import showcaseImg from '../assets/52fc8607d98d5167945b70c8098f8693.png';
import xerfProductLogo from '../assets/Xerf-Product-Logo-2-e1779192381585.png';

function App() {
  return (
    <div className="min-h-screen bg-[#fbfaf8] selection:bg-[#2C2B29] selection:text-white font-sans">
      <Navbar />
      <Hero />
      
      {/* Infinite Scrolling Partner Brand Logos Ticker */}
      <section className="bg-[#2C2B29] border-t border-b border-white/5 py-8 overflow-hidden relative z-20">
        {/* Soft fading edges using gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#2C2B29] to-transparent z-30 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#2C2B29] to-transparent z-30 pointer-events-none"></div>

        <div className="flex w-[200%] animate-scroll whitespace-nowrap text-white/30 text-sm md:text-base font-mono tracking-[0.25em] gap-16 md:gap-24 items-center select-none">
          {/* First Scroll Set */}
          <span className="shrink-0 flex items-center font-bold">VOGUE</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
          <span className="shrink-0 flex items-center font-semibold">ELLE</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
          <span className="shrink-0 flex items-center font-black">ALLURE</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
          <span className="shrink-0 flex items-center font-serif italic tracking-[0.1em] font-normal text-lg">COSMOPOLITAN</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
          <span className="shrink-0 flex items-center font-medium font-serif tracking-[0.15em] text-md">HARPER'S BAZAAR</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
          <span className="shrink-0 flex items-center font-sans tracking-[0.3em] font-light">MARIE CLAIRE</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
          <span className="shrink-0 flex items-center font-serif font-semibold tracking-normal lowercase text-[20px]">the new york times</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
          <span className="shrink-0 flex items-center font-bold tracking-[0.05em]">FORBES</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>

          {/* Second Duplicate Scroll Set to ensure seamless infinite looping */}
          <span className="shrink-0 flex items-center font-bold">VOGUE</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
          <span className="shrink-0 flex items-center font-semibold">ELLE</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
          <span className="shrink-0 flex items-center font-black">ALLURE</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
          <span className="shrink-0 flex items-center font-serif italic tracking-[0.1em] font-normal text-lg">COSMOPOLITAN</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
          <span className="shrink-0 flex items-center font-medium font-serif tracking-[0.15em] text-md">HARPER'S BAZAAR</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
          <span className="shrink-0 flex items-center font-sans tracking-[0.3em] font-light">MARIE CLAIRE</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
          <span className="shrink-0 flex items-center font-serif font-semibold tracking-normal lowercase text-[20px]">the new york times</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
          <span className="shrink-0 flex items-center font-bold tracking-[0.05em]">FORBES</span>
          <span className="shrink-0 text-white/10 text-xs font-light">•</span>
        </div>
      </section>

      <IntroSection />
      
      <ProductSection 
        title="What is XERF?"
        number="01"
        description="XERF is the first treatment of its kind — a non-invasive skin tightening treatment that uses advanced multi-frequency radiofrequency technology to stimulate collagen production and firm the skin from the inside out."
        products={xerfProducts}
        bgColor="linear-gradient(180deg, #f8f5f8 0%, #ffffff 100%)"
      />
      
      <section className="w-full h-auto relative flex items-center justify-center" aria-label="XERF treatment showcase">
        <img 
          src={showcaseImg} 
          alt="XERF skin tightening treatment at SKINNEY Medspa"
          className="w-full h-[50vh] md:h-[70vh] object-cover"
          loading="lazy"
        />
        {/* Centered Logo Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
          <img 
            src={xerfProductLogo} 
            alt="XERF Product Logo" 
            className="h-20 md:h-32 w-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.3)] max-w-[80%]"
            loading="lazy"
          />
        </div>
      </section>

      <ProductSection 
        title="Treatment Areas"
        number="02"
        description="XERF is highly versatile and effective on both face and body, especially in areas with mild to moderate skin laxity."
        products={xerfTreatmentAreas}
        bgColor="linear-gradient(180deg, #f8f5f8 0%, #ffffff 100%)"
      />

      <Process />
      
      <WhyChoose />
      
      <Testimonial />
      
      <FAQ faqs={faqs} />
      
      <Waitlist />
      
      <Locations />
      
      <Footer />
    </div>
  );
}

export default App;
