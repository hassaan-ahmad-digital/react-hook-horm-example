/**
 * Type definitions for the signup form and field rendering system
 */

// Main form data structure
export interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Supported field types for the flexible field rendering system
export type FieldType = "text" | "email" | "password";

// Field configuration for the data-driven form structure
export interface FormField {
  name: keyof SignupFormData;
  label: string;
  type: FieldType;
  placeholder: string;
  required: boolean;
  validation?: {
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
    validate?: Record<
      string,
      (value: string, formValues: SignupFormData) => boolean | string
    >;
  };
}

// Password validation rules structure
export interface PasswordRule {
  id: string;
  label: string;
  test: (password: string) => boolean;
  icon?: string;
}

// Validation state for password checklist
export interface ValidationState {
  [ruleId: string]: boolean;
}

// Props for field components
export interface FieldProps {
  field: FormField;
  register: any; // React Hook Form register function
  error?: string;
  showPasswordToggle?: boolean;
  onTogglePasswordVisibility?: () => void;
  showPassword?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

// Props for password validation checklist
export interface PasswordChecklistProps {
  password: string;
  rules: PasswordRule[];
  isVisible: boolean;
  className?: string;
}

// Form submission result
export interface FormSubmissionResult {
  success: boolean;
  data?: SignupFormData;
  errors?: string[];
}
