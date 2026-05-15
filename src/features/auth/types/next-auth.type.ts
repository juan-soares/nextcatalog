import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      nickname: string;
      avatar: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    nickname: string;
    avatar: string;
    role: string;
  }
}
