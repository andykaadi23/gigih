import React from "react";

import Button from "../button";
import SearchBarCSS from "./searchBar.module.css";

export default function SearchBar({ search, setSearch, searchHandle }) {
  return (
    <div className={SearchBarCSS.wrapper_search_bar}>
      <p>Find something</p>
      <input
        id="input-search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search..."
        type="text"
      />
      <Button onClick={searchHandle} type="button">
        Search
      </Button>
    </div>
  );
}
