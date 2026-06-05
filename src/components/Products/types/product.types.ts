export type Product = {
  id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
};

export type Category = {
  id: string;
  name: string;
  image: string;
  slug: string;
};
