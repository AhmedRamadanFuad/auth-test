import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      //   authorization: {
      //     params: {
      //       redirect_uri: process.env.NEXTAUTH_URL + "/api/auth/callback/google",
      //     },
      //   },
    }),
  ],
  session: {
    strategy: "database",
    maxAge: 1 * 24 * 60 * 60,
  },
});
