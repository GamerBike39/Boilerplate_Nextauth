declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & { id?: string };
  }
}
