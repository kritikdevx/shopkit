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
              currencyCode
            }
          }
          discountAllocations {
            discountedAmount {
              amount
              currencyCode
            }
            ... on CartCodeDiscountAllocation {
              __typename
              code
              discountedAmount {
                amount
                currencyCode
              }
            }
            ... on CartCustomDiscountAllocation {
              __typename
              title
              discountedAmount {
                amount
                currencyCode
              }
            }
            ... on CartAutomaticDiscountAllocation {
              __typename
              discountedAmount {
                amount
                currencyCode
              }
              title
            }
          }
          estimatedCost {
            amount {
              amount
              currencyCode
            }
            compareAtAmount {
              amount
              currencyCode
            }
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              sku
              image {
                ...image
              }
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
    attributes {
      key
      value
    }
  }
`;

export default cartFragment;
