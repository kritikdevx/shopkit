import { Metafield } from './metafield';

export interface CustomerCreateInput {
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  acceptsMarketing?: boolean;
}

export enum CustomerAcceptsMarketing {
  'NOT_SUBSCRIBED' = 'NOT_SUBSCRIBED',
  'PENDING' = 'PENDING',
  'SUBSCRIBED' = 'SUBSCRIBED',
  'UNSUBSCRIBED' = 'UNSUBSCRIBED',
  'REDACTED' = 'REDACTED',
  'INVALID' = 'INVALID',
}

export enum CustomerMarketingOptInLevel {
  'SINGLE_OPT_IN' = 'SINGLE_OPT_IN',
  'CONFIRMED_OPT_IN' = 'CONFIRMED_OPT_IN',
  'UNKNOWN' = 'UNKNOWN',
}

export interface MetafieldInput {
  key: string;
  value: string;
  id: string;
  type: string;
  namespace: string;
}

export interface CustomerInput {
  email?: string;
  firstName?: string;
  lastName?: string;
  id?: string;
  tags?: string[];
  note?: string;
  phone?: string;
  emailMarketingConsent?: {
    marketingOptInLevel?: CustomerMarketingOptInLevel;
    marketingState: CustomerAcceptsMarketing;
    consentUpdatedAt?: string;
  };
  smsMarketingConsent?: {
    marketingOptInLevel?: CustomerMarketingOptInLevel;
    marketingState: CustomerAcceptsMarketing;
    consentUpdatedAt?: string;
  };
  taxExempt?: boolean;
  metaFields?: MetafieldInput[];
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
  numberOfOrders: number;
  updatedAt: string;
  metafields?: Metafield[] | [null];
}

export interface AdminCustomer {
  emailMarketingConsent: {
    consentUpdatedAt: string;
    marketingState: CustomerAcceptsMarketing;
    marketingOptInLevel: CustomerMarketingOptInLevel;
  };
  smsMarketingConsent: {
    consentCollectedFrom: string;
    consentUpdatedAt: string;
    marketingOptInLevel: CustomerMarketingOptInLevel;
    marketingState: CustomerAcceptsMarketing;
  };
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
