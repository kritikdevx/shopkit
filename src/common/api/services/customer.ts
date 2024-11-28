import { ShopifyRequest } from '@/common/types';
import { shopifyFetch } from '../fetch';
import { createCustomerMutation } from '../mutations/customer';
import {
  CreateCustomerAccessTokenMutation,
  CreateCustomerAccessTokenMutationVariables,
  CreateCustomerMutation,
  CreateCustomerMutationVariables,
} from '@/common/types/mutations/customer';

export async function createCustomer({
  variables,
  options,
}: {
  variables: CreateCustomerMutationVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<CreateCustomerMutation, CreateCustomerMutationVariables>({
    query: createCustomerMutation,
    variables,
    options,
  });
}

export async function createCustomerAccessToken({
  variables,
  options,
}: {
  variables: CreateCustomerAccessTokenMutationVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<
    CreateCustomerAccessTokenMutation,
    CreateCustomerAccessTokenMutationVariables
  >({
    query: createCustomerMutation,
    variables,
    options,
  });
}
