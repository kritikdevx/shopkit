import { ShopKitConfig } from '../types';

export class ConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CONFIGURATION_ERROR';
  }
}

export class ShopKitModule {
  /**
   * Configure ShopKit with the provided configuration
   * @param shopKitConfig ShopKit configuration
   * @returns Readonly<ShopKitConfig>
   * @throws ConfigurationError if the configuration is invalid
   * @example
   * ShopKit.configure({
   *  domain: 'my-shop.myshopify.com',
   *  storefrontAccessToken: 'your-storefront-access-token',
   *  apiVersion: '2024-10',
   * });
   */
  configure(shopKitConfig: ShopKitConfig): Readonly<ShopKitConfig> {
    const config = this.validateAndParseConfig(shopKitConfig);

    // Store config in global scope to ensure it's accessible across module boundaries
    globalThis.__SHOPKIT_CONFIG__ = config;
    return config;
  }

  /**
   * Get the current ShopKit configuration
   * @returns Readonly<ShopKitConfig>
   * @throws ConfigurationError if ShopKit is not configured
   * @example
   * const config = ShopKit.getConfig();
   * console.log(config.domain);
   */
  getConfig(): Readonly<ShopKitConfig> {
    const config = globalThis.__SHOPKIT_CONFIG__;

    if (!config) {
      throw new ConfigurationError(
        'ShopKit must be configured before use. Call ShopKit.configure() first.',
      );
    }
    return config;
  }

  private validateAndParseConfig(
    config: ShopKitConfig,
  ): Readonly<ShopKitConfig> {
    if (!config.domain || config.domain.trim() === '') {
      throw new ConfigurationError('ShopKit domain is required');
    }

    if (!/^[a-zA-Z0-9][a-zA-Z0-9-]*\.myshopify\.com$/.test(config.domain)) {
      throw new ConfigurationError('Invalid Shopify domain format');
    }

    if (!config.apiVersion || config.apiVersion.trim() === '') {
      throw new ConfigurationError('API version is required');
    }

    if (!/^\d{4}-\d{2}$/.test(config.apiVersion)) {
      throw new ConfigurationError(
        'Invalid API version format. Expected YYYY-MM',
      );
    }

    if (
      !config.storefrontAccessToken ||
      config.storefrontAccessToken.trim() === ''
    ) {
      throw new ConfigurationError('Storefront access token is required');
    }

    if (config.adminAccessToken && config.adminAccessToken.trim() === '') {
      throw new ConfigurationError(
        'Admin access token should not be empty if provided',
      );
    }

    if (config.judgeme) {
      if (
        !config.judgeme.privateToken ||
        config.judgeme.privateToken.trim() === ''
      ) {
        throw new ConfigurationError('Judge.me private token is required');
      }

      if (
        !config.judgeme.publicToken ||
        config.judgeme.publicToken.trim() === ''
      ) {
        throw new ConfigurationError('Judge.me public token is required');
      }
    }

    return Object.freeze(config);
  }
}

export const ShopKit = new ShopKitModule();
