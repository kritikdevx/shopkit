const customerFragment = /* GraphQL */ `
  fragment customer on Customer {
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
`;

export default customerFragment;
