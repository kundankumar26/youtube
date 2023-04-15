import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { Link, useSearchParams } from "react-router-dom";
import SearchCardShimmer from "./SearchCardShimmer";
import usePageBottom from "../hooks/usePageBottom";
import { useDispatch } from "react-redux";
import { openSidebar } from "../utils/appSlice";

const SearchResult = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [params] = useSearchParams();
  const [nextPageToken, setNextPageToken] = useState("");
  const [isBottomReached, setIsBottomReached] = usePageBottom();
  const [loadingMore, setLoadingMore] = useState(false);
  const dispatch = useDispatch();

  const getSearchResults = async () => {
    setLoadingMore(true);
    const timer = setTimeout(async () => {
      const res = await fetch(
        YOUTUBE_SEARCH_API + params.get("q") + "&pageToken=" + nextPageToken
      );
      const json = await res.json();
      setNextPageToken(json.nextPageToken);
      setSearchResults([...searchResults, ...json.items]);
      setLoadingMore(false);
      clearTimeout(timer);
    }, 500);
  };

  useEffect(() => {
    if (!searchResults.length || (isBottomReached && nextPageToken)) {
      setIsBottomReached(true);
      getSearchResults();
    }
    dispatch(openSidebar());
  }, [isBottomReached]);

  return (
    <div>
      {searchResults?.map((searchResult) => (
        <Link
          to={"../watch?v=" + searchResult.id.videoId}
          key={searchResult.id.videoId}
        >
          <SearchCard {...searchResult} />
        </Link>
      ))}
      {loadingMore &&
        ["shimmerUi1", "shimmerUi2", "shimmerUi3", "shimmerUi4"].map((val) => (
          <SearchCardShimmer key={val} />
        ))}
    </div>
  );
};

export default SearchResult;
