import imageFragment from './image';
import seoFragment from './seo';

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
  ${seoFragment}
  ${imageFragment}
`;

export default collectionFragment;
