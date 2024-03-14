import React from "react";

const IconBtn = ({ icon, title, textColor }) => {
  return (
    <button className="flex items-center gap-1.5 hover:scale-105 duration-300">
      {icon}
      <span
        className={`font-semibold text-base max-md:hidden ${
          textColor ? "text-trash-bin" : "text-purple-primary"
        }`}
      >
        {title}
      </span>
    </button>
  );
};

export default IconBtn;
