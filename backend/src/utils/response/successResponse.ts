/**
 * @interface SuccessResponse
 * @description Standard success response structure
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

/**
 * @summary Creates a standardized success response
 * @function successResponse
 * @module response
 *
 * @param {T} data Response data
 * @param {object} metadata Optional metadata
 *
 * @returns {SuccessResponse<T>} Formatted success response
 *
 * @example
 * const response = successResponse({ id: 1, name: 'Task' });
 */
export function successResponse<T>(
  data: T,
  metadata?: Partial<SuccessResponse<T>['metadata']>
): SuccessResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
}
