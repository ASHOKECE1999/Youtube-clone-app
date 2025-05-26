import React, { useEffect, useState } from "react";
import { YOUR_API, YOUTUBE_API } from "../utils/constants";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDisplayVideos } from "../store/mainContextSlice";
import SearchedVideoCard from "./SearchedVideoCard";

const VideoContainer = () => {
  const videos = useSelector((state) => state.mainContext.displayVideosList);
  const onSearchVideoList = useSelector((state) => state.mainContext);
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    dispatch(addDisplayVideos(json.items));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-wrap justify-center">
      {onSearchVideoList.isSearchOn ? (
        <>
          {Array.isArray(onSearchVideoList.onSearchVideos) &&
            onSearchVideoList.onSearchVideos.map((items) => (
              <Link to={`/watch?v=${items.id.videoId}`} key={items.id.videoId}>
                <SearchedVideoCard info={items} />
              </Link>
            ))}
        </>
      ) : (
        <>
          {Array.isArray(videos) && videos[0] && (
            <AddVideoCard info={videos[0]} />
          )}
          {videos.map((video, index) => (
            <Link to={`/watch?v=${video.id}`} key={video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default VideoContainer;
