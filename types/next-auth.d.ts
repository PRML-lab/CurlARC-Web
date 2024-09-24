import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    idToken?: string;
    backendAccessToken?: string;
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
