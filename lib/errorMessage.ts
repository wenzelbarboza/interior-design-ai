import { ZodError } from "zod";

export const getErrorMessage = (error: unknown, fallback: string) => {
  if (error instanceof ZodError) {
    // Join all validation error messages
    return error.errors.map((err) => err.message).join(", ");
  }

  return error && typeof error === "object" && "message" in error
    ? String((error as Error).message)
    : fallback;
};
