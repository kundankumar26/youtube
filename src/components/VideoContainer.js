import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import VideoCardShimmer from "./VideoCardShimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const json = await res.json();
    setVideos(json.items);
  };

  return (
    <div className="my-5 flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.length
        ? videos?.map((video) => (
            <Link to={"watch?v=" + video.id} key={video.id}>
              <VideoCard item={video} />
            </Link>
          ))
        : new Array(30)
            .fill(Math.random() * 100)
            .map((val) => <VideoCardShimmer key={val} />)}
    </div>
  );
};

export default VideoContainer;
