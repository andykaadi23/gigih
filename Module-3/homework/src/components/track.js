const Track = ({ track }) => {
  const { name, artists, images } = track;

  return (
    <>
      <img src={images[1].url} alt={name} />
      <h2>{name}</h2>
      <p>
        {artists[0].name}
        {artists.length > 0 ? (
          artists.slice(1).map((artist) => {
            return <span key={artist.id}>, {artist.name}</span>;
          })
        ) : (
          <span>{artists[0].name}</span>
        )}
      </p>
    </>
  );
};

export default Track;
