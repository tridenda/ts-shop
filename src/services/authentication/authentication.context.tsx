import { FC, ReactNode, createContext } from "react";

interface IAuthenticationContext {
  children: ReactNode;
}

export const AuthenticationContext = createContext(null);

export const AuthenticationContetProvider: FC<IAuthenticationContext> = ({
  children,
}) => {
  return (
    <AuthenticationContext.Provider value={null}>
      {children}
    </AuthenticationContext.Provider>
  );
};
