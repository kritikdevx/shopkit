// variables

import { Cart } from '../schemas';

export interface GetCartQueryVariables {
  cartId: string;
}

// Queries

export interface GetCartQuery {
  cart: Cart;
}
