import {
  AttributeInput,
  Cart,
  CartLineInput,
  CartLineUpdateInput,
} from '../schemas';

// Variables

export interface CreateCartMutationVariables {
  lineItems?: CartLineInput[];
  attributes?: AttributeInput[];
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
  lines: CartLineUpdateInput[];
}

export interface CartAttributesUpdateMutationVariables {
  cartId: string;
  attributes: AttributeInput[];
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

export interface CartAttributesUpdateMutation {
  cartAttributesUpdate: {
    cart: Cart;
    userErrors: {
      field: string;
      message: string;
    }[];
  };
}
