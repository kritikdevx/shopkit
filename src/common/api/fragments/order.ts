//TODO: Update order

const orderFragment = /* GraphQL */ `
  fragment order on Order {
    cancelReason
    canceledAt
    currencyCode
    customerUrl
    customerLocale
    email
    edited
    fulfillmentStatus
    financialStatus
    id
    name
    orderNumber
    phone
    processedAt
    statusUrl
    lineItems(first: 250) {
      edges {
        node {
          currentQuantity
          quantity
          title
          variant {
            availableForSale
            barcode
            currentlyNotInStock
            id
            quantityAvailable
            price {
              amount
              currencyCode
            }
            requiresComponents
            requiresShipping
            sku
            taxable
            title
            weight
            weightUnit
            product {
              createdAt
              description
              descriptionHtml
              encodedVariantAvailability
              encodedVariantExistence
              handle
              id
              featuredImage {
                altText
                height
                originalSrc
                id
                src
                width
              }
            }
          }
          originalTotalPrice {
            amount
            currencyCode
          }
        }
        cursor
      }
    }
  }
`;

export default orderFragment;
