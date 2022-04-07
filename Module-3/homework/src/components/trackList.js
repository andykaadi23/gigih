import React from "react";

export default function TrackList(props) {
  return (
    <div className={Style.card}>
      <b>List URI</b>
      <ol>
        {props.tracksSelected.map((track) => (
          <li key={track}>{track}</li>
        ))}
      </ol>
    </div>
  );
}
