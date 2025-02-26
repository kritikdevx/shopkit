import {
  Connection,
  Edge,
  HasMetafieldsIdentifier,
  Image,
  PageInfo,
  Product,
  ProductVariant,
} from '../schemas';

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

// Variables

export interface ListProductsQueryVariables {
  first?: number;
  last?: number;
  after?: string;
  before?: string;
  sortKey?: ProductSortKeys;
  reverse?: boolean;
  query?: string;
}

export interface GetProductByIdQueryVariables {
  id: string;
  metafields?: HasMetafieldsIdentifier[];
}

export interface GetProductByHandleQueryVariables {
  handle: string;
  metafields?: HasMetafieldsIdentifier[];
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

export interface GetProductQuery {
  product: Product & {
    media: Connection<{
      mediaContentType: string;
      alt?: string;
      image: Image;
      sources: Array<{
        url: string;
      }>;
    }>;
  };
}

export interface ListProductVariantsQuery {
  productVariants: {
    variants: {
      edges: Array<Edge<ProductVariant>>;
      pageInfo: PageInfo;
    };
  };
}
