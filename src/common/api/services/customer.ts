import { ShopifyRequest } from '@/common/types';
import { shopifyFetch } from '../fetch';
import {
  createCustomerAccessTokenMutation,
  createCustomerMutation,
  customerAccessTokenCreateWithMultipassMutation,
  updateCustomerProfileMutation,
  updateCustomerProfileWithMetaFieldsMutation,
} from '../mutations/customer';
import {
  CreateCustomerAccessTokenMutation,
  CreateCustomerAccessTokenMutationVariables,
  CreateCustomerMutation,
  CreateCustomerMutationVariables,
  CustomerAccessTokenCreateWithMultipassMutation,
  CustomerAccessTokenCreateWithMultipassMutationVariables,
  UpdateCustomerProfileMutation,
  UpdateCustomerProfileMutationVariables,
} from '@/common/types/mutations/customer';
import { Prettify } from '@/utils/prettify';
import {
  GetCustomerProfileQuery,
  GetCustomerProfileQueryVariables,
} from '@/common/types/queries/customer';
import {
  getCustomerProfileQuery,
  getCustomerProfileWithMetaFieldsQuery,
} from '../queries/customer';

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

/**
 * Create a new customer access token with multipass
 * @param variables - The variables for the mutation
 * @param options - The options for the fetch request
 * @returns
 * @category API
 */
export async function getCustomerProfile({
  variables,
  options,
}: {
  variables: Prettify<GetCustomerProfileQueryVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  if (variables.metafields) {
    return shopifyFetch<
      GetCustomerProfileQuery,
      GetCustomerProfileQueryVariables
    >({
      query: getCustomerProfileWithMetaFieldsQuery,
      variables,
      options,
    }).then((res) => res.customer);
  } else {
    return shopifyFetch<
      GetCustomerProfileQuery,
      GetCustomerProfileQueryVariables
    >({
      query: getCustomerProfileQuery,
      variables,
      options,
    }).then((res) => res.customer);
  }
}

/**
 * Create a new customer access token with multipass
 * @param variables - The variables for the mutation
 * @param options - The options for the fetch request
 * @returns
 * @category API
 */
export async function updateCustomerProfile({
  variables,
  options,
}: {
  variables: Prettify<UpdateCustomerProfileMutationVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  if (variables.metafields) {
    return shopifyFetch<
      UpdateCustomerProfileMutation,
      UpdateCustomerProfileMutationVariables
    >({
      query: updateCustomerProfileWithMetaFieldsMutation,
      variables,
      options,
    }).then((res) => res.customerUpdate);
  } else {
    return shopifyFetch<
      UpdateCustomerProfileMutation,
      UpdateCustomerProfileMutationVariables
    >({
      query: updateCustomerProfileMutation,
      variables,
      options,
    }).then((res) => res.customerUpdate);
  }
}
