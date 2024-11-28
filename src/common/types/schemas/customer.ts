export interface CustomerCreateInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  acceptsMarketing?: boolean;
}

export interface CustomerAccessTokenCreateInput {
  email: string;
  password: string;
}

export interface Customer {
  acceptsMarketing: boolean;
  createdAt: string;
  displayName: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  tags: string[];
  updatedAt: string;
}
