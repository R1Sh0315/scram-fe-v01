import { SIGNIN_URL } from "../utils/enums";
import { IUserCredentials } from "../utils/interface";

export const signinService = async (userDetails: IUserCredentials) => {
  try {
    const response = await fetch(SIGNIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Error response:", error);
      return null;
    }

    const data = await response.json();
    console.log("Response Data:", { ...data, loading: false });
    storeTokenWithExpiration(data.token);
    localStorage.setItem("authToken", data.token);
    return { ...data, loading: false };
  } catch (error) {
    console.error("Error occurred while making the request:", error); // Log any unexpected errors
    return null;
  }
};

const storeTokenWithExpiration = (token: string, expirationMinutes = 60) => {
  const expirationTime = new Date().getTime() + expirationMinutes * 60 * 1000; // Expiration time in milliseconds
  const tokenData = {
    token,
    expirationTime,
  };
  sessionStorage.setItem("authToken", JSON.stringify(tokenData));
};
