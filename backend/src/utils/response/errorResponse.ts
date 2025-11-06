/**
 * @interface ErrorResponse
 * @description Standard error response structure
 */
export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary Creates a standardized error response
 * @function errorResponse
 * @module response
 *
 * @param {string} message Error message
 * @param {string} code Error code
 * @param {any} details Optional error details
 *
 * @returns {ErrorResponse} Formatted error response
 *
 * @example
 * const response = errorResponse('Task not found', 'NOT_FOUND');
 */
export function errorResponse(
  message: string,
  code: string = 'ERROR',
  details?: any
): ErrorResponse {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
    timestamp: new Date().toISOString(),
  };
}
