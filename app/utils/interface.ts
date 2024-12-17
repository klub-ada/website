export interface Post {
  title: string;
  slug: string;
  publishedAt: string;
  body: any;
  categories: { title: string }[];
  _id: string;
  mainImage: any;
}

export interface Category {
  name: string;
  slug: { current: string };
  _id: string;
}
