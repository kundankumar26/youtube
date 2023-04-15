import React from "react";
import searchIcon from "../assets/search.png";
import { Link } from "react-router-dom";

const ListItem = ({ suggestion }) => {
  return (
    <li
      className="flex px-6 py-2 font-medium hover:bg-gray-200"
      onClick={() => console.log(suggestion)}
    >
      <img className="h-4 self-center mr-4" alt="search" src={searchIcon} />
      <Link to={"search?q=" + suggestion}>{suggestion}</Link>
    </li>
  );
};

const SuggestionDropdown = ({ props }) => {
  const suggestions = props.suggestions,
    showSuggestions = props.showSuggestions,
    searchQuery = props.searchQuery;
  // console.log(searchCache[searchQuery]);
  return (
    <div
      className="flex justify-center"
      style={{ visibility: !showSuggestions ? "hidden" : "visible" }}
    >
      {
        <ul className="absolute cursor-default border-2 shadow-lg bg-slate-50 mt-2 w-[34rem] rounded-lg">
          {suggestions.map((suggestion) => (
            <ListItem suggestion={suggestion} key={suggestion} />
          ))}
        </ul>
      }
    </div>
  );
};

export default SuggestionDropdown;
