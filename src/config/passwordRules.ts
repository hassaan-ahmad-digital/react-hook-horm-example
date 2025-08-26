/**
 * Password validation rules configuration
 * Each rule defines a test function and display information for the checklist
 */

import { PasswordRule } from "../types/form";

export const passwordRules: PasswordRule[] = [
  {
    id: "minLength",
    label: "At least 8 characters",
    test: (password: string) => password.length >= 8,
  },
  {
    id: "hasUppercase",
    label: "One uppercase letter (A-Z)",
    test: (password: string) => /[A-Z]/.test(password),
  },
  {
    id: "hasLowercase",
    label: "One lowercase letter (a-z)",
    test: (password: string) => /[a-z]/.test(password),
  },
  {
    id: "hasNumber",
    label: "One number (0-9)",
    test: (password: string) => /\d/.test(password),
  },
];

/**
 * Utility function to validate a password against all rules
 * Returns an object with rule IDs as keys and boolean validation results as values
 */
export const validatePassword = (password: string): Record<string, boolean> => {
  return passwordRules.reduce((acc, rule) => {
    acc[rule.id] = rule.test(password);
    return acc;
  }, {} as Record<string, boolean>);
};

/**
 * Check if password passes all validation rules
 */
export const isPasswordValid = (password: string): boolean => {
  return passwordRules.every((rule) => rule.test(password));
};
