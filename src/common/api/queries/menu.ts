import menuFragment from '../fragments/menu';

export const getMenuQuery = /* GraphQL */ `
  query GetMenu($handle: ID!) {
    menu(id: $handle) {
      ...menu
    }
  }
  ${menuFragment}
`;
