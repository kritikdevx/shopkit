import { ShopKit } from '@/common/config';
import type {
  NextRequest,
  ShopifyRequest,
  ShopifyResponse,
} from '@/common/types/api';

export class ShopifyError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public errors?: unknown[],
  ) {
    super(message);
    this.name = 'ShopifyError';
  }
}

export async function shopifyFetch<T, V>({
  query,
  variables,
  options = {},
  headers: customHeaders = {},
}: {
  query: string;
  variables?: V;
  options?: ShopifyRequest;
  headers?: HeadersInit;
}): Promise<T> {
  try {
    const config = ShopKit.getConfig();

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': config.storefrontAccessToken,
      ...customHeaders,
    };

    const fetchOptions: NextRequest = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ query, variables }),
      ...options,
    };

    const response = await fetch(
      `https://${config.domain}/api/${config.apiVersion}/graphql.json`,
      fetchOptions,
    );

    if (!response.ok) {
      throw new ShopifyError(
        `API request failed with status ${response.status}`,
        response.status,
      );
    }

    const json = (await response.json()) as ShopifyResponse<T>;

    if (json.errors) {
      throw new ShopifyError(
        json.errors.map((error) => error.message).join(', '),
        response.status,
        json.errors,
      );
    }

    return json.data;
  } catch (error) {
    if (error instanceof ShopifyError) {
      throw error;
    }
    throw new ShopifyError(
      error instanceof Error ? error.message : 'Unknown error occurred',
    );
  }
}

export async function shopifyAdminFetch<T, V>({
  query,
  variables,
  options = {},
  headers: customHeaders = {},
}: {
  query: string;
  variables?: V;
  options?: ShopifyRequest;
  headers?: HeadersInit;
}): Promise<T> {
  try {
    const config = ShopKit.getConfig();

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': config.adminAccessToken,
      ...customHeaders,
    };

    const fetchOptions: NextRequest = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ query, variables }),
      ...options,
    };

    const response = await fetch(
      `https://${config.domain}/api/${config.apiVersion}/graphql.json`,
      fetchOptions,
    );

    if (!response.ok) {
      throw new ShopifyError(
        `API request failed with status ${response.status}`,
        response.status,
      );
    }

    const json = (await response.json()) as ShopifyResponse<T>;

    if (json.errors) {
      throw new ShopifyError(
        json.errors.map((error) => error.message).join(', '),
        response.status,
        json.errors,
      );
    }

    return json.data;
  } catch (error) {
    if (error instanceof ShopifyError) {
      throw error;
    }
    throw new ShopifyError(
      error instanceof Error ? error.message : 'Unknown error occurred',
    );
  }
}
