import React from "react";

const SearchCardShimmer = () => {
  return (
    <div className="m-8 flex">
      <div className="bg-gray-200 h-52 w-80 rounded-2xl border"></div>
      <div className="flex flex-col ml-4 mt-2 w-96">
        <span className="font-normal text-xl bg-gray-200 w-full h-8 rounded-3xl"></span>
        <div className="mt-4 my-2 bg-gray-200 w-1/3 h-6 rounded-3xl"></div>
        <div className="my-2 flex items-center bg-gray-200 w-[60%] h-6 rounded-3xl"></div>
        <span className="my-2 bg-gray-200 w-full h-6 rounded-3xl"></span>
        <span className="my-2 bg-gray-200 w-full h-6 rounded-3xl"></span>
      </div>
    </div>
  );
};

export default SearchCardShimmer;
