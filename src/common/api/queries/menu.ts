import menuFragment from '../fragments/menu';

export const getMenuQuery = /* GraphQL */ `
  query GetMenu($handle: String!) {
    menu(handle: $handle) {
      ...menu
    }
  }
  ${menuFragment}
`;
