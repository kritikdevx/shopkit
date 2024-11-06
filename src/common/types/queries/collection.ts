import { Collection, CollectionProducts, Edge, PageInfo } from '../schemas';
import { ListProductsQueryVariables } from './product';

export type CollectionSortKeys = 'ID' | 'TITLE' | 'UPDATED_AT' | 'RELEVANCE';

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
}

export interface ListCollectionProductsByHandleQueryVariables
  extends ListProductsQueryVariables {
  collectionHandle: string;
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

export interface GetCollectionQuery extends Collection {}

export interface ListCollectionProductsQuery {
  collection: CollectionProducts;
}
