import cartFragment from '../fragments/cart';
import imageFragment from '../fragments/image';
import productFragment from '../fragments/product';
import seoFragment from '../fragments/seo';

export const getCartQuery = /* GraphQL */ `
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${seoFragment}
  ${imageFragment}
  ${cartFragment}
  ${productFragment}
`;
