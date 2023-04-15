import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpened = useSelector((store) => store.app.isMenuOpened);

  return (
    <>
      <div className="fixed bg-white w-full top-0">
        <Head />
      </div>
      <div className="flex mt-[3.5rem]">
        <div className={`mr-[10%] ${isMenuOpened ? "visible w-[20%]" : "hidden"}`}>
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
