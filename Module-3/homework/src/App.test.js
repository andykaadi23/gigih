import React from "react";
import { render, screen } from "@testing-library/react";
import TrackItem from "./components/Track/track";
import convertMusicDuration from "./services/convertMusicDuration";
import convertTrackTitle from "./services/convertTrackTitle";

const fakeTrack = {
  album: {
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/07c323340e03e25a8e5dd5b9a8ec72b69c50089d",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/8b662d81966a0ec40dc10563807696a8479cd48b",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/54b3222c8aaa77890d1ac37b3aaaa1fc9ba630ae",
        width: 64,
      },
    ],
    release_date: "23-02-2018",
  },
  artists: [
    {
      name: "Cyndi Lauper",
    },
  ],

  duration_ms: 310350,
  id: "3f9zqUnrnIq0LANhmnaF0V",
  name: "Money Changes Everything",
  uri: "spotify:track:3f9zqUnrnIq0LANhmnaF0V",
};

const SelectedTracks = [];
// eslint-disable-next-line no-undef
test("all track element are rendered", () => {
  render(
    <TrackItem
      track={fakeTrack}
      selectedTracks={
        SelectedTracks.includes(fakeTrack.uri) ? "Deselect" : "Select"
      }
    />
  );

  const artistName = screen.getByTestId("track-artist");
  const trackName = screen.getByTestId("track-name");
  const duration = screen.getByTestId("track-duration");
  const releseDate = screen.getByTestId("track-date");

  expect(artistName).toHaveTextContent(fakeTrack.artists[0].name);
  expect(trackName).toHaveTextContent(convertTrackTitle(fakeTrack.name));
  expect(duration).toHaveTextContent(
    convertMusicDuration(fakeTrack.duration_ms)
  );
  expect(releseDate).toHaveTextContent(
    convertTrackTitle(fakeTrack.album.release_date)
  );
});
