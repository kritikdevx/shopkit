import metafieldFragment from '../fragments/metafield';
import productFragment from '../fragments/product';
import productVariantFragment from '../fragments/product-variant';

export const listProductsQuery = /* GraphQL */ `
  query ListProducts(
    $query: String
    $first: Int
    $last: Int
    $after: String
    $before: String
    $sortKey: ProductSortKeys
    $reverse: Boolean
  ) {
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
  ${productFragment}
`;

export const getProductByIdWithMetafieldsQuery = /* GraphQL */ `
  query GetProduct($id: ID!, $metafields: [HasMetafieldsIdentifier!]!) {
    product(id: $id) {
      ...product
      metafields(identifiers: $metafields) {
        ...metafield
      }
    }
  }
  ${metafieldFragment}
  ${productFragment}
`;

export const getProductByIdQuery = /* GraphQL */ `
  query GetProduct($id: ID!) {
    product(id: $id) {
      ...product
    }
  }
  ${productFragment}
`;

export const getProductByHandleWithMetafieldsQuery = /* GraphQL */ `
  query GetProductByHandle(
    $handle: String!
    $metafields: [HasMetafieldsIdentifier!]!
  ) {
    product(handle: $handle) {
      ...product
      metafields(identifiers: $metafields) {
        ...metafield
      }
    }
  }
  ${metafieldFragment}
  ${productFragment}
`;

export const getProductByHandleQuery = /* GraphQL */ `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${productFragment}
`;

export const listProductVariantsByIdQuery = /* GraphQL */ `
  query ListProductVariants(
    $productId: ID
    $first: Int
    $last: Int
    $after: String
    $before: String
    $reverse: Boolean
    $sortKey: ProductVariantSortKeys
  ) {
    productVariants(id: $productId) {
      variants(
        first: $first
        last: $last
        after: $after
        before: $before
        reverse: $reverse
        sortKey: $sortKey
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            ...productVariant
          }
        }
      }
    }
  }
  ${productVariantFragment}
`;

export const listProductVariantsByHandleQuery = /* GraphQL */ `
  query ListProductVariants(
    $productHandle: ID
    $first: Int
    $last: Int
    $after: String
    $before: String
    $reverse: Boolean
    $sortKey: ProductVariantSortKeys
  ) {
    productVariants(id: $productHandle) {
      variants(
        first: $first
        last: $last
        after: $after
        before: $before
        reverse: $reverse
        sortKey: $sortKey
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            ...productVariant
          }
        }
      }
    }
  }
  ${productVariantFragment}
`;
