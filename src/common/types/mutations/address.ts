import { MailingAddressInput, Address } from '../schemas/address';

// Variables

export interface CreateCustomerAddressMutationVariables {
  customerAccessToken: string;
  address: MailingAddressInput;
}

export interface UpdateCustomerAddressMutationVariables {
  customerAccessToken: string;
  id: string;
  address: MailingAddressInput;
}

export interface DeleteCustomerAddressMutationVariables {
  customerAccessToken: string;
  id: string;
}

export interface UpdateCustomerDefaultAddressMutationVariables {
  customerAccessToken: string;
  addressId: string;
}

// Mutations

export interface CreateCustomerAddressMutation {
  customerAddressCreate: {
    customerAddress: Address;
    customerUserErrors: {
      code: string;
      field: string;
      message: string;
    }[];
    userErrors: {
      field: string;
      message: string;
    }[];
  };
}

export interface UpdateCustomerAddressMutation {
  customerAddressUpdate: {
    customerAddress: Address;
    customerUserErrors: {
      code: string;
      field: string;
      message: string;
    }[];
    userErrors: {
      field: string;
      message: string;
    }[];
  };
}

export interface DeleteCustomerAddressMutation {
  customerAddressDelete: {
    deletedCustomerAddressId: string;
    customerUserErrors: {
      code: string;
      field: string;
      message: string;
    }[];
    userErrors: {
      field: string;
      message: string;
    }[];
  };
}

export interface UpdateCustomerDefaultAddressMutation {
  customerDefaultAddressUpdate: {
    customer: {
      defaultAddress: Address;
    };
    customerUserErrors: {
      code: string;
      field: string;
      message: string;
    }[];
    userErrors: {
      field: string;
      message: string;
    }[];
  };
}
