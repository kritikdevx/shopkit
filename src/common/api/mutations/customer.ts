import customerFragment from '../fragments/customer';
import imageFragment from '../fragments/image';
import metafieldFragment from '../fragments/metafield';
import productFragment from '../fragments/product';
import productVariantFragment from '../fragments/product-variant';
import seoFragment from '../fragments/seo';

export const createCustomerAccessTokenMutation = /* GraphQL */ `
  mutation CustomerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        message
        code
        field
      }
    }
  }
`;

export const createCustomerMutation = /* GraphQL */ `
  mutation CustomerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        acceptsMarketing
        createdAt
        displayName
        numberOfOrders
        email
        firstName
        id
        lastName
        phone
        tags
        updatedAt
      }
      customerUserErrors {
        code
        message
      }
    }
  }
`;

export const customerAccessTokenCreateWithMultipassMutation = /* GraphQL */ `
  mutation CustomerAccessTokenCreateWithMultipass($multipassToken: String!) {
    customerAccessTokenCreateWithMultipass(multipassToken: $multipassToken) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        message
      }
    }
  }
`;

export const updateCustomerProfileMutation = /* GraphQL */ `
  mutation CustomerUpdate(
    $customer: CustomerUpdateInput!
    $customerAccessToken: String!
  ) {
    customerUpdate(
      customer: $customer
      customerAccessToken: $customerAccessToken
    ) {
      customer {
        ...customer
      }
      customerUserErrors {
        field
        message
      }
    }
  }
  ${customerFragment}
`;

export const updateCustomerProfileWithMetaFieldsMutation = /* GraphQL */ `
  mutation CustomerUpdate(
    $customer: CustomerUpdateInput!
    $customerAccessToken: String!
    $metafields: [HasMetafieldsIdentifier!]!
  ) {
    customerUpdate(
      customer: $customer
      customerAccessToken: $customerAccessToken
    ) {
      customer {
        ...customer
        metafields(identifiers: $metafields) {
          ...metafield
        }
      }
      customerUserErrors {
        field
        message
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
