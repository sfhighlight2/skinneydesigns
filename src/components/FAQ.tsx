import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ as FAQType } from '../types';

export function FAQ({ faqs }: { faqs: FAQType[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32" style={{ background: 'linear-gradient(180deg, #f8f5f8 0%, #ffffff 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2B29] mb-8 leading-tight">
              Frequently <span className="text-gray-400 italic">asked questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about XERF Skin Tightening and our treatment process.
            </p>
          </div>
          
          <div className="md:col-span-7">
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm transition-all duration-300">
                    <button 
                      id={buttonId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full text-left px-8 py-6 flex justify-between items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C2B29] focus-visible:ring-offset-2 rounded-3xl"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <h3 className="text-xl font-semibold text-[#2C2B29]">{faq.question}</h3>
                      <div className={`p-2 rounded-full flex-shrink-0 transition-colors ${isOpen ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'}`}>
                        {isOpen ? <Minus className="w-5 h-5" aria-hidden="true" /> : <Plus className="w-5 h-5" aria-hidden="true" />}
                      </div>
                    </button>
                    
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                    >
                      <p className="text-gray-600 leading-relaxed text-lg pb-2">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
