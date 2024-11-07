import { Collection, CollectionProducts, Edge, PageInfo } from '../schemas';
import { ListProductsQueryVariables } from './product';

export type CollectionSortKeys = 'ID' | 'TITLE' | 'UPDATED_AT' | 'RELEVANCE';

interface ProductFiltersInput {
  available: Boolean;
  price: PriceRangeInput;
  productMetafield: MetafieldFilter;
  productType?: string;
  productVendor?: string;
  tag?: string;
  variantMetafield?: MetafieldFilter;
  variantOption?: VariantOptionFilter;
}

// Variables

export interface ListCollectionsQueryVariables {
  first: number;
  last?: number;
  after?: string;
  before?: string;
  reverse?: boolean;
  query?: string;
  sortKey?: CollectionSortKeys;
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

export interface GetCollectionByIdQueryVariables {
  id: string;
}

export interface GetCollectionByHandleQueryVariables {
  handle: string;
}

export type GetCollectionQueryVariables =
  | GetCollectionByIdQueryVariables
  | GetCollectionByHandleQueryVariables;

export interface ListCollectionProductsByIdQueryVariables
  extends ListProductsQueryVariables {
  collectionId: string;
  filters?: ProductFiltersInput;
}

export interface ListCollectionProductsByHandleQueryVariables
  extends ListProductsQueryVariables {
  collectionHandle: string;
  filters?: ProductFiltersInput;
}

export type ListCollectionProductsQueryVariables =
  | ListCollectionProductsByIdQueryVariables
  | ListCollectionProductsByHandleQueryVariables;

// Queries

export interface ListCollectionsQuery {
  collections: {
    edges: Array<Edge<Collection>>;
    pageInfo: PageInfo;
  };
}

export interface GetCollectionByIdQuery {
  collection: Collection;
}

export interface GetCollectionByHandleQuery {
  collectionByHandle: Collection;
}

export interface ListCollectionProductsByIdQuery {
  collection: CollectionProducts;
}

export interface ListCollectionProductsByHandleQuery {
  collectionByHandle: CollectionProducts;
}
