import { ShopKit } from '@/common/config';
import {
  JudgeMeApiError,
  JudgeMeCreateReviewRequest,
  JudgeMePaginatedResponse,
  JudgeMeProductInfo,
  JudgeMeReview,
  JudgeMeReviewStats,
} from '@/common/types/integrations';

class JudgeMeAPI {
  private readonly baseUrl: string;
  private readonly shopDomain: string;
  private readonly privateToken: string;
  private readonly publicToken: string;

  constructor(baseUrl: string = 'https://judge.me/api/v1') {
    this.baseUrl = baseUrl;

    const config = ShopKit.getConfig();

    this.shopDomain = config.domain;
    this.privateToken = config.judgeme?.privateToken || '';
    this.publicToken = config.judgeme?.publicToken || '';
  }

  private async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      Authorization: `Token token="${this.privateToken}"`,
      'Shop-Domain': this.shopDomain,
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const error = new Error(
          `API Error: ${response.status} ${response.statusText}`,
        ) as JudgeMeApiError;
        error.status = response.status;
        error.statusText = response.statusText;
        throw error;
      }

      return (await response.json()) as T;
    } catch (error) {
      throw error;
    }
  }

  async getAllReviews(
    page: number = 1,
    perPage: number = 10,
  ): Promise<JudgeMePaginatedResponse<JudgeMeReview>> {
    return this.makeRequest<JudgeMePaginatedResponse<JudgeMeReview>>(
      `/reviews?page=${page}&per_page=${perPage}`,
    );
  }

  async getProductReviews(
    productId: string,
    page: number = 1,
    perPage: number = 10,
  ): Promise<JudgeMePaginatedResponse<JudgeMeReview>> {
    return this.makeRequest<JudgeMePaginatedResponse<JudgeMeReview>>(
      `/reviews?product_id=${productId}&page=${page}&per_page=${perPage}`,
    );
  }

  async createReview(
    reviewData: JudgeMeCreateReviewRequest,
  ): Promise<JudgeMeReview> {
    return this.makeRequest<JudgeMeReview>('/reviews', {
      method: 'POST',
      body: JSON.stringify({
        review: {
          ...reviewData,
          platform: reviewData.platform || 'custom',
        },
      }),
    });
  }

  async getProductStats(productId: string): Promise<JudgeMeReviewStats> {
    return this.makeRequest<JudgeMeReviewStats>(
      `/products/${productId}/review_stats`,
    );
  }

  async getAllProductsWithStats(
    page: number = 1,
    perPage: number = 10,
  ): Promise<
    JudgeMePaginatedResponse<
      JudgeMeProductInfo & { review_stats: JudgeMeReviewStats }
    >
  > {
    return this.makeRequest<
      JudgeMePaginatedResponse<
        JudgeMeProductInfo & { review_stats: JudgeMeReviewStats }
      >
    >(`/products?page=${page}&per_page=${perPage}`);
  }
}

export default JudgeMeAPI;
