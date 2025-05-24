import React, { useEffect, useState } from "react";
import { YOUR_API, YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`}>
        <VideoCard info={video} key={video.id} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
