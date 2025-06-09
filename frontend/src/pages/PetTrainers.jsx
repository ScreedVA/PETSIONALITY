import React from "react";
import Img1 from "../assets/images/other/2.png";
import { trainerBoxes } from "../components/Data";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import Footer from "../components/Footer";

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
            <h2>
              Trainer finden. <br /> Wissen teilen. <br /> Tiere stärken.
            </h2>
          </div>
          <img
            style={{ maxWidth: "500px" }}
            src={Img1}
            alt=""
            className="md:w-1/2 w-2/3 relative"
          />
        </div>
      </div>

      <div className="wrapper pb-10">
        <div className="max-w-4xl mt-4 mx-auto mb-20">
          Du suchst professionelle Unterstützung für dein Haustier? <br />
          Hier findest du geprüfte Tiertrainer mit verschiedenen Fachgebieten –
          einfach Profile durchstöbern und passenden Trainer kontaktieren.{" "}
          <br />
          Du bist selbst Trainer und möchtest Teil der PETSONALITY-Community
          werden? Dann melde dich mit einem Klick auf den Button an und erreiche
          neue Kunden über unsere Plattform.
          <br /> <br />
          <Link to="/register" className="text-center underline text-orange ">
            Ich möchte auch auf dieser Seite gelistet werden
          </Link>
        </div>
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
            Find trainer
          </button>
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
                <p>📍 {item.location}</p>
                <br />
                <p>{item.text}</p>
                <h5 className="my-3">⭐ {item.rating}</h5>
                <h5>From €{item.price}</h5>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PetTrainers;
