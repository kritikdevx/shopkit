import { ShopifyRequest } from '@/common/types';
import { shopifyFetch } from '../fetch';
import {
  createCustomerAccessTokenMutation,
  createCustomerMutation,
} from '../mutations/customer';
import {
  CreateCustomerAccessTokenMutation,
  CreateCustomerAccessTokenMutationVariables,
  CreateCustomerMutation,
  CreateCustomerMutationVariables,
} from '@/common/types/mutations/customer';
import { Prettify } from '@/utils/prettify';

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
