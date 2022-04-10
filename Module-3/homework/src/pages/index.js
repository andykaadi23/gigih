import Landingpage from "./landingPage";
import CreatePlaylist from "./createPlaylist";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect } from "react";
import { setAccessToken } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const user_access_token = useSelector((state) => state.user.access_token);

  const getHashParams = () => {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    dispatch(setAccessToken(hashParams.access_token));
  };

  useEffect(() => {
    getHashParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/create-playlist">
          {user_access_token ? <CreatePlaylist /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/">
          {!user_access_token ? (
            <Landingpage />
          ) : (
            <Redirect to="/create-playlist" />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default Index;
