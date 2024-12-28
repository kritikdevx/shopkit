import {
  ShopifyRequest,
  ListProductsQuery,
  ListProductsQueryVariables,
  GetProductByIdQueryVariables,
  GetProductQuery,
  GetProductByHandleQueryVariables,
  GetProductQueryVariables,
  ListProductVariantsQueryVariables,
  ListProductVariantsQuery,
} from '@/common/types';

import { shopifyFetch } from '../fetch';
import {
  getProductByHandleQuery,
  getProductByHandleWithMetafieldsQuery,
  getProductByIdQuery,
  getProductByIdWithMetafieldsQuery,
  listProductsQuery,
  listProductVariantsByHandleQuery,
  listProductVariantsByIdQuery,
} from '../queries/product';
import { Prettify } from '@/utils/prettify';

/**
 * Fetches a list of products
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The list of products
 * @category API
 * @example
 * const products = await listProducts({
 *  variables: {
 *    first: 10,
 *  },
 * });
 */
export async function listProducts({
  variables,
  options,
}: {
  variables: Prettify<ListProductsQueryVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  return shopifyFetch<ListProductsQuery, ListProductsQueryVariables>({
    query: listProductsQuery,
    variables,
    options,
  }).then((res) => res.products);
}

/**
 * Fetches a product by its ID
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The product
 * @category API
 * @example
 * const product = await getProductById({
 *  variables: {
 *   id: 'gid://shopify/Product/1234567890',
 *  },
 * });
 */
export async function getProductById({
  variables,
  options,
}: {
  variables: Prettify<GetProductByIdQueryVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  if (variables.metafields) {
    return shopifyFetch<GetProductQuery, GetProductByIdQueryVariables>({
      query: getProductByIdWithMetafieldsQuery,
      variables,
      options,
    }).then((res) => res.product);
  } else {
    return shopifyFetch<GetProductQuery, GetProductByIdQueryVariables>({
      query: getProductByIdQuery,
      variables,
      options,
    }).then((res) => res.product);
  }
}

/**
 * Fetches a product by its handle
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The product
 * @category API
 * @example
 * const product = await getProductByHandle({
 *  variables: {
 *   handle: 'product-handle',
 *  },
 * });
 */
export async function getProductByHandle({
  variables,
  options,
}: {
  variables: Prettify<GetProductByHandleQueryVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  if (variables.metafields) {
    return shopifyFetch<GetProductQuery, GetProductByHandleQueryVariables>({
      query: getProductByHandleWithMetafieldsQuery,
      variables,
      options,
    }).then((res) => res.product);
  } else {
    return shopifyFetch<GetProductQuery, GetProductByHandleQueryVariables>({
      query: getProductByHandleQuery,
      variables,
      options,
    }).then((res) => res.product);
  }
}

/**
 * Fetches a product by its ID or handle
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The product
 * @category API
 * @example
 * const product = await getProduct({
 *  variables: {
 *   id: 'gid://shopify/Product/1234567890',
 *  },
 * });
 */
export async function getProduct({
  variables,
  options,
}: {
  variables: Prettify<GetProductQueryVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  if ('id' in variables) {
    return getProductById({ variables, options });
  } else if ('handle' in variables) {
    return getProductByHandle({ variables, options });
  } else {
    throw new Error('Id or handle must be provided');
  }
}

/**
 * Fetches a list of product variants
 * @param variables - The variables for the query
 * @param options - The options for the request
 * @returns The list of product variants
 * @category API
 * @example
 * const productVariants = await listProductVariants({
 *  variables: {
 *   productId: 'gid://shopify/Product/1234567890',
 *  },
 * });
 */
export async function listProductVariants({
  variables,
  options,
}: {
  variables: Prettify<ListProductVariantsQueryVariables>;
  options?: Prettify<ShopifyRequest>;
}) {
  if ('productId' in variables) {
    return shopifyFetch<
      ListProductVariantsQuery,
      ListProductVariantsQueryVariables
    >({
      query: listProductVariantsByIdQuery,
      variables,
      options,
    }).then((res) => res.productVariants);
  } else if ('productHandle' in variables) {
    return shopifyFetch<
      ListProductVariantsQuery,
      ListProductVariantsQueryVariables
    >({
      query: listProductVariantsByHandleQuery,
      variables,
      options,
    }).then((res) => res.productVariants);
  } else {
    throw new Error('productId or productHandle must be provided');
  }
}
