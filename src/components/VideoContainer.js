import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import VideoCardShimmer from "./VideoCardShimmer";
import usePageBottom from "../hooks/usePageBottom";
import { useDispatch } from "react-redux";
import { openSidebar } from "../utils/appSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [isBottomReached, setIsBottomReached] = usePageBottom();
  const [loadingMore, setLoadingMore] = useState(false);
  const dispatch = useDispatch();

  const getVideos = async () => {
    setLoadingMore(true);
    const timer = setTimeout(async () => {
      const res = await fetch(YOUTUBE_VIDEOS_API + nextPageToken);
      const json = await res.json();
      setNextPageToken(json.nextPageToken);
      setVideos([...videos, ...json.items]);
      setLoadingMore(false);
      clearTimeout(timer);
    }, 500);
  };

  useEffect(() => {
    dispatch(openSidebar());

  }, []);

  useEffect(() => {
    if (videos.length === 0 || (isBottomReached && nextPageToken)) {
      setIsBottomReached(false);
      getVideos();
    }
  }, [isBottomReached]);

  return (
    <div className="my-2 flex flex-wrap">
      {videos && videos[0] && <AdVideoCard info={videos[0]} />}
      {videos?.map((video) => (
        <Link to={"watch?v=" + video.id} key={video.id}>
          <VideoCard item={video} />
        </Link>
      ))}
      {loadingMore && new Array(12).fill(0).map((val, idx) => <VideoCardShimmer key={idx}/>)}
    </div>
  );
};

export default VideoContainer;
