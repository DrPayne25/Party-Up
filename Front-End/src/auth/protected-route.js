import React from "react";
import { Route, Navigate } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/loading";

//               old code
// const ProtectedRoute = ({ component, ...args }) => (
//   <Route
//     component={withAuthenticationRequired(component, {
//       onRedirecting: () => <Loading />,
//     })}
//     {...args}
//   />
// );

const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
