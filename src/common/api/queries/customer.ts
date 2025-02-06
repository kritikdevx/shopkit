import customerFragment from '../fragments/customer';
import imageFragment from '../fragments/image';
import metafieldFragment from '../fragments/metafield';
import productFragment from '../fragments/product';
import productVariantFragment from '../fragments/product-variant';
import seoFragment from '../fragments/seo';

export const getProfileQuery = /* GraphQL */ `
  query GetProfile($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ...customer
    }
  }
  ${customerFragment}
`;

export const getProfileWithMetaFieldsQuery = /* GraphQL */ `
  query GetProfile(
    $customerAccessToken: String!
    $metafields: [HasMetafieldsIdentifier!]!
  ) {
    customer(customerAccessToken: $customerAccessToken) {
      ...customer
      metafields(identifiers: $metafields) {
        ...metafield
      }
    }
  }
  ${imageFragment}
  ${seoFragment}
  ${metafieldFragment}
  ${productFragment}
  ${productVariantFragment}
  ${customerFragment}
`;
