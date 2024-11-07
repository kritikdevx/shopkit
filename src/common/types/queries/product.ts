import { Edge, PageInfo, Product, ProductVariant } from '../schemas';

export type ProductSortKeys =
  | 'PRODUCT_TYPE'
  | 'VENDOR'
  | 'ID'
  | 'TITLE'
  | 'UPDATED_AT'
  | 'CREATED_AT'
  | 'PRICE'
  | 'BEST_SELLING'
  | 'RELEVANCE';

export type ProductVariantSortKeys =
  | 'TITLE'
  | 'SKU'
  | 'POSITION'
  | 'ID'
  | 'RELEVANCE';

export type MetafieldsInput = {
  identifiers: Array<{
    key: string;
    namespace?: string;
  }>;
};

// Variables

export interface ListProductsQueryVariables {
  first: number;
  last?: number;
  after?: string;
  before?: string;
  sortKey?: ProductSortKeys;
  reverse?: boolean;
  query?: string;
}

export interface GetProductByIdQueryVariables {
  id: string;
}

export interface GetProductByHandleQueryVariables {
  handle: string;
}

export type GetProductQueryVariables =
  | GetProductByIdQueryVariables
  | GetProductByHandleQueryVariables;

export interface ListProductVariantsQueryByIdVariables {
  productId: string;
  first?: number;
  last?: number;
  after?: string;
  before?: string;
  sortKey?: ProductVariantSortKeys;
  reverse?: boolean;
}

export interface ListProductVariantsQueryByHandleVariables {
  productHandle: string;
  first?: number;
  last?: number;
  after?: string;
  before?: string;
  sortKey?: ProductVariantSortKeys;
  reverse?: boolean;
}

export type ListProductVariantsQueryVariables =
  | ListProductVariantsQueryByIdVariables
  | ListProductVariantsQueryByHandleVariables;

// Queries

export interface ListProductsQuery {
  products: {
    edges: Array<Edge<Product>>;
    pageInfo: PageInfo;
  };
}

export interface GetProductByIdQuery {
  product: Product;
}

export interface GetProductByHandleQuery {
  productByHandle: Product;
}

export interface ListProductVariantsQuery {
  productVariants: {
    variants: {
      edges: Array<Edge<ProductVariant>>;
      pageInfo: PageInfo;
    };
  };
}
