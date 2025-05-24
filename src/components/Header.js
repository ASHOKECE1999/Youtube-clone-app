import React from "react";
import { YOUTUBE_LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { changeToggelState } from "../store/mainContextSlice";

const Header = () => {
  const dispatch=useDispatch()
  const changeToggel=()=>{
    dispatch(changeToggelState())
  }
  return (
    <div className="flex items-center justify-between px-2 shadow-lg">
      <div className="flex items-center justify-center">
        <div className="h-12 w-16 flex items-center justify-center text-2xl" onClick={changeToggel}>☰</div> <img src={YOUTUBE_LOGO} alt="logo" className="h-12" />
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search Here"
            className="border-s-orange-100 border-2 w-[350px] h-8 rounded-l-full placeholder:p-4 py-4 pb-5 outline-none focus:outline-none"
          />
          <h1 className="h-10 w-16 flex items-center justify-center text-2xl cursor-pointer hover:bg-slate-300 border-s-orange-100 border-2 rounded-r-full">
            🔍
          </h1>
        </div>
        <div className="h-12 w-16 flex items-center justify-center text-2xl cursor-pointer bg-gray-50 rounded-3xl text-black border-2 hover:bg-gray-500">🎙️</div>
      </div>
      <div className="flex items-center">
        <h1 className="h-10 w-16 flex items-center justify-center text-2xl hover:bg-slate-300 rounded-3xl">🔔</h1>
        <h1 className="h-9 w-16 flex items-center justify-center text-2xl bg-slate-400 rounded-3xl">M</h1>
      </div>
    </div>
  );
};

export default Header;
