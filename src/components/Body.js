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
      <div className="flex mt-[3.5rem] transition-all">
        <div className={`transition-all max-h-screen max-h-0 ${isMenuOpened ? "visible w-[20%]" : "hidden"}`}>
          <Sidebar />
        </div>
        <div className={`transition duration-150 ease-in-out ${isMenuOpened ? "w-[80%]" : "w-[100%] mx-[5%]"}`}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
