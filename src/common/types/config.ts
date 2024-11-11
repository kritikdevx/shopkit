export interface ShopKitConfig {
  domain: string;
  storefrontAccessToken: string;
  apiVersion: string;
  adminAccessToken: string;
  judgeme?: {
    privateToken: string;
    publicToken: string;
  };
}
