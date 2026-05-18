"use server";

import { AuthError } from "next-auth";
import { signIn } from "../utils";

type LoginState = {
  error?: string;
};

export async function loginAction(
  prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/admin/media",
    });

    return {};
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        error:
          error.type === "CredentialsSignin"
            ? "Email ou senha inválidos."
            : "Erro ao autenticar.",
      };
    }

    throw error;
  }
}
