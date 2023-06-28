import { FC, ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../services/authentication/authentication.context";

interface IRequireAuth {
  children: ReactNode;
}

const RequireAuth: FC<IRequireAuth> = ({ children }) => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};

export default RequireAuth;
