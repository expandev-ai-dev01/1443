/**
 * @utility isValidEmail
 * @summary Validates email format
 * @category validation
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * @utility isEmpty
 * @summary Checks if a string is empty or contains only whitespace
 * @category validation
 */
export const isEmpty = (value: string): boolean => {
  return !value || value.trim().length === 0;
};
