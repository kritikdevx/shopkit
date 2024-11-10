const metafieldFragment = /* GraphQL */ `
  fragment metafield on Metafield {
    createdAt
    description
    id
    key
    namespace
    type
    updatedAt
    value
    reference {
      ... on MediaImage {
        image {
          url
          altText
          width
          height
        }
      }
      ... on Product {
        ...product
      }
    }
    references(first: 10) {
      edges {
        node {
          ... on MediaImage {
            image {
              url
              altText
              width
              height
            }
          }
          ... on Product {
            ...product
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export default metafieldFragment;
