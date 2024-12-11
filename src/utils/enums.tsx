// Define the base URL as a constant
export const BASEURL = "https://trusting-dramatic-ampersand.vercel.app/api/v1/";

// Enum to hold the API endpoints
export enum SCRAMURLS {
  SIGNIN = "signin",
  SIGNUP = "signup",
}

// concatenate the BASEURL with the enum values as needed:
export const SIGNIN_URL = BASEURL + SCRAMURLS.SIGNIN;
export const SIGNUP_URL = BASEURL + SCRAMURLS.SIGNUP;
