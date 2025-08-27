/**
 * Password validation rules configuration
 * Each rule defines a test function and display information for the checklist
 */

import { PasswordRule } from "../types/form";
import { VALIDATION_MESSAGES, PASSWORD_VALIDATION_RULES } from "./validationMessages";

export const passwordRules: PasswordRule[] = [
  {
    id: "minLength",
    label: VALIDATION_MESSAGES.password.minLength,
    test: PASSWORD_VALIDATION_RULES.minLength,
  },
  {
    id: "hasUppercase",
    label: VALIDATION_MESSAGES.password.hasUppercase,
    test: PASSWORD_VALIDATION_RULES.hasUppercase,
  },
  {
    id: "hasLowercase",
    label: VALIDATION_MESSAGES.password.hasLowercase,
    test: PASSWORD_VALIDATION_RULES.hasLowercase,
  },
  {
    id: "hasNumber",
    label: VALIDATION_MESSAGES.password.hasNumber,
    test: PASSWORD_VALIDATION_RULES.hasNumber,
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
