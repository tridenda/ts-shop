import { FC, ReactNode, createContext, useState } from "react";
import { signUpRequest } from "./authentication.service";

export interface CurrentUser {
  fullname?: string;
  email?: string;
}

interface IAuthenticationContext {
  readonly isAuthenticated: boolean;
  readonly currentUser: CurrentUser | null;
  readonly onSignUp: (
    fullname: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
}

interface IAuthenticationContextProvider {
  children: ReactNode;
}

export const AuthenticationContext = createContext<IAuthenticationContext>({
  isAuthenticated: false,
  currentUser: null,
  onSignUp: async () => undefined,
});

export const AuthenticationContextProvider: FC<
  IAuthenticationContextProvider
> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setUserData] = useState<CurrentUser>({});

  const onSignUp = async (
    fullname: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Promise<void> => {
    const signUpResponse = await signUpRequest(fullname, email, password);
    await setUserData(signUpResponse.user);
    await setIsAuthenticated(true);
  };

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, currentUser, onSignUp }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
