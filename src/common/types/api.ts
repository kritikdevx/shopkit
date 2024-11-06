interface NextFetchRequestConfig {
  revalidate?: number | false;
  tags?: string[];
}

type RequestCache =
  | 'default'
  | 'force-cache'
  | 'no-cache'
  | 'no-store'
  | 'only-if-cached'
  | 'reload';

export interface NextRequest extends RequestInit {
  cache?: RequestCache;
  next?: NextFetchRequestConfig | undefined;
}

export type ShopifyRequest = Omit<NextRequest, 'body' | 'method'> & {};

export interface ShopifyResponse<T> {
  data: T;
  extensions?: Record<string, unknown>;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: string[];
    extensions?: Record<string, unknown>;
  }>;
}
