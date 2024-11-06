import {
  CreateCustomerAddressMutation,
  CreateCustomerAddressMutationVariables,
  DeleteCustomerAddressMutation,
  DeleteCustomerAddressMutationVariables,
  ListAddressesQuery,
  ListAddressesQueryVariables,
  ShopifyRequest,
  UpdateCustomerAddressMutation,
  UpdateCustomerAddressMutationVariables,
  UpdateCustomerDefaultAddressMutation,
  UpdateCustomerDefaultAddressMutationVariables,
} from '@/common/types';

import { shopifyFetch } from '../fetch';
import { listAddressesQuery } from '../queries/address';
import {
  createCustomerAddressMutation,
  deleteCustomerAddressMutation,
  updateCustomerAddressMutation,
  updateCustomerDefaultAddressMutation,
} from '../mutations/address';

/**
 * Fetches a list of addresses
 * @param options - The options for the request
 * @returns The list of addresses
 * @category API
 */
export async function listCustomerAddresses({
  options,
  variables,
}: {
  options?: ShopifyRequest;
  variables: ListAddressesQueryVariables;
}) {
  return shopifyFetch<ListAddressesQuery, ListAddressesQueryVariables>({
    query: listAddressesQuery,
    options,
    variables,
  });
}

/**
 * Creates a new address
 * @param variables - The variables for the request
 * @returns The new address
 * @category API
 */
export async function createCustomerAddress({
  options,
  variables,
}: {
  options?: ShopifyRequest;
  variables: CreateCustomerAddressMutationVariables;
}) {
  return shopifyFetch<
    CreateCustomerAddressMutation,
    CreateCustomerAddressMutationVariables
  >({
    query: createCustomerAddressMutation,
    variables,
    options,
  });
}

/**
 * Updates an address
 * @param variables - The variables for the request
 * @returns The updated address
 * @category API
 */
export async function updateCustomerAddress({
  variables,
  options,
}: {
  variables: UpdateCustomerAddressMutationVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<
    UpdateCustomerAddressMutation,
    UpdateCustomerAddressMutationVariables
  >({
    query: updateCustomerAddressMutation,
    variables,
    options,
  });
}

/**
 * Deletes an address
 * @param options - The options for the request
 * @param variables - The variables for the request
 * @returns The deleted address ID
 * @category API
 */
export async function deleteCustomerAddress({
  variables,
  options,
}: {
  options?: ShopifyRequest;
  variables: DeleteCustomerAddressMutationVariables;
}) {
  return shopifyFetch<
    DeleteCustomerAddressMutation,
    DeleteCustomerAddressMutationVariables
  >({
    query: deleteCustomerAddressMutation,
    variables,
    options,
  });
}

/**
 * Updates the default address for the customer
 * @param variables - The variables for the request
 * @returns The updated customer
 * @category API
 */
export async function updateCustomerDefaultAddress({
  variables,
  options,
}: {
  variables: UpdateCustomerDefaultAddressMutationVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<
    UpdateCustomerDefaultAddressMutation,
    UpdateCustomerDefaultAddressMutationVariables
  >({
    query: updateCustomerDefaultAddressMutation,
    variables,
    options,
  });
}
