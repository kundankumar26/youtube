import React from "react";

const VideoCardShimmer = () => {
  return (
    <div className="m-2 mb-8 rounded-2xl w-[17rem]">
      <div className="h-44 w-full bg-gray-300 rounded-2xl"></div>
      <ul className="py-4">
        <li className="bg-gray-300 rounded-2xl w-full h-6 mb-3"></li>
        <li className="bg-gray-300 rounded-2xl w-[60%] h-6"></li>
      </ul>
    </div>
  );
};

export default VideoCardShimmer;
