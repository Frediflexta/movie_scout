import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [value, setValue] = useState("");

  return (
    <div className="search-bar">
      <form onSubmit={(e) => props.onSubmitSeries(e, value)}>
        <input
          type="text"
          placeholder="Search Tvseries..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
