import React from "react";

export default function AddPlaylist(props) {
  return (
    <div>
      <form onSubmit={props.handleOnSubmit}>
        <div>
          <label>Judul</label>
          <input value={props.data.title} onChange={props.handleOnChange} />
        </div>
        <div>
          <label>Deskripsi</label>
          <textarea
            value={props.data.description}
            onChange={props.handleOnChange}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
