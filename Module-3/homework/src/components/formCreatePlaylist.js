import React from "react";

export default function FormCreatePlaylist({
  createPlaylist,
  setCreatePlaylist,
  handleFormSubmit,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreatePlaylist({ ...createPlaylist, [name]: value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name </label>
      <input
        id="name"
        name="name"
        type="text"
        minLength="10"
        value={createPlaylist.name}
        onChange={handleChange}
        autoComplete="off"
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        minLength="20"
        value={createPlaylist.description}
        onChange={handleChange}
        rows="10"
        cols="50"
        autoComplete="off"
      ></textarea>
      <button type="submit">Create New Playlist</button>
    </form>
  );
}
