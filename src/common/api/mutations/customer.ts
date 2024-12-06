export const createCustomerAccessTokenMutation = /* GraphQL */ `
  mutation CustomerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
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
  }
`;

export const createCustomerMutation = /* GraphQL */ `
  mutation CustomerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
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
      customerUserErrors {
        code
        message
      }
    }
  }
`;