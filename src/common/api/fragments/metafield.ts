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
    }
    references(first: 10) {
      edges {
        node {
          ...product
          ... on MediaImage {
            image {
              url
              altText
              width
              height
            }
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
