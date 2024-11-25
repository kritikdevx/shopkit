import { Metafield } from './metafield';

export interface Page {
  body: string;
  bodySummary: string;
  createdAt: string;
  handle: string;
  id: string;
  onlineStoreUrl: string;
  title: string;
  trackingParameters: string;
  updatedAt: string;
  seo: {
    description: string;
    title: string;
  };
  metafields?: Metafield[] | [null];
}
