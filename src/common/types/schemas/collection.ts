import { Connection, Image, SEO } from './common';
import { Product } from './product';

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: Image | null;
  seo: SEO;
  updatedAt: string;
}

export interface CollectionProducts extends Collection {
  products: Connection<Product>;
}
