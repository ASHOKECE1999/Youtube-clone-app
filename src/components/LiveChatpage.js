import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessages } from "../store/chatSlice";
import generateRandomName, { generateRandomMessages } from "../utils/helper";

const LiveChatPage = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state.chat.chatMessages);
  const [liveMessage, liveMessageSetter] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("poling");
      dispatch(
        addChatMessages({
          name: generateRandomName(),
          message: generateRandomMessages(20),
        })
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-[460px]">
      <div className="bg-slate-200 w-full px-4 py-6 ml-2 flex-1 flex flex-col-reverse rounded-lg border-black border-solid border-2 overflow-y-scroll">
        {chatMessages.length > 0 &&
          chatMessages.map((eachItem) => (
            <ChatMessage
              name={eachItem.name}
              message={eachItem.message}
              key={eachItem.name}
            />
          ))}
      </div>
      <form
        className="w-full flex items-center px-2 py-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addChatMessages({ name: "Ashok", message: liveMessage }));
        }}
      >
        <input
          className="w-full border-solid border-2 py-1 px-4 placeholder:mx-4"
          type="text"
          placeholder="Enter Comment Here!!!!"
          value={liveMessage}
          onChange={(e) => liveMessageSetter(e.target.value)}
        />
        <button className="bg-black text-white font-bold py-1 px-2 mx-2 hover:bg-slate-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LiveChatPage;
