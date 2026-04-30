import { auth } from "./next-auth";

export async function getSession() {
  return await auth();
}

// Autenticacao
export async function isAuthenticated() {
  const session = await getSession();
  return !!session?.user;
}

export async function requireAuth() {
  const ok = await isAuthenticated();

  if (!ok) {
    throw new Error("Unauthorized");
  }
}

// Perfil
export async function isAdmin() {
  const session = await getSession();
  const role = session?.user?.role;
  return role === "admin";
}

export async function requireAdmin() {
  const ok = await isAdmin();

  if (!ok) {
    throw new Error("Forbidden");
  }
}
