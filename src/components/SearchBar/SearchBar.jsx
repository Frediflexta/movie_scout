import React, { useState, Fragment } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [value, setValue] = useState("");

  return (
    <Fragment>
      <form
        className="search-bar"
        onSubmit={(e) => props.onSubmitSeries(e, value)}
      >
        <input
          type="text"
          placeholder="Search Tvseries..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </Fragment>
  );
};

export default SearchBar;
