//TODO: Update order

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
  originalTotalPrice: Money;
  lineItems: Connection<{
    currentQuantity: number;
    quantity: number;
    title: string;
    variant: ProductVariant;
    cursor: string;
  }>;
}
