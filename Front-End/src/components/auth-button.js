import React from "react";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = (userValues) => {
  const { isAuthenticated } = useAuth0();
   
  // console.log(propValues)
  return isAuthenticated ? <LogoutButton  userValues ={ userValues.userValues.userValues } /> : <LoginButton />;
};

export default AuthenticationButton;
