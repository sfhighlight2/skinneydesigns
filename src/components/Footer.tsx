import { Phone, Star } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200 pt-24 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top multi-column grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-8 mb-20">
          
          {/* Column 1: Schedule & Shop */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">Schedule</h3>
            <ul className="space-y-3.5 text-[13px] text-black font-semibold">
              <li><a href="#" className="hover:text-gray-600 transition-colors">Existing Client</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">New Client</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Pre & Post Care</a></li>
            </ul>
            
            <hr className="border-gray-200 my-6 w-full max-w-[150px]" />
            
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">Shop</h3>
            <ul className="space-y-3.5 text-[13px] text-black font-semibold">
              <li><a href="#" className="hover:text-gray-600 transition-colors">Shop Pharmacy</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Shop Skincare</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Biologique Recherche</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">SKINNEY Collection</a></li>
            </ul>
          </div>

          {/* Column 2: NYC & Miami Locations */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">NYC Locations</h3>
            <ul className="space-y-3.5 text-[13px] text-black font-semibold">
              <li>
                <a href="tel:6462122696" className="flex items-center gap-1.5 hover:text-gray-600 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-gray-400 fill-current" />
                  <span>646-212-2696</span>
                </a>
              </li>
              <li className="text-gray-900 font-semibold">30 East 60th Street</li>
              <li className="text-gray-400 font-medium">Flagship Flatiron</li>
            </ul>
            
            <hr className="border-gray-200 my-6 w-full max-w-[150px]" />
            
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">Miami Location</h3>
            <ul className="space-y-3.5 text-[13px] text-black font-semibold">
              <li>
                <a href="tel:7868081233" className="flex items-center gap-1.5 hover:text-gray-600 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-gray-400 fill-current" />
                  <span>786-808-1233</span>
                </a>
              </li>
              <li className="text-gray-900 font-semibold">SAKS Fifth Avenue Miami</li>
              <li className="pt-1">
                <div className="w-10 h-10 bg-black text-white flex flex-col items-center justify-center font-serif text-[7px] font-bold leading-[1.1] tracking-tight uppercase border border-black select-none">
                  <div className="text-[9px] normal-case italic font-semibold leading-none">Saks</div>
                  <div className="text-[6px] tracking-[0.2em] leading-none -mt-0.5">Fifth</div>
                  <div className="text-[6px] tracking-[0.1em] leading-none">Avenue</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">About</h3>
            <ul className="space-y-3.5 text-[13px] text-black font-semibold">
              <li><a href="#" className="hover:text-gray-600 transition-colors">The Skinney Story</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Skinney Team</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Contact Us</a></li>
              <li>
                <div className="flex items-center gap-1.5 mt-2">
                  <a href="#" className="hover:underline text-black font-semibold text-[13px]">Read Reviews</a>
                  <div className="flex items-center gap-0.5 text-yellow-500">
                    <Star className="w-3.5 h-3.5 fill-current text-yellow-500 stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-current text-yellow-500 stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-current text-yellow-500 stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-current text-yellow-500 stroke-none" />
                    <Star className="w-3.5 h-3.5 fill-current text-yellow-500 stroke-none" />
                  </div>
                </div>
              </li>
              <li className="pt-2">
                <a href="#pre-post-care" className="inline-block">
                  <button className="bg-black text-white text-[10px] font-bold tracking-[0.15em] px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors uppercase font-mono cursor-pointer">
                    Pre & Post Care
                  </button>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Miami Treatments */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">Miami Treatments</h3>
            <ul className="space-y-3.5 text-[13px] text-black font-semibold">
              <li><a href="#" className="hover:text-gray-600 transition-colors">Body</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Facials</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Injectables</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Skin</a></li>
            </ul>
          </div>

          {/* Column 5: NYC Treatments */}
          <div className="flex flex-col">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">NYC Treatments</h3>
            <ul className="space-y-3.5 text-[13px] text-black font-semibold">
              <li><a href="#" className="hover:text-gray-600 transition-colors">Botox</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Coolsculpting</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Dermal Fillers</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Emsculpt + Emsculpt NEO</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">EON</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Lip Fillers</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Morpheus 8</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Rejuran Salmon Sperm Facial</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Semaglutide</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Sofwave</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">Truflex</a></li>
            </ul>
          </div>

        </div>

        {/* Corporate Brand Logos Row */}
        <div className="flex flex-wrap items-center gap-12 md:gap-24 mb-16 pt-8 border-t border-gray-200">
          {/* Logo 1: SKINNEY Medspa */}
          <div className="flex flex-col items-start text-black">
            <span className="font-sans text-[24px] tracking-tight font-semibold flex items-center">
              SK<span className="font-light tracking-[0.05em] ml-0.5">INNEY</span>
            </span>
            <span className="font-sans text-[6px] tracking-[0.45em] text-gray-400 uppercase -mt-0.5 leading-none">
              medspa + wellness
            </span>
          </div>

          {/* Logo 2: SKINNEY Pharm */}
          <div className="flex flex-col items-start text-[#B35C3B]">
            <span className="font-sans text-[24px] tracking-tight font-semibold flex items-center">
              SK<span className="font-light tracking-[0.05em] ml-0.5">INNEY</span>
            </span>
            <span className="font-sans text-[6px] tracking-[0.45em] text-[#B35C3B] uppercase -mt-0.5 leading-none font-semibold">
              pharm
            </span>
          </div>

          {/* Logo 3: SKINNEY Outline/Thin */}
          <div className="flex flex-col items-start text-black opacity-80">
            <span className="font-sans text-[24px] tracking-[0.1em] font-light uppercase">
              SKINNEY
            </span>
          </div>
        </div>

        {/* Client Row Links */}
        <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row md:items-center gap-3">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider min-w-[80px]">Client</span>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-gray-800 font-semibold">
            <a href="#" className="hover:text-gray-600 transition-colors">Existing Client</a>
            <a href="#" className="hover:text-gray-600 transition-colors">New Client</a>
            <a href="#" className="hover:text-gray-600 transition-colors">My Account</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Pre & Post Care</a>
          </div>
        </div>

        {/* Legal Row Links */}
        <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row md:items-center gap-3">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider min-w-[80px]">Legal</span>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[11px] text-gray-500 font-medium">
            <a href="#" className="hover:text-gray-800 transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Cancellations</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-800 transition-colors">DMCA</a>
          </div>
        </div>

        {/* Compliant Disclaimers */}
        <div className="pt-8 border-t border-gray-200 text-gray-400 text-[10px] leading-relaxed space-y-4 max-w-5xl mt-4">
          <p>
            <strong className="text-gray-500 font-semibold">SMS/Email Consent:</strong> By submitting this form and signing up for texts and emails, you consent to receive marketing text messages (e.g. promos, reminders) from SKINNEY, SKINNEY MEDSPA and SKINNEY PHARM at the number provided, including messages sent by autodialer. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available). New client promotion cannot be combined with other sales or promotions.
          </p>
          <p>
            <strong className="text-gray-500 font-semibold">Results May Vary:</strong> SKINNEY Medspa is reputable for complete customer satisfaction for completed treatments. Unless otherwise noted, testimonials provided are from SKINNEY Medspa clients who have undergone complete treatments. Results may vary per client. No treatment is promised to provide permanent results. A guarantee is neither provided nor implied.
          </p>
          <p>
            <strong className="text-gray-500 font-semibold">Analytics Notice:</strong> We improve our products and advertising by using Microsoft Clarity to see how you use our website. By using our site, you agree that we and Microsoft can collect and use this data.
          </p>
        </div>

      </div>
    </footer>
  );
}
