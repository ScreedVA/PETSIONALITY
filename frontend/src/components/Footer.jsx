import React from "react";
import Img1 from "../assets/images/pets/11.png";
import Img2 from "../assets/images/pets/10.png";

const Footer = () => {
  return (
    <section className="relative text-center pt-40 pb-20">
      <img className="absolute bottom-0 left-0 max-w-xs" src={Img1} alt="" />
      <img className="absolute bottom-0 right-0 max-w-sm" src={Img2} alt="" />

      <h3>
        Footer goes here. <br />
        content needed.
      </h3>
    </section>
  );
};

export default Footer;
