import React, { useEffect, useState } from "react";
import { YOUR_API, YOUTUBE_API } from "../utils/constants";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDisplayVideos } from "../store/mainContextSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    dispatch(addDisplayVideos(json.items));

    // console.log(json.items);
    setVideos(json.items);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-wrap justify-center">
      {videos[0] && <AddVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard info={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
