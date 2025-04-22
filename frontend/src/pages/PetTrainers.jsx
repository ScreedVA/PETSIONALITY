import React from "react";
import Img1 from "../assets/images/other/2.png";
import { trainerBoxes } from "../components/Data";
import { Link } from "react-router-dom";

const PetTrainers = () => {
  return (
    <div>
      <div className="relative bg-main-green mb-10 md:pt-20 pt-32">
        <div className="wrapper flex items-center justify-between md:flex-row flex-col">
          {" "}
          <div
            className="absolute bg-beige -bottom-32 md:-left-20 -left-10"
            style={{ rotate: "-10deg", width: "130%", height: "400px" }}></div>
          <div className="md:pb-32 relative">
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
            className="md:w-1/2 w-2/3 relative"
          />
        </div>
      </div>

      <div className="wrapper pt-10 pb-32">
        <div className="flex flex-wrap justify-center gap-10">
          {trainerBoxes.map((item, index) => {
            return (
              <Link
                to={item.link}
                key={index}
                className="block p-2 bg-white w-96 rounded-lg">
                <div className="img h-60 w-full rounded-lg">
                  <img src={item.img} alt="" />
                </div>
                <h5 className="mt-4 mb-2">{item.name}</h5>
                <p>{item.text}</p>
                <h5 className="my-3">⭐ {item.rating}</h5>
                <h5>From €{item.price}</h5>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PetTrainers;
