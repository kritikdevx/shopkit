import {
  CartLinesAddMutation,
  CartLinesAddMutationVariables,
  CartLinesRemoveMutation,
  CartLinesRemoveMutationVariables,
  CartLinesUpdateMutation,
  CartLinesUpdateMutationVariables,
  CreateCartMutation,
  CreateCartMutationVariables,
  GetCartQuery,
  GetCartQueryVariables,
  ShopifyRequest,
} from '@/common';

import { shopifyFetch } from '../fetch';
import {
  cartLinesAddMutation,
  cartLinesRemoveMutation,
  cartLinesUpdateMutation,
  createCartMutation,
} from '../mutations/cart';
import { getCartQuery } from '../queries/cart';

export async function getCart({
  variables,
  options,
}: {
  variables: GetCartQueryVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<GetCartQuery, GetCartQueryVariables>({
    query: getCartQuery,
    variables,
    options,
  });
}

/**
 * Create a new cart
 * @param variables - The variables for the mutation
 * @param options - The options for the fetch request
 * @returns The new cart
 * @category API
 */
export async function createCart({
  variables,
  options,
}: {
  variables: CreateCartMutationVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<CreateCartMutation, CreateCartMutationVariables>({
    query: createCartMutation,
    variables,
    options,
  });
}

/**
 * Add a product to the cart
 * @param variables - The variables for the mutation
 * @param options - The options for the fetch request
 * @returns The cart after adding the product
 * @category API
 */
export async function addToCart({
  variables,
  options,
}: {
  variables: CartLinesAddMutationVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<CartLinesAddMutation, CartLinesAddMutationVariables>({
    query: cartLinesAddMutation,
    variables,
    options,
  });
}

/**
 * Update the cart
 * @param variables - The variables for the mutation
 * @param options - The options for the fetch request
 * @returns The updated cart
 * @category API
 */
export async function updateCart({
  variables,
  options,
}: {
  variables: CartLinesUpdateMutationVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<
    CartLinesUpdateMutation,
    CartLinesUpdateMutationVariables
  >({
    query: cartLinesUpdateMutation,
    variables,
    options,
  });
}

/**
 * Remove a product from the cart
 * @param variables - The variables for the mutation
 * @param options - The options for the fetch request
 * @returns The cart after removing the product
 * @category API
 */
export async function removeFromCart({
  variables,
  options,
}: {
  variables: CartLinesRemoveMutationVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<
    CartLinesRemoveMutation,
    CartLinesRemoveMutationVariables
  >({
    query: cartLinesRemoveMutation,
    variables,
    options,
  });
}
