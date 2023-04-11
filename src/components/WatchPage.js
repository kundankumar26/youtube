import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar, toggleMenu } from "../utils/appSlice";

const WatchPage = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();

  const dataStore = useSelector(store => store);

  const videoId = params.get("v");
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="px-8 py-4">
      <iframe
        width="1042"
        height="586"
        src={"https://www.youtube.com/embed/" + videoId}
        title="MANGULARA BHAGYA- ମଙ୍ଗୁଳାର ଭାଗ୍ୟ -Mega Serial | Full Episode -433 | Sidharrth TV"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;