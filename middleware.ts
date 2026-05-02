import { auth } from "@/app/features/auth/utils/next-auth.util";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();

  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");

  // não logado tentando acessar admin
  if (isAdminRoute && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // logado mas não admin (caso role exista depois)
  if (isAdminRoute && session?.user && (session.user as any).role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
