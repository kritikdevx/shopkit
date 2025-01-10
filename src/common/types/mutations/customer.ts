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

export interface CustomerAccessTokenCreateWithMultipassMutationVariables {
  multipassToken: string;
}
// Mutations

export interface CreateCustomerMutation {
  customerCreate: {
    customer: Customer;
    customerUserErrors: {
      code: string;
      message: string;
    }[];
  };
}

export interface CreateCustomerAccessTokenMutation {
  customerAccessTokenCreate: {
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    };
    customerUserErrors: {
      code: string;
      message: string;
    }[];
  };
}

export interface CustomerAccessTokenCreateWithMultipassMutation {
  customerAccessTokenCreateWithMultipass: {
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    };
    customerUserErrors: {
      code: string;
      message: string;
    }[];
  };
}
