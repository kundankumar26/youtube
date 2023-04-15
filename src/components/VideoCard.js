import React from "react";

const VideoCard = ({ item, isAdCard }) => {
  const data = item.snippet;
  const stats = item.statistics;
  return (
    <div className="m-2 mb-8 rounded-2xl w-[17rem] transition duration-500 hover:shadow-xl">
      <img
        className="rounded-2xl h-44 w-full"
        alt="thumbnail"
        src={data?.thumbnails.medium.url}
      />
      {item.isAdCard ? (
        <ul className="p-4">
          <li className="font-bold text-lg line-clamp-2">{data.title}</li>
          <li>Ad from youtube</li>
        </ul>
      ) : (
        <ul className="p-4">
          <li className="font-bold text-base line-clamp-2">{data.title}</li>
          <li className="font-normal text-sm mt-2">{data.channelTitle}</li>
          <li className="text-sm">{stats.viewCount} views</li>
        </ul>
      )}
    </div>
  );
};

// THIS IS HIGHER ORDER COMPONENT: it takes a component and returns a component
export const AdVideoCard = ({ info }) => {
  return <VideoCard item={{ ...info, isAdCard: true }} />;
};

export default VideoCard;
