import { useState, useRef } from "react";
import axios from "axios";
import Track from "./track";
import Container from "./container";

const Search = (token) => {
  const [getText, setText] = useState("");
  const [getAlbum, setAlbum] = useState([]);
  const [playlist, setPlaylist] = useState({
    modal: false,
    playlists: {
      favorites: new Set(),
    },
  });

  const playlistRef = useRef(null);
  const playlists = Object.keys(playlist.playlists);

  const addPlaylist = (e) => {
    e.preventDefault();
    const list = playlistRef.current.value;

    setPlaylist({
      ...playlist,
      container: false,
      playlists: { ...playlist.playlists, [list]: new Set() },
      message: "Your playlist was created successfully!",
    });
  };

  const searchChange = (e) => setText(e.target.value);

  const getApi = () => {
    if (!getText) {
      return;
    }
    axios
      .get(`https://api.spotify.com/v1/search?q=${getText}&type=track`, {
        headers: {
          Authorization: "Bearer " + { token },
        },
      })
      .then((response) => {
        setAlbum(response.data.albums.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <ul>
          <li>
            {playlists.map((list) => (
              <li
                key={list}
                name={list === playlist.currentPlaylist ? "active" : ""}
                onClick={() => {
                  setPlaylist({ ...playlist, currentPlaylist: list });
                }}
              >
                {list}
              </li>
            ))}
          </li>
        </ul>
      </div>

      <div>
        <button
          onClick={() => {
            setPlaylist({ ...playlist, container: true });
          }}
        >
          <span>Create New Playlist</span>
        </button>
        <Container
          show={playlist.modal}
          close={() => {
            setPlaylist({ ...playlist, container: false });
          }}
        >
          <form onSubmit={addPlaylist}>
            <div>New Playlist</div>

            <div>
              <input
                type="text"
                placeholder="Playlist"
                ref={playlistRef}
                required
              />
              <br />
              <button type="submit">Create</button>
            </div>
          </form>
        </Container>
      </div>

      <div>
        <input type="text" onChange={searchChange} />
        <button onClick={getApi}>Search</button>

        {getAlbum &&
          getAlbum.map((album) => {
            return <Track track={album} key={album.id} />;
          })}
      </div>
    </>
  );
};

export default Search;
