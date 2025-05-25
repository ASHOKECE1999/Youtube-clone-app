import React from "react";
import { getRandomTailwindBgColor } from "../utils/helper";

const ChatMessage = ({ name, message }) => {
  return (
    <div
      className={`flex items-center shadow-md px-3 py-3 mb-2 rounded-2xl ${getRandomTailwindBgColor()}`}
    >
      <img
        src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png"
        alt="ProfileImage"
        className="h-12"
      />
      <div className="flex items-center px-3">
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
