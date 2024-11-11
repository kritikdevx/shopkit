import { ShopifyRequest } from '@/common/types';
import {
  GetMenuQueryVariables,
  GetMenuQuery,
} from '@/common/types/queries/menu';
import { shopifyFetch } from '../fetch';
import { getMenuQuery } from '../queries/menu';

/**
 * Fetches a menu by handle
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The menu
 * @category API
 * @example
 * const menu = await getMenu({
 *  variables: {
 *   handle: 'main-menu',
 *  },
 * });
 */
export async function getMenu({
  variables,
  options,
}: {
  variables: GetMenuQueryVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<GetMenuQuery, GetMenuQueryVariables>({
    query: getMenuQuery,
    variables,
    options,
  });
}
