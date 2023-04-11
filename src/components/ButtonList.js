import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Gaming"
  ];
  for(let i = 0; i < 20; i++) {
    buttonList.push('random')
  }
  return (
    <div className="flex flex-wrap">
      {buttonList.map((e, idx) => (
        <Button key={idx} name={e} />
      ))}
    </div>
  );
};

export default ButtonList;
