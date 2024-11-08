import productFragment from './product';

const cartFragment = /* GraphQL */ `
  fragment cart on Cart {
    id
    attribute(key: "distinct_id") {
      key
      value
    }
    checkoutUrl
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 250) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
            amountPerQuantity {
              amount
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              price {
                amount
              }
              selectedOptions {
                name
                value
              }
              product {
                ...product
              }
            }
          }
        }
      }
    }

    totalQuantity
  }
  ${productFragment}
`;

export default cartFragment;
