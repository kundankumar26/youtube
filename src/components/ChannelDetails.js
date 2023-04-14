import React, { useEffect, useState } from "react";
import likeicon from "../assets/like.png";
import dislikeicon from "../assets/negative-vote.png";
import shareicon from "../assets/share.png";
import { YOUTUBE_CHANNEL_API } from "../utils/constant";

const ChannelDetails = ({ props }) => {
  const videoDetails = props["snippet"];
  const [channelDetails, setChannelDetails] = useState({});

  const getChannelDetails = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_API + videoDetails?.channelId);
    const json = await data.json();
    // console.log(json);
    setChannelDetails(json?.items[0]);
  };
  useEffect(() => {
    getChannelDetails();
  }, []);
  return Object.keys(videoDetails).length ? (
    <>
      <div className="font-medium text-2xl mt-4">{videoDetails.title}</div>
      <div className="my-4 flex justify-between pb-6">
        <div className="grid grid-flow-col">
          <div className="bg-gray-300 h-12 w-12 rounded-full overflow-hidden cursor-pointer">
            <img
              className="h-12 w-12 rounded-full overflow-hidden"
              alt="chaneel pic"
              src={channelDetails?.snippet?.thumbnails?.high?.url}
            />
          </div>
          <div className="flex flex-col px-5">
            <span className="font-semibold text-xl">
              {videoDetails.channelTitle}
            </span>
            <span className="text-sm">
              {channelDetails?.statistics?.subscriberCount}
            </span>
          </div>
          <div className="bg-black text-white font-medium self-center px-4 py-2 rounded-3xl cursor-pointer">
            Subscribe
          </div>
        </div>
        <div className="grid grid-flow-col float-right text-gray-600 cursor-pointer">
          <div className="bg-gray-200 rounded-3xl flex mr-3 py-[0.5rem] self-center px-4 font-medium text-[1.08rem]">
            <span className="border-r border-gray-400 px-3 flex self-center">
              <img className="h-5 w-5 self-center" alt="like" src={likeicon} />
              <span className="pl-2">9.4K</span>
            </span>
            <img
              className="h-5 px-4 self-center"
              alt="dislike"
              src={dislikeicon}
            />
          </div>
          <div className="bg-gray-200 rounded-3xl py-2 self-center px-4 font-medium text-[1.1rem] flex">
            <img className="h-6 mr-2" alt="share" src={shareicon} />
            Share
          </div>
        </div>
      </div>
    </>
  ) : null;
};

const arePropsEqual = (prevProps, nextProps) => {
  return prevProps.props.id === nextProps.props.id;
};

export default React.memo(ChannelDetails, arePropsEqual);
