export interface AuthPageProps {
  setSignupState: (state: boolean) => void;
}

export interface IUserCredentials {
  email: string;
  password: string;
}
