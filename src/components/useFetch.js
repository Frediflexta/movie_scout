import { useState, useEffect } from "react";

const useFetch = (query) => {
  const [data, setData] = useState({
    name: "",
    seasons: [],
    summary: "",
    image: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const groupSeasons = (songList, key = "season") => {
    const groupedSeasonList = songList.reduce(function (ac, cv) {
      ac[cv[key]] = ac[cv[key]] || [];
      ac[cv[key]].push(cv);

      return ac;
    }, {});

    return groupedSeasonList;
  };

  useEffect(() => {
    fetch(
      `https://api.tvmaze.com/singlesearch/shows/?q=${query}&embed=episodes`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          const { name, image, summary } = result;
          const seasons = groupSeasons(result._embedded.episodes);
          setData({ name, image, seasons, summary });
        },
        (error) => {
          setIsLoading(true);
          setError(error);
        }
      );
  }, [query]);

  return [data, error, isLoading];
};

export default useFetch;
