/**
 * Centralized validation messages to ensure consistency between 
 * React Hook Form validation and password checklist display
 */

export const VALIDATION_MESSAGES = {
  password: {
    minLength: "At least 8 characters",
    hasUppercase: "One uppercase letter (A-Z)", 
    hasLowercase: "One lowercase letter (a-z)",
    hasNumber: "One number (0-9)",
  },
  general: {
    required: "This field is required",
    email: "Please enter a valid email address",
    passwordMatch: "Passwords do not match",
    minName: "must be at least 2 characters",
  }
} as const;

/**
 * Password validation rules that can be reused across components
 */
export const PASSWORD_VALIDATION_RULES = {
  minLength: (value: string) => value.length >= 8,
  hasUppercase: (value: string) => /[A-Z]/.test(value),
  hasLowercase: (value: string) => /[a-z]/.test(value), 
  hasNumber: (value: string) => /\d/.test(value),
} as const;
