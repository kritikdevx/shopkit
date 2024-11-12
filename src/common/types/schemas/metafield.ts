import { Connection, Image } from './common';
import { Product, ProductVariant } from './product';

export interface HasMetafieldsIdentifier {
  key: string;
  namespace?: string;
}

export interface MetaObject {
  id: string;
  handle: string;
  type: string;
  updatedAt: string;
  fields: {
    key: string;
    type: string;
    value: string;
    references: Connection<
      Product | Image | MetaObject | ProductVariant
    > | null;
    reference: {
      image: Image;
      product: Product;
      metaobject: MetaObject;
      productVariant: ProductVariant;
    } | null;
  }[];
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
    product: Product;
    metaobject: MetaObject;
    productVariant: ProductVariant;
  } | null;
  references: Connection<Product | Image | MetaObject | ProductVariant> | null;
}
