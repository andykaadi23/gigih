import { useState, useEffect } from "react";
import {
  client_id,
  scope,
  redirect_uri,
  authUrl,
} from "../authorization/authorization";
import Search from "./search";

const Login = () => {
  const [token, setToken] = useState();
  const link = `${authUrl}&client_id=${client_id}&scope=${encodeURIComponent(
    scope
  )}&redirect_uri=${encodeURIComponent(redirect_uri)}`;

  useEffect(() => {
    const params = getParams(null);
    const token = params.get("access_token");

    if (token) {
      setToken(token);
    }
  }, []);

  const getParams = () => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params;
  };

  return (
    <>{token === null ? <a href={link}>Login</a> : <Search token={token} />}</>
  );
};

export default Login;
