import { MapPin } from 'lucide-react';

const locationsList = [
  {
    id: 'loc-1',
    label: 'Flatiron Flagship',
    address: '125 Fifth Avenue',
    image: 'https://skinneymedspa.com/wp-content/uploads/2024/03/flagship-flatiron-125-fifth-avenue-2nd-floor-new-york-ny-10003-medspa-212-23-01-1-1024x768.webp',
    mapsLink: 'https://maps.google.com/?q=SKINNEY+Medspa+125+Fifth+Avenue+New+York'
  },
  {
    id: 'loc-2',
    label: 'East 60th Street',
    address: '30 East 60th Street',
    image: 'https://skinneymedspa.com/wp-content/uploads/2024/06/30-east-60th-street-new-york-10022-medspa-location-212-2024-08-1024x768.jpg',
    mapsLink: 'https://maps.google.com/?q=SKINNEY+Medspa+30+East+60th+Street+New+York'
  },
  {
    id: 'loc-3',
    label: 'Saks Fifth Ave Miami',
    address: 'Bal Harbour',
    image: 'https://skinneymedspa.com/wp-content/uploads/2024/03/saks-fifth-avenue-miami-9700-collins-avenue-bal-harbour-fl-33154-medspa-305-23-01-1-1024x768.webp',
    mapsLink: 'https://maps.google.com/?q=SKINNEY+Medspa+Bal+Harbour+Miami'
  }
];

export function Locations() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-h2 font-serif text-black leading-none mb-6">
            medspa locations
          </h2>
          
          {/* Centered lines for NYC & MIAMI subheadline */}
          <div className="flex items-center justify-center gap-6 max-w-5xl mx-auto">
            <div className="h-[1px] bg-gray-200 flex-grow" />
            <span className="text-[10px] md:text-[11px] font-bold font-mono tracking-[0.3em] text-[#2C2B29] uppercase shrink-0">
              NYC & MIAMI
            </span>
            <div className="h-[1px] bg-gray-200 flex-grow" />
          </div>
        </div>

        {/* Locations Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {locationsList.map((loc) => (
            <div 
              key={loc.id} 
              className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] rounded-[32px] overflow-hidden group shadow-sm border border-gray-100/50 select-none"
            >
              {/* Background Location Image */}
              <img 
                src={loc.image} 
                alt={`${loc.label} - ${loc.address}`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/30 transition-colors duration-500" />
              
              {/* Absolute Overlaid Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between items-center text-center text-white">
                {/* Spacer to push text to the middle */}
                <div className="h-6" />
                
                {/* Location Names */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-white/90 uppercase mb-2">
                    {loc.label}
                  </span>
                  <span className="text-[15px] sm:text-[17px] font-extrabold tracking-[0.1em] text-white uppercase font-sans">
                    {loc.address}
                  </span>
                </div>
                
                {/* Directions Button at the bottom */}
                <a 
                  href={loc.mapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-fit"
                >
                  <button className="bg-black text-white text-[10px] font-bold tracking-[0.2em] px-6 py-3 rounded-full hover:bg-neutral-800 transition-all duration-300 uppercase font-mono flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95">
                    <span>Directions</span>
                    <MapPin className="w-3.5 h-3.5 text-white" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
