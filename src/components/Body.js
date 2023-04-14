import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  return (
    <>
      <div className="fixed bg-white w-full top-0">
        <Head />
      </div>
      <div className="flex mt-[4rem]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
