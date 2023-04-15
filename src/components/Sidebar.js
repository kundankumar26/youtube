import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpened = useSelector((store) => store.app.isMenuOpened);

  if (!isMenuOpened) return null;

  return (
    <div className="border font-normal px-4 py-6 w-1/12 shadow-lg">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="mt-4 font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="mt-4 font-bold">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
