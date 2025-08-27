/**
 * Main signup form component demonstrating advanced React Hook Form usage
 * Features: data-driven field rendering, real-time validation, password checklist
 * This component showcases best practices for form state management and validation
 */

import { Loader2, UserPlus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { formFields } from "../config/formFields";
import { passwordRules } from "../config/passwordRules";
import { SignupFormData } from "../types/form";
import FormField from "./FormField";
import PasswordChecklist from "./PasswordChecklist";

const SignupForm: React.FC = () => {
  // React Hook Form setup with TypeScript typing
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<SignupFormData>({
    mode: "onChange", // Validate on change for real-time feedback
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    criteriaMode: "all",
  });

  console.log("errors", errors);

  // State for password visibility and checklist
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordChecklist, setShowPasswordChecklist] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Watch password field for real-time validation
  const passwordValue = watch("password", "");

  /**
   * Form submission handler
   * Demonstrates proper form data handling and error management
   */
  const onSubmit = async (data: SignupFormData) => {
    try {
      console.log("Form submitted successfully!", data);
      console.log("Validation state:", {
        isValid,
        errors: Object.keys(errors),
        passwordLength: data.password.length,
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success state
      setIsSubmitted(true);

      // Reset form after showing success
      setTimeout(() => {
        reset();
        setIsSubmitted(false);
        setShowPasswordChecklist(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  /**
   * Handle password field focus - show validation checklist
   */
  const handlePasswordFocus = () => {
    setShowPasswordChecklist(true);
  };

  /**
   * Handle password field blur - hide checklist if empty
   */
  const handlePasswordBlur = () => {
    if (!passwordValue) {
      setShowPasswordChecklist(false);
    }
  };

  // Show success message after submission
  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <UserPlus className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Account Created Successfully!
          </h2>
          <p className="text-gray-600">
            Your account has been created. Redirecting...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
      {/* Form Header */}
      <div className="text-center mb-8">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
          <UserPlus className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Create Your Account
        </h2>
        <p className="text-gray-600">Fill in your details to get started</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Render fields dynamically from configuration */}
        {formFields.map((field) => (
          <div key={field.name}>
            <FormField
              field={field}
              register={register}
              error={errors[field.name]?.message}
              showPasswordToggle={field.type === "password"}
              onTogglePasswordVisibility={
                field.name === "password"
                  ? () => setShowPassword(!showPassword)
                  : field.name === "confirmPassword"
                  ? () => setShowConfirmPassword(!showConfirmPassword)
                  : undefined
              }
              showPassword={
                field.name === "password"
                  ? showPassword
                  : field.name === "confirmPassword"
                  ? showConfirmPassword
                  : false
              }
              onFocus={
                field.name === "password" ? handlePasswordFocus : undefined
              }
              onBlur={
                field.name === "password" ? handlePasswordBlur : undefined
              }
            />

            {/* Show password checklist for password field */}
            {field.name === "password" && (
              <div className="mt-3">
                <PasswordChecklist
                  password={passwordValue}
                  rules={passwordRules}
                  isVisible={showPasswordChecklist}
                  errors={errors.password}
                />
              </div>
            )}
          </div>
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className={`
            w-full flex justify-center items-center px-4 py-3 rounded-lg font-medium
            transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
            ${
              isSubmitting || !isValid
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800"
            }
          `}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Creating Account...
            </>
          ) : (
            <>
              <UserPlus className="h-5 w-5 mr-2" />
              Create Account
            </>
          )}
        </button>

        {/* Form State Debug Info (for development) */}
        {import.meta.env.NODE_ENV === "development" && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-xs">
            <h4 className="font-medium mb-2">Debug Info:</h4>
            <div className="space-y-1">
              <p>Form Valid: {isValid ? "✅" : "❌"}</p>
              <p>Errors: {Object.keys(errors).length}</p>
              <p>Password Length: {passwordValue.length}</p>
              <p>Checklist Visible: {showPasswordChecklist ? "✅" : "❌"}</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignupForm;
