import { Connection, Money } from './common';
import { ProductVariant } from './product';

export interface AttributeInput {
  key: string;
  value: string;
}

export interface CartLineInput {
  merchandiseId: string;
  quantity: number;
  attributes?: AttributeInput[];
}

export interface CartLineUpdateInput {
  id: string;
  quantity?: number;
  merchandiseId?: string;
  sellingPlanId?: string;
  attributes?: AttributeInput[];
}

export interface CartLine {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
    amountPerQuantity: Money;
  };
  attributes: { key: string; value: string }[];
  estimatedCost: {
    amount: Money;
    compareAtAmount: Money;
    totalAmount: Money;
    subtotalAmount: Money;
  };
  discountAllocations: {
    discountedAmount: Money;
    code?: string;
    title?: string;
  }[];
  merchandise: ProductVariant;
}

export interface Cart {
  id: string;
  attribute: {
    key: string;
    value: string;
  };
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  discountCodes: { applicable: boolean; code: string }[];
  discountAllocations: { discountedAmount: Money }[];
  lines: Connection<CartLine>;
  totalQuantity: number;
  attributes: { key: string; value: string }[];
}
