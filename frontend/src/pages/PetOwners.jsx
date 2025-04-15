import React from "react";
import Img1 from "../assets/images/other/1.png";
import { FiSearch } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";

const PetOwners = () => {
  return (
    <>
      <div className="PetOwners">
        <div className="relative bg-main-green mb-10 lg:pb-40 pb-64 lg:pt-64 pt-28">
          <div className="wrapper">
            <h2>What is Lorem Ipsum</h2>
            <h4 className="max-w-xl mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever{" "}
            </h4>
          </div>

          <img
            style={{ maxWidth: "700px" }}
            src={Img1}
            alt=""
            className="absolute bottom-0 right-0 md:w-1/2 w-2/3"
          />
        </div>
        <div className="wrapper">
          <div className="flex justify-center gap-4">
            <div className="relative bg-white p-2">
              <FiSearch className="absolute text-2xl" />
              <input
                className="w-full h-full pl-8 text-sm"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="relative bg-white p-2">
              <RiMapPinLine className="absolute text-2xl" />
              <input
                className="w-full h-full pl-8 text-sm"
                type="text"
                name=""
                id=""
              />
            </div>
            <button className="bg-dark-green px-10 font-bold text-white">
              Find offer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetOwners;
