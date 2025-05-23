import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TabMenuMobile({ options, selectedIndex, onIndexChange }) {
  return (
    <ul className="flex justify-center gap-5 px-3">
      {options.map((option, index) => (
        <li key={`${option.label}-${index}`} onClick={() => onIndexChange(index)}>
          <div className={`flex gap-2 ${index === selectedIndex ? "line-underneath text-[#49978b]" : "text-gray-400"}`}>
            <FontAwesomeIcon icon={option.icon} size={"1x"} />
            <small>{option.label}</small>
          </div>
        </li>
      ))}
    </ul>
  );
}
