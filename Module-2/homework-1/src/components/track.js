import React from 'react';

const Track = ({ track }) => {
  const { name, artists, album } = track;

  return (
    <>
      <div class="music">
        <img src={album.images[0].url} alt={name} />
        <h2>{artists[0].name}</h2>
        <p>{name}</p>
        <button>Select</button>
      </div>
    </>
  );
};

export default Track;
