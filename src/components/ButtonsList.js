import React from "react";
import Button from "./Button";

const ButtonsList = () => {
  return (
    <div className="overflow-x-auto px-8">
      <div className="flex">
        <Button name="All" />
        <Button name="Songs" />
        <Button name="Live" />
        <Button name="Gaming" />
        <Button name="News" />
        <Button name="Mixes" />
        <Button name="Podcasts" />
        <Button name="Podcasts" />
        <Button name="Podcasts" />
        <Button name="Podcasts" />
        
      </div>
    </div>
  );
};

export default ButtonsList;
