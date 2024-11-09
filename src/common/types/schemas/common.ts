export interface Money {
  amount: string;
  currencyCode: string;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  altText: string | null;
  src: string;
}

export interface SEO {
  title: string;
  description: string;
}

export interface Connection<T> {
  edges: Array<{
    node: T;
    cursor?: string;
  }>;
}

export interface Edge<T> {
  node: T;
  cursor?: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
