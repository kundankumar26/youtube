import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { useSearchParams } from "react-router-dom";
import SearchCardShimmer from "./SearchCardShimmer";

const SearchResult = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [params] = useSearchParams();
  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + params.get("q"));
    const json = await data.json();
    setSearchResults(json.items);
  };
  useEffect(() => {
    getSearchResults();
  }, []);
  return (
    <div>
      {searchResults?.length
        ? searchResults.map((searchResult) => (
            <SearchCard key={searchResult.id.videoId} {...searchResult} />
          ))
        : ["shimmerUi1", "shimmerUi2", "shimmerUi3", "shimmerUi4"].map(
            (val) => <SearchCardShimmer key={val} />
          )}
    </div>
  );
};

export default SearchResult;
