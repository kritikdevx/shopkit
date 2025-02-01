import {
  Connection,
  Customer,
  HasMetafieldsIdentifier,
  PageInfo,
} from '../schemas';

export type CustomerSortKeys =
  | 'ID'
  | 'CREATED_AT'
  | 'LOCATION'
  | 'NAME'
  | 'UPDATED_AT'
  | 'RELEVANCE';

// Variables

export interface ListCustomersQueryVariables {
  first?: number;
  after?: string;
  before?: string;
  query?: string;
  reverse?: boolean;
  sortKey?: CustomerSortKeys;
}

export interface GetProfileQueryVariables {
  customerAccessToken: string;
  metafields?: HasMetafieldsIdentifier[];
}

// Queries

export interface ListCustomersQuery {
  customers: Connection<Customer> & {
    pageInfo: PageInfo;
  };
}

export interface GetProfileQuery {
  customer: Customer;
}
