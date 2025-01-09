import cartFragment from '../fragments/cart';
import imageFragment from '../fragments/image';
import productFragment from '../fragments/product';
import seoFragment from '../fragments/seo';

export const cartLinesAddMutation = /* GraphQL */ `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${seoFragment}
  ${imageFragment}
  ${productFragment}
  ${cartFragment}
`;

export const createCartMutation = /* GraphQL */ `
  mutation CreateCart(
    $lineItems: [CartLineInput!]
    $attributes: [AttributeInput!]
  ) {
    cartCreate(input: { lines: $lineItems, attributes: $attributes }) {
      cart {
        ...cart
      }
    }
  }
  ${seoFragment}
  ${imageFragment}
  ${productFragment}
  ${cartFragment}
`;

export const cartLinesUpdateMutation = /* GraphQL */ `
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...cart
      }
    }
  }
  ${seoFragment}
  ${imageFragment}
  ${productFragment}
  ${cartFragment}
`;

export const cartLinesRemoveMutation = /* GraphQL */ `
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...cart
      }
    }
  }
  ${seoFragment}
  ${imageFragment}
  ${productFragment}
  ${cartFragment}
`;

export const cartAttributesUpdateMutation = /* GraphQL */ `
  mutation CartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!) {
    cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
      cart {
        ...cart
      }
    }
  }
  ${seoFragment}
  ${imageFragment}
  ${productFragment}
  ${cartFragment}
`;

export const cartDiscountCodesUpdateMutation = /* GraphQL */ `
  mutation CartDiscountCodesUpdate(
    $cartId: ID!
    discountCodes: [String!]
  ) {
    cartDiscountCodesUpdate( cartId: $cartId, discountCodes: $discountCodes) {
      cart {
        ...cart
      }
    }
  }
  ${seoFragment}
  ${imageFragment}
  ${productFragment}
  ${cartFragment}
`;
