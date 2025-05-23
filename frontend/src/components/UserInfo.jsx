import React from "react";
import { imgs } from "./Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export default function UserInfo() {
  return (
    <div className="flex flex-col w-full h-full gap-5 ">
      {/* Header */}
      <div className="flex items-center gap-10">
        <div className="relative w-32 h-32">
          <img src={imgs[1]} alt="Profile Photo" className="object-cover w-32 h-32 rounded-full" />
          <button
            className="absolute bottom-0 right-0 flex items-center justify-center w-4 h-8 text-white bg-orange-400 rounded-full shadow-md hover:bg-orange-500"
            title="Edit"
          >
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </div>
        <div>
          <h3>Jane Doe</h3>
          <h5 className="text-gray-500">Berlin, Germany</h5>
        </div>
      </div>

      {/* Form Body */}
      <form className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-5 md:flex-row">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col ">
              <label htmlFor="">First name</label>
              <input type="text" className="input2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input type="text" className="input2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Location</label>
              <input type="text" className="input2" />
            </div>
          </div>

          {/* Right  */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="">Last name</label>
              <input type="text" className="input2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Phone number</label>
              <input type="text" className="input2" />
            </div>
            <div className="flex flex-col flex-none">
              <label htmlFor="">Postal code</label>
              <input type="text" className="input2" />
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <button className="w-full md:w-64 button2 ">Save Changes</button>
        </div>
      </form>
    </div>
  );
}
