import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { onSearchVideosSet, searchToggle } from "../store/mainContextSlice";

const SideBar = () => {
  const mainContext = useSelector((state) => state.mainContext.isToggleOn);
  const dispatch = useDispatch();
  if (!mainContext) return null;
  return (
    <div className="shadow-md w-40 h-full">
      <h1 className="font-bold py-1 px-3">Subscriptions</h1>
      <ul className="py-5 px-3">
        <Link
          to="/"
          onClick={() => {
            dispatch(onSearchVideosSet([]));
            dispatch(searchToggle(false));
          }}
        >
          {" "}
          <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
            Home
          </li>
        </Link>
        <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
          Sports
        </li>
        <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
          Gaming
        </li>
        <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
          movies
        </li>
        <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
          Item 5
        </li>
      </ul>
      <h1 className="font-bold py-1 px-3">Watch Later</h1>
      <ul className="py-5 px-3">
        <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
          Sports
        </li>
        <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
          Music
        </li>
        <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
          Gaming
        </li>
        <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
          movies
        </li>
        <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
          Item 5
        </li>
      </ul>
      <h1 className="font-bold py-1 px-3">Subscriptions</h1>
      <ul className="py-5 px-3 ">
        <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
          Music
        </li>
        <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
          Sports
        </li>
        <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
          Gaming
        </li>
        <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
          movies
        </li>
        <li className="font-bold bg-slate-950 text-yellow-50 text-left px-4 py-2 rounded-lg hover:bg-orange-400 cursor-pointer mb-2">
          Item 5
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
