import collectionFragment from '../fragments/collection';
import imageFragment from '../fragments/image';
import metafieldFragment from '../fragments/metafield';
import pageFragment from '../fragments/page';
import productFragment from '../fragments/product';
import productVariantFragment from '../fragments/product-variant';
import seoFragment from '../fragments/seo';

export const getPageByIdWithMetafieldsQuery = /* GraphQL */ `
  query GetPage($id: ID!, $metafields: [HasMetafieldsIdentifier!]!) {
    page(id: $id) {
      ...page
      metafields(identifiers: $metafields) {
        ...metafield
      }
    }
  }
  ${seoFragment}
  ${imageFragment}
  ${metafieldFragment}
  ${productFragment}
  ${collectionFragment}
  ${productVariantFragment}
  ${pageFragment}
`;

export const getPageByIdQuery = /* GraphQL */ `
  query GetPage($id: ID!) {
    page(id: $id) {
      ...page
    }
  }
  ${seoFragment}
  ${pageFragment}
`;

export const getPageByHandleWithMetafieldsQuery = /* GraphQL */ `
  query GetPageByHandle(
    $handle: String!
    $metafields: [HasMetafieldsIdentifier!]!
  ) {
    page(handle: $handle) {
      ...page
      metafields(identifiers: $metafields) {
        ...metafield
      }
    }
  }
  ${seoFragment}
  ${imageFragment}
  ${productFragment}
  ${metafieldFragment}
  ${collectionFragment}
  ${productVariantFragment}
  ${pageFragment}
`;

export const getPageByHandleQuery = /* GraphQL */ `
  query GetPageByHandle($handle: String!) {
    page(handle: $handle) {
      ...page
    }
  }
  ${seoFragment}
  ${pageFragment}
`;
