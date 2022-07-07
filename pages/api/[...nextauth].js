import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
export default NextAuth({
  providers: [
    KeycloakProvider({
      clientId: "sga-front",
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      accessTokenUrl: `${process.env.KEYCLOAK_BASE_URL}/token`,
      requestTokenUrl: `${process.env.KEYCLOAK_BASE_URL}/auth`,
      authorizationUrl: `${process.env.KEYCLOAK_BASE_URL}/auth?response_type=code`,
      profileUrl: `${process.env.KEYCLOAK_BASE_URL}/userinfo`,
      realm: "fm6",

    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.NEXT_AUTH_SECRET,
    expiresIn: "1d",
  },
});
