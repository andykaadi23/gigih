import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  loginAuthorizeSpotify,
  getAccessTokenFromURL,
} from "../../authorization/authorization";

import { getProfile } from "../../authorization/spotify";

import { login, storeUserData } from "../../store/userSlice";

import { Flex, Heading, Text, Button } from "@chakra-ui/react";

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
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        background="gray.100"
        p={20}
        rounded={20}
        alignItems="center"
      >
        <Heading mb={6}>FIND MUSIC YOU LOVE.</Heading>
        <Text fontSize="md" mb={5}>
          Discover millions songs on Spotify.
        </Text>
        <Button
          onClick={loginAuthorizeSpotify}
          colorScheme="pink"
          variant="solid"
          width="200px"
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
}
