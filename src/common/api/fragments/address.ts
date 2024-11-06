const addressFragment = /* GraphQL */ `
  fragment address on MailingAddress {
    address1
    address2
    city
    company
    country
    firstName
    countryCodeV2
    countryCode
    formattedArea
    id
    lastName
    latitude
    longitude
    name
    phone
    province
    provinceCode
    zip
    formatted(withCompany: true, withName: true)
  }
`;

export default addressFragment;
