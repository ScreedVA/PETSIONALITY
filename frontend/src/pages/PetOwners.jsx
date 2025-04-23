import React from "react";
import Img1 from "../assets/images/other/1.png";
import { FiSearch } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { ownerOfferBoxes } from "../components/Data";
import { Link } from "react-router-dom";

const PetOwners = () => {
  return (
    <>
      <div className="PetOwners">
        <div className=" bg-main-green mb-10 md:pt-12 pt-32">
          <div className="wrapper flex items-center justify-between md:flex-row flex-col">
            <div className="md:pb-12">
              <h2>What is Lorem Ipsum</h2>
              <h4 className="max-w-xl mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever{" "}
              </h4>
            </div>
            <img
              style={{ maxWidth: "700px" }}
              src={Img1}
              alt=""
              className="md:w-1/2 w-2/3"
            />
          </div>
        </div>
        <div className="wrapper">
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="relative bg-white">
              <FiSearch className="absolute text-2xl top-2 left-2" />
              <input
                className="w-full h-full !pl-10 text-sm !border-none"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="relative bg-white">
              <RiMapPinLine className="absolute text-2xl top-2 left-2" />
              <input
                className="w-full h-full !pl-10 text-sm !border-none"
                type="text"
                name=""
                id=""
              />
            </div>
            <button className="bg-dark-green px-10 font-bold text-white whitespace-nowrap">
              Find offer
            </button>
          </div>
        </div>

        <div className="wrapper xl:px-32 py-20">
          {ownerOfferBoxes.map((item, index) => {
            return (
              <Link
                to={item.link}
                key={index}
                className="flex items-center bg-white p-5 mb-5 gap-8 rounded-xl sm:flex-row flex-col">
                <div className="text-center">
                  <div className="img w-24 h-24 rounded-full mb-3">
                    <img src={item.img} alt="" />
                  </div>
                  <h5>{item.petname}</h5>
                </div>
                <div>
                  <h5 className="mb-3">{item.title}</h5>
                  <p>{item.paragraph}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PetOwners;
