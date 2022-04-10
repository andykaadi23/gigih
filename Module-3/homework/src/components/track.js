export default function Track(
  height,
  imgUrl,
  title,
  artistName,
  albumName,
  selected,
  onSelected,
  onDeselected
) {
  return (
    <div>
      <img height={height} url={imgUrl} alt={title} />
      <div>
        <h2 title="Title">{title}</h2>
        <h2 title="Artist">{artistName}</h2>
        <h2 tittle="Album">{albumName}</h2>
        <input
          type="submit"
          value={selected ? "Deselect" : "Select"}
          onClick={selected ? onDeselected : onSelected}
        />
      </div>
    </div>
  );
}
