/**
 * Flexible field rendering component that can handle different field types
 * This component demonstrates how to create reusable form fields with React Hook Form
 */

import { Eye, EyeOff } from "lucide-react";
import { FieldProps } from "../types/form";

const FormField: React.FC<FieldProps> = ({
  field,
  register,
  error,
  showPasswordToggle = false,
  onTogglePasswordVisibility,
  showPassword = false,
  onFocus,
  onBlur,
}) => {
  // Build validation object for React Hook Form
  const validationRules: any = {};

  if (field.required) {
    validationRules.required = `${field.label} is required`;
  }

  if (field.validation?.minLength) {
    validationRules.minLength = field.validation.minLength;
  }

  if (field.validation?.pattern) {
    validationRules.pattern = field.validation.pattern;
  }

  if (field.validation?.validate) {
    validationRules.validate = field.validation.validate;
  }

  // Determine the actual input type (for password visibility toggle)
  const inputType =
    field.type === "password" && showPassword ? "text" : field.type;

  return (
    <div className="space-y-2">
      {/* Field Label */}
      <label
        htmlFor={field.name}
        className="block text-sm font-medium text-gray-700"
      >
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Input Field Container */}
      <div className="relative">
        <input
          id={field.name}
          type={inputType}
          placeholder={field.placeholder}
          className={`
            w-full px-4 py-3 border rounded-lg transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${
              error
                ? "border-red-300 bg-red-50 focus:ring-red-500"
                : "border-gray-300 focus:border-blue-500"
            }
            ${field.type === "password" ? "pr-12" : ""}
          `}
          {...register(field.name, validationRules)}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {/* Password Visibility Toggle */}
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-sm text-red-600 animate-fade-in">{error}</p>}
    </div>
  );
};

export default FormField;
