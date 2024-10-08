import { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { login } from '@/service/api/auth';
import { loginSchema } from '@/app/(DefaultLayout)/auth/schema/loginSchema';

export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = loginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          try {
            const user = await login({ email, password });

            if (user) {
              return {
                id: user.id.toString(),
                name: user.name,
                image: user.profileImageUrl,
                email: user.email,
                accessToken: user.accessToken
              };
            }
          } catch (error) {
            console.error('Authorization error:', error);
            if (error instanceof Error) {
              throw new Error(error.message);
            }
          }
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  }
} satisfies NextAuthConfig;
