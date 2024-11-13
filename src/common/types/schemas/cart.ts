import { Connection, Image, Money } from './common';
import { Product, ProductVariant } from './product';

export interface AttributeInput {
  key: string;
  value: string;
}

export interface CartLineInput {
  merchandiseId: string;
  quantity: number;
}

export interface CartLineUpdateInput {
  id: string;
  quantity?: number;
  merchandiseId?: string;
  sellingPlanId?: string;
}

export interface CartLine {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
    amountPerQuantity: Money;
  };
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
  lines: Connection<CartLine>;
  totalQuantity: number;
}
