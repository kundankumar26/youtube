import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../utils/appSlice";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import ChannelDetails from "./ChannelDetails";
import CommentsList from "./CommentsList";

const WatchPage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const [videoDetails, setVideoDetails] = useState({});

  const videoId = params.get("v");
  const getVideoDetails = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API + videoId);
    const json = await data.json();
    // console.log(json)
    setVideoDetails(json.items[0]);
  };
  useEffect(() => {
    dispatch(closeSidebar());
    getVideoDetails();
  }, []);

  return Object.keys(videoDetails).length > 0 ? (
    <div className="grid grid-flow-row mx-8 py-4 w-1/2">
      <iframe
        width="1042"
        height="586"
        src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
        title={videoDetails?.snippet?.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <ChannelDetails props={videoDetails} />
      <CommentsList props={videoId} />
    </div>
  ) : null;
};

export default WatchPage;
