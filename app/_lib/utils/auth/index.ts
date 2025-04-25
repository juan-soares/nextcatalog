import { redirect } from "next/navigation";
import { getUserByCredentials } from "../../db/collections/user";
import { IUserOnInfo } from "../../interfaces";

export async function login(formFields: FormData) {
  "use server";

  const email = formFields.get("email")?.toString();
  const password = formFields.get("password")?.toString();

  if (!email || !password) return window.alert("Campos incompletos.");

  const userInfo: IUserOnInfo | null = await getUserByCredentials({
    email,
    password,
  });

  if (!userInfo) return console.log("Usuário ou senha incorretos.");

  redirect("/profile");
}

export function logout() {
  const confirm = window.confirm("Deseja realmente sair?");

  if (!confirm) return;
}
