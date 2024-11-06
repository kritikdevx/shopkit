import orderFragment from '../fragments/order';

export const listOrdersQuery = /* GraphQL */ `
  query ListOrders(
    $customerAccessToken: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
    $reverse: Boolean
    $sortKey: OrderSortKeys
  ) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      orders(
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
            ...order
          }
        }
        totalCount
      }
    }
  }
  ${orderFragment}
`;
