import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ component: Component, ...rest }) {
  const isLogin = useSelector((state) => state.user.isAuthenticated);
  console.log(isLogin);
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          isLogin === true ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </div>
  );
}
