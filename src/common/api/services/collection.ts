import {
  ShopifyRequest,
  ListCollectionsQuery,
  ListCollectionsQueryVariables,
  GetCollectionByIdQuery,
  GetCollectionByHandleQuery,
  GetCollectionByHandleQueryVariables,
  GetCollectionByIdQueryVariables,
  GetCollectionQueryVariables,
  ListCollectionProductsQueryVariables,
  ListCollectionProductsByIdQuery,
  ListCollectionProductsByHandleQuery,
  ListCollectionProductsByIdQueryVariables,
  ListCollectionProductsByHandleQueryVariables,
} from '@/common/types';

import { shopifyFetch } from '../fetch';
import {
  listCollectionsQuery,
  getCollectionByIdQuery,
  getCollectionByHandleQuery,
  listCollectionProductsByIdQuery,
  listCollectionProductsByHandleQuery,
} from '../queries/collection';

/**
 * Fetches a list of collections
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The list of collections
 * @category API
 * @example
 * const collections = await listCollections({
 *  variables: {
 *   first: 10,
 *  },
 * });
 */
export async function listCollections({
  variables,
  options,
}: {
  variables: ListCollectionsQueryVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<ListCollectionsQuery, ListCollectionsQueryVariables>({
    query: listCollectionsQuery,
    variables,
    options,
  });
}

/**
 * Fetches a collection by ID
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The collection
 * @category API
 * @example
 * const collection = await getCollectionById({
 *  variables: {
 *    id: 'gid://shopify/Collection/1234567890',
 *  },
 * });
 */
export async function getCollectionById({
  variables,
  options,
}: {
  variables: GetCollectionByIdQueryVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<GetCollectionByIdQuery, GetCollectionByIdQueryVariables>({
    query: getCollectionByIdQuery,
    variables,
    options,
  }).then((data) => data.collection);
}

/**
 * Fetches a collection by handle
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The collection
 * @category API
 * @example
 * const collection = await getCollectionByHandle({
 *  variables: {
 *    handle: 'my-collection',
 *  },
 * });
 */
export async function getCollectionByHandle({
  variables,
  options,
}: {
  variables: GetCollectionByHandleQueryVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<
    GetCollectionByHandleQuery,
    GetCollectionByHandleQueryVariables
  >({
    query: getCollectionByHandleQuery,
    variables,
    options,
  }).then((data) => data.collectionByHandle);
}

/**
 * Fetches a collection by its ID or handle
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The collection
 * @category API
 * @example
 * const collection = await getCollection({
 *  variables: {
 *   id: 'gid://shopify/Product/1234567890',
 *  },
 * });
 */
export async function getCollection({
  variables,
  options,
}: {
  variables: GetCollectionQueryVariables;
  options?: ShopifyRequest;
}) {
  if ('id' in variables) {
    return getCollectionById({ variables, options });
  } else if ('handle' in variables) {
    return getCollectionByHandle({ variables, options });
  } else {
    throw new Error('Id or Handle must be provided');
  }
}

/**
 * Fetches a list of products in a collection by its ID
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The list of products
 * @category API
 * @example
 * const products = await listCollectionProductsById({
 *  variables: {
 *   collectionId: 'gid://shopify/Collection/1234567890',
 *   first: 10,
 *  },
 * });
 */
export async function listCollectionProductsById({
  variables,
  options,
}: {
  variables: ListCollectionProductsByIdQueryVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<
    ListCollectionProductsByIdQuery,
    ListCollectionProductsByIdQueryVariables
  >({
    query: listCollectionProductsByIdQuery,
    variables,
    options,
  }).then((data) => data.collection);
}

/**
 * Fetches a list of products in a collection by its handle
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The list of products
 * @category API
 * @example
 * const products = await listCollectionProductsByHandle({
 *  variables: {
 *   collectionHandle: 'my-collection',
 *   first: 10,
 *  },
 * });
 */
export async function listCollectionProductsByHandle({
  variables,
  options,
}: {
  variables: ListCollectionProductsByHandleQueryVariables;
  options?: ShopifyRequest;
}) {
  return shopifyFetch<
    ListCollectionProductsByHandleQuery,
    ListCollectionProductsByHandleQueryVariables
  >({
    query: listCollectionProductsByHandleQuery,
    variables,
    options,
  }).then((data) => data.collectionByHandle);
}

/**
 * Fetches a list of products in a collection
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The list of products
 * @category API
 * @example
 * const products = await listCollectionProducts({
 *  variables: {
 *    collectionId: 'gid://shopify/Collection/1234567890', // or collectionHandle: 'my-collection'
 *    first: 10,
 *  },
 * });
 */
export async function listCollectionProducts({
  variables,
  options,
}: {
  variables: ListCollectionProductsQueryVariables;
  options?: ShopifyRequest;
}) {
  if ('collectionId' in variables) {
    return listCollectionProductsById({ variables, options });
  } else if ('collectionHandle' in variables) {
    return listCollectionProductsByHandle({ variables, options });
  } else {
    throw new Error('Id or Handle must be provided');
  }
}
