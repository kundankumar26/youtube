import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
      {videos?.map((video) => (
        <Link to={"watch?v=" + video.id} key={video.id}>
          <VideoCard item={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
