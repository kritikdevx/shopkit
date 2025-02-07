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
    billingAddress {
      address1
      address2
      city
      company
      country
      countryCodeV2
      firstName
      formattedArea
      id
      latitude
      longitude
      name
      phone
      lastName
      provinceCode
      province
      zip
    }
    shippingAddress {
      address1
      address2
      city
      company
      country
      countryCodeV2
      firstName
      formattedArea
      id
      latitude
      longitude
      name
      phone
      lastName
      provinceCode
      province
      zip
    }
    currentSubtotalPrice {
      amount
      currencyCode
    }
    currentTotalDuties {
      currencyCode
      amount
    }
    currentTotalPrice {
      amount
      currencyCode
    }
    currentTotalShippingPrice {
      amount
      currencyCode
    }
    currentTotalTax {
      amount
      currencyCode
    }
    financialStatus
    fulfillmentStatus
    shippingDiscountAllocations {
      allocatedAmount {
        amount
        currencyCode
      }
    }
    totalPrice {
      amount
      currencyCode
    }
    totalRefunded {
      amount
      currencyCode
    }
    totalShippingPrice {
      amount
      currencyCode
    }
    totalTax {
      amount
      currencyCode
    }
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
            selectedOptions {
              name
              value
            }
            product {
              title
              createdAt
              handle
              id
              featuredImage {
                altText
                height
                originalSrc
                id
                src
                url
                width
              }
              images(first: 1) {
                edges {
                  node {
                    altText
                    height
                    originalSrc
                    id
                    src
                    url
                    width
                  }
                }
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
