const menuFragment = /* GraphQL */ `
  fragment menu on Menu {
    id
    handle
    title
    items {
      id
      title
      url
      items {
        id
        title
        url
        items {
          id
          title
          url
        }
      }
    }
  }
`;

export default menuFragment;
