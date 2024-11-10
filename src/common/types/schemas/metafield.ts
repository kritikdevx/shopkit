import { Connection, Image } from './common';
import { Product } from './product';

export interface HasMetafieldsIdentifier {
  key: string;
  namespace?: string;
}

export interface Metafield {
  createdAt: string;
  description: string;
  id: string;
  key: string;
  namespace: string;
  type: string;
  updatedAt: string;
  value: string;
  reference: {
    image: Image;
  } | null;
  references: Connection<Product | Image> | null;
}
