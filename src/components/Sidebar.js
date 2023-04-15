import React, { useState } from "react";

const SidebarItem = ({ title, activeItem, setActiveItem }) => {
  return (
    <li
      className={`p-2 rounded-md w-full cursor-pointer hover:bg-gray-200  ${
        title === activeItem ? "bg-gray-200 font-semibold" : ""
      }`}
      onClick={() => setActiveItem(title)}
    >
      {title}
    </li>
  );
};

const Sidebar = () => {
  const items = ["Home", "Shorts", "Music", "Gaming", "Movies"];
  const secondList = [
    "Libraries",
    "History",
    "Your videos",
    "Watch later",
    "Downloads",
    "Liked videos",
  ];
  const thirdList = [
    "Trending",
    "Shopping",
    "Music songs",
    "Movies & shows",
    "Live",
    "News",
    "Sports",
    "Learning",
    "Fashion",
  ];
  const [activeItem, setActiveItem] = useState("Home");
  return (
    <div className="w-[14%] border bg-white px-4 py-2 shadow-lg text-gray-700 fixed h-full overflow-scroll scrollbar">
      <ul className="mb-2">
        {items.map((e) => (
          <SidebarItem
            key={e}
            title={e}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
      </ul>
      <h1 className="pt-3 font-medium border-t-2">Subscriptions</h1>
      <ul className="mb-2">
        {secondList.map((e) => (
          <SidebarItem
            key={e}
            title={e}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
      </ul>
      <h1 className="mt-4 font-medium">Watch later</h1>
      <ul>
        {thirdList.map((e) => (
          <SidebarItem
            key={e}
            title={e}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
