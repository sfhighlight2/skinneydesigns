import { Product, FAQ } from './types';
import xerfLayer from '../assets/xerf_layer.png';
import xerfCollagen from '../assets/xerf_collagen.png';
import xerfLift from '../assets/xerf_lift.png';
import xerfFace from '../assets/xerf_face.png';
import xerfNeck from '../assets/xerf_neck.png';
import xerfBody from '../assets/xerf_body.png';

export const xerfProducts: Product[] = [
  {
    id: 'xerf-1',
    name: 'Targets Multiple Skin Layers',
    category: 'Surface, mid, and deep tissue treated in one session for comprehensive tightening.',
    description: '',
    image: xerfLayer,
    color: '#2C2B29',
    rx: false,
    link: '#waitlist',
    buttonText: 'Learn More'
  },
  {
    id: 'xerf-2',
    name: 'Stimulates Collagen and Elastin',
    category: 'Controlled heat activates your body\'s natural regenerative processes for long-term firmness.',
    description: '',
    image: xerfCollagen,
    color: '#2C2B29',
    rx: false,
    link: '#waitlist',
    buttonText: 'Learn More'
  },
  {
    id: 'xerf-3',
    name: 'Instant + Progressive Lift',
    category: 'Contracts existing collagen for immediate results, then remodels deeper support layers for ongoing improvement over weeks.',
    description: '',
    image: xerfLift,
    color: '#2C2B29',
    rx: false,
    link: '#waitlist',
    buttonText: 'Learn More'
  }
];

export const xerfTreatmentAreas: Product[] = [
  {
    id: 'area-1',
    name: 'Face',
    category: 'Jawline and jowls, cheeks and midface, under the chin (submental area).',
    description: '',
    image: xerfFace,
    color: '#2C2B29',
    rx: false,
    link: '#waitlist',
    buttonText: 'Reserve Consultation'
  },
  {
    id: 'area-2',
    name: 'Neck and Décolleté',
    category: 'Lift and smooth crepey, sagging skin along the neck for a more youthful profile.',
    description: '',
    image: xerfNeck,
    color: '#2C2B29',
    rx: false,
    link: '#waitlist',
    buttonText: 'Reserve Consultation'
  },
  {
    id: 'area-3',
    name: 'Body',
    category: 'Abdomen, arms, and thighs — tighten loose skin without surgery or downtime.',
    description: '',
    image: xerfBody,
    color: '#2C2B29',
    rx: false,
    link: '#waitlist',
    buttonText: 'Reserve Consultation'
  }
];

export const faqs: FAQ[] = [
  {
    question: 'What is XERF and how is it different from other skin tightening treatments?',
    answer: 'XERF is the world\'s first multi-frequency monopolar RF treatment. While most RF systems use a single frequency targeting one skin depth, XERF combines 6.78 MHz and 2 MHz to treat surface, mid, and deep tissue layers in the same session. This produces stronger structural lifting and more visible results than traditional single-frequency RF.'
  },
  {
    question: 'Does XERF hurt? Is there downtime?',
    answer: 'No. XERF features integrated cooling and pulse technology for a Never-Numb™ experience that most patients describe as warm and comfortable. There is zero downtime — you can return to your normal activities immediately after treatment.'
  },
  {
    question: 'When will I see results?',
    answer: 'You\'ll notice immediate tightening from collagen contraction right after your session. Progressive lifting, firming, and improved skin quality continue to develop over the following weeks as your skin produces new collagen and elastin.'
  },
  {
    question: 'What areas can XERF treat?',
    answer: 'XERF works on both face and body, including the jawline, jowls, cheeks, midface, submental area (under the chin), neck, abdomen, arms, and thighs. It\'s most effective for mild to moderate skin laxity.'
  },
  {
    question: 'Is XERF safe? Is it FDA cleared?',
    answer: 'Yes. XERF is FDA cleared and performed by SKINNEY\'s medically supervised, highly trained provider team.'
  },
  {
    question: 'Is financing available?',
    answer: 'Yes. SKINNEY Medspa offers 0% APR financing for qualified patients.'
  }
];
