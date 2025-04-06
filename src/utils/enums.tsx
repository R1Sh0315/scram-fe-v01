// Define the base URL as a constant
export const BASEURL = import.meta.env.REACT_APP_BASE_URL || "http://localhost:3000/";

// Enum to hold the API endpoints
export enum SCRAMURLS {
  SIGNIN = "api/v1/signin",
  SIGNUP = "api/v1/signup",
}

// concatenate the BASEURL with the enum values as needed:
export const SIGNIN_URL = BASEURL + SCRAMURLS.SIGNIN;
export const SIGNUP_URL = BASEURL + SCRAMURLS.SIGNUP;
