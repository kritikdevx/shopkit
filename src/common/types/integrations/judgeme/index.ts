export interface JudgeMeReviewerInfo {
  name: string;
  email: string;
  phone?: string;
  ip_address?: string;
}

export interface JudgeMeProductInfo {
  id: string;
  handle: string;
  title: string;
  image_url?: string;
}

export interface JudgeMeReview {
  id: number;
  rating: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  verified: boolean;
  hidden: boolean;
  featured: boolean;
  pictures: Array<{
    urls: {
      compact: string;
      original: string;
      small: string;
    };
  }>;
  reviewer: JudgeMeReviewerInfo;
  product: JudgeMeProductInfo;
  reply?: {
    body: string;
    created_at: string;
    shop_admin: string;
  };
}

export interface JudgeMeReviewStats {
  product_id: string;
  rating: number;
  reviews_count: number;
  questions_count: number;
  rating_distribution: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}

export interface JudgeMePaginatedResponse<T> {
  current_page: number;
  per_page: number;
  total_count: number;
  results: T[];
}

export interface JudgeMeCreateReviewRequest {
  rating: number;
  title: string;
  body: string;
  reviewer_name: string;
  reviewer_email: string;
  product_handle: string;
  product_title: string;
  product_id?: string;
  platform?: string;
  pictures?: string[];
}

export interface JudgeMeApiError extends Error {
  status?: number;
  statusText?: string;
}
