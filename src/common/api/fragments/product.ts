import imageFragment from './image';
import productVariantFragment from './product-variant';
import seoFragment from './seo';

const productFragment = /* GraphQL */ `
  fragment product on Product {
    vendor
    productType
    id
    handle
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          ...productVariant
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
  }
  ${productVariantFragment}
  ${seoFragment}
`;

export default productFragment;
