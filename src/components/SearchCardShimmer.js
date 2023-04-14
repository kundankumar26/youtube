import React from "react";

const SearchCardShimmer = () => {
  return (
    <div className="m-8 flex">
      <div className="bg-gray-200 h-56 w-96 rounded-2xl border"></div>
      <div className="flex flex-col ml-4 mt-2 w-96">
        <span className="font-normal text-xl bg-gray-200 w-full h-8 rounded-3xl"></span>
        <div className="text-sm mt-4 my-2 bg-gray-200 w-1/3 h-6 rounded-3xl"></div>
        <div className="text-sm my-2 flex items-center bg-gray-200 w-[60%] h-6 rounded-3xl"></div>
        <span className="text-sm my-2 bg-gray-200 w-full h-6 rounded-3xl"></span>
        <span className="text-sm my-2 bg-gray-200 w-full h-6 rounded-3xl"></span>
      </div>
    </div>
  );
};

export default SearchCardShimmer;
