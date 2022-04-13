import React from "react";
import trackCSS from "./track.module.css";

export default function Track(track, id, selectedTracks, setSelectedTracks) {
  const handleButtonSelect = (e) => {
    let uri = e.target.value;
    if (selectedTracks.includes(uri)) {
      let newPlaylist = selectedTracks.filter((track) => track !== uri);
      setSelectedTracks(newPlaylist);
    } else {
      setSelectedTracks([...selectedTracks, uri]);
    }
  };

  const convertDuration = (duration) => {
    let minutes = Math.floor(duration / 60000);
    let seconds = ((duration % 60000) / 1000).toFixed(0);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={trackCSS.wrapper_track_list}>
      <div className={trackCSS.track - number}>
        <p>{id + 1}</p>
      </div>
      <div className={trackCSS.track_image}>
        <img src={track.album?.images[2].url} alt={track.name} />
      </div>
      <div className={trackCSS.track_title}>
        <p>{track?.name}</p>
      </div>
      <div className={trackCSS.track_artist}>
        <p>{track.artists[0]?.name}</p>
      </div>

      <div className={trackCSS.track_duration}>
        {convertDuration(track?.duration_ms)}
      </div>
      <div className={trackCSS.track_action}>
        <button
          onClick={(e) => handleButtonSelect(e)}
          value={track?.uri}
          className={trackCSS.btn_select}
        >
          {selectedTracks.includes(track?.uri) ? "Deselect" : "Select"}
        </button>
      </div>
    </div>
  );
}
