import React from "react";
import GIF from "../assets/images/gif/1.gif";

const PetShops = () => {
  return (
    <div
      className="text-center min-h-screen py-40 "
      style={{ backgroundColor: "#B6D4DE" }}>
      <div className="wrapper max-w-4xl">
        {" "}
        <h3 className="relative z-5">
          Shop in Vorbereitung – Schwanzwedeln erlaubt!
        </h3>
        <img className="mx-auto md:-my-20" src={GIF} alt="" />
        <h4>
          Unser Shop für dich und deine Fellnase ist fast bereit - mit tierisch
          guten Produkten rund um Alltag, Spiel & Pflege. <br />
          Noch ein bisschen Geduld – bald kannst du hier stöbern, schnuppern und
          entdecken!
        </h4>
      </div>
    </div>
  );
};

export default PetShops;
