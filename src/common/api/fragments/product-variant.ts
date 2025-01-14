const productVariantFragment = /* GraphQL */ `
  fragment productVariant on ProductVariant {
    id
    title
    weight
    weightUnit
    sku
    image {
      ...image
    }
    availableForSale
    selectedOptions {
      name
      value
    }
    price {
      amount
      currencyCode
    }
    compareAtPrice {
      amount
      currencyCode
    }
    unitPrice {
      amount
      currencyCode
    }
    unitPriceMeasurement {
      measuredType
      quantityUnit
      quantityValue
      referenceUnit
      referenceValue
    }
    taxable
    quantityAvailable
    quantityRule {
      increment
      maximum
      minimum
    }
  }
`;

export default productVariantFragment;
