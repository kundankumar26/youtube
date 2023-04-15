import React, { useEffect, useState } from "react";

const usePageBottom = () => {
  const [bottom, setBottom] = useState(false);
  const infiniteScroll = () => {
    const isBottom =
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight;
    setBottom(isBottom);
  };
  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, []);
  return [bottom, setBottom];
};

export default usePageBottom;
