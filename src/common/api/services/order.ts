import {
  ShopifyRequest,
  ListOrdersQuery,
  ListOrdersQueryVariables,
} from '@/common/types';

import { shopifyFetch } from '../fetch';
import { listOrdersQuery } from '../queries/order';
import { Prettify } from '@/utils/prettify';

/**
 * Fetches a list of orders
 * @param options - The options for the request
 * @returns The list of orders
 * @category API
 */
export async function listOrders({
  options,
  variables,
}: {
  options?: Prettify<ShopifyRequest>;
  variables: Prettify<ListOrdersQueryVariables>;
}) {
  return shopifyFetch<ListOrdersQuery, ListOrdersQueryVariables>({
    query: listOrdersQuery,
    options,
    variables,
  }).then((res) => res.customer);
}
