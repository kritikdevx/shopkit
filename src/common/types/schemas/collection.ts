import { Connection, Image, SEO } from './common';
import { Metafield } from './metafield';
import { Product } from './product';

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: Image | null;
  seo: SEO;
  updatedAt: string;
  // XXX: Revisit
  metafields?: Metafield[] | null;
}

export interface CollectionProducts extends Partial<Collection> {
  products: Connection<Product>;
}
