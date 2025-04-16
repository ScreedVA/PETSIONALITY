import React from "react";
import { imgs } from "./Data";

export default function UserInfo() {
  return (
    <div className="w-full h-full border border-black">
      {/* Header */}
      <div className="flex items-center gap-10">
        <div className="relative w-32 h-32">
          <img src={imgs[1]} alt="Profile Photo" className="object-cover w-32 h-32 rounded-full" />
          <button
            className="absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 text-white bg-orange-400 rounded-full shadow-md hover:bg-orange-500"
            title="Edit"
          >
            ✏️
          </button>
        </div>
        <div>
          <h3>Jane Doe</h3>
          <h5 className="text-gray-500">Berlin, Germany</h5>
        </div>
      </div>
    </div>
  );
}
