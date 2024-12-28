import {
  ShopifyRequest,
  GetPageByIdQueryVariables,
  GetPageQuery,
  GetPageByHandleQueryVariables,
  GetPageQueryVariables,
} from '@/common/types';

import { shopifyFetch } from '../fetch';
import {
  getPageByHandleQuery,
  getPageByHandleWithMetafieldsQuery,
  getPageByIdQuery,
  getPageByIdWithMetafieldsQuery,
} from '../queries/page';
import { Prettify } from '@/utils/prettify';

/**
 * Fetches a page by its ID
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The page
 * @category API
 * @example
 * const page = await getPageById({
 *  variables: {
 *   id: 'gid://shopify/Page/1234567890',
 *  },
 * });
 */
export async function getPageById({
  variables,
  options,
}: {
  variables: Prettify<GetPageByIdQueryVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  if (variables.metafields) {
    return shopifyFetch<GetPageQuery, GetPageByIdQueryVariables>({
      query: getPageByIdWithMetafieldsQuery,
      variables,
      options,
    }).then((res) => res.page);
  } else {
    return shopifyFetch<GetPageQuery, GetPageByIdQueryVariables>({
      query: getPageByIdQuery,
      variables,
      options,
    }).then((res) => res.page);
  }
}

/**
 * Fetches a page by its handle
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The page
 * @category API
 * @example
 * const page = await getPageByHandle({
 *  variables: {
 *   handle: 'page-handle',
 *  },
 * });
 */
export async function getPageByHandle({
  variables,
  options,
}: {
  variables: Prettify<GetPageByHandleQueryVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  if (variables.metafields) {
    return shopifyFetch<GetPageQuery, GetPageByHandleQueryVariables>({
      query: getPageByHandleWithMetafieldsQuery,
      variables,
      options,
    }).then((res) => res.page);
  } else {
    return shopifyFetch<GetPageQuery, GetPageByHandleQueryVariables>({
      query: getPageByHandleQuery,
      variables,
      options,
    }).then((res) => res.page);
  }
}

/**
 * Fetches a page by its ID or handle
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The page
 * @category API
 * @example
 * const page = await getPage({
 *  variables: {
 *   id: 'gid://shopify/Page/1234567890',
 *  },
 * });
 */
export async function getPage({
  variables,
  options,
}: {
  variables: Prettify<GetPageQueryVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  if ('id' in variables) {
    return getPageById({ variables, options });
  } else if ('handle' in variables) {
    return getPageByHandle({ variables, options });
  } else {
    throw new Error('Id or handle must be provided');
  }
}
