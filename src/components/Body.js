import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../utils/appSlice";

const Body = () => {
  const isMenuOpened = useSelector((store) => store.app.isMenuOpened);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (window.innerWidth < 600) {
      dispatch(closeSidebar());
    }
  }, []);

  return (
    <>
      <div className="fixed bg-white w-full top-0">
        <Head />
      </div>
      <div className="flex mt-[3.5rem]">
        <div className={`max-h-screen max-h-0 ${isMenuOpened ? "visible w-[20%]" : "hidden"}`}>
          <Sidebar />
        </div>
        <div className={` ${isMenuOpened ? "w-[80%] max-[640px]:w-[0%]" : "w-[100%] mx-[5%] max-sm:w-[50rem]"}`}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
