export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  color: string;
  videoSrc?: string;
  rx?: boolean;
  link: string;
  buttonText?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
