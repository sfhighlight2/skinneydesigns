import { useState } from 'react';
import { ChevronDown, Search, CalendarPlus, Menu, X } from 'lucide-react';
import logoImg from '../../assets/images.png';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 font-sans">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="flex justify-between items-center h-[90px]">
          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center">
            <button
              className="text-black"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Left Nav Elements */}
          <div className="hidden xl:flex flex-1 items-center justify-end pr-6 lg:pr-10 2xl:pr-16 space-x-6 lg:space-x-8 2xl:space-x-10">
            <NavLink text="ABOUT" hasDropdown />
            <NavLink text="LOCATIONS" hasDropdown />
            <NavLink text="TREATMENTS" hasDropdown />
            <NavLink text="MEMBERSHIPS" />
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 flex items-center justify-center cursor-pointer h-10 md:h-12">
            <img src={logoImg} alt="SKINNEY Medspa Logo" className="h-full w-auto object-contain" />
          </div>

          {/* Right Nav Elements */}
          <div className="hidden xl:flex flex-1 items-center justify-between pl-6 lg:pl-10 2xl:pl-16">
            <div className="flex items-center space-x-6 lg:space-x-8 2xl:space-x-10">
              <NavLink text="SCHEDULE" hasDropdown />
              <NavLink text="SPECIALS" />
              <NavLink text="SHOP" hasDropdown />
            </div>
            
            <div className="flex items-center space-x-6 ml-auto">
              <button className="text-black hover:opacity-70 transition-opacity animate-none" aria-label="Search">
                <Search className="w-5 h-5" strokeWidth={2} />
              </button>
              <button className="flex items-center gap-2.5 border-2 border-black rounded-full px-6 py-2.5 hover:bg-gray-50 transition-colors">
                <CalendarPlus className="w-4 h-4 mb-0.5" strokeWidth={1.5} />
                <span className="text-xs font-bold tracking-[0.1em]">BOOK NOW</span>
              </button>
            </div>
          </div>

          {/* Spacer for mobile to center logo */}
          <div className="xl:hidden w-6"></div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white px-6 py-8 flex flex-col gap-6">
          <MobileNavLink text="About" />
          <MobileNavLink text="Locations" />
          <MobileNavLink text="Treatments" />
          <MobileNavLink text="Memberships" />
          <MobileNavLink text="Schedule" />
          <MobileNavLink text="Specials" />
          <MobileNavLink text="Shop" />
          <div className="border-t border-gray-100 pt-6 flex flex-col gap-4">
            <button className="flex items-center justify-center gap-3 border-2 border-black rounded-full px-8 py-3.5 hover:bg-gray-50 transition-colors w-full">
              <CalendarPlus className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-sm font-bold tracking-[0.1em]">BOOK NOW</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ text, hasDropdown }: { text: string; hasDropdown?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] text-black hover:text-gray-500 transition-colors">
      {text}
      {hasDropdown && <ChevronDown className="w-3.5 h-3.5 mt-0.5" strokeWidth={2.5} />}
    </a>
  );
}

function MobileNavLink({ text }: { text: string }) {
  return (
    <a href="#" className="text-[15px] font-semibold tracking-[0.05em] text-[#2C2B29] hover:text-gray-500 transition-colors py-1">
      {text}
    </a>
  );
}
