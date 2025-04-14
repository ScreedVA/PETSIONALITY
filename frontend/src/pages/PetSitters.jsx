import React from "react";
import SearchForm from "../components/SearchForm";
import Img1 from "../assets/images/pets/1.png";
import Img2 from "../assets/images/pets/2.png";
import PetSitterSearchForm from "../components/PetSitterSearchForm";

const PetSitters = () => {
  return (
    <>
      <div>
        <div className="flex items-end justify-center pr-5 bg-main-green">
          <div>
            <img style={{ maxWidth: "700px" }} src={Img1} alt="" className="translate-y-34" />
          </div>
          <div className="text-center">
            <div>
              <h2>Find your best match!</h2>
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
            </div>
            <img style={{ maxWidth: "400px" }} src={Img2} alt="" className="!mx-auto translate-y-10" />
          </div>
        </div>
      </div>

      <PetSitterSearchForm />
    </>
  );
};

export default PetSitters;
