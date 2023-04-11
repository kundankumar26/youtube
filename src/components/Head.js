import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch = useDispatch();

    const handleHamburger = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="grid grid-flow-col h-16 px-6 py-2 mb-4 shadow-lg">
            <div className="col-span-1 flex items-center">
                <img
                    onClick={() => handleHamburger()}
                    className="h-6 cursor-pointer"
                    alt="hamburger"
                    src="https://static.thenounproject.com/png/3401904-200.png"
                />
                <a href="/">
                    <img
                        className="h-6 pl-8"
                        alt="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                    />
                </a>
            </div>
            <div className="col-span-10 flex justify-center">
                <input
                    className="w-1/3 px-4 border-2 rounded-l-full"
                    type="text"
                    placeholder="search"
                />
                <button className="font-semibold border-2 rounded-r-full bg-gray-100">
                    <img
                        className="h-5 mx-6"
                        alt="search"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
                    />
                </button>
            </div>
            <div className="col-span-1 justify-self-end">
                <img
                    className="h-10 items-center"
                    alt="profile"
                    src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
                />
            </div>
        </div>
    );
};

export default Head;
