import React from "react";

const SearchCard = ({ snippet, id }) => {
  return (
    <div className="m-8 flex">
      <div className="overflow-hidden bg-gray-100 h-52 rounded-2xl border flex items-center">
        <img className="h-full" alt="search img" src={snippet?.thumbnails?.medium?.url} />
      </div>
      <div className="flex flex-col ml-4 mt-2">
        <span className="font-normal text-xl">{snippet?.title}</span>
        <div className="text-xs my-2">1M views {snippet?.publishedAt}</div>
        <div className="text-sm my-2 flex items-center">
          <img
            className="bg-gray-100 h-6 w-6 rounded-full border mr-2"
            alt="search card img"
            src={null}
          />
          <span>{snippet?.channelTitle}</span>
        </div>
        <span className="text-sm my-2">{snippet?.description}</span>
      </div>
    </div>
  );
};

export default SearchCard;
