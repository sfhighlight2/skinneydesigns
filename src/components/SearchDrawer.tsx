import { useEffect } from 'react';
import { Search, X } from 'lucide-react';
import serumImg from '../../assets/skincare-serum.png';
import oilImg from '../../assets/skincare-oil.png';
import logoImg from '../../assets/images.png';

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchDrawer({ isOpen, onClose }: SearchDrawerProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 z-[100] transition-all duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-500" 
        onClick={onClose}
      />

      {/* Drawer Panel - slides out from the left */}
      <div 
        className={`absolute inset-y-0 left-0 w-full sm:w-[550px] md:w-[700px] lg:w-[900px] bg-white shadow-2xl flex flex-col p-6 sm:p-12 md:p-16 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Header Logo */}
        <div className="mb-8 flex items-center select-none">
          <img src={logoImg} alt="SKINNEY Medspa Logo" className="h-7 md:h-8 w-auto object-contain" />
        </div>

        {/* Top Header Search Bar */}
        <div className="relative flex items-center border-b-2 border-neutral-100 pb-4">
          <Search className="w-6 h-6 text-neutral-400 mr-4 shrink-0" strokeWidth={1.5} />
          
          <input 
            type="text" 
            placeholder="What can we help you find?" 
            className="w-full text-xl sm:text-2xl font-light text-black placeholder-neutral-300 focus:outline-none font-serif bg-transparent"
            autoFocus={isOpen}
          />
          
          <button 
            onClick={onClose} 
            className="text-neutral-400 hover:text-black transition-colors ml-4"
            aria-label="Close search panel"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>

        {/* Drawer Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-12 flex-1 overflow-y-auto pr-2">
          
          {/* Left Column: Trending medspa keywords */}
          <div className="md:col-span-3 flex flex-col justify-between select-none">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase font-mono block mb-6">
                trending
              </span>
              
              <div className="flex flex-col items-start">
                <button className="text-left font-serif text-xl sm:text-2xl font-light text-black hover:text-neutral-400 transition-colors block mb-5 lowercase cursor-pointer">
                  xerf skin tightening
                </button>
                <button className="text-left font-serif text-xl sm:text-2xl font-light text-black hover:text-neutral-400 transition-colors block mb-5 lowercase cursor-pointer">
                  laser hair removal
                </button>
                <button className="text-left font-serif text-xl sm:text-2xl font-light text-black hover:text-neutral-400 transition-colors block mb-5 lowercase cursor-pointer">
                  botox & fillers
                </button>
                <button className="text-left font-serif text-xl sm:text-2xl font-light text-black hover:text-neutral-400 transition-colors block mb-5 lowercase cursor-pointer">
                  chemical peels
                </button>
                <button className="text-left font-serif text-xl sm:text-2xl font-light text-black hover:text-neutral-400 transition-colors block mb-5 lowercase cursor-pointer">
                  body contouring
                </button>
                <button className="text-left font-serif text-xl sm:text-2xl font-light text-black hover:text-neutral-400 transition-colors block mb-5 lowercase cursor-pointer">
                  hydrafacial
                </button>
                <button 
                  onClick={onClose} 
                  className="text-left font-serif text-xl sm:text-2xl font-light text-neutral-400 hover:text-black transition-colors block mb-5 lowercase cursor-pointer mt-6"
                >
                  close search
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Skincare products & editorials */}
          <div className="md:col-span-8 md:border-l md:border-neutral-100 md:pl-12 flex flex-col">
            
            {/* Tabs selector */}
            <div className="flex items-center gap-8 border-b border-neutral-100 pb-4 mb-6 select-none">
              <button className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-black uppercase font-mono">
                <span className="w-1.5 h-1.5 bg-black inline-block" />
                <span>products</span>
              </button>
              <button className="text-[10px] font-bold tracking-[0.2em] text-neutral-350 hover:text-black transition-colors uppercase font-mono cursor-not-allowed">
                editorial
              </button>
            </div>

            {/* Skincare products grid (2x2 grid) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6">
              
              {/* Product 1 */}
              <div className="group flex flex-col items-center select-none">
                <div className="relative aspect-[3/4] w-full bg-[#f9f7f6] rounded-[24px] overflow-hidden flex flex-col items-center justify-center p-6 cursor-pointer">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                    coming soon
                  </span>
                  
                  {/* Sliding Quickshop Button */}
                  <button className="absolute bottom-6 left-1/2 -translate-x-1/2 border-2 border-black rounded-full py-2.5 px-6 text-[9px] font-bold tracking-[0.2em] bg-white hover:bg-black hover:text-white transition-all uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 shadow-sm cursor-pointer active:scale-95">
                    quickshop
                  </button>
                </div>
                
                {/* Meta details */}
                <div className="mt-4 text-center">
                  <span className="text-[9px] font-bold tracking-[0.25em] text-neutral-400 uppercase font-mono block mb-1">
                    skinney
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-black leading-tight lowercase">
                    advanced moisture serum
                  </h3>
                  <span className="text-xs text-neutral-500 font-mono mt-1 block">
                    $110
                  </span>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group flex flex-col items-center select-none">
                <div className="relative aspect-[3/4] w-full bg-[#f9f7f6] rounded-[24px] overflow-hidden flex flex-col items-center justify-center p-6 cursor-pointer">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                    coming soon
                  </span>
                  
                  {/* Sliding Quickshop Button */}
                  <button className="absolute bottom-6 left-1/2 -translate-x-1/2 border-2 border-black rounded-full py-2.5 px-6 text-[9px] font-bold tracking-[0.2em] bg-white hover:bg-black hover:text-white transition-all uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 shadow-sm cursor-pointer active:scale-95">
                    quickshop
                  </button>
                </div>
                
                {/* Meta details */}
                <div className="mt-4 text-center">
                  <span className="text-[9px] font-bold tracking-[0.25em] text-neutral-400 uppercase font-mono block mb-1">
                    skinney
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-black leading-tight lowercase">
                    botanical repair face oil
                  </h3>
                  <span className="text-xs text-neutral-500 font-mono mt-1 block">
                    $105
                  </span>
                </div>
              </div>

              {/* Product 3 */}
              <div className="group flex flex-col items-center select-none">
                <div className="relative aspect-[3/4] w-full bg-[#f9f7f6] rounded-[24px] overflow-hidden flex flex-col items-center justify-center p-6 cursor-pointer">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                    coming soon
                  </span>
                  
                  {/* Sliding Quickshop Button */}
                  <button className="absolute bottom-6 left-1/2 -translate-x-1/2 border-2 border-black rounded-full py-2.5 px-6 text-[9px] font-bold tracking-[0.2em] bg-white hover:bg-black hover:text-white transition-all uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 shadow-sm cursor-pointer active:scale-95">
                    quickshop
                  </button>
                </div>
                
                {/* Meta details */}
                <div className="mt-4 text-center">
                  <span className="text-[9px] font-bold tracking-[0.25em] text-neutral-400 uppercase font-mono block mb-1">
                    skinney
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-black leading-tight lowercase">
                    daily defense spf 50
                  </h3>
                  <span className="text-xs text-neutral-500 font-mono mt-1 block">
                    $68
                  </span>
                </div>
              </div>

              {/* Product 4 */}
              <div className="group flex flex-col items-center select-none">
                <div className="relative aspect-[3/4] w-full bg-[#f9f7f6] rounded-[24px] overflow-hidden flex flex-col items-center justify-center p-6 cursor-pointer">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                    coming soon
                  </span>
                  
                  {/* Sliding Quickshop Button */}
                  <button className="absolute bottom-6 left-1/2 -translate-x-1/2 border-2 border-black rounded-full py-2.5 px-6 text-[9px] font-bold tracking-[0.2em] bg-white hover:bg-black hover:text-white transition-all uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 shadow-sm cursor-pointer active:scale-95">
                    quickshop
                  </button>
                </div>
                
                {/* Meta details */}
                <div className="mt-4 text-center">
                  <span className="text-[9px] font-bold tracking-[0.25em] text-neutral-400 uppercase font-mono block mb-1">
                    skinney
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-black leading-tight lowercase">
                    soothing recovery cream
                  </h3>
                  <span className="text-xs text-neutral-500 font-mono mt-1 block">
                    $85
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
