import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';


export default NextAuth({
   secret: process.env.SECRET,
   providers: [
      // OAuth authentication providers
      
      GoogleProvider({
         clientId: process.env.GOOGLE_ID,
         clientSecret: process.env.GOOGLE_SECRET,
      }),
      GitHubProvider({
         clientId: process.env.GITHUB_CLIENT_ID,
         clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
   ],
});


// Authorization Callback url: http://localhost:3000/api/auth/callback/github