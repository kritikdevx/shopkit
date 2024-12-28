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
import { Prettify } from '@/utils/prettify';

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
  options?: Prettify<ShopifyRequest>;
  variables: Prettify<ListAddressesQueryVariables>;
}) {
  return shopifyFetch<ListAddressesQuery, ListAddressesQueryVariables>({
    query: listAddressesQuery,
    options,
    variables,
  }).then((data) => data.customer);
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
  options?: Prettify<ShopifyRequest>;
  variables: Prettify<CreateCustomerAddressMutationVariables>;
}) {
  return shopifyFetch<
    CreateCustomerAddressMutation,
    CreateCustomerAddressMutationVariables
  >({
    query: createCustomerAddressMutation,
    variables,
    options,
  }).then((data) => data.customerAddressCreate);
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
  variables: Prettify<UpdateCustomerAddressMutationVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  return shopifyFetch<
    UpdateCustomerAddressMutation,
    UpdateCustomerAddressMutationVariables
  >({
    query: updateCustomerAddressMutation,
    variables,
    options,
  }).then((data) => data.customerAddressUpdate);
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
  options?: Prettify<ShopifyRequest>;
  variables: Prettify<DeleteCustomerAddressMutationVariables>;
}) {
  return shopifyFetch<
    DeleteCustomerAddressMutation,
    DeleteCustomerAddressMutationVariables
  >({
    query: deleteCustomerAddressMutation,
    variables,
    options,
  }).then((data) => data.customerAddressDelete);
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
  variables: Prettify<UpdateCustomerDefaultAddressMutationVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  return shopifyFetch<
    UpdateCustomerDefaultAddressMutation,
    UpdateCustomerDefaultAddressMutationVariables
  >({
    query: updateCustomerDefaultAddressMutation,
    variables,
    options,
  }).then((data) => data.customerDefaultAddressUpdate);
}
