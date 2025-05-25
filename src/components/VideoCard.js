import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  // const {  viewCount } = statistics;
  return (
    <div className="shadow-md max-w-80 py-4 px-2 m-1 rounded-xl">
      <img
        src={thumbnails.medium.url}
        alt={channelTitle}
        className="rounded-xl"
      />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>

        {/* <li>{viewCount} Views</li> */}
      </ul>
    </div>
  );
};

export const AddVideoCard = ({ info }) => {
  return (
    <div className="border-red-500 border-solid border-2">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
