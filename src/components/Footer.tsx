import { ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2C2B29] text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
          <div className="flex flex-col">
            <span className="font-sans text-[36px] tracking-tight font-semibold flex items-center">
              SK
              <span className="font-light tracking-[0.05em] ml-0.5" style={{ color: 'transparent', WebkitTextStroke: '1px white' }}>INNEY</span>
              <sup className="text-sm font-light ml-1 relative -top-3">®</sup>
            </span>
            <span className="font-sans text-[10px] tracking-[0.45em] text-gray-400 uppercase mt-1">
              medspa + wellness
            </span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <span className="sr-only">TikTok</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path fillRule="evenodd" d="M12.525.02c1.31-.02 2.61-.01 3.91-.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.37-3.41-5.68.03-2.08 1.25-4.04 3.09-5.06 1.41-.81 3.04-1.04 4.63-.84v4.06c-1.15-.09-2.32.22-3.13 1.02-.92.83-1.18 2.28-.63 3.42.41.87 1.3 1.52 2.26 1.62 1.25.13 2.5-.47 3.13-1.54.43-.72.63-1.57.6-2.42-.01-5.46-.02-10.93-.01-16.39z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 mb-24 border-t border-white/10 pt-16">
          <div className="col-span-1 pr-4 lg:pr-8">
            <h2 className="text-3xl font-serif text-white/90 leading-tight mb-8">
              Tighten, lift, transform —<br/>
              <span className="text-gray-400">without surgery</span>
            </h2>
            <div className="flex bg-white/10 backdrop-blur rounded-full p-1 border border-white/20 w-full max-w-xs">
              <input 
                type="email" 
                placeholder="Your email..." 
                className="bg-transparent text-white pl-4 pr-2 py-2.5 outline-none flex-grow min-w-0 placeholder-gray-400 text-sm" 
              />
              <button className="bg-white text-black px-5 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center gap-1.5 text-sm shrink-0">
                Join <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-400 font-semibold mb-6 tracking-wide text-sm uppercase">Treatments</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">XERF Skin Tightening</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">Injectables</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">Body Contouring</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">Laser</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">Facials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-semibold mb-6 tracking-wide text-sm uppercase">Popular</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">XERF</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">CoolSculpting Elite</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">Morpheus8</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">Sofwave</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">Botox</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-semibold mb-6 tracking-wide text-sm uppercase">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">About SKINNEY</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">Locations</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">Memberships</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">Specials</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors font-medium">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between pt-8 border-t border-white/10 text-gray-400 text-sm gap-4 mb-16">
          <p>© 2026 SKINNEY Medspa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-gray-400 text-[10px] leading-relaxed space-y-4 max-w-5xl">
           <p>
             <strong className="text-gray-300 font-semibold">SMS/Email Consent:</strong> By submitting this form and signing up for texts and emails, you consent to receive marketing text messages (e.g. promos, reminders) from SKINNEY, SKINNEY MEDSPA and SKINNEY PHARM at the number provided, including messages sent by autodialer. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available). New client promotion cannot be combined with other sales or promotions.
           </p>
           <p>
             <strong className="text-gray-300 font-semibold">Results May Vary:</strong> SKINNEY Medspa is reputable for complete customer satisfaction for completed treatments. Unless otherwise noted, testimonials provided are from SKINNEY Medspa clients who have undergone complete treatments. Results may vary per client. No treatment is promised to provide permanent results. A guarantee is neither provided nor implied.
           </p>
           <p>
             <strong className="text-gray-300 font-semibold">Analytics Notice:</strong> We improve our products and advertising by using Microsoft Clarity to see how you use our website. By using our site, you agree that we and Microsoft can collect and use this data.
           </p>
        </div>
      </div>
    </footer>
  );
}
