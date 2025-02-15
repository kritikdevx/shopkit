//TODO: Update order

import { Address } from './address';
import { Connection, Money } from './common';
import { ProductVariant } from './product';

export interface Order {
  id: string;
  name: string;
  processedAt: string;
  fulfillmentStatus: string;
  financialStatus: string;
  statusUrl: string;
  email: string;
  phone: string;
  orderNumber: number;
  edited: boolean;
  lineItems: Connection<{
    currentQuantity: number;
    quantity: number;
    title: string;
    variant: ProductVariant;
    originalTotalPrice: Money;
  }>;
  billingAddress: Address;
  shippingAddress: Address;
  currentSubtotalPrice: Money;
  currentTotalDuties: Money;
  currentTotalPrice: Money;
  currentTotalShippingPrice: Money;
  currentTotalTax: Money;
  shippingDiscountAllocations: {
    allocatedAmount: Money;
  }[];
  totalPrice: Money;
  totalRefunded: Money;
  totalShippingPrice: Money;
  totalTax: Money;
}
