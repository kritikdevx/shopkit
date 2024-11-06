export interface MailingAddressInput {
  address1: string;
  address2: string;
  city: string;
  company: string;
  country: string;
  firstName: string;
  lastName: string;
  phone: string;
  province: string;
  zip: string;
}

export interface Address {
  address1: string;
  address2: string;
  city: string;
  company: string;
  country: string;
  firstName: string;
  countryCodeV2: string;
  countryCode: string;
  formattedArea: string;
  id: string;
  lastName: string;
  latitude: number;
  longitude: number;
  name: string;
  phone: string;
  province: string;
  provinceCode: string;
  zip: string;
}
