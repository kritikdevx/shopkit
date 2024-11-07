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

export interface GetCollectionQuery {
  collection: Collection;
}

export interface ListCollectionProductsQuery {
  collection: CollectionProducts;
}
