const menuFragment = /* GraphQL */ `
  fragment menu on Menu {
    id
    handle
    title
    updatedAt
    items {
      id
      title
      url
      order
    }
  }
`;

export default menuFragment;
