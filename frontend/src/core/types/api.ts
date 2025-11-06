/**
 * @type ApiResponse
 * @summary Standard API response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

/**
 * @type ApiError
 * @summary Standard API error response
 */
export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

/**
 * @type PaginationParams
 * @summary Standard pagination parameters
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

/**
 * @type PaginatedResponse
 * @summary Standard paginated response
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
