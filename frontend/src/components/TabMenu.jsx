import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

export default function TabMenu({ options, selectedIndex, onIndexChange }) {
  return (
    <ul className="flex flex-col w-full ">
      {options.map((option, index) => (
        <li
          key={`${option.label}-${index}`}
          onClick={() => onIndexChange(index)}
          className={`flex items-center justify-start gap-2 px-14 py-3 text-lg text-[#49978B] after-line2 cursor-pointer ${
            selectedIndex === index ? "bg-[#49978B] text-white" : ""
          }`}
        >
          <FontAwesomeIcon icon={option.icon} />
          {option.label}
        </li>
      ))}
    </ul>
  );
}
