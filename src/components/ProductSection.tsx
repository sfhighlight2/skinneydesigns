import { Product } from '../types';
import { Button } from './ui/Button';

interface Props {
  title: string;
  number: string;
  description: string;
  products: Product[];
  bgColor?: string;
  dark?: boolean;
}

export function ProductSection({ title, number, description, products, bgColor = '#fbfaf8', dark = false }: Props) {
  const textColorStyle = dark ? 'text-white' : 'text-[#2C2B29]';
  const descColorStyle = dark ? 'text-gray-300' : 'text-gray-600';
  const numColorStyle = dark ? 'text-[#2C2B29]' : 'text-gray-300';
  const numBgColorStyle = dark ? 'bg-white' : 'bg-transparent';

  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{ background: bgColor }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row gap-8 items-end justify-between">
           <h2 className={`text-3xl md:text-4xl lg:text-h2 font-serif ${textColorStyle}`}>{title}</h2>
           <div className="flex items-start gap-6 max-w-md">
             <span className={`text-xl font-mono ${numColorStyle} ${numBgColorStyle} px-2 py-1 rounded w-fit`}>{number}</span>
             <p className={`text-lg font-medium leading-relaxed ${descColorStyle}`}>{description}</p>
           </div>
        </div>
      </div>

      {/* Responsive Grid Layout to prevent any cards from cutting off */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
        {products.map((product) => (
          <div key={product.id} className="w-full bg-white rounded-[32px] p-2 shadow-sm border border-gray-200/50 flex flex-col group relative">
            {/* Image at the TOP of the card to prevent any vertical stretching or spacing gaps */}
            <div className="relative mt-2 mx-2 rounded-[24px] overflow-hidden bg-gray-50/50 flex items-center justify-center p-8 aspect-square group-hover:bg-gray-100/80 transition-colors duration-500">
               <div className="w-full h-full bg-[#F0EEF0] rounded-[16px] border border-gray-200/40" />
            </div>

            {/* Text nestled snugly directly below the image */}
            <div className="p-6 md:p-8 pt-6 pb-4">
              <h3 className="text-2xl font-semibold text-[#2C2B29] mb-3 pr-8">
                {product.name}
              </h3>
              <p className="text-base font-normal text-gray-500 leading-relaxed">{product.category}</p>
            </div>

            {/* CTA at the bottom */}
            <div className="flex gap-2 p-2 px-3 pb-3 mt-auto">
               <a href={product.link} className="w-full">
                 <Button className="w-full text-sm py-4 px-0 border-none font-semibold hover:opacity-90 animate-none" style={{ backgroundColor: product.color, color: 'white' }}>
                   {product.buttonText || 'Learn More'}
                 </Button>
               </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
