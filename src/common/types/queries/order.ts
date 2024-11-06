import { Connection, Edge, PageInfo } from '../schemas';
import { Order } from '../schemas/order';

export type OrderSortKey = 'ID' | 'TOTAL_PRICE' | 'RELEVANCE' | 'PROCESSED_AT';

// Variables

export interface ListOrdersQueryVariables {
  customerAccessToken: string;
  after?: string;
  before?: string;
  first?: number;
  last?: number;
  query?: string;
  reverse?: boolean;
  sortKey?: OrderSortKey;
}

// Queries

export interface ListOrdersQuery {
  customer: {
    orders: {
      edges: Array<Edge<Order>>;
      pageInfo: PageInfo;
      totalCount: number;
    };
  };
}
