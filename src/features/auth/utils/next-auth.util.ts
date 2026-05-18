import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import { UserModel } from "../models";
import { connectMongoDB } from "@/infra/database/mongodb";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        await connectMongoDB();

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const email = credentials?.email as string;
        const password = credentials?.password as string;

        const user = await UserModel.findOne({ email });

        if (!user) return null;

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) return null;

        return {
          id: user._id.toString(),
          name: user.nickname,
          email: user.email,
          image: user.avatar,

          nickname: user.nickname,
          avatar: user.avatar,
          role: user.role,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.nickname = user.nickname;
        token.avatar = user.avatar;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.nickname = token.nickname as string;
        session.user.avatar = token.avatar as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
});
