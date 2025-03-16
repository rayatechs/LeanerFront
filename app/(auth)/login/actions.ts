"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(8).trim(),
});

type LoginResult = {
  success: boolean;
  error?: string;
};

export async function loginAction(
  formData: z.infer<typeof loginSchema>
): Promise<LoginResult> {
  const validatedFields = loginSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Invalid form data. Please check your inputs.",
    };
  }

  const { email: validatedEmail, password: validatedPassword } =
    validatedFields.data;

  try {
    const isValidUser =
      validatedEmail === "user@example.com" &&
      validatedPassword === "password123";

    if (!isValidUser) {
      return {
        success: false,
        error: "Invalid email or password. Please try again.",
      };
    }

    redirect("/dashboard");
  } catch (error) {
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
