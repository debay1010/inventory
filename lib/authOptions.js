import CredentialsProviders from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "./db";
import { compare } from "bcrypt";

const authOptions = {
	adapter: PrismaAdapter(db),
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/login",
	},
	providers: [
		CredentialsProviders({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "jsmith@gmail.com",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				try {
					// check if user credentials are correct
					if (!credentials?.email || !credentials?.password) {
						console.log("No inputs");
						return null;
					}

					// check if user exists
					const existingUser = await db.user.findUnique({
						where: {
							email: credentials.email,
						},
					});

					if (!existingUser) {
						console.log("No user found");
						return;
					}

					// check if password is correct
					const passwordWatch = await compare(
						credentials.password,
						// existingUser.hashedPassword
						existingUser.password
					);

					if (!passwordWatch) {
						console.log("Password incorrect");
						return null;
					}

					const user = {
						id: existingUser.id,
						name: existingUser.name,
						email: existingUser.email,
					};
					console.log(user);
					return user;
				} catch (error) {
					console.log(error);
				}
			},
		}),
	],
	callbacks: {
		async session({ session, user, token }) {
			return session;
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			return token;
		},
	},
};

export { authOptions };
