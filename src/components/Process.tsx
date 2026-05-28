import { useState } from 'react';
import { Play } from 'lucide-react';

export function Process() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-[#2C2B29] text-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
          <p className="text-gray-400 mb-6 font-semibold uppercase tracking-widest text-sm">How it works</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white/90 leading-tight">Follow a quick, guided process to receive personalized treatment recommendations and see real, visible results.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 relative">
          {/* Steps */}
          <div className="bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-300 border border-white/5 rounded-[32px] p-8 md:p-10 relative z-10">
            <span className="text-gray-400 font-mono text-sm mb-6 block">[01]</span>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-white">Join the<br/><span className="text-gray-400">Waitlist</span></h3>
            <p className="text-gray-400 leading-relaxed font-normal">Sign up online to secure your spot for early access to XERF in NYC. You'll receive priority scheduling and exclusive launch pricing.</p>
          </div>
          
          <div className="bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-300 border border-white/5 rounded-[32px] p-8 md:p-10 relative z-10">
            <span className="text-gray-400 font-mono text-sm mb-6 block">[02]</span>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-white">Personalized<br/><span className="text-gray-400">Consultation</span></h3>
            <p className="text-gray-400 leading-relaxed font-normal">Meet with a SKINNEY provider who evaluates your skin, discusses goals, and customizes your XERF treatment plan with real-time skin analysis.</p>
          </div>
          
          <div className="bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-300 border border-white/5 rounded-[32px] p-8 md:p-10 relative z-10">
            <span className="text-gray-400 font-mono text-sm mb-6 block">[03]</span>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-white">Treatment<br/><span className="text-gray-400">+ Results</span></h3>
            <p className="text-gray-400 leading-relaxed font-normal">Experience your comfortable Never-Numb™ session, see instant tightening, and watch progressive lifting unfold over the following weeks.</p>
          </div>
        </div>

        <div className="rounded-[40px] overflow-hidden h-[40vh] md:h-[60vh] relative group cursor-pointer bg-black">
          {isPlaying ? (
            <iframe 
              src="https://www.youtube.com/embed/QAeBJlVHcd0?autoplay=1&rel=0"
              title="How XERF Works"
              className="w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-full relative" onClick={() => setIsPlaying(true)}>
               <img 
                  src="https://img.youtube.com/vi/QAeBJlVHcd0/maxresdefault.jpg" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                  alt="How XERF tightening works"
                  loading="lazy"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 border border-white/30">
                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                       <Play className="w-6 h-6 text-black ml-1 fill-black" />
                     </div>
                  </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
