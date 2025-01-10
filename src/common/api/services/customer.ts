import { ShopifyRequest } from '@/common/types';
import { shopifyFetch } from '../fetch';
import {
  createCustomerAccessTokenMutation,
  createCustomerMutation,
  customerAccessTokenCreateWithMultipassMutation,
} from '../mutations/customer';
import {
  CreateCustomerAccessTokenMutation,
  CreateCustomerAccessTokenMutationVariables,
  CreateCustomerMutation,
  CreateCustomerMutationVariables,
  CustomerAccessTokenCreateWithMultipassMutation,
  CustomerAccessTokenCreateWithMultipassMutationVariables,
} from '@/common/types/mutations/customer';
import { Prettify } from '@/utils/prettify';

/**
 * Create a new customer
 * @param variables - The variables for the mutation
 * @param options - The options for the fetch request
 * @returns
 * @category API
 */
export async function createCustomer({
  variables,
  options,
}: {
  variables: Prettify<CreateCustomerMutationVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  return shopifyFetch<CreateCustomerMutation, CreateCustomerMutationVariables>({
    query: createCustomerMutation,
    variables,
    options,
  }).then((res) => res.customerCreate);
}

/**
 * Create a new customer access token
 * @param variables - The variables for the mutation
 * @param options - The options for the fetch request
 * @returns
 * @category API
 */
export async function createCustomerAccessToken({
  variables,
  options,
}: {
  variables: Prettify<CreateCustomerAccessTokenMutationVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  return shopifyFetch<
    CreateCustomerAccessTokenMutation,
    CreateCustomerAccessTokenMutationVariables
  >({
    query: createCustomerAccessTokenMutation,
    variables,
    options,
  }).then((res) => res.customerAccessTokenCreate);
}

/**
 * Create a new customer access token with multipass
 * @param variables - The variables for the mutation
 * @param options - The options for the fetch request
 * @returns
 * @category API
 */
export async function customerAccessTokenWithMultipass({
  variables,
  options,
}: {
  variables: Prettify<CustomerAccessTokenCreateWithMultipassMutationVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  return shopifyFetch<
    CustomerAccessTokenCreateWithMultipassMutation,
    CustomerAccessTokenCreateWithMultipassMutationVariables
  >({
    query: customerAccessTokenCreateWithMultipassMutation,
    variables,
    options,
  }).then((res) => res.customerAccessTokenCreateWithMultipass);
}
