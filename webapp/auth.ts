import NextAuth from "next-auth"
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],

    pages: {
        signIn: "/login"
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl) ? url : baseUrl
        },
    }
})