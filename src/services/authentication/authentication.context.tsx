import { FC, ReactNode, createContext, useState } from "react";
import { signUpRequest } from "./authentication.service";

export interface CurrentUser {
  fullname?: string;
  email?: string;
}

interface IAuthenticationContext {
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
  currentUser: null,
  onSignUp: async () => undefined,
});

export const AuthenticationContextProvider: FC<
  IAuthenticationContextProvider
> = ({ children }) => {
  const [currentUser, setUserData] = useState<CurrentUser>({});

  const onSignUp = async (
    fullname: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    const signUpResponse = await signUpRequest(fullname, email, password);
    console.log("ini new user: ", signUpResponse.user);
    await setUserData(signUpResponse.user);
  };

  return (
    <AuthenticationContext.Provider value={{ currentUser, onSignUp }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
