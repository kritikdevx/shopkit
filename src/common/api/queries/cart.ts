import cartFragment from '../fragments/cart';
import imageFragment from '../fragments/image';
import productFragment from '../fragments/product';
import productVariantFragment from '../fragments/product-variant';

export const getCartQuery = /* GraphQL */ `
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${imageFragment}
  ${productVariantFragment}
  ${cartFragment}
  ${productFragment}
`;
