import React from "react";
import Img1 from "../assets/images/pets/11.png";
import Img2 from "../assets/images/pets/10.png";

const Footer = () => {
  return (
    <section className="relative text-center py-10">
      <img className="absolute bottom-0 left-0" src={Img1} alt="" />
      <img className="absolute bottom-0 right-0" src={Img1} alt="" />

      <h2>
        Footer goes here. <br />
        content needed.
      </h2>
    </section>
  );
};

export default Footer;
