const collectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    id
    handle
    title
    description
    seo {
      ...seo
    }
    image {
      ...image
    }
    updatedAt
  }
`;

export default collectionFragment;
