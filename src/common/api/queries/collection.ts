import collectionFragment from '../fragments/collection';
import metafieldFragment from '../fragments/metafield';
import productFragment from '../fragments/product';

export const listCollectionsQuery = /* GraphQL */ `
  query ListCollections(
    $query: String
    $after: String
    $before: String
    $first: Int
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

export const getCollectionByIdWithMetafieldsQuery = /* GraphQL */ `
  query GetCollection($id: ID!, $metafields: [HasMetafieldsIdentifier!]!) {
    collection(id: $id) {
      ...collection
      metafields(identifiers: $metafields) {
        ...metafield
      }
    }
  }
  ${metafieldFragment}
  ${collectionFragment}
`;

export const getCollectionByHandleWithMetafieldsQuery = /* GraphQL */ `
  query GetCollectionByHandle(
    $handle: String!
    $metafields: [HasMetafieldsIdentifier!]!
  ) {
    collection(handle: $handle) {
      ...collection
      metafields(identifiers: $metafields) {
        ...metafield
      }
    }
  }
  ${metafieldFragment}
  ${collectionFragment}
`;

export const getCollectionByHandleQuery = /* GraphQL */ `
  query GetCollectionByHandle($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
  ${collectionFragment}
`;

export const listCollectionProductsByIdQuery = /* GraphQL */ `
  query ListCollectionProducts(
    $collectionId: ID!
    $query: String
    $first: Int
    $after: String
    $before: String
    $last: Int
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $filters: [ProductFilter!]
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
        filters: $filters
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

export const listCollectionProductsByIdWithMetafieldsQuery = /* GraphQL */ `
  query ListCollectionProducts(
    $collectionHandle: String!
    $first: Int
    $after: String
    $before: String
    $last: Int
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
    $filters: [ProductFilter!]
    $metafields: [HasMetafieldsIdentifier!]!
  ) {
    collection(handle: $collectionHandle) {
      id
      handle
      products(
        first: $first
        after: $after
        before: $before
        last: $last
        sortKey: $sortKey
        reverse: $reverse
        filters: $filters
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            ...product
            metafields(identifiers: $metafields) {
              ...metafield
            }
          }
        }
      }
    }
  }
  ${metafieldFragment}
  ${productFragment}
`;

export const listCollectionProductsByHandleQuery = /* GraphQL */ `
  query ListCollectionProductsByHandle(
    $collectionHandle: String!
    $first: Int
    $after: String
    $before: String
    $last: Int
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
    $filters: [ProductFilter!]
  ) {
    collection(handle: $collectionHandle) {
      id
      handle
      products(
        first: $first
        after: $after
        before: $before
        last: $last
        sortKey: $sortKey
        reverse: $reverse
        filters: $filters
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

export const listCollectionProductsByHandleWithMetafieldsQuery = /* GraphQL */ `
  query ListCollectionProductsByHandle(
    $collectionHandle: String!
    $first: Int
    $after: String
    $before: String
    $last: Int
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
    $filters: [ProductFilter!]
    $metafields: [HasMetafieldsIdentifier!]!
  ) {
    collection(handle: $collectionHandle) {
      id
      handle
      products(
        first: $first
        after: $after
        before: $before
        last: $last
        sortKey: $sortKey
        reverse: $reverse
        filters: $filters
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            ...product
            metafields(identifiers: $metafields) {
              ...metafield
            }
          }
        }
      }
    }
  }
  ${metafieldFragment}
  ${productFragment}
`;
