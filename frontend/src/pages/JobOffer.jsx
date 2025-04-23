import React from "react";
import { ownerOfferBoxes } from "../components/Data";
import { Link } from "react-router-dom";
import PetSwiper from "../components/PetSwiper";

const JobOffer = () => {
  return (
    <div className="sm:py-40 py-24">
      <div className="wrapper bg-white sm:p-10 p-4 max-w-6xl">
        <div className="flex sm:items-center flex-col sm:flex-row gap-3">
          <div className="img w-24 h-24 rounded-full shrink-0">
            <img src={ownerOfferBoxes[0].img} alt="" />
          </div>
          <h4>{ownerOfferBoxes[0].title}</h4>
        </div>
        <div className="flex justify-between py-10 gap-10 flex-col md:flex-row">
          <div className="md:w-1/2">
            <h5 className="mb-4">Description</h5>
            <p>
              We're looking for a trustworthy and animal-loving individual to
              care for our friendly Golden Retriever, Max, over the weekends.
              Duties include walks, feeding, and some cuddle time! Located in a
              quiet neighborhood with parks nearby. Experience preferred, but
              not required—just a genuine love for dogs!
            </p>
            <br />
            <h5 className="mb-4">Responsibilities</h5>
            <p>
              We're looking for a trustworthy and animal-loving individual to
              care for our friendly Golden Retriever, Max, over the weekends.
              Duties include walks, feeding, and some cuddle time! Located in a
              quiet neighborhood with parks nearby. Experience preferred, but
              not required—just a genuine love for dogs!
            </p>
          </div>
          <div className="">
            <h5 className="mb-4">Location</h5>
            <div className=" bg-white h-32">
              {" "}
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d109883.5203628609!2d13.391113982924862!3d52.51342616930006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1745313337765!5m2!1sen!2sde"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <br />
            <h5 className="mb-4">Fee</h5>
            <h3 className="bg-dark-green text-center text-white py-3 font-light">
              € 93,50
            </h3>
          </div>
        </div>

        <div className="py-10 lg:px-20">
          <PetSwiper />
        </div>

        <Link
          to="/"
          className="block mx-auto sm:w-80 w-full p-4 bg-orange text-white font-bold rounded-lg text-center hover:bg-orange-500">
          I'm interested
        </Link>
      </div>
    </div>
  );
};

export default JobOffer;
