import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GOOGLE_SEARCH_API } from "../utils/constant";
import SuggestionDropdown from "./SuggestionDropdown";
import { cacheResults } from "../utils/cacheSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQuerySuggestions, setsearchQuerySuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.cacheSearchQuery.cache);

  const handleHamburger = () => {
    dispatch(toggleMenu());
  };
  const getSuggestions = async () => {
    const data = await fetch(GOOGLE_SEARCH_API + searchQuery);
    const json = await data.json();
    setsearchQuerySuggestions(json[1].slice(0, 10));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsearchQuerySuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
        dispatch(cacheResults({ [searchQuery]: searchQuerySuggestions }));
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col h-16 px-6 py-2 shadow-lg">
      <div className="col-span-1 flex items-center">
        <img
          onClick={() => handleHamburger()}
          className="h-6 cursor-pointer"
          alt="hamburger"
          src="https://static.thenounproject.com/png/3401904-200.png"
        />
        <a href="/">
          <img
            className="h-6 pl-8"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10">
        <div className="flex justify-center h-full">
          <input
            className="w-1/3 px-4 border rounded-l-full outline-none"
            type="text"
            placeholder="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="font-semibold border rounded-r-full bg-gray-100">
            <img
              className="h-5 mx-6"
              alt="search"
              src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
            />
          </button>
        </div>
        {
          <SuggestionDropdown
            props={{
              suggestions: searchQuerySuggestions,
              showSuggestions: showSuggestions,
              searchQuery: searchQuery,
            }}
          />
        }
      </div>
      <div className="col-span-1 justify-self-end">
        <img
          className="h-10 items-center"
          alt="profile"
          src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
        />
      </div>
    </div>
  );
};

export default Head;
