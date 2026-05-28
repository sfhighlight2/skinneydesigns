import { Button } from './ui/Button';
import officeBg from '../../assets/Skinney-Medspa-Office-05-Skinney-Medspa-NYC-.webp';

export function Waitlist() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#fbfaf8]" id="waitlist">
      {/* Background Image with custom light opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.18] z-0" 
        style={{ backgroundImage: `url(${officeBg})` }}
      />
      {/* Subtle light warm overlay to integrate the image seamlessly */}
      <div className="absolute inset-0 bg-[#FAF9F5]/40 backdrop-blur-[1px] z-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-sm border border-[#2C2B29]/10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C2B29] mb-6">Be the first to experience XERF in NYC</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            XERF Skin Tightening is coming to New York City, bringing one of the most advanced non-surgical tightening technologies to patients seeking real, visible results without downtime. As XERF's popularity spreads, early access spots will fill quickly.
          </p>
          
          <div className="text-left bg-gray-50 rounded-3xl p-8 mb-10 border border-gray-100 max-w-2xl mx-auto">
            <h3 className="font-semibold text-[#2C2B29] mb-4 text-lg">Join the waitlist to secure your spot. You'll receive:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-600">
                 <span className="text-[#2C2B29] font-bold">•</span>
                 Early access to appointment scheduling
              </li>
              <li className="flex gap-3 text-gray-600">
                 <span className="text-[#2C2B29] font-bold">•</span>
                 Priority placement on the first available treatment dates
              </li>
              <li className="flex gap-3 text-gray-600">
                 <span className="text-[#2C2B29] font-bold">•</span>
                 Exclusive pricing and launch promotions
              </li>
            </ul>
          </div>

          <form className="max-w-2xl mx-auto flex flex-col gap-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="waitlist-first-name" className="sr-only">First Name</label>
                <input id="waitlist-first-name" type="text" placeholder="First Name" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#2C2B29] focus:outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="waitlist-last-name" className="sr-only">Last Name</label>
                <input id="waitlist-last-name" type="text" placeholder="Last Name" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#2C2B29] focus:outline-none transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="waitlist-email" className="sr-only">Email Address</label>
                <input id="waitlist-email" type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#2C2B29] focus:outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="waitlist-phone" className="sr-only">Phone Number</label>
                <input id="waitlist-phone" type="tel" placeholder="Phone Number" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#2C2B29] focus:outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label htmlFor="waitlist-location" className="sr-only">Preferred Location</label>
              <select id="waitlist-location" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#2C2B29] focus:outline-none transition-colors bg-white text-gray-500">
                 <option value="">Preferred Location (NYC)</option>
                 <option value="flatiron">Flatiron</option>
                 <option value="soho">Soho</option>
              </select>
            </div>
            
            <Button variant="primary" className="py-4 text-lg mt-4 w-full md:w-auto md:ml-auto">
              Reserve My Spot
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
