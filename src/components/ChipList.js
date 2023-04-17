import React, { useState } from "react";
import Chip from "./Chip";

const ChipList = () => {
  const chipList = ["All", "Gaming", "Music", "Video", "Songs", "Trailers", "Live", "Shorts", "Reels", "WWE"];
  const [activeChip, setActiveChip] = useState("All");
  return (
    <div className="flex flex-wrap pt-3 bg-white w-full max-sm:hidden">
      {chipList.map((e, idx) => (
        <Chip key={e} title={e} activeChip={activeChip} setActiveChip={setActiveChip}/>
      ))}
    </div>
  );
};

export default ChipList;
