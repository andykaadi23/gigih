import { useState } from 'react';
import axios from 'axios';
import Track from './track';

const Search = (token) => {
  const [getText, setText] = useState('');
  const [getAlbum, setAlbum] = useState([]);

  const searchChange = (e) => setText(e.target.value);

  const getApi = () => {
    if (!getText) {
      return;
    }
    axios
      .get(`https://api.spotify.com/v1/search?q=${getText}&type=track`, {
        headers: {
          Authorization: 'Bearer ' + { token },
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
      <input type="text" onChange={searchChange} />
      <button onClick={getApi}>Search</button>

      {getAlbum &&
        getAlbum.map((album) => {
          return <Track track={album} key={album.id} />;
        })}
    </>
  );
};

export default Search;
