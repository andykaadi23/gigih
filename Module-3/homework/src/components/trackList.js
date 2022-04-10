import React from "react";

export default function TrackList(props) {
  return (
    <div>
      <b>List URI</b>
      <ol>
        {props.tracksSelected.map((track) => (
          <li key={track}>{track}</li>
        ))}
      </ol>
    </div>
  );
}
