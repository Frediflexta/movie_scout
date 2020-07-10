import React, { useState, Fragment } from "react";
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

    setQueryString(value);
  };

  if (!isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
  }

  return (
    <div className="app-container">
      <Header />
      <SearchBar onSubmitSeries={onSubmitSeries} />
      {display === "seasons" && data && data.name ? (
        <Fragment>
          {data &&
            Object.values(data.seasons).map((_, index) => (
              <Fragment key={index}>
                <SeasonCard
                  // index={() => setIndex(parseInt(index) + 1)}
                  image={data.image}
                  onClick={() => setDisplay(parseInt(index) + 1)}
                  name={data.name + " Season " + (parseInt(index) + 1)}
                />
              </Fragment>
            ))}
        </Fragment>
      ) : (
        <>
          {display !== "seasons" &&
            data &&
            data.seasons[display].map((episodes, index) => (
              <Fragment key={index}>
                {console.log(episodes)}
                <SeasonCard
                  image={data.image}
                  onClick={() => {}}
                  name={`Episode ${episodes.number} - ${episodes.name}`}
                  summary={episodes.summary}
                />
              </Fragment>
            ))}
        </>
      )}
    </div>
  );
};

export default App;
