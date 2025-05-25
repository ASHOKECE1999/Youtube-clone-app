import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/mainContextSlice";
import { useParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChatPage from "./LiveChatpage";

const WatchPage = () => {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-10 py-5 flex w-full">
      <div>
        <iframe
          width="900"
          height="450"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <CommentsContainer />
      </div>
      <LiveChatPage />
    </div>
  );
};

export default WatchPage;
