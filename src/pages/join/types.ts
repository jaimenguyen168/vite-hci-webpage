export interface FAQ {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export interface Apply {
  title: string;
  button: {
    text: string;
    url: string;
  };
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
}

export interface JoinData {
  seo: SEOConfig;
  apply: Apply;
  faqs: FAQ[];
}
