import {
  Collection,
  CollectionProducts,
  Edge,
  HasMetafieldsIdentifier,
  PageInfo,
  ProductFiltersInput,
} from '../schemas';
import { ListProductsQueryVariables } from './product';

export type CollectionSortKeys = 'ID' | 'TITLE' | 'UPDATED_AT' | 'RELEVANCE';

export type ProductCollectionSortKeys =
  | 'TITLE'
  | 'PRICE'
  | 'ID'
  | 'TITLE'
  | 'CREATED'
  | 'BEST_SELLING'
  | 'RELEVANCE'
  | 'MANUAL'
  | 'COLLECTION_DEFAULT';

// Variables

export interface ListCollectionsQueryVariables {
  first?: number;
  last?: number;
  after?: string;
  before?: string;
  reverse?: boolean;
  query?: string;
  sortKey?: CollectionSortKeys;
}

export interface GetCollectionByIdQueryVariables {
  id: string;
  metafields?: HasMetafieldsIdentifier[];
}

export interface GetCollectionByHandleQueryVariables {
  handle: string;
  metafields?: HasMetafieldsIdentifier[];
}

export type GetCollectionQueryVariables =
  | GetCollectionByIdQueryVariables
  | GetCollectionByHandleQueryVariables;

export interface ListCollectionProductsByIdQueryVariables
  extends Omit<ListProductsQueryVariables, 'sortKey' | 'query'> {
  collectionId: string;
  filters?: [ProductFiltersInput];
  sortKey?: ProductCollectionSortKeys;
}

export interface ListCollectionProductsByHandleQueryVariables
  extends Omit<ListProductsQueryVariables, 'sortKey' | 'query'> {
  collectionHandle: string;
  filters?: [ProductFiltersInput];
  sortKey?: ProductCollectionSortKeys;
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

export interface GetCollectionQuery {
  collection: Collection;
}

export interface ListCollectionProductsQuery {
  collection: CollectionProducts;
}
