/**
 * Password validation checklist component with real-time feedback
 * Shows validation requirements with visual indicators (checkmarks/X marks)
 * Demonstrates how to integrate custom validation with React Hook Form
 */

import { Check, X } from "lucide-react";
import { validatePassword } from "../config/passwordRules";
import { PasswordChecklistProps } from "../types/form";

const PasswordChecklist: React.FC<PasswordChecklistProps> = ({
  password,
  rules,
  isVisible,
  className = "",
}) => {
  // Get validation state for all rules
  const validationState = validatePassword(password);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`
      bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2 
      animate-slide-down transition-all duration-300
      ${className}
    `}
    >
      <h4 className="text-sm font-medium text-gray-700 mb-3">
        Password Requirements:
      </h4>

      <div className="space-y-2">
        {rules.map((rule) => {
          const isValid = validationState[rule.id];

          return (
            <div
              key={rule.id}
              className={`
                flex items-center space-x-2 text-sm transition-all duration-200
                ${isValid ? "text-green-600" : "text-gray-500"}
              `}
            >
              {/* Validation Icon */}
              <div
                className={`
                flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center
                transition-all duration-200
                ${
                  isValid
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-400"
                }
              `}
              >
                {isValid ? (
                  <Check className="w-3 h-3" strokeWidth={3} />
                ) : (
                  <X className="w-3 h-3" strokeWidth={2} />
                )}
              </div>

              {/* Rule Label */}
              <span
                className={`
                transition-all duration-200
                ${isValid ? "font-medium" : "font-normal"}
              `}
              >
                {rule.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Overall Progress Indicator */}
      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Progress:</span>
          <span
            className={`
            font-medium transition-colors duration-200
            ${
              Object.values(validationState).every(Boolean)
                ? "text-green-600"
                : "text-gray-500"
            }
          `}
          >
            {Object.values(validationState).filter(Boolean).length} /{" "}
            {rules.length}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
          <div
            className={`
              h-1.5 rounded-full transition-all duration-300 ease-out
              ${
                Object.values(validationState).every(Boolean)
                  ? "bg-green-500"
                  : "bg-blue-500"
              }
            `}
            style={{
              width: `${
                (Object.values(validationState).filter(Boolean).length /
                  rules.length) *
                100
              }%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordChecklist;
