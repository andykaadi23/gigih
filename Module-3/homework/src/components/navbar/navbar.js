import React from "react";
import navbarCSS from "./navbar.module.css";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { logout } from "../../../redux/userSlice";

export default function Navbar() {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div className={navbarCSS.wrapper_navbar}>
      <div className={navbarCSS.logo}>
        <h2>Spotify</h2>
      </div>
      <div className={navbarCSS.menus}>
        <button className={navbarCSS.menu}>Search</button>
        <button className={navbarCSS.menu}>Create Playlist</button>
        <button onClick={handleLogoutClick} className={navbarCSS.menu}>
          Logout
        </button>
      </div>
    </div>
  );
}
