import { Check } from 'lucide-react';

export function WhyChoose() {
  const points = [
    { title: "True structural skin tightening" },
    { title: "Multi-frequency technology" },
    { title: "Instant results" },
    { title: "No downtime" },
    { title: "Comfortable experience" },
    { title: "Natural, progressive results" }
  ];

  return (
    <section className="pt-24 md:pt-32 pb-4 md:pb-6 bg-white" id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C2B29] leading-tight mb-8">
              Why Patients Are Choosing <span className="text-gray-400">XERF</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-normal mb-12">
              XERF delivers a level of tightening and lifting that traditional non-surgical treatments simply cannot match, without the downtime or intensity of surgery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#2C2B29] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#2C2B29] leading-tight">{point.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
