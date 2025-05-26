import React, { useEffect, useRef, useState } from "react";
import {
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_RESULTS,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  addDisplayVideos,
  changeToggleState,
  onSearchVideos,
  onSearchVideosSet,
  searchToggle,
} from "../store/mainContextSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuey, searchQueySetter] = useState("");
  const [suggestionArray, suggestArraySetter] = useState([]);
  const [isDisplay, displaySetter] = useState(false);
  const containerRef = useRef(null);

  const changeToggle = () => {
    dispatch(changeToggleState());
  };
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuey]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        displaySetter(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuey);
    const json = await data.json();
    suggestArraySetter(json[1]);
  };

  const getVideosOnSearch = async () => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS + searchQuey);
    const json = await data.json();
    displaySetter(false);
    dispatch(onSearchVideosSet(json.items));
    navigate("/");
    searchQueySetter("");
  };

  const getResultsOnSearch = (eachItem) => {
    searchQueySetter(eachItem);
  };

  const searchTrigger = () => {
    console.log("clickTrigger");
    getVideosOnSearch();
    dispatch(searchToggle(true));
  };

  return (
    <div className="flex items-center justify-between px-2 shadow-lg">
      <div className="flex items-center justify-center">
        <div
          className="h-12 w-16 flex items-center justify-center text-2xl"
          onClick={changeToggle}
        >
          ☰
        </div>
        <img src={YOUTUBE_LOGO} alt="logo" className="h-12" />
      </div>
      <div className="flex items-center flex-col justify-center relative">
        <div className="flex items-center">
          <div className="flex items-center">
            <input
              ref={containerRef}
              value={searchQuey}
              onFocus={() => displaySetter(true)}
              onChange={(e) => searchQueySetter(e.target.value)}
              type="text"
              placeholder="Search Here"
              className="border-s-orange-100 border-2 w-[350px] h-8 pl-6 rounded-l-full placeholder:p-4 py-4 pb-5 outline-none focus:outline-none"
            />
            <h1
              onClick={searchTrigger}
              className="h-10 w-16 flex items-center justify-center text-2xl cursor-pointer hover:bg-slate-300 border-s-orange-100 border-2 rounded-r-full"
            >
              🔍
            </h1>
          </div>
          <div className="h-12 w-16 flex items-center justify-center text-2xl cursor-pointer bg-gray-50 rounded-3xl text-black border-2 hover:bg-gray-500">
            🎙️
          </div>
        </div>
        {isDisplay && suggestionArray.length > 1 && (
          <div className="flex justify-start absolute bg-white shadow-slate-600 shadow-lg z-auto rounded-2xl px-2 py-2  top-full left-0 w-full">
            <ul className="w-[100%] rounded-xl">
              {suggestionArray.map((eachItem) => (
                <li
                  key={eachItem}
                  onClick={() => getResultsOnSearch(eachItem)}
                  className="flex items-center px-0 text-lg hover:bg-slate-200 hover:rounded-md"
                >
                  🔍{eachItem}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <h1 className="h-10 w-16 flex items-center justify-center text-2xl hover:bg-slate-300 rounded-3xl">
          🔔
        </h1>
        <h1 className="h-9 w-20 flex items-center justify-center text-l bg-black text-white rounded-3xl">
          Ashok A
        </h1>
      </div>
    </div>
  );
};

export default Header;
