import React from "react";
import Img1 from "../assets/images/pets/1.png";
import Img2 from "../assets/images/pets/2.png";
import PetSitterSearchForm from "../components/PetSitterSearchForm";

const PetSitters = () => {
  return (
    <>
      <div className="petSitters">
        <div className="flex items-end justify-center pr-5 bg-main-green sm:mb-40 mb-20 md:pt-0 pt-20">
          <div>
            <img
              style={{ maxWidth: "460px" }}
              src={Img1}
              alt=""
              className="dog_img"
            />
          </div>
          <div className="text-center">
            <div>
              <h3 className="font-bold">Find your best match!</h3>
              <h4 className="sm:block hidden max-w-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </h4>
            </div>
            <img
              style={{ maxWidth: "230px" }}
              src={Img2}
              alt=""
              className="cat_img !mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-32">
        <PetSitterSearchForm />
      </div>
    </>
  );
};

export default PetSitters;
