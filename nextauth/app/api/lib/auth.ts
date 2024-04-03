import CredentialsProvider from 'next-auth/providers/credentials';

export const Next_Auth = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'text', placeholder: 'Email' },
                password: { label: 'password', type: 'password', placeholder: 'Password' },
            },
            async authorize(credentials: any) {

                return {
                    id: "user1",
                    name: "user1",
                    email: "user1@gmail.com",
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        //     jwt: ({ token, user }) => {
        //         // console.log(token);
        //         return token;
        //     },
        session: ({ session, token, user }: any) => {
            session.user.id = token.sub
            return session
        }
    }
}