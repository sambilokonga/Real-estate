import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "http://localhost:5000",
  issuerBaseURL: "https://dev-xhxubk4gcsi1ho58.us.auth0.com",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
