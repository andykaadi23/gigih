const Track = ({ track }) => {
  const { name, artists, images } = track;
  const [getSelected, setSelected] = useState(false);
  const [getSelect, setSelect] = useState('Select');

  const handleToggle = () => {
    if (getSelected) {
      setSelect('Select');
    } else {
      setSelect('Deselect');
    }
    setSelected(!getSelected);
  };
  

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
      <button onClick={handleToggle}>{getSelect}</button>
    </>
  );
};

export default Track;
