/**
 * Form field configuration - demonstrates data-driven form structure
 * This approach makes it easy to add/remove fields and modify validation rules
 */

import { FormField, SignupFormData } from "../types/form";

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
        message: "First name must be at least 2 characters",
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
        message: "Last name must be at least 2 characters",
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
        message: "Please enter a valid email address",
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
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
      },
      validate: {
        hasUppercase: (value: string) =>
          /[A-Z]/.test(value) ||
          "Password must contain at least one uppercase letter",
        hasLowercase: (value: string) =>
          /[a-z]/.test(value) ||
          "Password must contain at least one lowercase letter",
        hasNumber: (value: string) =>
          /\d/.test(value) || "Password must contain at least one number",
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
          value === formValues.password || "Passwords do not match",
      },
    },
  },
];
