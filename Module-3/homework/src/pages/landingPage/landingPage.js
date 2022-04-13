import React from "react";
import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  loginAuthorizeSpotify,
  getAccessTokenFromURL,
} from "../../authorization/authorization";

import { getProfile } from "../../authorization/spotify";

import { login, storeUserData } from "../../store/userSlice";

import landingPageCSS from "./landingPage.module.css";

export default function Landingpage() {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getAccessTokenFromURL(window.location.hash);
      dispatch(login(access_token));
      getProfile(access_token).then((data) => dispatch(storeUserData(data)));
      history.push("/create-playlist");
    }
  }, [dispatch, history]);

  return (
    <div className={landingPageCSS.wrapper}>
      <div className={landingPageCSS.banner}>
        <h1>Music Player</h1>
        <p>welcome</p>
        <button onClick={loginAuthorizeSpotify}>Login</button>
      </div>
    </div>
  );
}
