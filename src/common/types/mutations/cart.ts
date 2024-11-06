import { AttributeInput, Cart, CartLineInput } from '../schemas';

// Variables

export interface CreateCartMutationVariables {
  input: {
    lines?: CartLineInput[];
    attributes?: AttributeInput[];
  };
}

export interface CartLinesAddMutationVariables {
  cartId: string;
  lines: CartLineInput[];
}

export interface CartLinesRemoveMutationVariables {
  cartId: string;
  lineIds: string[];
}

export interface CartLinesUpdateMutationVariables {
  cartId: string;
  lines: CartLineInput[];
}

// Mutations

export interface CreateCartMutation {
  cartCreate: {
    cart: Cart;
    userErrors: {
      code: string;
      field: string;
      message: string;
    }[];
  };
}

export interface CartLinesAddMutation {
  cartLinesAdd: {
    cart: Cart;
    userErrors: {
      code: string;
      field: string;
      message: string;
    }[];
  };
}

export interface CartLinesRemoveMutation {
  cartLinesRemove: {
    cart: Cart;
    userErrors: {
      code: string;
      field: string;
      message: string;
    }[];
  };
}

export interface CartLinesUpdateMutation {
  cartLinesUpdate: {
    cart: Cart;
    userErrors: {
      code: string;
      field: string;
      message: string;
    }[];
  };
}
