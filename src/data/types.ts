export type Division = "professionnel" | "grand-public";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFaqEntry {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  division: Division;
  name: string;
  shortDescription: string;
  description: string[];
  applications: string[];
  usageInstructions: string[];
  advantages: string[];
  specs: ProductSpec[];
  images: string[];
  videoPlaceholder?: boolean;
  pdfSpecSheetUrl?: string;
  faq?: ProductFaqEntry[];
  sectors?: string[];
  featured?: boolean;
}

export interface Sector {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorRole: string;
  company?: string;
  quote: string;
  division?: Division;
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  tags: string[];
  publishedAt: string;
  author: string;
  coverImage: string;
  readingTimeMinutes: number;
}

export type LibraryCategory =
  | "etude"
  | "article"
  | "rapport"
  | "norme"
  | "innovation";

export interface LibraryEntry {
  slug: string;
  title: string;
  summary: string;
  category: LibraryCategory;
  publishedAt: string;
  fileUrl?: string;
  tags: string[];
}

export interface CaseStudy {
  slug: string;
  clientName: string;
  sector: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  beforeImage?: string;
  afterImage?: string;
  testimonialId?: string;
  images: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}
