import { HasMetafieldsIdentifier } from '../schemas';
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

export interface UpdateCustomerProfileMutationVariables {
  customerAccessToken: string;
  customer: {
    email?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    acceptsMarketing?: boolean;
  };
  metafields?: HasMetafieldsIdentifier[];
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

export interface UpdateCustomerProfileMutation {
  customerUpdate: {
    customer: Customer;
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
