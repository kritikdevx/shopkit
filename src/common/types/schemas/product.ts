import { Connection, Image, Money, SEO } from './common';
import { Metafield } from './metafield';

export interface ProductFiltersInput {
  available?: Boolean;
  price?: PriceRangeInput;
  productMetafield?: MetafieldFilter;
  productType?: string;
  productVendor?: string;
  tag?: string;
  variantMetafield?: MetafieldFilter;
  variantOption?: VariantOptionFilter;
}

interface PriceRangeInput {
  max: number;
  min: number;
}

interface MetafieldFilter {
  key: string;
  namespace: string;
  value: string;
}

interface VariantOptionFilter {
  name: string;
  value: string;
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface SelectedOption {
  name: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  weight: number;
  weightUnit: string;
  availableForSale: boolean;
  selectedOptions: SelectedOption[];
  price: Money;
  compareAtPrice: Money | null;
  unitPrice: Money | null;
  unitPriceMeasurement: {
    measuredType: string | null;
    quantityUnit: string | null;
    quantityValue: number;
    referenceUnit: string | null;
    referenceValue: number;
  } | null;
  product: Product;
  taxable: boolean;
  quantityAvailable: number;
  quantityRule: {
    increment: number;
    maximum: number | null;
    minimum: number | null;
  };
  image: Image | null;
}

export interface Product {
  vendor: string;
  productType: string;
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: Connection<ProductVariant>;
  featuredImage: Image | null;
  images: Connection<Image>;
  seo: SEO;
  tags: string[];
  updatedAt: string;
  // XXX: Revisit
  metafields?: Metafield[] | [null];
}
