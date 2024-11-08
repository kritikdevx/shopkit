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
  }
`;

export default metafieldFragment;
