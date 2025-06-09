import React from "react";
import Img1 from "../assets/images/other/1.png";
import { FiSearch } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { ownerOfferBoxes } from "../components/Data";
import { Link, Links } from "react-router-dom";

const PetOwners = () => {
  return (
    <>
      <div className="PetOwners">
        <div className=" bg-main-green mb-10 md:pt-12 pt-32">
          <div className="wrapper flex items-center justify-between md:flex-row flex-col">
            <div className="md:pb-12">
              <h3>Bereit für dein nächstes Tierabenteuer? </h3>
              <h4 className="max-w-xl mt-4">
                Werde (Tier)Sitter! (Is it possible to use a rotating wheel with
                changing terms, for example Hunde/Katzen/Kaninchen Sitter?)
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
          <div className="max-w-3xl mx-auto sm:text-justify my-20 sm:text-lg">
            Stöbere durch aktuelle Betreuungsanfragen (aus deiner Umgebung) und
            entdecke, ob das passende Tier für dich dabei ist. <br />
            Du suchst nach einem perfekten Match, das genau zu dir und deinem
            Alltag passt? <br />
            Dann klicke unten und lass dir Vorschläge basierend auf deinen
            persönlichen Angaben anzeigen – individuell, smart und tiergerecht.{" "}
            <br />
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
        <div className="wrapper text-center pb-40">
          <Link
            to="/Matchmaking"
            className="mx-auto w-auto bg-orange py-5 px-10 font-bold text-xl hover:bg-orange-500">
            Perfect Match
          </Link>
        </div>
      </div>
    </>
  );
};

export default PetOwners;
