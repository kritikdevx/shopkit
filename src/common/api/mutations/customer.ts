export const createCustomerAccessTokenMutation = /* GraphQL */ `
  mutation customerAccessTokenCreate(input:CustomerAccessTokenCreateInput!) {
    customerAccessToken {
      accessToken
      expiresAt
    }
    customerUserErrors {
      message
      code
      field
    }
  }
`;

export const createCustomerMutation = /* GraphQL */ `
  mutation customerCreate(input : CustomerCreateInput!) {
    customer {
      acceptsMarketing
      createdAt
      displayName
      email
      firstName
      id
      lastName
      phone
      tags
      updatedAt
    }
  }
`;
