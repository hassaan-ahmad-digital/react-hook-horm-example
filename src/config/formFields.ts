/**
 * Form field configuration - demonstrates data-driven form structure
 * This approach makes it easy to add/remove fields and modify validation rules
 */

import { FormField, SignupFormData } from "../types/form";
import { VALIDATION_MESSAGES, PASSWORD_VALIDATION_RULES } from "./validationMessages";

export const formFields: FormField[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    required: true,
          validation: {
        minLength: {
          value: 2,
          message: `First name ${VALIDATION_MESSAGES.general.minName}`,
        },
      },
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    required: true,
          validation: {
        minLength: {
          value: 2,
          message: `Last name ${VALIDATION_MESSAGES.general.minName}`,
        },
      },
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email address",
    required: true,
          validation: {
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: VALIDATION_MESSAGES.general.email,
        },
      },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Create a strong password",
    required: true,
    validation: {
      validate: {
        minLength: (value: string) =>
          PASSWORD_VALIDATION_RULES.minLength(value) || VALIDATION_MESSAGES.password.minLength,
        hasUppercase: (value: string) =>
          PASSWORD_VALIDATION_RULES.hasUppercase(value) || VALIDATION_MESSAGES.password.hasUppercase,
        hasLowercase: (value: string) =>
          PASSWORD_VALIDATION_RULES.hasLowercase(value) || VALIDATION_MESSAGES.password.hasLowercase,
        hasNumber: (value: string) =>
          PASSWORD_VALIDATION_RULES.hasNumber(value) || VALIDATION_MESSAGES.password.hasNumber,
      },
    },
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
    required: true,
          validation: {
        validate: {
          matchesPassword: (value: string, formValues: SignupFormData) =>
            value === formValues.password || VALIDATION_MESSAGES.general.passwordMatch,
        },
      },
  },
];
