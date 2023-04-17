import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GOOGLE_SEARCH_API } from "../utils/constant";
import SuggestionDropdown from "./SuggestionDropdown";
import { cacheResults } from "../utils/cacheSlice";
import { useSearchParams } from "react-router-dom";

const Head = () => {
  const [params] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(params.get('q') ? params.get('q') : "");
  const [searchQueryValue, setSearchQueryValue] = useState("");
  const [searchQuerySuggestions, setsearchQuerySuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef(null);
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
    }, 200);
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowSuggestions(false);
      } else {
        setShowSuggestions(true);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col h-14 px-6 py-2 shadow-lg">
      <div className="col-span-1 flex items-center">
        <img
          onClick={handleHamburger}
          className="h-6 cursor-pointer"
          alt="hamburger"
          src="https://www.svgrepo.com/show/313139/hamburger-menu.svg"
        />
        <a href="/">
          <img
            className="h-5 pl-6 max-w-sm"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 max-sm:float-right">
        <div className="flex justify-center h-full">
          <input
            className="w-[38%] px-4 border rounded-l-full outline-none"
            type="text"
            value={searchQuery}
            placeholder="search"
            onChange={(e) => setSearchQuery(!!e.target.value.length ? e.target.value : searchQuery)}
            ref={ref}
          />
          <button className="font-semibold border rounded-r-full bg-gray-100">
            <img
              className="h-5 mx-6"
              alt="search"
              src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
            />
          </button>
        </div>
        {showSuggestions && !!searchQuerySuggestions.length && (
          <SuggestionDropdown
            props={{
              suggestions: searchQuerySuggestions,
              showSuggestions: showSuggestions
            }}
          />
        )}
      </div>
      <div className="col-span-1 justify-self-end max-sm:hidden">
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
