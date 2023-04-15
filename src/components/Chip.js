import React from "react";

const Chip = ({ title, activeChip, setActiveChip }) => {
  return (
    <div
      className={`cursor-pointer px-3 py-1 mx-2 bg-gray-200 rounded-lg ${
        activeChip === title ? " bg-slate-800 text-white" : ""
      }`}
      onClick={() => setActiveChip(title)}
    >
      {title}
    </div>
  );
};

export default Chip;
