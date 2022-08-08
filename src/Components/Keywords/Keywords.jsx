import React from "react";

const KeyWords = (props) => {
  return (
    <span className="w-full justify-item-center mx-[8px]">
      <span className="px-6px pt-4 pb-2 w-1/3 text-[12px] ">
        <span className="inline-block bg-gray-200 rounded-full px-[3px] py-[1px] text-sm font-semibold text-gray-700 mr-[2px] mb-[2px]">
          {props.children}
        </span>
      </span>
    </span>
  );
};

export default KeyWords;