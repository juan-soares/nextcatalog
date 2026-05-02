import { redirect } from "next/navigation";
import { signIn } from "../utils";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    redirect("/admin/media");
  } catch (error) {
    throw new Error("Login inválido");
  }
}
