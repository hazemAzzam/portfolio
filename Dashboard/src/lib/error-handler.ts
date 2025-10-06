import { toast } from "sonner";

export interface ApiError {
  response?: {
    data?: unknown;
    status?: number;
  };
  message?: string;
}

/**
 * Global error handler for API responses
 * Handles Django validation errors and other API errors
 */
export function handleApiError(
  error: ApiError,
  defaultMessage: string = "An error occurred"
) {
  console.error("API Error:", error);

  if (error.response?.data) {
    const errorData = error.response.data;

    // Handle Django validation errors (object with field errors)
    if (typeof errorData === "object" && !Array.isArray(errorData)) {
      const errorMessages = Object.entries(errorData)
        .map(([field, errors]) => {
          const fieldName = field.charAt(0).toUpperCase() + field.slice(1);
          const errorText = Array.isArray(errors) ? errors.join(", ") : errors;
          return `${fieldName}: ${errorText}`;
        })
        .join("; ");

      toast.error(errorMessages);
      return errorMessages;
    }

    // Handle simple string errors
    if (typeof errorData === "string") {
      toast.error(errorData);
      return errorData;
    }

    // Handle array of errors
    if (Array.isArray(errorData)) {
      const errorText = errorData.join(", ");
      toast.error(errorText);
      return errorText;
    }
  }

  // Fallback to generic error message
  const errorMessage = error.message || defaultMessage;
  toast.error(errorMessage);
  return errorMessage;
}

/**
 * Format Django errors for display in forms
 */
export function formatDjangoErrors(error: ApiError): Record<string, string> {
  const fieldErrors: Record<string, string> = {};

  if (error.response?.data && typeof error.response.data === "object") {
    Object.entries(error.response.data).forEach(([field, errors]) => {
      if (Array.isArray(errors)) {
        fieldErrors[field] = errors.join(", ");
      } else {
        fieldErrors[field] = String(errors);
      }
    });
  }

  return fieldErrors;
}

/**
 * Get error message for a specific field
 */
export function getFieldError(
  error: ApiError,
  fieldName: string
): string | undefined {
  const fieldErrors = formatDjangoErrors(error);
  return fieldErrors[fieldName];
}
