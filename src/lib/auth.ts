import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/src/lib/prisma";
import bcrypt from "bcrypt";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Email/Passwort",
      credentials: { email: { label: "Email", type: "email" }, password: { label: "Passwort", type: "password" } },
      async authorize(creds) {
        if (!creds?.email || !creds?.password) return null;
        const user = await prisma.user.findUnique({ where: { email: creds.email } });
        if (!user) return null;
        const ok = await bcrypt.compare(creds.password, user.password);
        return ok ? { id: user.id, email: user.email } : null;
      }
    })
  ],
  session: { strategy: "jwt" }
};
export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);
