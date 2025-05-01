import React from "react";
import GIF from "../assets/images/gif/1.gif";

const PetShops = () => {
  return (
    <div
      className="text-center min-h-screen py-40 "
      style={{ backgroundColor: "#B6D4DE" }}>
      <div className="wrapper max-w-3xl">
        {" "}
        <h2 className="relative z-10">Coming soon...</h2>
        <img className="mx-auto md:-my-20" src={GIF} alt="" />
        <h4>
          Here goes a text explaining that there will be something like an
          online shop here on this page. like: Oops, page under construction,
          check again later, we’re working on it. you’ll find anything you need
          in our future online shop
        </h4>
      </div>
    </div>
  );
};

export default PetShops;
