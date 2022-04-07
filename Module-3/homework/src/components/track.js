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
    <div className={Style.trackcard}>
      <img height={height} url={imgUrl} />
      <div className={Style.trackinfo}>
        <h2 title="Title" value={title} />
        <h2 title="Artist" value={artistName} />
        <h2 tittle="Album" value={albumName} />
        <button
          className={Style.button}
          value={selected ? "Deselect" : "Select"}
          onClick={selected ? onDeselected : onSelected}
        />
      </div>
    </div>
  );
}
