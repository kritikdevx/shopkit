import { MailingAddressInput, Address } from '../schemas/address';
import {
  Customer,
  CustomerAccessTokenCreateInput,
  CustomerCreateInput,
} from '../schemas/customer';

export interface CreateCustomerMutationVariables {
  input: CustomerCreateInput;
}

export interface CreateCustomerAccessTokenMutationVariables {
  input: CustomerAccessTokenCreateInput;
}

// Mutations

export interface CreateCustomerMutation {
  customer: Customer;
  customerUserErrors: {
    code: string;
    message: string;
  }[];
}

export interface CreateCustomerAccessTokenMutation {
  customerAccessToken: {
    accessToken: string;
    expiresAt: string;
  };
  customerUserErrors: {
    code: string;
    message: string;
  }[];
}
