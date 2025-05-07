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
    numberOfOrders
    updatedAt
  }
`;

export default customerFragment;
