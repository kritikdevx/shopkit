// variables

import { Connection } from '../schemas';
import { Address } from '../schemas/address';
import { PageInfo } from '../schemas/common';

export interface ListAddressesQueryVariables {
  customerAccessToken: String;
  first?: number;
  last?: number;
  after?: string;
  before?: string;
  reverse?: boolean;
}

// Queries

export interface ListAddressesQuery {
  customer: {
    addresses: Connection<Address> & {
      pageInfo: PageInfo;
    };
    defaultAddress: Address | null;
  };
}
