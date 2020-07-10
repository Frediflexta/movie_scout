import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Header from "../Header/Header";
import SeasonCard from "../Card/SeasonCard";
import useFetch from "../useFetch";
import "./App.css";

const App = () => {
  const [queryString, setQueryString] = useState("");
  const [display, setDisplay] = useState("seasons");

  const [data, error, isLoading] = useFetch(queryString);

  const onSubmitSeries = (e, value) => {
    e.preventDefault();

    setDisplay("seasons");
    setQueryString(value);
  };

  if (!isLoading) {
    return <div>Loading...</div>;
  }

  const cursorStyle = {
    cursor: "pointer",
  };

  return (
    <div className="app-container">
      <Header />
      <SearchBar onSubmitSeries={onSubmitSeries} />
      {display === "seasons" && data && data.name ? (
        <div className="card-container" style={cursorStyle}>
          {data &&
            Object.values(data.seasons).map((_, index) => (
              <div key={index} className="wrapper-card">
                <SeasonCard
                  image={data.image}
                  onClick={() => setDisplay(parseInt(index) + 1)}
                  name={data.name + " Season " + (parseInt(index) + 1)}
                />
              </div>
            ))}
        </div>
      ) : (
        <div className="card-container">
          {display !== "seasons" &&
            data &&
            data.seasons[display].map((episodes, index) => (
              <div key={index} className="wrapper-card">
                {console.log(episodes)}
                <SeasonCard
                  image={data.image}
                  onClick={() => {}}
                  name={`Episode ${episodes.number} - ${episodes.name}`}
                  // summary={episodes.summary}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default App;
