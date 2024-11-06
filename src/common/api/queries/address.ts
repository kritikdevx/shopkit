import addressFragment from '../fragments/address';

export const listAddressesQuery = /* GraphQL */ `
  query ListAddresses(
    $customerAccessToken: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
    $reverse: Boolean
  ) {
    customer(customerAccessToken: $customerAccessToken) {
      addresses(
        first: $first
        last: $last
        after: $after
        before: $before
        reverse: $reverse
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            ...address
          }
        }
      }
      defaultAddress {
        ...address
      }
    }
  }
  ${addressFragment}
`;
