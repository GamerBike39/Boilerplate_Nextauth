// @ts-nocheck
import EmailProvider from "next-auth/providers/email";
import { prisma } from "@/src/lib/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Email from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";

const emailServer = process.env.EMAIL_SERVER;
const emailFrom = process.env.EMAIL_FROM;
const githubClientId = process.env.GITHUB_ID;
const githubClientSecret = process.env.GITHUB_SECRET;

if (
  !githubClientId ||
  !githubClientSecret ||
  !process.env.GOOGLE_ID ||
  !process.env.GOOGLE_SECRET ||
  !emailServer ||
  !emailFrom
) {
  throw new Error("Missing GITHUB_ID and GITHUB_SECRET env variables");
}

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    EmailProvider({
      server: emailServer,
      from: emailFrom,
    }),
  ],
  callbacks: {
    session({ session, user }: { session: any; user: any }) {
      if (!session.user) return session;
      session.user.id = user.id;
      return session;
    },
  },
} satisfies AuthOptions;

export default NextAuth(authOptions);
