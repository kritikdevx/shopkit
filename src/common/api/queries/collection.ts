import collectionFragment from '../fragments/collection';
import productFragment from '../fragments/product';

export const listCollectionsQuery = /* GraphQL */ `
  query ListCollections(
    $query: String
    $first: Int!
    $after: String
    $before: String
    $last: Int
    $sortKey: CollectionSortKeys
    $reverse: Boolean
  ) {
    collections(
      query: $query
      first: $first
      after: $after
      before: $before
      last: $last
      sortKey: $sortKey
      reverse: $reverse
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          ...collection
        }
      }
    }
  }
  ${collectionFragment}
`;

export const getCollectionByIdQuery = /* GraphQL */ `
  query GetCollection($id: ID!) {
    collection(id: $id) {
      ...collection
    }
  }
  ${collectionFragment}
`;

export const getCollectionByHandleQuery = /* GraphQL */ `
  query GetCollectionByHandle($handle: String!) {
    collectionByHandle(handle: $handle) {
      ...collection
    }
  }
  ${collectionFragment}
`;

export const listCollectionProductsByIdQuery = /* GraphQL */ `
  query ListCollectionProducts(
    $collectionId: ID!
    $query: String
    $first: Int!
    $after: String
    $before: String
    $last: Int
    $sortKey: ProductSortKeys
    $reverse: Boolean
  ) {
    collection(id: $collectionId) {
      id
      handle
      products(
        query: $query
        first: $first
        after: $after
        before: $before
        last: $last
        sortKey: $sortKey
        reverse: $reverse
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            ...product
          }
        }
      }
    }
  }
  ${productFragment}
`;

export const listCollectionProductsByHandleQuery = /* GraphQL */ `
  query ListCollectionProductsByHandle(
    $handle: String!
    $query: String
    $first: Int!
    $after: String
    $before: String
    $last: Int
    $sortKey: ProductSortKeys
    $reverse: Boolean
  ) {
    collectionByHandle(handle: $handle) {
      id
      handle
      products(
        query: $query
        first: $first
        after: $after
        before: $before
        last: $last
        sortKey: $sortKey
        reverse: $reverse
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            ...product
          }
        }
      }
    }
  }
  ${productFragment}
`;
