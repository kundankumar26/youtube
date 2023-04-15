import React from "react";
import searchIcon from "../assets/search.png";
import { Link } from "react-router-dom";

const ListItem = ({ suggestion }) => {
  return (
    <li className="flex px-6 py-2 font-medium hover:bg-gray-200">
      <img className="h-4 self-center mr-4" alt="search" src={searchIcon} />
      {suggestion}
    </li>
  );
};

const SuggestionDropdown = ({ props }) => {
  const suggestions = props.suggestions,
    setSearchQuery = props.setSearchQuery;

  return (
    <div className="flex justify-center">
      {
        <ul className="absolute cursor-default border-2 shadow-lg bg-slate-50 mt-2 w-[34rem] rounded-lg">
          {suggestions.map((suggestion) => (
            <Link to={"search?q=" + suggestion} key={suggestion}>
              <ListItem suggestion={suggestion} />
            </Link>
          ))}
        </ul>
      }
    </div>
  );
};

export default SuggestionDropdown;
