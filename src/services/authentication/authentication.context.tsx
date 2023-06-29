import { FC, ReactNode, createContext, useState } from "react";
import { signInRequest, signUpRequest } from "./authentication.service";

export interface CurrentUser {
  fullname?: string;
  email?: string;
}

interface IAuthenticationContext {
  readonly isAuthenticated: boolean;
  readonly error: string;
  readonly currentUser: CurrentUser | null;
  readonly onSignUp: (
    fullname: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  readonly onSignIn: (email: string, password: string) => Promise<void>;
  readonly onSignOut: () => void;
}

interface IAuthenticationContextProvider {
  children: ReactNode;
}

export const AuthenticationContext = createContext<IAuthenticationContext>({
  isAuthenticated: false,
  error: "",
  currentUser: null,
  onSignUp: async () => undefined,
  onSignIn: async () => undefined,
  onSignOut: () => undefined,
});

export const AuthenticationContextProvider: FC<
  IAuthenticationContextProvider
> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [currentUser, setUserData] = useState<CurrentUser>({});

  const onSignUp = async (
    fullname: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Promise<void> => {
    if (password != confirmPassword) {
      setError("Password doesn't match!");
      return;
    }

    const signUpResponse = await signUpRequest(fullname, email, password);

    if (signUpResponse.status === "Failed") {
      setError(signUpResponse.message);
      return;
    }

    await setUserData(signUpResponse.user);
    await setIsAuthenticated(true);
  };

  const onSignIn = async (email: string, password: string): Promise<void> => {
    const signInResponse = await signInRequest(email, password);
    await setUserData(signInResponse.user);
    await setIsAuthenticated(true);
  };

  const onSignOut = () => {
    setUserData({});
    setIsAuthenticated(false);
    setError("");
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        error,
        currentUser,
        onSignUp,
        onSignIn,
        onSignOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
